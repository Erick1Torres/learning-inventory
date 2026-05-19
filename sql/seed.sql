INSERT INTO categories (name, description) VALUES 
('Electrónica', 'Dispositivos tecnológicos y ordenadores'),
('Ropa', 'Prendas de vestir y accesorios');

INSERT INTO products (name, price, stock, category_id) VALUES 
('Portátil Gaming', 1200.50, 15, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Auriculares Inalámbricos', 45.99, 50, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Camiseta de Algodón', 12.00, 100, (SELECT id FROM categories WHERE name = 'Ropa'));