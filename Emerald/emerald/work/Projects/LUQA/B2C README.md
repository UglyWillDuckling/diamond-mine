#imposter 

real:: https://github.com/MeilleursAgents/B2CLeadRankingAPI/blob/1dede752809bdac5afc02205c08f6b7490858c0b/README.md#running-commands

# B2CLeadRankingAPI (RDVVQ/QSL, PQSL)

![architecture](https://i.ibb.co/m9T4vft/target.png)

This project supports those products: 
- RDVVQ (Rendez-Vous Vendeur Qualifié) or QSL in english (Qualified Seller Lead)
- FSBO (For Sale By Owner): only callback requests are handled for now (also known as DDR)

A complete rundown on how this API work can be found in french [here](https://avivgroup.atlassian.net/wiki/spaces/AO/pages/313164467/QSL+Campaigns+rules).

This API has two purposes: 
- Calculate a ranking for customers that create an estima on the MeilleursAgents website, so our sales team knows which customer is the most likely to be of interest.
- Generate and send call campaigns to our phone contractor, allowing our sales team to know who to call and when

The whole lifecycle of a lead can be found [here](https://avivgroup.atlassian.net/wiki/spaces/AO/pages/231903257/Life+cycle+of+a+lead)

## LeadTypes

There is 3 types of leads:
- RDVVQ: This kind of leads comes from an estimation. Regarding thoses info, we can deduce if either the lead is a PVI or either a PVB
- Direct: Following a marketing and advertisement campaign, those leads come from a form hosted on a [dedicated page for RDVVQ]
- PreQualifiedSellerLead: Thoses leads are leads that respond to somes rules like, an estimation with a sell price under 200k or if in Media Zone

## Campaign

There is 4 types of campaigns:
- CF: This campaign run every two minutes on the app pod and handle "coupe fil" calls.
- PVB: This campaign handle PVB and PVB_LATER segment calls
- PVI: This campaign handle PVI_NOW and PVI_SOON, PVS, PVM segment calls
- PreQualifiedSellerContact: This campaign runs with PVIs and PVBs segments but for calls that contain PQSC leads

### Definition

A campaign is a set of leads that we want to call.
It is defined by the following parameters:
* the slot of the campaign: only leads scheduled to be called in this slot will be selected.
* the segments of the lead (PVI or PVB): only leads having this segment will be selected.
  A campaign can select lead from multiple segments.
  Note that PVI includes PVS and PVM segments too.
* the type of the lead (RDVVQ, PQSC or Direct): only leads having this type will be selected.
* the type of the campaign (CF, PVI, PVB or PQSC): different type of campaign have different rules.
  In a PVI campaign, the leads are assigned to agents, while in PVB or PQSC campaign they are not.
  The type of campaign also define the available slots and the max number of leads that can be injected in a campaign.
* an agents group: only leads done in the group zone will be selected.

### Starting and stopping a campaign

Starting a campaign means selecting the leads according to the previous parameters and then injecting them into Diabolocom
so agents can calls them.
Starting many time the same campaign would only inject new leads into the running campaign.

Stopping a campaign means removing any calls remaining on Diabolocom and recycling the leads scheduled but not called in
the previous slot.

The process is the following. For each slot defined for a campaign type:
* at the beginning of the slot, the campaign is started
* at the end of the slot, the campaign is stopped: all leads not called are recycled to the next campaign slot

The CF campaign is a special case.
It follows the PVI campaign schedule, but new PVI are injected every 2 minutes instead of waiting for the next campaign
slot.

### Defined campaigns

The campaigns are defined in [campaign_settings.py](instance/campaign_settings.py), search for the `CAMPAIGN_CONFIG` var.

## Running commands

In order to run commands you first need to be in your docker container: `make shell`
You can then see a list of available commands by typing `python run_command --help`
In order to run a command enter `python run_command command-name command-arguments`
Example: `python run_command.py start-campaign --start-date=2021-04-19T09:30:00`

### Available commands
#### start-campaign

Starts the next campaign.

Options: 
* `--start-date`: the CSV will be generated on the next campaign slot after start-date. If the argument is not passed, the default is now.
* `--type`: sets the campaign type to be generated. Choices are "CF", "PVB", "PVI" or "PQSC".

Example: `python run_command.py start-campaign --start-date=2021-04-20T14:01:00 --type=PQSC`

#### stop-campaigns
Generates an empty CSV to send a stop signal to Diabolocom that will cancel all active campaigns, then recycles canceled and non issued lead calls from previous campaign by adding them to a new one.
Options: 
- start-date: If there is a campaign running just after start-date, it will recycle it then stop it. This is defaulted to today if not passed as an argument.
Example: `python run_command.py stop-campaigns --start-date=2021-04-20T13:56:00`

#### cf-campaign-loop
Schedules a function to run every two minutes that generates a CSV with a list of lead calls to be sent to the current campaign.

Example: `python run_command.py cf-campaign-loop`

#### recover-forgotten-lead
Plans a call in the next campaign for every lead that matches these criteria:
- call attempts < 8
- lead status is "not qualified"
- contact associated with lead has no pending task
- contact associated with lead is not in a salesperson wallet
- lead has no planned call in the future

Example: `python run_command.py recover-forgotten-lead`

#### send-callity-calls
Send calls to Callity API (our speech-to-text contractor)
Options:
- start-date / end-date : interval used to fetch calls (calls finished between start and end date will be sent). By default, calls from last hour will be fetched.

Example: `python run_command.py send-callity-calls --start-date=2021-11-10T14:35:00 --end-date=2021-11-10T14:40:00`

#### export-model
This was made during an hackaton in order to replace the lead_scoring by a ML algo.
This is not used in production.
Uses a dataset stored in `machine_learning/dataset.csv` to train a decision tree classifier model and exports it for future prediction uses.
[More information here.](https://www.notion.so/meilleursagents/Industrialisation-scoring-des-leads-29062ea0c3d149b6a546352517c8d51f)

Example: `python run_command.py export-model`

## Project architecture

Here is a description on what the folders mean:
- `b2cleadRankingapi`: the main source folder, most of the code is here.
  - `adapters`: implementations of `ports` from the domain.
    - `db`: implementations of `ports` from the domain using a database.
      - `mappers`: mappers from ORM models to domain entities, and vice versa.
      - `models`: ORM models using SQLAlchemy.
  - `apis`: all endpoints are here. It should be moved to `controllers`.
  - `controllers`: all different controllers for the app. Currently only the pubsub ones are here.
  - `db`: the database configuration. It should be moved to `adapters/db`.
  - `domain`: all business logic of the app should be here.
    - `business_rules`: some particular business rules that can be used in different use cases.
    - `entities`: models in our domain
    - `ports`: interfaces that are used by our domain to interact with the outside world
    - `use_cases`: use cases are action that are executed by controllers. They are what our app does.
  - `extensions`: this is where we store configuration and setup for external tools such as gunicorn.
  - `jobs`: this is where we define our crontab jobs, the purpose of the code in this folder is to make sure a job can run properly, and to list all the steps it needs to achieve to be successful.
  - `repositories`: old repositories. They should be moved to `adapters`.
  - `services`: some business logic. It should be refactored and moved to `domain`.
- `campaigns`: if you run a simulation, the CSV generated will be stored here.
- `instance`: settings are stored here.
- `migrations`: this folder contains migrations, which are pieces of code that allows you to easily alter your database modeling.
- `tests`: this is where we store the tests, the folders are the same as in `b2cleadrankingapi`, except for the `factories` folder which contains fake data that replicates our entities, so we can use them in tests ; and `stress`, which contains the stress tests.
- `tools`: contains bash scripts used to configure the project.

## Development

To develop on this app you need to [setup up your computer](https://docs.integration.meilleursagents.tech/usage/setup-computer/)
first.

### Build the app

```commandline
make init
```

### Running locally

The app can work locally.
You then need to run `make generate-config` and input your team name to generate your config.env. It will set the correct variables to access the others APIs from your integration cluster namespace.

There is also a `make generate-secrets` to generate the secrets.env file containing the secret variables. It will be automatically run on `make run`, but you can do it manually too. You need to have berglas installed and configured, and your Google account needs to have access to secrets.

Sometimes berglas fails with `failed to signal command: os: process already finished`, but re-running the command should make it work.

If you want to use the API, you can use `make run`, if you want to run a command use `make shell` then type in your command.

### Tests

```commandline
make test
```

### Stress tests

To launch stress tests you can run `make stress`. Those tests will query the environment you specify in `build.env`. Keep in mind that if you do it on a production environments, real data will be generated.

### Code quality

Before committing anything, please run those commands and make sure everything ok.

```commandline
make format
make complexity
make style
```

### Deployment

This project is deployed on a Kubernetes cluster, with ArgoCD:
* helm chart: https://github.com/MeilleursAgents/asg-helm-charts/tree/main/charts/b2cleadrankingapi
* ArgoCD config: https://github.com/MeilleursAgents/asg-apps-k8s/blob/main/fr/web/prod/b2cleadrankingapi.yaml