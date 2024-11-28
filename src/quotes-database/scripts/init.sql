CREATE DATABASE IF NOT EXISTS app_database;
USE app_database;

CREATE TABLE IF NOT EXISTS quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    quote VARCHAR(1000) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO quotes (author, quote, createdAt, updatedAt)
VALUES 
('Albert Einstein', 'Life is like riding a bicycle. To keep your balance, you must keep moving.', NOW(), NOW()),
('Mark Twain', 'The secret of getting ahead is getting started.', NOW(), NOW()),
('Oscar Wilde', 'Be yourself; everyone else is already taken.', NOW(), NOW()),
('Mahatma Gandhi', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', NOW(), NOW()),
('Winston Churchill', 'Success is not final, failure is not fatal: It is the courage to continue that counts.', NOW(), NOW()),
('Eleanor Roosevelt', 'The future belongs to those who believe in the beauty of their dreams.', NOW(), NOW()),
('Nelson Mandela', 'It always seems impossible until it’s done.', NOW(), NOW()),
('Friedrich Nietzsche', 'He who has a why to live can bear almost any how.', NOW(), NOW()),
('Confucius', 'It does not matter how slowly you go as long as you do not stop.', NOW(), NOW()),
('Helen Keller', 'The only thing worse than being blind is having sight but no vision.', NOW(), NOW());
