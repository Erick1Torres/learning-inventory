import { useEffect, useState } from 'react'

interface Producto {
  producto: string;
  precio: number;
  categoria: string;
}

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch('https://vercel.com/erick1torres-projects/learning-inventory')
      .then(res => res.json())
      .then(datos => setProductos(datos))
      .catch(err => console.error("Error al traer datos:", err));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1> Mi Inventario de Neon</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, i) => (
            <tr key={i}>
              <td>{p.producto}</td>
              <td>{p.precio}€</td>
              <td>{p.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App