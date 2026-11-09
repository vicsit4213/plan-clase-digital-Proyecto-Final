import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Fingerprint, 
  HeartHandshake, 
  Lock, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  XCircle, 
  Award,
  Sparkles
} from 'lucide-react';

export default function EticaDigitalApp() {
  // Estado para los casos prácticos (desplegar/ocultar análisis)
  const [showCase1, setShowCase1] = useState(false);
  const [showCase2, setShowCase2] = useState(false);

  // Estado para la autoevaluación
  const [studentName, setStudentName] = useState('');
  const [answers, setAnswers] = useState({});
  const [evaluated, setEvaluated] = useState(false);

  const questions = [
    { id: 1, text: '¿Verifico la veracidad de la información antes de compartir noticias o publicaciones en mis redes sociales?' },
    { id: 2, text: '¿Respeto la privacidad de mis compañeros evitando subir fotos o videos de ellos sin su autorización explícita?' },
    { id: 3, text: '¿Utilizo un lenguaje respetuoso, empático y constructivo al interactuar en foros y chats escolares (Netiqueta)?' },
    { id: 4, text: '¿Comprendo que lo que publico en internet deja una huella digital permanente que puede afectar mi futuro?' },
    { id: 5, text: '¿Protejo mis cuentas digitales utilizando contraseñas seguras y evitando compartir mis claves de acceso?' }
  ];

  const handleSelectOption = (qId, val) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
    if (evaluated) setEvaluated(false); // Resetea si vuelve a cambiar
  };

  const calculateScore = () => {
    return Object.values(answers).filter(val => val === 'yes').length;
  };

  // Variantes de animación para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 py-20 px-4 text-center">
        {/* Efecto de fondo animado/resplandor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" /> Plan de Clase Digital Interactivo
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Ética Digital y Huella en la Red
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Aprende a navegar con responsabilidad, privacidad y respeto en el entorno digital.
          </p>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-12 space-y-16">

        {/* 2. FUNDAMENTOS DE LA ÉTICA DIGITAL */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-xl"
        >
          <div className="border-b border-slate-800 pb-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center">
              Fundamentos de la Ética Digital en el Nivel Medio
            </h2>
          </div>

          <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            La <strong className="text-blue-400">Ética Digital</strong> comprende el conjunto de principios, normas y valores que orientan nuestro comportamiento al interactuar con las Tecnologías de la Información y la Comunicación (TIC). En la actualidad, los estudiantes de Nivel Medio (Ciclo Básico y Bachillerato) se enfrentan cotidianamente a escenarios virtuales donde la delgada línea entre lo público y lo privado puede comprometer su integridad y seguridad.
          </p>

          <h3 className="text-center text-lg font-semibold text-blue-400 uppercase tracking-wider mb-6">
            Pilares Fundamentales
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants} className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <span className="font-semibold text-blue-300">• Privacidad y Datos Personales:</span> Conciencia sobre qué información compartir y los riesgos de exponer datos sensibles en plataformas públicas.
            </motion.div>
            <motion.div variants={itemVariants} className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <span className="font-semibold text-blue-300">• Huella Digital:</span> Comprensión de que cada registro, comentario o fotografía publicada en la web es persistente y forma una reputación digital a largo plazo.
            </motion.div>
            <motion.div variants={itemVariants} className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <span className="font-semibold text-blue-300">• Netiqueta:</span> Práctica de normas de cortesía, respeto mutuo y empatía para prevenir el ciberacoso (cyberbullying).
            </motion.div>
            <motion.div variants={itemVariants} className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <span className="font-semibold text-blue-300">• Propiedad Intelectual:</span> Reconocimiento y citación adecuada de los contenidos creados por terceros en el entorno digital.
            </motion.div>
          </div>
        </motion.section>

        {/* 3. OBJETIVOS DE APRENDIZAJE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center border-b border-slate-800 pb-4">
            Objetivos de Aprendizaje
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-slate-900 to-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-4 hover:border-blue-500/50 shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Protección de Privacidad</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Identificar qué datos personales no deben compartirse públicamente en redes sociales.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-slate-900 to-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-4 hover:border-blue-500/50 shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Fingerprint className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Huella Digital Consciente</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Comprender la permanencia y el alcance de las publicaciones en el entorno web.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-slate-900 to-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-4 hover:border-blue-500/50 shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Netiqueta y Respeto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Promover una convivencia digital empática y libre de ciberacoso.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 4. CASOS PRÁCTICOS DE ANÁLISIS ÉTICO */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center border-b border-slate-800 pb-4">
            Casos Prácticos de Análisis Ético
          </h2>

          <div className="space-y-6">
            {/* Caso 1 */}
            <motion.div variants={itemVariants} className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="text-center space-y-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider">Caso #1</span>
                <h3 className="text-xl font-bold text-slate-100">El dilema de la contraseña compartida</h3>
                <p className="text-slate-300">Un amigo de tu confianza te pide la contraseña de tu cuenta personal para ver un videojuego o red social.</p>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => setShowCase1(!showCase1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-blue-600/30 active:scale-95"
                >
                  {showCase1 ? 'Ocultar Análisis Ético' : 'Ver Análisis Ético'}
                  {showCase1 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              <AnimatePresence>
                {showCase1 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-5 rounded-xl bg-emerald-950/40 border-l-4 border-emerald-500 text-emerald-200">
                      <strong>Reflexión:</strong> Las credenciales de acceso son privadas e intransferibles. Compartirlas vulnera tu ciberseguridad y te hace responsable civil y éticamente de cualquier acción realizada bajo tu cuenta.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Caso 2 */}
            <motion.div variants={itemVariants} className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="text-center space-y-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider">Caso #2</span>
                <h3 className="text-xl font-bold text-slate-100">La fotografía sin consentimiento</h3>
                <p className="text-slate-300">Tomas una foto en el aula donde un compañero aparece en una situación graciosa y piensas publicarla en tus estados públicos.</p>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => setShowCase2(!showCase2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-blue-600/30 active:scale-95"
                >
                  {showCase2 ? 'Ocultar Análisis Ético' : 'Ver Análisis Ético'}
                  {showCase2 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              <AnimatePresence>
                {showCase2 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-5 rounded-xl bg-emerald-950/40 border-l-4 border-emerald-500 text-emerald-200">
                      <strong>Reflexión:</strong> Respeta la dignidad y el derecho a la propia imagen de los demás. Publicar contenido de terceros sin autorización explícita vulnera las normas básicas de netiqueta escolar.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* 5. AUTOEVALUACIÓN INTERACTIVA */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-slate-900/90 rounded-2xl p-8 border border-slate-800 space-y-8 shadow-2xl"
        >
          <div className="text-center space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
              Autoevaluación Interactiva de Ética Digital
            </h2>
            <p className="text-slate-400">Responde las siguientes cuestiones para medir tu nivel de conciencia y responsabilidad digital.</p>
          </div>

          {/* Campo Nombre */}
          <div className="max-w-md mx-auto space-y-2">
            <label className="block text-sm font-semibold text-slate-300 text-center">Nombre del Estudiante:</label>
            <input 
              type="text"
              placeholder="Ej. Carlos Sitamul"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-center font-medium"
            />
          </div>

          {/* Lista de Preguntas */}
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="bg-slate-950/70 p-6 rounded-xl border border-slate-800/90 space-y-4">
                <p className="font-semibold text-slate-200 text-center md:text-left">
                  {q.id}. {q.text}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSelectOption(q.id, 'yes')}
                    className={`py-3 px-4 rounded-xl border font-medium transition-all text-sm flex items-center justify-center gap-2 ${
                      answers[q.id] === 'yes'
                        ? 'bg-blue-600/30 border-blue-500 text-blue-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" /> Sí, me comprometo / Soy consciente
                  </button>

                  <button
                    onClick={() => handleSelectOption(q.id, 'no')}
                    className={`py-3 px-4 rounded-xl border font-medium transition-all text-sm flex items-center justify-center gap-2 ${
                      answers[q.id] === 'no'
                        ? 'bg-rose-600/20 border-rose-500 text-rose-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <XCircle className="w-4 h-4" /> No / Debo mejorar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de Evaluación */}
          <div className="text-center pt-4">
            <button
              onClick={() => setEvaluated(true)}
              disabled={Object.keys(answers).length < questions.length}
              className={`px-8 py-3.5 rounded-xl font-bold text-white transition-all shadow-lg ${
                Object.keys(answers).length === questions.length
                  ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30 cursor-pointer active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              Evaluar Mis Respuestas
            </button>
          </div>

          {/* Resultado Animado */}
          <AnimatePresence>
            {evaluated && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-6 rounded-xl bg-blue-950/40 border border-blue-500/30 text-center space-y-2 max-w-xl mx-auto"
              >
                <div className="flex justify-center text-blue-400">
                  <Award className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-100">
                  ¡Evaluación Completada{studentName ? `, ${studentName}` : ''}!
                </h4>
                <p className="text-slate-300">
                  Obtuviste <strong className="text-blue-400">{calculateScore()} de 5</strong> compromisos de ética digital activos.
                </p>
                <p className="text-slate-400 text-xs mt-2">
                  {calculateScore() === 5 
                    ? '¡Excelente! Demuestras una alta responsabilidad en el entorno digital.' 
                    : 'Vas por buen camino. Revisa los puntos pendientes para seguir protegiendo tu huella digital.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-800/80 py-8 text-center text-slate-500 text-sm">
        <p>Plan de Clase Digital • Nivel Medio</p>
      </footer>

    </div>
  );
}