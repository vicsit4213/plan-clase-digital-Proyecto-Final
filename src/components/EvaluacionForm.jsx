import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // Cargar los compromisos guardados al iniciar la aplicación
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('compromisos_etica_ux') || '[]');
    // Si no hay datos locales, ponemos unos de ejemplo educativos
    if (guardados.length === 0) {
      const iniciales = [
        { Id: 1, Estudiante: 'María Gómez', Compromiso: 'Me comprometo a verificar las fuentes antes de compartir noticias en mis redes sociales.' },
        { Id: 2, Estudiante: 'Josué López', Compromiso: 'Respetaré la privacidad de mis compañeros y no publicaré fotos sin su consentimiento.' }
      ];
      setRegistros(iniciales);
      localStorage.setItem('compromisos_etica_ux', JSON.stringify(iniciales));
    } else {
      setRegistros(guardados);
    }
  }, []);

  // CREAR Y REGISTRAR COMPROMISO
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !compromiso) return;

    setCargando(true);
    setMensaje('');

    // Creamos el nuevo registro
    const nuevoRegistro = {
      Id: Date.now(),
      Estudiante: nombre,
      Compromiso: compromiso
    };

    // Actualizamos el estado y el almacenamiento local instantáneamente
    const nuevosRegistros = [nuevoRegistro, ...registros];
    setRegistros(nuevosRegistros);
    localStorage.setItem('compromisos_etica_ux', JSON.stringify(nuevosRegistros));

    // Intento opcional en segundo plano hacia NocoDB Cloud
    try {
      await fetch('https://app.nocodb.com/api/v3/data/pb3dzykiqcnyt3h/mqbl61zxs1lggru/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': 'nc_pat_4UnN7VREMPdWecJGReEUWqjfCUODdnQ8Q7Fdm3ZT'
        },
        body: JSON.stringify({
          Estudiante: nombre,
          Compromiso: compromiso
        })
      });
    } catch (err) {
      console.log('Sincronización en segundo plano con NocoDB omitida por restricciones del navegador.');
    }

    // Mensaje de éxito y limpieza del formulario
    setMensaje('¡Tu compromiso de Ética Digital ha sido registrado con éxito en el mural!');
    setNombre('');
    setCompromiso('');
    setCargando(false);
  };

  return (
    <section className="evaluacion-section">
      <h2 className="titulo-seccion">Compromiso y Autoevaluación Digital</h2>
      <p>Registra tu compromiso de Netiqueta y Privacidad para finalizar la sesión.</p>

      <motion.form 
        onSubmit={handleSubmit}
        className="form-card"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="form-group">
          <label>Nombre del Estudiante:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Carlos Sitamul"
            required 
          />
        </div>

        <div className="form-group">
          <label>Mi Compromiso de Ética Digital:</label>
          <textarea 
            rows="4" 
            value={compromiso} 
            onChange={(e) => setCompromiso(e.target.value)}
            placeholder="Ej. Me comprometo a fomentar un trato respetuoso y seguro en internet..."
            required 
          />
        </div>

        <button type="submit" className="btn-enviar" disabled={cargando}>
          {cargando ? 'Guardando...' : 'Registrar Mi Compromiso'}
        </button>

        {mensaje && (
          <p className="mensaje-feedback" style={{ marginTop: '1rem', color: '#059669', fontWeight: 'bold', background: '#ecfdf5', padding: '0.75rem', borderRadius: '6px' }}>
            {mensaje}
          </p>
        )}
      </motion.form>

      <div className="registros-lista" style={{ marginTop: '2rem' }}>
        <h3>Mural de Compromisos Registrados (Tiempo Real)</h3>
        {registros.length === 0 ? (
          <p className="txt-vacio">Aún no hay compromisos registrados.</p>
        ) : (
          <div className="grid-registros">
            {registros.map((item, index) => (
              <motion.div 
                key={item.Id || index} 
                className="registro-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4>{item.Estudiante}</h4>
                <p>"{item.Compromiso}"</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}