import { motion } from 'framer-motion';
import EvaluacionForm from './components/EvaluacionForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      
      {/* NAVBAR SUPERIOR MODERNO (Con animación inicial) */}
      <motion.header 
        className="navbar-moderno"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-brand">
          <span className="nav-logo-box">TIC</span>
          <span className="nav-title">Plan de Clase Digital</span>
        </div>
        <ul className="nav-links">
          <li><a href="#teoria">Teoría</a></li>
          <li><a href="#objetivos">Objetivos</a></li>
          <li><a href="#casos">Casos</a></li>
          <li><a href="#evaluacion">Compromiso</a></li>
        </ul>
        <a href="#evaluacion" className="nav-btn">Evaluarme</a>
      </motion.header>

      {/* HERO SECTION DE ALTO IMPACTO CON ANIMACIONES FRAMER MOTION */}
      <section className="hero-section">
        <motion.div 
          className="hero-badge"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Plan de Clase Interactivo • Nivel Medio
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ética Digital y <span>Huella en la Red</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Aprende a navegar con responsabilidad, protegiendo tu privacidad y fomentando un trato respetuoso en el entorno digital.
        </motion.p>
      </section>

      {/* MAIN CONTENT */}
      <main className="main-content">
        
        {/* SECCIÓN: MARCO TEÓRICO */}
        <motion.section 
          id="teoria" 
          className="seccion-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="titulo-seccion-moderno">Fundamentos de la Ética Digital</h2>
          <div style={{ lineHeight: '1.8', color: '#334155' }}>
            <p style={{ marginBottom: '1rem' }}>
              La <strong>Ética Digital</strong> comprende el conjunto de principios y valores que orientan nuestro comportamiento al interactuar con las Tecnologías de la Información. En el Nivel Medio, los estudiantes se enfrentan cotidianamente a escenarios virtuales donde la privacidad y la seguridad son clave.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              >
                <strong style={{ color: '#1e3a8a' }}>🔒 Privacidad:</strong> Conciencia sobre qué datos personales exponer en plataformas públicas.
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              >
                <strong style={{ color: '#1e3a8a' }}>👣 Huella Digital:</strong> Comprensión de la permanencia y alcance de nuestras publicaciones.
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              >
                <strong style={{ color: '#1e3a8a' }}>🤝 Netiqueta:</strong> Cortesía, empatía y prevención activa del ciberacoso.
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SECCIÓN: OBJETIVOS */}
        <motion.section 
          id="objetivos" 
          className="seccion-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="titulo-seccion-moderno">Objetivos de la Sesión</h2>
          <div className="grid-objetivos">
            <motion.div className="card-objetivo-item" whileHover={{ y: -5 }}>
              <div className="icono-box">🔒</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Protección de Privacidad</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Identificar qué datos personales no deben compartirse públicamente en redes sociales.</p>
            </motion.div>
            <motion.div className="card-objetivo-item" whileHover={{ y: -5 }}>
              <div className="icono-box">👣</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Huella Digital Consciente</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Comprender la permanencia y el alcance de las publicaciones en el entorno web.</p>
            </motion.div>
            <motion.div className="card-objetivo-item" whileHover={{ y: -5 }}>
              <div className="icono-box">🤝</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Netiqueta y Respeto</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Promover una convivencia digital empática y libre de ciberacoso escolar.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* SECCIÓN: CASOS PRÁCTICOS */}
        <motion.section 
          id="casos" 
          className="seccion-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="titulo-seccion-moderno">Casos Prácticos de Análisis Ético</h2>
          <div className="grid-casos">
            <motion.div className="caso-item" whileHover={{ scale: 1.01 }}>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.4rem' }}>Caso 1: El dilema de la contraseña compartida</h4>
              <p style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '0.5rem' }}>Un amigo te pide la contraseña de tu cuenta personal para ver un videojuego.</p>
              <p style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: '600' }}>💡 Consejo ético: Las credenciales son intransferibles y resguardan tu ciberseguridad.</p>
            </motion.div>
            <motion.div className="caso-item" whileHover={{ scale: 1.01 }}>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.4rem' }}>Caso 2: La fotografía sin consentimiento</h4>
              <p style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '0.5rem' }}>Tomas una foto graciosa de un compañero en clase y piensas subirla a estados públicos.</p>
              <p style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: '600' }}>💡 Consejo ético: Respeta la dignidad y el derecho a la propia imagen de los demás.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* SECCIÓN: EVALUACIÓN Y MURAL */}
        <motion.section 
          id="evaluacion" 
          className="seccion-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <EvaluacionForm />
        </motion.section>

      </main>

      {/* FOOTER MODERNO */}
      <footer className="footer-moderno">
        <p>© 2026 Plan de Clase Digital Interactivo | Asignatura: Tecnologías de la Información y Comunicación</p>
      </footer>

    </div>
  );
}

export default App;