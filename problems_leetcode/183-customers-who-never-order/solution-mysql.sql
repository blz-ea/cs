SELECT A.Name as Customers
FROM Customers A
LEFT JOIN Orders B ON A.Id = B.CustomerId WHERE CustomerId is NULL;