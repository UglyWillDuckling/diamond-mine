#db-table 

### Attributes list

#### projectId

  • Type: string (number, e.g., 123456)
  • Description: ID of project in BY
  • Required: YES

#### capability

  • Type: string
  • Description: allows to differentiate data when querying by projectId by BY
  • Format: AGENCY#\<evaluationId> | OWNER
  • Required: YES

#### token

  • Type: string
  • Description: id to be used as a unique value for URL
  • Format: token consisted of letters and numbers, 16 characters, e.g.,
  iZGsi6ymRast63qz
  • Required: YES

#### status

  • Type: string
  • Description: status of completion, rejected only for agency
  • Format: IN_PROGRESS | FILLED | EXPIRED | REJECTED | MANUAL (both only for
  agency)
  • Required: YES

#### chosenVisitDates

  • Type: object
  • Description: chosen dates for visits by agencies; used to quickly filter
  out already chosen dates when returning available dates for agency that is
  yet to schedule a visit
  • Format:

    {
      "<<evaluationId>>": "2025-07-16T15:00:00",
      "<<evaluationId>>": "2025-07-16T16:00:00"
    }

  • Required: nullable

#### availability

  • Type: object
  • Description: owner’s availability times
  • Format:

    {
      "2025-07-16": [
        {
          from: "9:00",
          to: "11:00"
        },
        {
          from: "14:30",
          to: "16:00"
        }
      ],
      "2025-07-16": [
        {
          from: "9:00",
          to: "11:00"
        }
      ]
    }

  or

    {
      "2025-07-16": [
        ["9:00", "11:00"],
        ["14:30", "16:00"]
      ],
      "2025-07-16": [
        ["9:00", "11:00"]
      ]
    }

  • Required: nullable

#### evaluationId

  • Type: string (number, e.g., 123456)
  • Description: duplicated from SK for easier access
  • Required: YES

#### expireDate

  • Type: string (date)
  • Description: Because owner’s availability is filled by coach, only agency
  will need this: date at which status should be changed to EXPIRED (if not
  filled)
  • Format: 2025-07-16T10:24:00
  • Required: yes

#### acceptedVisitDate

  • Type: string (date)
  • Description: accepted date by agency
  • Format: 2025-07-16T10:24:00
  • Required: nullable

#### rejectionReason

  • Type: string
  • Description: information about chosen reason for rejection done by agency
  • Format: To be defined (if only dropdown of selections will be provided:
  ENUM, otherwise: free text)
  • Required: nullable

#### propertyDetails

  • Type: object
  • Description: information about property to be: shown on agency visit
  pages, sent via email to differentiate visits
  • Format:

    {
      "street": "Rue de Seine",
      "zip": "94140",
      "city": "Alfortville",
      "area": 55
    }

  • Required: YES

## table

| Attribute         | Used in | Description                                                                                                                                                    | Type   | Format                                                                                                                                                 | Required |                   |                               |     |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------- | ----------------------------- | --- |
| projectId         | common  | ID of project in BY                                                                                                                                            | string | number, eg. 123456                                                                                                                                     | YES      |                   |                               |     |
| capability        | common  | allows to differentiate data when querying by projectId by BY                                                                                                  | string | AGENCY#<evaluationId>                                                                                                                                  | OWNERYES |                   |                               |     |
| token             | common  | id to be used as a unique value for URL                                                                                                                        | string | token consisted of letters and numbers, 16 characters, e.g. iZGsi6ymRast63qz                                                                           | YES      |                   |                               |     |
| status            | common  | status of completion, rejected only for agency                                                                                                                 | string | IN_PROGRESS                                                                                                                                            | FILLED   | EXPIRED  REJECTED | MANUAL (both only for agency) | YES |
| chosenVisitDates  | owner   | chosen dates for visits by agencies; used to quickly filter out already chosen dates when returning available dates for agency that is yet to schedule a visit | object | `{ "<<evaluationId>>": "2025-07-16T15:00:00", "<<evaluationId>>": "2025-07-16T16:00:00" }`                                                             | nullable |                   |                               |     |
| availability      | owner   | owner’s availability times                                                                                                                                     | object | `{ "2025-07-16": [ { from: "9:00", to: "11:00" }, { from: "14:30", to: "16:00" } ] }` or `{ "2025-07-16": [ ["9:00", "11:00"], ["14:30", "16:00"] ] }` | nullable |                   |                               |     |
| evaluationId      | agency  | duplicated from SK for easier access                                                                                                                           | string | number, eg. 123456                                                                                                                                     | YES      |                   |                               |     |
| expireDate        | agency  | Because owner’s availability is filled by coach, only agency will need this                                                                                    | string | date at which status should be changed to EXPIRED (if not filled)                                                                                      | YES      |                   |                               |     |
| acceptedVisitDate | agency  | accepted date by agency                                                                                                                                        | string | 2025-07-16T10:24:00                                                                                                                                    | nullable |                   |                               |     |
| rejectionReason   | agency  | information about chosen reason for rejection done by agency                                                                                                   | string | To be defined if only dropdown of selections will be provided: ENUM, otherwise: free text                                                              | nullable |                   |                               |     |
| propertyDetails   | agency  | information about property to be: shown on agency visit pages, sent via email to differentiate visits                                                          | object | `{ "street": "Rue de Seine", "zip": "94140", "city": "Alfortville", "area": 55 }`                                                                      | YES      |                   |                               |     |
