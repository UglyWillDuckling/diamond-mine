
[[baze - seminar]]

## notes

- In many enterprise systems, procedures **avoid internal COMMIT/ROLLBACK**.
	- Because the caller may want to control the transaction.
	- if you commit internally you partial transactions are possible

## good practices

#### 1. Check Whether Any Row Was Updated
```sql
IF SQL%ROWCOUNT = 0 THEN
```

`SQL%ROWCOUNT` is an Oracle implicit cursor attribute.

It tells you:
> How many rows were affected by the last SQL statement.

- ==prevents silent failures.==

#### 3. Raise Custom Error

```sql
RAISE_APPLICATION_ERROR(
    -20001,
    'Sredstvo s ID ' || p_sredstvo_id || ' ne postoji ili nije ažurirano.'
);
```

- If no row was updated, Oracle throws a custom exception.
* Error codes from `-20000` to `-20999` are reserved for user-defined Oracle errors.

**Example**:
```
ORA-20001: Sredstvo s ID 10 ne postoji ili nije ažurirano.
```

#### Exception Handling

```c
EXCEPTION
    WHEN OTHERS THEN
```

`WHEN OTHERS` **catches any exception/error.**

Examples:

* table missing
* insert failure
* constraint violation
* deadlock
* custom error from `RAISE_APPLICATION_ERROR`

#### Re-throw the Error

- `RAISE` preserves the original error.
 - Proper exception propagation

==This r**e-throws** the original exception after rollback.==

Without this:
* the error would be silently **swallowed**
* caller might think procedure succeeded

#### ✅ Audit logging

- The insert into `transakcije` creates a **history trail.**