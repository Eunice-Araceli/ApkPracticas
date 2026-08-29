
const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({
  nombre_nino: { type: String, required: true },
  edad: { type: Number },
  avatar_elegido: { type: String },
  color_favorito: { type: String },
  emocion_inicial: { type: String },
  email_tutor: { type: String, required: true },
  nombre_tutor: { type: String },
  configuracion_accesibilidad: {
    lectura_audio_automatica: { type: Boolean, default: true },
    velocidad_audio: { type: String, default: 'normal' },
    mostrar_pictogramas: { type: Boolean, default: true },
    tamano_letra: { type: String, default: 'mediana' }
  },
  nivel_actual: { type: Number, default: 1 },
  estrellas_totales: { type: Number, default: 0 },
  fecha_registro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuarios');


const mongoose = require('mongoose');

const ComunicacionSchema = new mongoose.Schema({
  categoria: { type: String, required: true },
  tipo_palabra: { type: String },
  etiqueta: { type: String, required: true },
  imagen_url: { type: String },
  audio_url: { type: String },
  color_codigo: { type: String },
  subcategoria: { type: String }
});

module.exports = mongoose.model('Comunicacion', ComunicacionSchema, 'comunicacion');



const mongoose = require('mongoose');

const PaginaSchema = new mongoose.Schema({
  numero_pagina: { type: Number, required: true },
  texto: { type: String, required: true },
  imagen_url: { type: String },
  audio_pagina_url: { type: String },
  pictograma_url: { type: String }
}, { _id: false });

const CuentoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  categorias: [{ type: String }],
  nivel_dificultad: { type: String },
  estado: { type: String, default: 'activo' },
  paginas: [PaginaSchema]
});

module.exports = mongoose.model('Cuento', CuentoSchema, 'cuentos');


const mongoose = require('mongoose');

const PictogramaSecuenciaSchema = new mongoose.Schema({
  etiqueta: { type: String, required: true },
  imagen_url: { type: String },
  audio_url: { type: String }
}, { _id: false });

const FavoritoSchema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  texto_completo: { type: String, required: true },
  fecha_guardado: { type: Date, default: Date.now },
  secuencia_pictogramas: [PictogramaSecuenciaSchema]
});

module.exports = mongoose.model('Favorito', FavoritoSchema, 'favoritos');


const mongoose = require('mongoose');

const LogroSchema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  codigo_logro: { type: String, required: true },
  nombre_logro: { type: String, required: true },
  descripcion: { type: String },
  imagen_medalla_url: { type: String },
  fecha_desbloqueo: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Logro', LogroSchema, 'logros');


const mongoose = require('mongoose');

const DetallePreguntaSchema = new mongoose.Schema({
  pagina: { type: Number },
  pregunta: { type: String },
  respuesta_correcta: { type: String },
  respuesta_usuario: { type: String },
  acerto_primer_intento: { type: Boolean }
}, { _id: false });

const ProgresoActividadSchema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  cuento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuento' },
  titulo_cuento: { type: String },
  fecha_sesion: { type: Date, default: Date.now },
  duracion_minutos: { type: Number },
  porcentaje_completado: { type: Number },
  paginas_leidas: { type: Number },
  total_paginas: { type: Number },
  preguntas_correctas: { type: Number },
  total_preguntas: { type: Number },
  intentos_totales: { type: Number },
  estrellas_obtenidas: { type: Number },
  metricas_aprendizaje: {
    nivel_atencion: { type: String },
    apoyo_audio_usado: { type: Boolean },
    apoyo_pictogramas_usado: { type: Boolean },
    palabras_reforzadas: [{ type: String }]
  },
  detalle_preguntas: [DetallePreguntaSchema]
});

module.exports = mongoose.model('ProgresoActividad', ProgresoActividadSchema, 'progreso_actividades');


const mongoose = require('mongoose');

const PasoPictogramaSchema = new mongoose.Schema({
  orden: { type: Number, required: true },
  pictograma_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Comunicacion' },
  instruccion: { type: String, required: true }
}, { _id: false });

const RutinaSchema = new mongoose.Schema({
  cuento_relacionado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuento' },
  titulo_rutina: { type: String, required: true },
  categoria: { type: String },
  descripcion: { type: String },
  estado: { type: String, default: 'activa' },
  horario_sugerido: { type: String },
  dias_semana: [{ type: String }],
  pasos_pictogramas: [PasoPictogramaSchema],
  recompensa: {
    tipo: { type: String },
    descripcion: { type: String }
  }
});

module.exports = mongoose.model('Rutina', RutinaSchema, 'rutinas');





