import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('compromisos_etica_ux') || '[]');
    if (guardados.length === 0) {
      const iniciales = [
        { Id: 1, Estudiante: 'María Gómez', Compromiso: 'Me comprometo a verificar las fuentes antes de compartir información en mis redes sociales.' },
        { Id: 2, Estudiante: 'Josué López', Compromiso: 'Respetaré la privacidad de mis compañeros y no publicaré fotos sin su consentimiento.' }
      ];
      setRegistros(iniciales);
      localStorage.setItem('compromisos_etica_ux', JSON.stringify(iniciales));
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
    localStorage.setItem('compromisos_etica_ux', JSON.stringify(nuevosRegistros));

    setMensaje('¡Tu compromiso de Ética Digital ha sido registrado con éxito en el mural!');
    setNombre('');
    setCompromiso('');
    setCargando(false);
  };

  return (
    <div>
      <h2 className="titulo-seccion-moderno">Compromiso y Autoevaluación Digital</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Registra tu compromiso personal de Netiqueta y Privacidad para finalizar la sesión de aprendizaje.</p>

      <motion.form 
        onSubmit={handleSubmit}
        className="form-card-moderno"
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="form-group-moderno">
          <label>Nombre del Estudiante:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Carlos Sitamul"
            required 
          />
        </div>

        <div className="form-group-moderno">
          <label>Mi Compromiso de Ética Digital:</label>
          <textarea 
            rows="4" 
            value={compromiso} 
            onChange={(e) => setCompromiso(e.target.value)}
            placeholder="Ej. Me comprometo a navegar con responsabilidad, proteger mis datos y respetar a los demás..."
            required 
          />
        </div>

        <button type="submit" className="btn-accion-moderno" disabled={cargando}>
          {cargando ? 'Guardando en la nube...' : 'Registrar Mi Compromiso'}
        </button>

        {mensaje && (
          <p style={{ marginTop: '0.5rem', color: '#059669', fontWeight: '600', background: '#ecfdf5', padding: '0.75rem', borderRadius: '6px', border: '1px solid #a7f3d0' }}>
            {mensaje}
          </p>
        )}
      </motion.form>

      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Mural de Compromisos Registrados (Tiempo Real)</h3>
        {registros.length === 0 ? (
          <p style={{ color: '#94a3b8' }}>Aún no hay compromisos registrados.</p>
        ) : (
          <div className="grid-mural">
            {registros.map((item, index) => (
              <motion.div 
                key={item.Id || index} 
                className="card-mural"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4 style={{ color: '#1e3a8a', fontSize: '1rem', marginBottom: '0.4rem' }}>{item.Estudiante}</h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', fontStyle: 'italic' }}>"{item.Compromiso}"</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}