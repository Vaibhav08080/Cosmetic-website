import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = {
  // Body Care Images
  'body-lotion.jpg': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b',
  'body-scrub.jpg': 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53',
  'body-oil.jpg': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b',
  'bath.jpg': 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
  'coconut-butter.jpg': 'https://images.unsplash.com/photo-1626715185005-0666dd11a84a',
  'rose-scrub.jpg': 'https://images.unsplash.com/photo-1599305090598-fe179d501227',
  'bath-salts.jpg': 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e',
  
  // Collections Images
  'summer-collection.jpg': 'https://images.unsplash.com/photo-1526947425960-945c6e72858f',
  'natural-collection.jpg': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
  'spa-collection.jpg': 'https://images.unsplash.com/photo-1570194065650-d99fb4b8f5b1',
  'kbeauty-collection.jpg': 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796',
  'spring-collection.jpg': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
  
  // Favorites Images
  'facial-roller.jpg': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9',
  'vitamin-c.jpg': 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
  'face-mist.jpg': 'https://images.unsplash.com/photo-1595521624992-48a59aef95e3',
  'cleanser.jpg': 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb',
  'gua-sha.jpg': 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53'
};

const downloadImage = (url, filename) => {
  const imagePath = path.join(__dirname, '../public/images', filename);
  const file = fs.createWriteStream(imagePath);
  
  https.get(`${url}?auto=format&fit=crop&w=800&q=80`, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(imagePath);
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download all images
Object.entries(images).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 