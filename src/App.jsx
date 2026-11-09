import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('compromisos_etica_ux_v2') || '[]');
    if (guardados.length === 0) {
      const iniciales = [
        { Id: 1, Estudiante: 'Lucía Morales', Compromiso: 'Me comprometo a verificar la información antes de compartirla para evitar noticias falsas.' },
        { Id: 2, Estudiante: 'Carlos Pérez', Compromiso: 'Mantendré una convivencia respetuosa y evitaré cualquier tipo de ciberacoso.' }
      ];
      setRegistros(iniciales);
      localStorage.setItem('compromisos_etica_ux_v2', JSON.stringify(iniciales));
    } else {
      setRegistros(guardados);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !compromiso.trim()) return;

    setCargando(true);
    setMensaje('');

    const nuevoRegistro = {
      Id: Date.now(),
      Estudiante: nombre,
      Compromiso: compromiso
    };

    const nuevosRegistros = [nuevoRegistro, ...registros];
    setRegistros(nuevosRegistros);
    localStorage.setItem('compromisos_etica_ux_v2', JSON.stringify(nuevosRegistros));

    setMensaje('¡Compromiso registrado con éxito en el mural interactivo!');
    setNombre('');
    setCompromiso('');
    setCargando(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
      
      {/* NAVBAR FLOTANTE ESTILO AGENCIA */}
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.2rem 8%',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ background: '#f59e0b', color: '#0f172a', fontWeight: '900', padding: '0.4rem 0.7rem', borderRadius: '8px', fontSize: '1rem' }}>TIC</div>
          <span style={{ fontWeight: '700', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Ética Digital Studio</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: '500' }}>
          <a href="#teoria" style={{ color: '#94a3b8', textDecoration: 'none' }}>Teoría</a>
          <a href="#objetivos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Objetivos</a>
          <a href="#casos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Casos</a>
          <a href="#mural" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: '600' }}>Mural</a>
        </div>
      </motion.nav>

      {/* HERO SECTION DE IMPACTO */}
      <header style={{ textAlign: 'center', padding: '6rem 1.5rem 4rem 1.5rem', background: 'radial-gradient(circle at center, #1e293b 0%, #090d16 100%)' }}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-block', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}
        >
          Plan de Clase Interactivo • Nivel Medio
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: '900', maxWidth: '850px', margin: '0 auto 1.5rem auto', lineHeight: '1.15' }}
        >
          Navegación Responsable y <span style={{ color: '#f59e0b' }}>Huella Digital</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}
        >
          Experiencia de aprendizaje interactiva diseñada para promover la ciberseguridad, la privacidad y la netiqueta escolar.
        </motion.p>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem 5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* SECCIÓN TEORÍA */}
        <motion.section 
          id="teoria"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: '#f59e0b' }}>⚡</span> Fundamentos de la Ética Digital
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            La <strong>Ética Digital</strong> define las normas de conducta que rigen el uso de internet y las tecnologías. En el Nivel Medio, comprender este concepto es vital para proteger la identidad virtual y fomentar el respeto mutuo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#1f2937', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ color: '#f59e0b', marginBottom: '0.4rem' }}>🔒 Privacidad</h4>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Resguardo de datos personales y credenciales de acceso.</p>
            </div>
            <div style={{ background: '#1f2937', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ color: '#f59e0b', marginBottom: '0.4rem' }}>👣 Huella Digital</h4>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Conciencia sobre el rastro que dejamos al publicar en redes.</p>
            </div>
            <div style={{ background: '#1f2937', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ color: '#f59e0b', marginBottom: '0.4rem' }}>🤝 Netiqueta</h4>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Normas de cortesía y empatía en comunidades virtuales.</p>
            </div>
          </div>
        </motion.section>

        {/* SECCIÓN OBJETIVOS */}
        <motion.section 
          id="objetivos"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '20px', padding: '2.5rem' }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', color: '#f8fafc' }}>
            🎯 Objetivos de Aprendizaje
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#1f2937', padding: '1.5rem', borderRadius: '14px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#f59e0b' }}>Autoprotección</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Reconocer los riesgos asociados a la sobreexposición en internet.</p>
            </div>
            <div style={{ background: '#1f2937', padding: '1.5rem', borderRadius: '14px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#f59e0b' }}>Empatía Colectiva</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Fomentar interacciones sanas y prevenir el ciberacoso escolar.</p>
            </div>
          </div>
        </motion.section>

        {/* SECCIÓN FORMULARIO Y MURAL */}
        <motion.section 
          id="mural"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '20px', padding: '2.5rem' }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: '#f8fafc' }}>
            ✍️ Mural de Compromiso Digital
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Ingresa tus datos y plasma tu compromiso personal para sellar la sesión.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#cbd5e1' }}>Nombre del Estudiante:</label>
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Ej. Víctor Sitamul" 
                required 
                style={{ width: '100%', padding: '0.9rem 1rem', background: '#1f2937', border: '1px solid #374151', borderRadius: '10px', color: 'white', fontSize: '1rem', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#cbd5e1' }}>Mi Compromiso Ético:</label>
              <textarea 
                rows="4" 
                value={compromiso} 
                onChange={(e) => setCompromiso(e.target.value)} 
                placeholder="Ej. Me comprometo a navegar con responsabilidad y respetar la privacidad ajena..." 
                required 
                style={{ width: '100%', padding: '0.9rem 1rem', background: '#1f2937', border: '1px solid #374151', borderRadius: '10px', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
              />
            </div>
            <button 
              type="submit" 
              disabled={cargando}
              style={{ background: '#f59e0b', color: '#0f172a', fontWeight: '800', padding: '1rem', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'opacity 0.2s' }}
            >
              {cargando ? 'Guardando...' : 'Publicar en el Mural'}
            </button>
            {mensaje && (
              <p style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.75rem', borderRadius: '8px', fontWeight: '600', textAlign: 'center' }}>
                {mensaje}
              </p>
            )}
          </form>

          {/* LISTA DE REGISTROS */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#f8fafc' }}>Mural en Tiempo Real</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {registros.map((item, index) => (
                <motion.div 
                  key={item.Id || index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ background: '#1f2937', border: '1px solid #374151', padding: '1.25rem', borderRadius: '12px' }}
                >
                  <h4 style={{ color: '#f59e0b', fontSize: '1rem', marginBottom: '0.4rem' }}>{item.Estudiante}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>"{item.Compromiso}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b', borderTop: '1px solid #1f2937', fontSize: '0.9rem' }}>
        © 2026 Plan de Clase Digital Interactivo • Facultad de Humanidades
      </footer>

    </div>
  );
}