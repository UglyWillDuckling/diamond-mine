---
source: "https://www.uml-diagrams.org/composition.html"
published:
created: 2026-05-16
tags:
---
## UML Composition

**Composite aggregation** (**composition**) is a "strong" form of [aggregation](https://www.uml-diagrams.org/association.html#aggregation) with the following characteristics:

- it is [binary association](https://www.uml-diagrams.org/association.html#binary-association),
- it is a *whole/part* relationship,
- a part could be included in *at most one* composite (whole) at a time, and
- if a composite (whole) is deleted, all of its composite parts are "normally" deleted with it.

Note, that UML does not define how, when and specific order in which parts of the composite are created. Also, in some cases a part can be removed from a composite before the composite is deleted, and so is not necessarily deleted as part of the composite.

#### Notation

Composite aggregation is depicted as a binary association decorated with a **filled black diamond** at the aggregate (whole) end.

![Composite aggregation is depicted as binary associations with filled black diamond](https://www.uml-diagrams.org/association/class-composition.png "Composite aggregation is depicted as binary associations with filled black diamond")

Folder could contain many files, while each File has exactly one Folder parent.  
If Folder is deleted, all contained Files are deleted as well.

When composition is used in **domain models**, both whole/part relationship as well as event of composite "deletion" should be interpreted figuratively, not necessarily as physical containment and/or termination. UML specification needs to be updated to explicitly allow this interpretation.

![Composite aggregation could be used in domain models.](https://www.uml-diagrams.org/association/class-composition-domain.png "Composite aggregation could be used in domain models.")

Hospital has 1 or more Departments, and  
each Department belongs to exactly one Hospital.  
If Hospital is closed, so are all of its Departments.

Note, that though it seems odd, multiplicity of the composite (whole) could be specified as **0..1** ("at most one") which means that part is allowed to be a "stand alone", not owned by any specific composite.

![Multiplicity of composite (whole) could be 0..1 (at most one).](https://www.uml-diagrams.org/association/class-composition-optional.png "Multiplicity of composite (whole) could be 0..1 (at most one).")

Each Department has some Staff, and each Staff could be  
a member of one Department (or none). If Department is closed,  
its Staff is relieved (but excluding the "stand alone" Staff).

#### Mistakes

Composition is asymmetric relationship - only **one end** of association is allowed to be marked as shared or composite aggregation. Both UML 1.x and 2.x don't allow a diamond to be attached to both ends of association line.

[Generalization](https://www.uml-diagrams.org/generalization.html "UML generalization")