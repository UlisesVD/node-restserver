// ======================
// PUERTO
// ======================

process.env.PORT = process.env.PORT || 3000;

// ======================
// Produccion
// ======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======================
// Base datos
// ======================

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = precess.env.MONGO_URI;
}

process.env.URLDB = urlBD

