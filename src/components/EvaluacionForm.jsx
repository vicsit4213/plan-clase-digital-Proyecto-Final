import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // ENDPOINT Y TOKEN CORREGIDOS PARA NOCODB
  // Usamos la API v1 de datos que es la más estable para inserciones directas
  const API_URL = 'https://app.nocodb.com/api/v1/db/data/v1/pb3dzykiqcnyt3h/compromisos_etica';
  const API_TOKEN = 'nc_pat_4UnN7VREMPdWecJGReEUWqjfCUODdnQ8Q7Fdm3ZT';

  // LEER REGISTROS (READ)
  const obtenerRegistros = async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'xc-token': API_TOKEN,
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
        setRegistros(data.list || []);
      }
    } catch (err) {
      console.error('Error al obtener datos de NocoDB:', err);
    }
  };

  useEffect(() => {
    obtenerRegistros();
  }, []);

  // CREAR REGISTRO (CREATE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !compromiso) return;

    setCargando(true);
    setMensaje('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': API_TOKEN
        },
        body: JSON.stringify({
          Estudiante: nombre,
          Compromiso: compromiso
        })
      });

      if (res.ok) {
        setMensaje('¡Tu compromiso de Ética Digital ha sido registrado con éxito!');
        setNombre('');
        setCompromiso('');
        obtenerRegistros(); // Recargar el mural en tiempo real
      } else {
        const errorData = await res.json();
        console.error('Detalle del error NocoDB:', errorData);
        setMensaje('Ocurrió un error al guardar tu respuesta. Revisa la consola.');
      }
    } catch (err) {
      console.error('Error de conexión:', err);
      setMensaje('Error de conexión con la base de datos.');
    } finally {
      setCargando(false);
    }
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
            placeholder="Ej. Carlos Pérez"
            required 
          />
        </div>

        <div className="form-group">
          <label>Mi Compromiso de Ética Digital:</label>
          <textarea 
            rows="4" 
            value={compromiso} 
            onChange={(e) => setCompromiso(e.target.value)}
            placeholder="Ej. Me comprometo a no compartir información personal de terceros sin consentimiento..."
            required 
          />
        </div>

        <button type="submit" className="btn-enviar" disabled={cargando}>
          {cargando ? 'Guardando en la nube...' : 'Registrar Mi Compromiso'}
        </button>

        {mensaje && <p className="mensaje-feedback">{mensaje}</p>}
      </motion.form>

      <div className="registros-lista" style={{ marginTop: '2rem' }}>
        <h3>Mural de Compromisos Registrados (Tiempo Real)</h3>
        {registros.length === 0 ? (
          <p className="txt-vacio">Aún no hay compromisos registrados.</p>
        ) : (
          <div className="grid-registros">
            {registros.map((item, index) => (
              <motion.div 
                key={item.Id || item.id || index} 
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