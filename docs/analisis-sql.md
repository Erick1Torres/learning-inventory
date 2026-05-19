# diferencias entre inner join y left join

## inner join (el estricto)
el `INNER JOIN` es súper estricto. cuando juntas dos tablas con esto, solo te va a enseñar los datos si hay una pareja perfecta en ambas. si algo se queda descolgado, no lo muestra.

----

* **ejemplo en mi proyecto:** si hago un inner join entre mis categorías y mis productos, solo me van a salir en la pantalla las categorías que tengan al menos un producto dentro. si acabo de crear la categoría "juguetes" pero todavía no he añadido ningún juguete a la base de datos, el inner join simplemente pasa de ella y no me la muestra en la lista.

----

## left join (el que lo enseña todo)
el `LEFT JOIN` es mucho más flexible. te muestra absolutamente todo lo que tengas en la primera tabla (la que escribes a la izquierda en el código), y luego intenta buscarle su pareja en la segunda tabla. si la encuentra, genial. si no la encuentra, te muestra el dato de la primera tabla igual, pero en la parte de la segunda tabla te pone un `NULL` (vacio).

----

* **ejemplo en mi proyecto:** si quiero repasar todo lo que tengo en mi tienda, uso un left join poniendo las categorías a la izquierda. así me saca una lista completa con **todas** mis categorías sí o sí. si la categoría "electrónica" tiene portatiles, salen los portátiles. pero si la categoría "ropa" está vacía porque aún no he metido camisetas, me la va a mostrar igual en la lista con un NULL al lado. esto me viene súper bien para darme cuenta rápido de qué categorías tengo vacías en la tienda.