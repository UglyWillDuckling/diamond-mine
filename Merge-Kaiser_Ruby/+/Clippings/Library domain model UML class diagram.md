---
source: "https://www.uml-diagrams.org/library-domain-uml-class-diagram-example.html"
published:
created: 2026-05-16
tags:
---
## UML Class Diagram Example

**Library Domain Model** describes main classes and relationships which could be used during analysis phase to better understand domain area for **Integrated Library System** (ILS), also known as a **Library Management System** (LMS).

Each physical library item - book, tape cassette, CD, DVD, etc. could have its own item number. To support it, the items may be **barcoded**. The purpose of barcoding is to provide a unique and scannable identifier that links the barcoded physical item to the electronic record in the **catalog**. Barcode must be physically attached to the item, and barcode number is entered into the corresponding field in the electronic item record.

Barcodes on library items could be replaced by **RFID tags**. The RFID tag can contain item's identifier, title, material type, etc. It is read by an RFID reader, without the need to open a book cover or CD/DVD case to scan it with barcode reader.

![UML class diagram example of the Library Domain Model.](https://www.uml-diagrams.org/examples/class-example-library-domain.png "UML class diagram example of the Library Domain Model.")

UML class diagram example of the Library Domain Model.

Library book attributes *ISBN* and *subject* are [inherited](https://www.uml-diagrams.org/inherited-property.html) from *Book* and shown with prepended caret '^' symbol.

The *title* attribute explicitly [redefines](https://www.uml-diagrams.org/redefining-property.html) *name*. While type of the attributes is the same, name is different. The *lang* attribute is explicitly redefined with different type. Original type was free text String, while redefined attribute is more specific (e.g. enumerated) *Language* class. We used explicit redefinition in this case because attribute types *String* and *Language* are not related. *Language* is [enumeration](https://www.uml-diagrams.org/data-type.html#enumeration) type.

Library has some rules on what could be *borrowed* and what is for *reference only*. Rules are also defined on how many books could be borrowed by *patrons* and how many could be reserved.

Library book attributes *loanPeriod*, *dueDate*, and *isOverdue* are [derived](https://www.uml-diagrams.org/derived-property.html). Length of time a library book may be borrowed (loan period) depends on library policy and varies based on a kind of book and who is borrowing it. For example, in a university library undergraduates could borrow book for 30 days, graduate students for a quarter, and faculty staff for a year. In a public library normal loan period for a book could be 3 weeks, while it could be lowered to 2 weeks for new books. Book return due date will be calculated based on the borrow date and loan period. If due date is past the current date, *isOverdue* Boolean flag which is false by default will be set to true.

Library *Catalog* provides access for the library patrons and staff to all sources of information about library items, allows to search by a particular author, on a particular topic, or in a particular format, that the library has. It tells the user where materials meeting their specific needs can be found.