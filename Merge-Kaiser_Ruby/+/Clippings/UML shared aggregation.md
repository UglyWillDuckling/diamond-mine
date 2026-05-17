---
source: "https://www.uml-diagrams.org/aggregation.html"
published:
created: 2026-05-16
tags:
---
## UML Aggregation

**Shared aggregation** (**aggregation**) is a [binary association](https://www.uml-diagrams.org/association.html#binary-association) between a [property](https://www.uml-diagrams.org/property.html) and one or more composite objects which group together a set of instances. It is a "weak" form of [aggregation](https://www.uml-diagrams.org/association.html#aggregation) when part instance is independent of the composite. Shared aggregation has the following characteristics:

- it is [binary association](https://www.uml-diagrams.org/association.html#binary-association),
- it is asymmetric - only one end of association can be an aggregation,
- it is transitive - aggregation links should form a directed, acyclic graph, so that no composite instance could be indirect part of itself,
- shared part could be included in several composites, and if some or all of the composites are deleted, shared part may still exist.

#### Notation

Shared aggregation is depicted as association decorated with a *hollow diamond* at the aggregate end of the association line. The diamond should be noticeably smaller than the diamond notation for N-ary associations.

Example below shows *Triangle* as an aggregate of exactly three line segments (sides). Multiplicity '\*' of the *Triangle* association end means that each line *Segment* could be a part of several triangles, or might not belong to any triangle at all. Erasing specific *Triangle* instance does not mean that all or any segments will be deleted as well. (Note, that we named collection of three line Segments as 'sides', while usual UML convention is to use singular form, i.e. 'side', even for collections.)

![Triangle consists of three line segments (sides), each Segment could be part of several triangles.](https://www.uml-diagrams.org/association/shared-aggregation.png "Triangle consists of three line segments (sides), each Segment could be part of several triangles.")

Triangle has 'sides' collection of three line Segments.  
Each line Segment could be part of none, one, or several triangles.

Shared aggregation could be depicted together with other association adornments such as [navigability](https://www.uml-diagrams.org/association.html#navigability) and [association end ownership](https://www.uml-diagrams.org/association.html#association-end). In the example below line *Segment* is navigable from *Triangle*. Association end 'sides' is owned by *Triangle* (not by association itself), which means that 'sides' is an [attribute](https://www.uml-diagrams.org/property.html#classifier-attribute) of *Triangle*.

![Triangle has collection of three line Segments, each one navigable from Triangle and owned by Triangle.](https://www.uml-diagrams.org/association/shared-aggregation-navigable.png "Triangle has collection of three line Segments, each one navigable from Triangle and owned by Triangle.")

Triangle has 'sides' collection of three unique line Segments.  
Line segments are navigable from Triangle.  
Association end 'sides' is owned by Triangle, not by association itself.

#### Mistakes

Aggregation is asymmetric relationship - only **one end** of association is allowed to be marked as shared or composite aggregation. Both UML 1.x and 2.x don't allow a diamond to be attached to both ends of association line. The reasoning behind the example below was that each *Student* instance has a list of courses he/she is registered to, and every *Course* has a list of students registered for that course.

![Aggregation mistake - only one end of association can be marked as aggregation.](https://www.uml-diagrams.org/association/error-shared-aggregation.png "Aggregation mistake - only one end of association can be marked as aggregation.")

Aggregation mistake - only one end of association  
can be marked as aggregation.

It will not help if we draw two separate aggregations as shown below. Aggregation links should form a directed, **acyclic** graph, so that no composite instance should be direct or indirect part of itself.

![Aggregation mistake - no composite instance should be direct or indirect part of itself.](https://www.uml-diagrams.org/association/error-shared-aggregation-bilink.png "Aggregation mistake - no composite instance should be direct or indirect part of itself.")

Aggregation mistake - no composite instance  
should be direct or indirect part of itself.

#### History

In UML 1.x aggregation kinds were *none*, *aggregate*, and *composite*. UML 2.0 renamed the aggregation kind described on this page from *aggregate* to *shared*, so that in UML 2.x aggregation kinds are: *none*, *shared*, and *composite*.

#### Examples

[Library domain model](https://www.uml-diagrams.org/library-domain-uml-class-diagram-example.html)

[![Library domain model UML class diagram example.](https://www.uml-diagrams.org/thumbnails/library-domain-uml-class-diagram-example.png "Library domain model UML class diagram example.")](https://www.uml-diagrams.org/library-domain-uml-class-diagram-example.html)

[Composition](https://www.uml-diagrams.org/composition.html "UML composition")