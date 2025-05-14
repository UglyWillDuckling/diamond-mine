---
created: 2025-02-12
source: https://csvkit.readthedocs.io/en/latest/tutorial/3_power_tools.html
tags:
  - docs/official
  - docs/csvkit
---
about:: [[csvkit]], [[csvsql]], [[sql2csv]], [[csvstack - csvkit|csvstack]]
___
## 3.2. csvstack: combining subsets[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#csvstack-combining-subsets "Link to this heading")

Frequently large datasets are distributed in many small files. At some point you will probably want to merge those files for bulk analysis. [csvstack](https://csvkit.readthedocs.io/en/latest/scripts/csvstack.html) allows you to “stack” the rows from CSV files with the same columns (and identical column names). To demonstrate, let’s imagine we’ve decided that Nebraska and Kansas form a “region” and that it would be useful to analyze them in a single dataset. Let’s grab the Kansas data:

```bash
curl -L -O https://raw.githubusercontent.com/wireservice/csvkit/master/examples/realdata/ks_1033_data.csv
```

Back in [Getting started](https://csvkit.readthedocs.io/en/latest/tutorial/1_getting_started.html), we had used in2csv to convert our Nebraska data from XLSX to CSV. However, we named our output data.csv for simplicity at the time. Now that we are going to be stacking multiple states, we should re-convert our Nebraska data using a file naming convention matching our Kansas data:

```bash
in2csv ne_1033_data.xlsx > ne_1033_data.csv
```

Now let’s **stack** these two files:
```rb
csvstack ne_1033_data.csv ks_1033_data.csv > region.csv
```

Using **csvstat** we can see that our `region.csv` contains both datasets:

```bash
$ csvstat -c state,acquisition_cost region.csv
  1. "state"

 Type of data:          Text
 Contains null values:  False
 Unique values:         2
 Longest value:         2 characters
 Most common values:    KS (1575x)
                        NE (1036x)

  8. "acquisition_cost"

 Type of data:          Number
 Contains null values:  False
 Unique values:         127
 Smallest value:        0
 Largest value:         658,000
 Sum:                   9,440,445.91
 Mean:                  3,615.644
 Median:                138
 StDev:                 23,730.631
 Most common values:    120 (649x)
                        499 (449x)
                        138 (311x)
                        6,800 (304x)
                        58.71 (218x)

Row count: 2611
```

If you supply the `-g` flag then [csvstack](https://csvkit.readthedocs.io/en/latest/scripts/csvstack.html) can also add a “grouping column” to each row, so that you can tell which file each row came from. In this case we don’t need this, but you can imagine a situation in which instead of having a `county` column each of this datasets had simply been named `nebraska.csv` and `kansas.csv`. In that case, using a grouping column would prevent us from losing information when we stacked them.

## 3.3. [[csvsql]] and [[sql2csv]]: ultimate power[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#csvsql-and-sql2csv-ultimate-power "Link to this heading")

Sometimes (almost always), the command-line isn’t enough. It would be crazy to try to do all your analysis using command-line tools. Often times, the correct tool for data analysis is SQL. [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) and [sql2csv](https://csvkit.readthedocs.io/en/latest/scripts/sql2csv.html) form a bridge that eases migrating your data into and out of a SQL database. For smaller datasets [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) can also leverage [sqlite](https://www.sqlite.org/) to allow execution of ad hoc SQL queries without ever touching a database.

By default, [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) will generate a create table statement for your data. You can specify what sort of database you are using with the `-i` flag:

```bash
csvsql -i sqlite joined.csv
```

```sql
CREATE TABLE joined (
    state VARCHAR NOT NULL,
    county VARCHAR NOT NULL,
    fips FLOAT NOT NULL,
    nsn VARCHAR NOT NULL,
    item_name VARCHAR,
    quantity FLOAT NOT NULL,
    ui VARCHAR NOT NULL,
    acquisition_cost FLOAT NOT NULL,
    total_cost FLOAT NOT NULL,
    ship_date DATE NOT NULL,
    federal_supply_category FLOAT NOT NULL,
    federal_supply_category_name VARCHAR NOT NULL,
    federal_supply_class FLOAT NOT NULL,
    federal_supply_class_name VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    total_population FLOAT NOT NULL,
    margin_of_error FLOAT NOT NULL
);
```

Here we have the sqlite “create table” statement for our joined data. You’ll see that, like [csvstat](https://csvkit.readthedocs.io/en/latest/scripts/csvstat.html), [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) has done its best to infer the column types.

Often you won’t care about storing the SQL statements locally. You can also use [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) to create the table directly in the database on your local machine. If you add the `--insert` option the data will also be imported:

```bash
csvsql --db sqlite:///leso.db --insert joined.csv
```

How can we check that our data was imported successfully? We could use the sqlite command-line interface, but rather than worry about the specifics of another tool, we can also use [sql2csv](https://csvkit.readthedocs.io/en/latest/scripts/sql2csv.html):

```bash
sql2csv --db sqlite:///leso.db --query "select * from joined"
```

Note that the `--query` parameter to [sql2csv](https://csvkit.readthedocs.io/en/latest/scripts/sql2csv.html) accepts any SQL query. For example, to export Douglas county from the `joined` table from our sqlite database, we would run:

```bash
sql2csv --db sqlite:///leso.db --query "select * from joined where county='DOUGLAS';" > douglas.csv
```

Sometimes, if you will only be running a single query, even constructing the database is a waste of time. For that case, you can actually skip the database entirely and [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) will create one in memory for you:

```bash
csvsql --query "select county,item_name from joined where quantity > 5;" joined.csv | csvlook
```

SQL queries directly on CSVs! Keep in mind when using this that you are loading the entire dataset into an in-memory SQLite database, so it is likely to be very slow for large datasets.

## 3.4. Summing up[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#summing-up "Link to this heading")

[csvjoin](https://csvkit.readthedocs.io/en/latest/scripts/csvjoin.html), [csvstack](https://csvkit.readthedocs.io/en/latest/scripts/csvstack.html), [csvsql](https://csvkit.readthedocs.io/en/latest/scripts/csvsql.html) and [sql2csv](https://csvkit.readthedocs.io/en/latest/scripts/sql2csv.html) represent the power tools of csvkit. Using these tools can vastly simplify processes that would otherwise require moving data between other systems. But what about cases where these tools still don’t cut it? What if you need to move your data onto the web or into a legacy database system? We’ve got a few solutions for those problems in our final section, [Going elsewhere with your data](https://csvkit.readthedocs.io/en/latest/tutorial/4_going_elsewhere.html).