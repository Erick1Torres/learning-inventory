# Puebas en Neon del paso dos

## Operaciones transaccionales.

- Escribe un UPDATE para restar stock a un producto simulando una venta.

```sql
UPDATE products 
SET stock = stock - 1 
WHERE name = 'Portátil Gaming';
```
Con este codigo lo que he hecho es decirle que elimine un producto en este caso es de portatil gaming astes eran 15 procuctos de este tipo y con esto que le he dicho por a si decirlo he vendido un producto de portatil gaming antes eran 15 ahora son 14.

---

- Escribe un DELETE para eliminar un producto.

```sql
DELETE FROM products 
WHERE name = 'Auriculares Inalámbricos';
```

Aqui lo estoy pridiendo que elimine el producto Auriculares Inalámbricos osea que busque en la columna products y que borre la linea llamada Auriculares Inalámbricos en este caso siria borrar por completo toda la columna Auriculares Inalámbricos.


---

## Consultas avanzadas.

- Escribe una query con INNER JOIN que devuelva producto, precio y nombre de categoría.

```sql
SELECT p.name AS producto, p.price AS precio, c.name AS categoria
FROM products p
INNER JOIN categories c ON p.category_id = c.id;
```


------

- Escribe una query con GROUP BY y COUNT() que devuelva el nombre de cada categoría y cuántos productos tiene.

```sql
SELECT c.name AS categoria, COUNT(p.id) AS total_productos
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.name;
```