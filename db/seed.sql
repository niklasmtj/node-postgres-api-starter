CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email) VALUES 
('Judith D. Woo', 'judithd.woo@example.com'),
('Thora E. Simmons', 'thorae.simmons@example.com'),
('Viola T. Sanchez', 'violat.sanchez@example.com'),
('Terry B. Cooper', 'terryb.cooper@example.com');