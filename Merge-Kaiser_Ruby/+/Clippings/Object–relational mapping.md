---
source: https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping
author: 
published: 
created: 2025-04-09
tags:
  - concept/programming/oop
---
**Object–relational mapping** ( **ORM**, **O/RM**, and **O/R mapping tool** ) in [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") is a [programming](https://en.wikipedia.org/wiki/Computer_programming "Computer programming") technique for converting data between a [relational database](https://en.wikipedia.org/wiki/Relational_database "Relational database") and the memory (usually the [heap](https://en.wikipedia.org/wiki/Memory_management#HEAP "Memory management") ) of an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented "Object-oriented") programming language. This creates, in effect, a virtual [object database](https://en.wikipedia.org/wiki/Object_database "Object database") that can be used from within the programming language.

In [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming "Object-oriented programming"), [data-management](https://en.wikipedia.org/wiki/Data_management "Data management") tasks act on [objects](https://en.wikipedia.org/wiki/Object_\(computer_science\) "Object (computer science)") that combine [scalar](https://en.wikipedia.org/wiki/Scalar_\(computing\) "Scalar (computing)") values into objects. For example, consider an address book entry that represents a single person along with zero or more phone numbers and zero or more addresses. This could be modeled in an object-oriented implementation by a "Person [object](https://en.wikipedia.org/wiki/Object_\(computer_science\) "Object (computer science)") " with an [attribute/field](https://en.wikipedia.org/wiki/Attribute_\(computing\) "Attribute (computing)") to hold each data item that the entry comprises: the person's name, a list of phone numbers, and a list of addresses. The list of phone numbers would itself contain "PhoneNumber objects" and so on. Each such address-book entry is treated as a single object by the programming language (it can be referenced by a single variable containing a pointer to the object, for instance). Various [methods](https://en.wikipedia.org/wiki/Method_\(computer_programming\) "Method (computer programming)") can be associated with the object, such as methods to return the preferred phone number, the home address, and so on.

By contrast, relational databases, such as [SQL](https://en.wikipedia.org/wiki/SQL "SQL"), group scalars into [tuples](https://en.wikipedia.org/wiki/Tuples "Tuples"), which are then enumerated in [tables](https://en.wikipedia.org/wiki/Table_\(database\) "Table (database)"). Tuples and objects have some general similarity, in that they are both ways to collect values into named fields such that the whole collection can be manipulated as a single compound entity. They have many differences, though, in particular: lifecycle management (row insertion and deletion, versus [garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_\(computer_science\) "Garbage collection (computer science)") or [reference counting](https://en.wikipedia.org/wiki/Reference_counting "Reference counting") ), references to other entities (object references, versus foreign key references), and inheritance (non-existent in relational databases). As well, objects are managed on-heap and are under full control of a single process, while database tuples are shared and must incorporate locking, merging, and retry. Object–relational mapping provides automated support for mapping tuples to objects and back, while accounting for all of these differences.[^1]

The heart of the problem involves translating the logical representation of the objects into an atomized form that is capable of being stored in the database while preserving the properties of the objects and their relationships so that they can be reloaded as objects when needed. If this storage and retrieval functionality is implemented, the objects are said to be [persistent](https://en.wikipedia.org/wiki/Persistence_\(computer_science\) "Persistence (computer science)").[^1]

## Overview

Implementation-specific details of storage drivers are generally wrapped in an API in the programming language in use, exposing methods to interact with the storage medium in a way which is simpler and more in line with the paradigms of surrounding code.

The following is a simple example, written in [C#](https://en.wikipedia.org/wiki/C_Sharp_\(programming_language\) "C Sharp (programming language)") code, to execute a query written in [SQL](https://en.wikipedia.org/wiki/SQL "SQL") using a database engine.

```
var sql = "SELECT id, first_name, last_name, phone, birth_date, sex, age FROM persons WHERE id = 10";
var result = context.Persons.FromSqlRaw(sql).ToList();
var name = result[0]["first_name"];
```

In contrast, the following makes use of an ORM-job API which makes it possible to write code that naturally makes use of the features of the language.

```
var person = repository.GetPerson(10);
var firstName = person.GetFirstName();
```

The case above makes use of an object representing the storage repository and methods of that object. Other frameworks might provide code as static methods, as in the example below, and yet other methods may not implement an object-oriented system at all. Often the choice of paradigm is made for the best fit of the ORM into the surrounding language's design principles.

```
var person = Person.Get(10);
```

## Comparison with traditional data access techniques

Compared to traditional techniques of exchange between an object-oriented language and a relational database, ORM often reduces the amount of code that needs to be written.[^2]

Disadvantages of ORM tools generally stem from the high level of [abstraction](https://en.wikipedia.org/wiki/Database_abstraction_layer "Database abstraction layer") obscuring what is actually happening in the implementation code.

## Object-oriented databases

Another approach is to use an [object-oriented database management system](https://en.wikipedia.org/wiki/Object_database "Object database") (OODBMS) or [document-oriented databases](https://en.wikipedia.org/wiki/Document-oriented_database "Document-oriented database") such as native [XML databases](https://en.wikipedia.org/wiki/XML_database "XML database") that provide more flexibility in data modeling. OODBMSs are databases designed specifically for working with object-oriented values. Using an OODBMS eliminates the need for converting data to and from its SQL form, as the data is stored in its original object representation and relationships are directly represented, rather than requiring [join tables](https://en.wikipedia.org/wiki/Junction_table "Junction table") /operations. The equivalent of ORMs for [document-oriented databases](https://en.wikipedia.org/wiki/Document-oriented_database "Document-oriented database") are called object-document mappers (ODMs).

Document-oriented databases also prevent the user from having to "shred" objects into table rows. Many of these systems also support the [XQuery](https://en.wikipedia.org/wiki/XQuery "XQuery") query language to retrieve datasets.

Object-oriented databases tend to be used in complex, niche applications. One of the arguments against using an OODBMS is that it may not be able to execute ad-hoc, application-independent queries. For this reason, many programmers find themselves more at home with an object-SQL mapping system, even though most object-oriented databases are able to process SQL queries to a limited extent. Other OODBMS provide replication to SQL databases, as a means of addressing the need for ad-hoc queries, while preserving well-known query patterns.

## Challenges

A variety of difficulties arise when considering how to match an object system to a relational database. These difficulties are referred to as the [object–relational impedance mismatch](https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch "Object–relational impedance mismatch").[^3]

An alternative to implementing ORM is use of the native procedural languages provided with every major database. These can be called from the client using SQL statements. The [Data Access Object](https://en.wikipedia.org/wiki/Data_access_object "Data access object") (DAO) design pattern is used to abstract these statements and offer a lightweight object-oriented interface to the rest of the application.[^4]

ORMs are limited to their predefined functionality, which may not cover all edge cases or database features. They usually mitigate this limitation by providing users with an interface to write raw queries, such as Django ORM.[^5]

## See also

- [List of object–relational mapping software](https://en.wikipedia.org/wiki/List_of_object%E2%80%93relational_mapping_software "List of object–relational mapping software")
- [Comparison of object–relational mapping software](https://en.wikipedia.org/wiki/Comparison_of_object%E2%80%93relational_mapping_software "Comparison of object–relational mapping software")
- [AutoFetch](https://en.wikipedia.org/wiki/AutoFetch "AutoFetch") – automatic query tuning
- [Common Object Request Broker Architecture](https://en.wikipedia.org/wiki/Common_Object_Request_Broker_Architecture "Common Object Request Broker Architecture") (CORBA)
- [Object database](https://en.wikipedia.org/wiki/Object_database "Object database")
- [Object persistence](https://en.wikipedia.org/wiki/Object_persistence "Object persistence")
- [Object–relational database](https://en.wikipedia.org/wiki/Object%E2%80%93relational_database "Object–relational database")
- [Object–relational impedance mismatch](https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch "Object–relational impedance mismatch")
- [Relational model](https://en.wikipedia.org/wiki/Relational_model "Relational model")
	- [SQL](https://en.wikipedia.org/wiki/SQL "SQL") (Structured Query Language)
- [Java Data Objects](https://en.wikipedia.org/wiki/Java_Data_Objects "Java Data Objects") (JDO)
- [Java Persistence API](https://en.wikipedia.org/wiki/Java_Persistence_API "Java Persistence API") (JPA), now [Jakarta Persistence](https://en.wikipedia.org/wiki/Jakarta_Persistence "Jakarta Persistence")
- [Service Data Objects](https://en.wikipedia.org/wiki/Service_Data_Objects "Service Data Objects")
- [Entity Framework](https://en.wikipedia.org/wiki/Entity_Framework "Entity Framework")
- [Active record pattern](https://en.wikipedia.org/wiki/Active_record_pattern "Active record pattern")
- [Data mapper pattern](https://en.wikipedia.org/wiki/Data_mapper_pattern "Data mapper pattern")
- [Single Table Inheritance](https://en.wikipedia.org/wiki/Single_Table_Inheritance "Single Table Inheritance")

## References

## External links

- [About ORM](http://www.artima.com/intv/abstract3.html) by [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg "Anders Hejlsberg")
- [Mapping Objects to Relational Databases: O/R Mapping In Detail](http://www.agiledata.org/essays/mappingObjects.html) by [Scott W. Ambler](https://en.wikipedia.org/wiki/Scott_W._Ambler "Scott W. Ambler")

[^1]: ["What is Object/Relational Mapping?"](http://www.hibernate.org/about/orm). *Hibernate Overview*. JBOSS Hibernate. Retrieved 27 January 2022.

[^2]: Douglas Barry, Torsten Stanienda, "Solving the Java Object Storage Problem," Computer, vol. 31, no. 11, pp. 33-40, Nov. 1998, [Excerpt at https://www.service-architecture.com/articles/object-relational-mapping/transparent-persistence-vs-jdbc-call-level-interface.html Lines of code using O/R are only a fraction of those needed for a call-level interface (1:4). *For this exercise, 496 lines of code were needed using the ODMG Java Binding compared to 1,923 lines of code using JDBC.*](https://www.computer.org/csdl/magazine/co/1998/11/ry033/13rRUxC0SRY.)

[^3]: [Object–Relational Mapping Revisited - A Quantitative Study on the Impact of Database Technology on O/R Mapping Strategies. M Lorenz, JP Rudolph, G Hesse, M Uflacker, H Plattner. Hawaii International Conference on System Sciences (HICSS), 4877-4886](https://www.semanticscholar.org/paper/Object-Relational-Mapping-Revisited-A-Quantitative-Lorenz-Rudolph/708ac5e798b7e45b949d42e2f872549a3612e1e2) (DOI:10.24251/hicss.2017.592)

[^4]: Feuerstein, Steven; Bill Pribyl (September 1997). ["Oracle PL/SQL Programming"](http://docstore.mik.ua/orelly/oracle/prog2/ch18_05.htm). 18.5 Modifying Persistent Objects. Retrieved 23 August 2011.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: location ( [link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location "Category:CS1 maint: location") )

[^5]: . *Django Project*. Retrieved 8 September 2024.