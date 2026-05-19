import express from 'express';
import cors from 'cors';
import { pool } from './lib/db';

// 2. LUEGO creamos la app
const app = express();

// 3. Y AHORA SÍ, le ponemos las configuraciones (middlewares)
app.use(cors()); // Da permiso al frontend
app.use(express.json()); // Permite entender datos JSON

// esto lee los productos de la categoria
app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT p.name AS producto, p.price AS precio, c.name AS categoria
      FROM products p
      INNER JOIN categories c ON p.category_id = c.id;
    `);
    
    // Aqui devuelvo el resultado al cliente
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Insertar un producto de forma SEGURA
app.post('/productos', async (req, res) => {
  // Saco datos que nos envia el cliente en su petición (req.body)
  const { name, price, stock, category_id } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO products (name, price, stock, category_id) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, price, stock, category_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});
0
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});