-- Création de la base de données avec encodage UTF-8 complet
CREATE DATABASE IF NOT EXISTS conferenceTech
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

-- Sélection de la base
USE conferenceTech;

-- Création de la table des éditions
CREATE TABLE IF NOT EXISTS editions (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  annee YEAR NOT NULL,
  titre VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des données initiales
INSERT INTO editions (annee, titre, description) VALUES
(2023, 'Première édition', 'Lancement du concept avec 150 participants et 8 intervenants.'),
(2024, 'Deuxième édition', 'Focus sur les apps mobiles et l’inclusion financière.'),
(2025, 'Troisième édition', 'Thème : “Design, cash et connectivité en Afrique”.');

