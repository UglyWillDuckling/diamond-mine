---
author:
  - "[[MitraMitra                    20111 gold badge22 silver badges44 bronze badges]]"
  - "[[Bastien BBastien B                    1]]"
  - "[[3311212 silver badges3030 bronze badges]]"
created: 2025-06-19
published: 2021-12-14
source: "https://stackoverflow.com/questions/70350298/what-does-synchronize-session-false-do-exactly-in-update-functions-for-sqlalch"
tags:
---

We have the CRUD functions in our API which is using FastAPI and SQLAlchemy.  
For update functions we have the below code:

```python
def update_user(
    user_id: uuid.UUID,
    db: Session,
    update_model: UserUpdateModel,
) -> bool:
    query = (
        db.query(User)
        .filter(
            User.user_id == user_id,
        )
        .update(update_model, synchronize_session=False)
    )
    try:
        db.commit()
    except IntegrityError as e:
        if isinstance(e.orig, PG2UniqueViolation):
            raise UniqueViolation from e
    return bool(query)
```

What is the best value for it? False or Fetch...?  
Is it critical if we don't use it?

___

By looking at the sqlalchemy doc you can find [what synchronize\_session does](https://docs.sqlalchemy.org/en/14/orm/query.html#sqlalchemy.orm.Query.update) and how to [use it properly](https://docs.sqlalchemy.org/en/14/orm/session_basics.html#update-and-delete-with-arbitrary-where-clause)

From the official doc:

> With both the 1.x and 2.0 form of ORM-enabled updates and deletes, the following values for synchronize\_session are supported:
> 
> - `False` - don’t synchronize the session. This option is the most efficient and is reliable once the session is expired, which typically occurs after a `commit()`, or explicitly using `expire_all()`. Before the expiration, objects that were updated or deleted in the database may still remain in the session with stale values, which can lead to confusing results.
> - `'fetch'` - Retrieves the primary key identity of affected rows by either performing a SELECT before the UPDATE or DELETE, or by using RETURNING if the database supports it, so that in-memory objects which are affected by the operation can be refreshed with new values (updates) or expunged from the Session (deletes). Note that this synchronization strategy is not available if the given `update()` or `delete()` construct specifies columns for `UpdateBase.returning()` explicitly.
> - `'evaluate'` - Evaluate the WHERE criteria given in the UPDATE or DELETE statement in Python, to locate matching objects within the Session. This approach does not add any round trips and in the absence of RETURNING support is more efficient. For UPDATE or DELETE statements with complex criteria, the `'evaluate'` strategy may not be able to evaluate the expression in Python and will raise an error. If this occurs, use the `'fetch'` strategy for the operation instead.
