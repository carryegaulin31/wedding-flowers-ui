/* DROP DATABASE weddings; */ 

CREATE DATABASE weddings;

USE weddings;

SHOW TABLES;

CREATE USER 'weddings'@'localhost' IDENTIFIED BY 'flowers';

GRANT ALL ON weddings.* TO 'weddings'@'localhost';
SELECT * FROM seasons;

CREATE TABLE colors (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE seasons (
  id INT auto_increment,
  season VARCHAR(255) NOT NULL,
  note VARCHAR(255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
  );
  
  CREATE TABLE flowers (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  seasonId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (seasonId) REFERENCES seasons(id)
);

CREATE TABLE flowersColors (
  flowerId INT,
  colorId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  FOREIGN KEY (flowerId) REFERENCES flowers (id),
  FOREIGN KEY (colorId) REFERENCES colors (id)
);

INSERT INTO colors (name) VALUES ("Antique Lavender");
INSERT INTO colors (name) VALUES ("Antique Pink");
INSERT INTO colors (name) VALUES ("Apple Green");
INSERT INTO colors (name) VALUES ("Beige/Lavender");
INSERT INTO colors (name) VALUES ("Beige/Pink");
INSERT INTO colors (name) VALUES ("Black");
INSERT INTO colors (name) VALUES ("Blue");
INSERT INTO colors (name) VALUES ("Blue/Green");
INSERT INTO colors (name) VALUES ("Blue/Purple");
INSERT INTO colors (name) VALUES ("Blue/White");
INSERT INTO colors (name) VALUES ("Blush");
INSERT INTO colors (name) VALUES ("Blush/Peach");
INSERT INTO colors (name) VALUES ("Blush/Pink");
INSERT INTO colors (name) VALUES ("Bright Green");
INSERT INTO colors (name) VALUES ("Bronze");
INSERT INTO colors (name) VALUES ("Brown");
INSERT INTO colors (name) VALUES ("Burgundy");
INSERT INTO colors (name) VALUES ("Burgundy/Red");
INSERT INTO colors (name) VALUES ("Burgundy/White");
INSERT INTO colors (name) VALUES ("Burgundy/Yellow");
INSERT INTO colors (name) VALUES ("Butterscotch");
INSERT INTO colors (name) VALUES ("Champagne");
INSERT INTO colors (name) VALUES ("Copper");
INSERT INTO colors (name) VALUES ("Coral");
INSERT INTO colors (name) VALUES ("Cream");
INSERT INTO colors (name) VALUES ("Cream/Blush");
INSERT INTO colors (name) VALUES ("Cream/Orange");
INSERT INTO colors (name) VALUES ("Cream/Peach");
INSERT INTO colors (name) VALUES ("Cream/Pink");
INSERT INTO colors (name) VALUES ("Dark Blue");
INSERT INTO colors (name) VALUES ("Dark Green");
INSERT INTO colors (name) VALUES ("Dark Orange");
INSERT INTO colors (name) VALUES ("Dark Peach");
INSERT INTO colors (name) VALUES ("Dark Pink");
INSERT INTO colors (name) VALUES ("Dark Purple");
INSERT INTO colors (name) VALUES ("Dark Red");
INSERT INTO colors (name) VALUES ("Dark White");
INSERT INTO colors (name) VALUES ("Dark Yellow");
INSERT INTO colors (name) VALUES ("Deep Purple");
INSERT INTO colors (name) VALUES ("Dyed Blue");
INSERT INTO colors (name) VALUES ("Dyed Green");
INSERT INTO colors (name) VALUES ("Dyed Orange");
INSERT INTO colors (name) VALUES ("Dyed Peach");
INSERT INTO colors (name) VALUES ("Dyed Red");
INSERT INTO colors (name) VALUES ("Dyed Yellow");
INSERT INTO colors (name) VALUES ("Fuchsia");
INSERT INTO colors (name) VALUES ("Gold");
INSERT INTO colors (name) VALUES ("Gold/Yellow");
INSERT INTO colors (name) VALUES ("Gold/Pink");
INSERT INTO colors (name) VALUES ("Gray");
INSERT INTO colors (name) VALUES ("Green");
INSERT INTO colors (name) VALUES ("Grey");
INSERT INTO colors (name) VALUES ("Hot Pink");
INSERT INTO colors (name) VALUES ("Hot Pink/Cream");
INSERT INTO colors (name) VALUES ("Hot Pink/Purple");
INSERT INTO colors (name) VALUES ("Hot Pink/White");
INSERT INTO colors (name) VALUES ("Ivory");
INSERT INTO colors (name) VALUES ("Lavender");
INSERT INTO colors (name) VALUES ("Lavender/Blue");
INSERT INTO colors (name) VALUES ("Lavender/Green");
INSERT INTO colors (name) VALUES ("Lavender/Pink");
INSERT INTO colors (name) VALUES ("Lavender Variegated"); 
INSERT INTO colors (name) VALUES ("Lavender/White");
INSERT INTO colors (name) VALUES ("Light Pink");
INSERT INTO colors (name) VALUES ("Light Blue");
INSERT INTO colors (name) VALUES ("Light Blue/White");
INSERT INTO colors (name) VALUES ("Light Brown");
INSERT INTO colors (name) VALUES ("Light Green");
INSERT INTO colors (name) VALUES ("Light Green/Pink");
INSERT INTO colors (name) VALUES ("Light Green/White");
INSERT INTO colors (name) VALUES ("Light Lavender");
INSERT INTO colors (name) VALUES ("Light Orange");
INSERT INTO colors (name) VALUES ("Light Peach");
INSERT INTO colors (name) VALUES ("Light Pink");
INSERT INTO colors (name) VALUES ("Light Pink Blush");
INSERT INTO colors (name) VALUES ("Light Purple");
INSERT INTO colors (name) VALUES ("Light Red");
INSERT INTO colors (name) VALUES ("Light Yellow");
INSERT INTO colors (name) VALUES ("Lime Green");
INSERT INTO colors (name) VALUES ("Magenta");
INSERT INTO colors (name) VALUES ("Wine Red/Marsala");
INSERT INTO colors (name) VALUES ("Mauve");
INSERT INTO colors (name) VALUES ("Mauve/Lavender");
INSERT INTO colors (name) VALUES ("Medium Pink");
INSERT INTO colors (name) VALUES ("Mint Green");
INSERT INTO colors (name) VALUES ("Natural");
INSERT INTO colors (name) VALUES ("Natural Red");
INSERT INTO colors (name) VALUES ("Orange");
INSERT INTO colors (name) VALUES ("Orange/Pink");
INSERT INTO colors (name) VALUES ("Orange/Red");
INSERT INTO colors (name) VALUES ("Orange/White");
INSERT INTO colors (name) VALUES ("Orange/Yellow");
INSERT INTO colors (name) VALUES ("Peach");
INSERT INTO colors (name) VALUES ("Peach/Red");
INSERT INTO colors (name) VALUES ("Peppermint");
INSERT INTO colors (name) VALUES ("Periwinkle");
INSERT INTO colors (name) VALUES ("Pink");
INSERT INTO colors (name) VALUES ("Pink/Green");
INSERT INTO colors (name) VALUES ("Pink/Peach");
INSERT INTO colors (name) VALUES ("Pink/Red");
INSERT INTO colors (name) VALUES ("Pink Variegated");
INSERT INTO colors (name) VALUES ("Pink/White");
INSERT INTO colors (name) VALUES ("Pink/White Variegated"); 
INSERT INTO colors (name) VALUES ("Pink/Yellow");
INSERT INTO colors (name) VALUES ("Platinum");
INSERT INTO colors (name) VALUES ("Purple");
INSERT INTO colors (name) VALUES ("Purple Shades");
INSERT INTO colors (name) VALUES ("Purple/Brown");
INSERT INTO colors (name) VALUES ("Purple/Green");
INSERT INTO colors (name) VALUES ("Purple/Lavender");
INSERT INTO colors (name) VALUES ("Purple Variegated");
INSERT INTO colors (name) VALUES ("Raspberry");
INSERT INTO colors (name) VALUES ("Red");
INSERT INTO colors (name) VALUES ("Red/Cream");
INSERT INTO colors (name) VALUES ("Red/Gold");
INSERT INTO colors (name) VALUES ("Red/Green");
INSERT INTO colors (name) VALUES ("Red Variegated"); 
INSERT INTO colors (name) VALUES ("Red/White");
INSERT INTO colors (name) VALUES ("Red/Yellow");
INSERT INTO colors (name) VALUES ("Rose Gold");
INSERT INTO colors (name) VALUES ("Rust");
INSERT INTO colors (name) VALUES ("Salmon");
INSERT INTO colors (name) VALUES ("Salmon/Pink");
INSERT INTO colors (name) VALUES ("Silver");
INSERT INTO colors (name) VALUES ("Silver/Light Lavender");
INSERT INTO colors (name) VALUES ("Spring Green");
INSERT INTO colors (name) VALUES ("Teal");
INSERT INTO colors (name) VALUES ("Terra Peach");
INSERT INTO colors (name) VALUES ("Tinted Copper");
INSERT INTO colors (name) VALUES ("Tinted Gold");
INSERT INTO colors (name) VALUES ("Tinted Light Brown");
INSERT INTO colors (name) VALUES ("Tinted Red");
INSERT INTO colors (name) VALUES ("Turquoise");
INSERT INTO colors (name) VALUES ("Violet");
INSERT INTO colors (name) VALUES ("White");
INSERT INTO colors (name) VALUES ("White/Purple");
INSERT INTO colors (name) VALUES ("White/Black");
INSERT INTO colors (name) VALUES ("White/Burgundy");
INSERT INTO colors (name) VALUES ("White/Green");
INSERT INTO colors (name) VALUES ("White/Purple");
INSERT INTO colors (name) VALUES ("White/Yellow");
INSERT INTO colors (name) VALUES ("Yellow");
INSERT INTO colors (name) VALUES ("Yellow/Black");
INSERT INTO colors (name) VALUES ("Yellow/Pink");
INSERT INTO colors (name) VALUES ("Yellow/Purple");

INSERT INTO seasons (season, note) VALUES ("summer", " ");
INSERT INTO seasons (season, note) VALUES ("fall", " ");
INSERT INTO seasons (season, note) VALUES ("winter", " ");
INSERT INTO seasons (season, note) VALUES ("spring", " ");
INSERT INTO seasons (season, note) VALUES ("yearround", " ");

INSERT INTO flowers (name, seasonId) VALUES ("ACACIA CULTIFLORMIS", "5");


INSERT INTO flowersColors (flowerId, colorId) VALUES (1, 50 ); 
