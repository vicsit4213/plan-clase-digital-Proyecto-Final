import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [compromiso, setCompromiso] = useState('');
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // ENDPOINT Y TOKEN CORREGIDOS PARA API V3 DE NOCODB
  const API_URL = 'https://app.nocodb.com/api/v3/data/pb3dzykiqcnyt3h/mqbl61zxs1lggru/records';
  const API_TOKEN = 'nc_pat_4UnN7VREMPdWecJGReEUWqjfCUODdnQ8Q7Fdm3ZT';

  // 1. LEER REGISTROS (READ)
  const obtenerRegistros = async () => {
    try {
      const res = await fetch(`${API_URL}?pageSize=25`, {
        method: 'GET',
        headers: {
          'xc-token': API_TOKEN,
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
        // NocoDB v3 devuelve un array directo o un objeto con list/records
        const lista = Array.isArray(data) ? data : (data.list || data.records || []);
        setRegistros(lista);
      }
    } catch (err) {
      console.error('Error al consultar NocoDB:', err);
    }
  };

  useEffect(() => {
    obtenerRegistros();
  }, []);

  // 2. CREAR REGISTRO (CREATE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !compromiso) return;

    setCargando(true);
    setMensaje('');

    // Estructura compatible con ambas versiones de NocoDB Cloud
    const payload = {
      Estudiante: nombre,
      Compromiso: compromiso
    };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': API_TOKEN
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMensaje('¡Tu compromiso de Ética Digital ha sido registrado con éxito!');
        setNombre('');
        setCompromiso('');
        obtenerRegistros(); // Recarga el mural de inmediato
      } else {
        // Si no funciona, intentamos enviarlo envuelto en { data: payload }
        const resV3 = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xc-token': API_TOKEN
          },
          body: JSON.stringify({ data: payload })
        });

        if (resV3.ok) {
          setMensaje('¡Tu compromiso de Ética Digital ha sido registrado con éxito!');
          setNombre('');
          setCompromiso('');
          obtenerRegistros();
        } else {
          setMensaje('Error al guardar. Verifica la conexión con NocoDB.');
        }
      }
    } catch (err) {
      console.error('Error de red:', err);
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
            placeholder="Ej. Me comprometo a no compartir información personal sin consentimiento..."
            required 
          />
        </div>

        <button type="submit" className="btn-enviar" disabled={cargando}>
          {cargando ? 'Guardando en la nube...' : 'Registrar Mi Compromiso'}
        </button>

        {mensaje && (
          <p className="mensaje-feedback" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
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
                key={item.Id || item.id || index} 
                className="registro-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4>{item.Estudiante || item.data?.Estudiante}</h4>
                <p>"{item.Compromiso || item.data?.Compromiso}"</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}