
  Relational algebra is a formal language used in relational databases to
  specify and manipulate data in a database. It is a powerful tool for
  querying and manipulating data, and is the basis for the Structured Query
  Language (SQL) used in many commercial databases.

  ## Basic Operations

  ### 1. Selection

  The selection operation, denoted by  σ , selects a subset of rows from a
  relation based on a condition.

    σ(condition)(R)

  For example, the following query selects all employees with a salary above
  50000 from the  Employees  relation:

    σsalary > 50000(Employees)

  ### 2. Projection

  The projection operation, denoted by  π , selects a subset of columns from a
  relation.

    π(attributes)(R)

  For example, the following query selects the  name  and  salary  columns
  from the  Employees  relation:

    πname, salary(Employees)

  ### 3. Union

  The union operation, denoted by  ∪ , combines two relations by selecting
  rows from both relations.

    R ∪ S

  For example, the following query combines the  Orders  and  Payments
  relations:

    Orders ∪ Payments

  ### 4. Intersection

  The intersection operation, denoted by  ∩ , selects rows that exist in both
  relations.

    R ∩ S

  For example, the following query selects rows that exist in both the  Orders
  and  Customers  relations:

    Orders ∩ Customers

  ### 5. Difference

  The difference operation, denoted by  − , selects rows that exist in one
  relation but not the other.

    R − S

  For example, the following query selects rows that exist in the  Orders
  relation but not in the  Payments  relation:

    Orders − Payments

  ### 6. Cartesian Product

  The Cartesian product operation, denoted by  × , combines two relations by
  creating a row for each combination of rows.

    R × S

  For example, the following query combines the  Orders  and  Customers
  relations:

    Orders × Customers

  ### 7. Join

  The join operation, denoted by  ⊲ , combines two relations by matching rows
  based on a common attribute.

    R ⊲ S (ON condition)

  For example, the following query joins the  Orders  and  Customers
  relations on the  customer_id  attribute:

    Orders ⊲ Customers (ON customer_id = customer_id)

  ## Basic Syntax

  Relational algebra expressions follow this basic syntax:

    expression := selection | projection | union | intersection | difference |
  cartesian_product | join
    selection := π(attributes)(R) | σ(condition)(R)
    projection := π(attributes)(R)
    union := R ∪ S
    intersection := R ∩ S
    difference := R − S
    cartesian_product := R × S
    join := R ⊲ S (ON condition)

  ## Example Use Cases

  ### 1. Finding Employees by Department

  The following query uses selection and join operations to find employees by
  department:

    σdepartment = 'Sales' (σ(department IN (SELECT department FROM
  Employees))(Employees))

  ### 2. Finding Customers with Outstanding Orders

  The following query uses join and selection operations to find customers
  with outstanding orders:

    σoutstanding_order = TRUE (σ(order_id IN (SELECT order_id FROM
  Orders))(σ(customer_id IN (SELECT customer_id FROM Customers))(Customers)))

  ### 3. Finding the Total Revenue

  The following query uses aggregate functions and join operations to find the
  total revenue:

    σrevenue > 10000 (SELECT SUM(order_price) FROM σ(order_id IN (SELECT
  order_id FROM Orders))(Orders))

  ## Conclusion

  Relational algebra is a powerful tool for querying and manipulating database
  data. Understanding its basic operations and syntax can help you to write
  efficient and effective SQL queries.