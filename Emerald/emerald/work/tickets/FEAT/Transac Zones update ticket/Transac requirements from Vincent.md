#wip

## Automatic

We need to automate the updating of transac zones(irises) using the SalesForceApi.

The way we would do this is by having SF make requests to the MediaAPI with the correct realtor_id and iris id connections.

On each request made by SF the existing irises connected with the realtor would be checked and the connections that are no longer present would be removed. Similarly, any new connections would get added.

Additionally, the system also needs to check if any of the irises in the list have been added manually and ignore those completely.

## Manual

The system needs to provide a way to manually update zones via the Backyard.

The manual updates should always have **precedence** over automatic ones and should in practice **override** any existing data.

The manual update **will not contain** a `realtor` connection, but instead only contain the `iris_id` and `zone` values.

## Legacy Support

The legacy table `biz_product_coverage`, which is the currently being used to track transac zones, needs to kept in sync with the implementation.

As the old table holds almost the same data as the new one minus the `realtor` connection, it should be possible to keep the tables in sync by mimicking the operations done on the new table.

**note**: the old `start_date` and `end_date` fields are no longer relevant

## Technical notes

1. the entries do not necessarrily need to be **deleted physically.** One option could be to `disable` them using the `enabled` column
2. An `iris` can belong to **only 1 realtor** at a time which allows for the usage of `UNIQUE` db constraints
3. The received iris ids would match the existing ones on BY which would allow for compatibility with the legacy tables
