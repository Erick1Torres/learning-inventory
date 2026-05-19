# apuntes de seguridad: cómo no cargarme mi propia base de datos

## qué es esto de la inyección sql
a ver, resulta que si pongo un formulario para que la gente añada productos, y alguien con malas intenciones en vez de poner "ratón inalámbrico" pone código sql malicioso, se me puede ir todo al traste.

----

imagina que en el nombre del producto alguien escribe esto:
`ratón'); DROP TABLE products; --`

si mi servidor coge eso y lo pega a lo bruto en la base de datos, lo que hace es cerrar mi comando y ejecutar el suyo (`DROP TABLE`). básicamente, me borran toda la tabla de productos de un plumazo y me quedo sin tienda. a esta jugarreta se le llama inyección sql.

-----

## cómo lo he arreglado en mi código
la regla de oro que me apunto: NUNCA fiarme de lo que escribe el usuario y nunca meter su texto directamente en mi código sql.

para evitar disgustos, en mi archivo `server.ts` he usado lo que se llaman "consultas parametrizadas". en vez de pegar las variables tal cual, he puesto unos huecos con el símbolo del dólar (`$1, $2, $3, $4`).

```typescript
// lo que NO hay que hacer (peligro total):
pool.query(`INSERT INTO products (name) VALUES ('${req.body.name}')`);

// como lo he hecho yo en mi backend:
pool.query(
  `INSERT INTO products (name, price, stock, category_id) VALUES ($1, $2, $3, $4)`,
  [name, price, stock, category_id]
);