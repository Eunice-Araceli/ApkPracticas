const mongoose = require('mongoose');

// Esquema base para los pictogramas de la base de datos "palabras"
const ElementoPalabraSchema = new mongoose.Schema({
  tipo_palabra: { type: String, required: true },
  etiqueta: { type: String, required: true },
  imagen_url: { type: String, default: '' },
  audio_url: { type: String, default: '' },
  color_codigo: { type: String, default: '#CCCCCC' },
  subcategoria: { type: String, default: null }
}, { timestamps: true });

module.exports = {
  Familia: mongoose.model('Familia', ElementoPalabraSchema, 'familia'),
  Sujetos: mongoose.model('Sujetos', ElementoPalabraSchema, 'sujetos'),
  Dispositivos: mongoose.model('Dispositivos', ElementoPalabraSchema, 'dispositivos'),
  Utiles: mongoose.model('Utiles', ElementoPalabraSchema, 'utiles'),
  Transportes: mongoose.model('Transportes', ElementoPalabraSchema, 'transportes'),
  Lugares: mongoose.model('Lugares', ElementoPalabraSchema, 'lugares'),
  Emociones: mongoose.model('Emociones', ElementoPalabraSchema, 'emociones'),
  Estados: mongoose.model('Estados', ElementoPalabraSchema, 'estados'),
  Casa: mongoose.model('Casa', ElementoPalabraSchema, 'casa')
};





