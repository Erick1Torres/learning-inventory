# Relacionales y Eliminación

## Explica qué significa que category_id sea una foreign key.

Una **Foreing Key** o en español **Clave Foranea** es una restriccion de BBDD que establece un vinculo con las tablas en este caso con la tabla categories, en mi esquema la columna `category_id` en la tabla `products` apunta a la columna `id` en la tabla `categories`.

Lo cual esto garantiza la integridad referencial, esto inpide crea un producto asignado a una categoria que no existe y tambien evita que haya productos solitarios.

----

## ¿Qué comportamiento es más seguro al intentar borrar una categoría: ON DELETE CASCADE u ON DELETE RESTRICT?

El comportamiento mas seguro al intentar borrar una categoria es : **`ON DELETE Restrict`**.

## ¿Porque?

- Justificacion:
    - **`ON DELETE RESTRICT`:** Actua como un seguro que quiere decir, pues es simple si intento eliminar una categoria que aun almacena productos asociados la base de datos lo que hara es bloquear la operacion y dara un error, lo cual me obligara a reasignar o eliminar esos productos, esto hara que evite borrar datos por accidente.

    - **`ON DELETE CASCADE`:** Este comando es muy peligroso ya que como su mismo nombre lo indica eliminacion en cascada esto quiere decir que a la hora de eliminar la categoria automaticamente borraria todos los productos asociados a ella de forma silenciosa, lo cual es bastante ovio que no nos veneficiaria en absoluto ya que se perderia una perdida masiva de informacion de inventario.