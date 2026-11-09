import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [respuestas, setRespuestas] = useState({
    p1: null,
    p2: null,
    p3: null,
    p4: null,
    p5: null
  });
  const [resultado, setResultado] = useState(null);

  const preguntas = [
    { id: 'p1', texto: '1. ¿Verifico la veracidad de la información antes de compartir noticias o publicaciones en mis redes sociales?' },
    { id: 'p2', texto: '2. ¿Respeto la privacidad de mis compañeros evitando subir fotos o videos de ellos sin su autorización explícita?' },
    { id: 'p3', texto: '3. ¿Utilizo un lenguaje respetuoso, empático y constructivo al interactuar en foros y chats escolares (Netiqueta)?' },
    { id: 'p4', texto: '4. ¿Comprendo que lo que publico en internet deja una huella digital permanente que puede afectar mi futuro?' },
    { id: 'p5', texto: '5. ¿Protejo mis cuentas digitales utilizando contraseñas seguras y evitando compartir mis claves de acceso?' }
  ];

  const handleOpcion = (idPregunta, valor) => {
    setRespuestas({ ...respuestas, [idPregunta]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      alert('Por favor ingresa tu nombre completo.');
      return;
    }
    // Verificar que todas estén respondidas
    const totalRespondidas = Object.values(respuestas).filter(v => v !== null).length;
    if (totalRespondidas < 5) {
      alert('Por favor responde las 5 preguntas del cuestionario.');
      return;
    }

    // Calcular aciertos (asumiendo que "Sí" es la respuesta correcta/ética)
    const aciertos = Object.values(respuestas).filter(v => v === 'Sí').length;
    
    setResultado({
      nombre,
      aciertos,
      total: 5
    });
  };

  const reiniciarCuestionario = () => {
    setNombre('');
    setRespuestas({ p1: null, p2: null, p3: null, p4: null, p5: null });
    setResultado(null);
  };

  return (
    <section className="evaluacion-section">
      <h2 className="titulo-seccion">Autoevaluación Interactiva de Ética Digital</h2>
      <p>Responde las siguientes cuestiones para medir tu nivel de conciencia y responsabilidad digital.</p>

      {!resultado ? (
        <motion.form 
          onSubmit={handleSubmit}
          className="form-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontWeight: 'bold' }}>Nombre del Estudiante:</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Carlos Sitamul"
              required 
              style={{ width: '100%', padding: '0.8rem', marginTop: '0.4rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {preguntas.map((item) => (
              <div key={item.id} className="pregunta-card" style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <p style={{ fontWeight: '600', marginBottom: '0.8rem' }}>{item.texto}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => handleOpcion(item.id, 'Sí')}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      background: respuestas[item.id] === 'Sí' ? '#10b981' : '#e2e8f0',
                      color: respuestas[item.id] === 'Sí' ? 'white' : '#334155',
                      transition: 'all 0.2s'
                    }}
                  >
                    Sí, me comprometo / Soy consciente
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpcion(item.id, 'No')}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      background: respuestas[item.id] === 'No' ? '#ef4444' : '#e2e8f0',
                      color: respuestas[item.id] === 'No' ? 'white' : '#334155',
                      transition: 'all 0.2s'
                    }}
                  >
                    No / Debo mejorar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button 
            type="submit" 
            className="btn-enviar"
            style={{ marginTop: '2rem', width: '100%', background: '#4f46e5', color: 'white', padding: '0.9rem', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
          >
            Evaluar Mis Respuestas
          </button>
        </motion.form>
      ) : (
        <motion.div 
          className="resultado-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '1rem' }}>¡Resultado de la Autoevaluación!</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Estudiante: <strong>{resultado.nombre}</strong></p>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: resultado.aciertos >= 4 ? '#10b981' : '#d97706', marginBottom: '1.5rem' }}>
            Obtuviste {resultado.aciertos} de {resultado.aciertos === 5 ? '5 respuestas con enfoque ético positivo.' : '5 respuestas.'}
          </p>

          <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'left' }}>
            {resultado.aciertos === 5 ? (
              <p>🌟 <strong>¡Excelente Ciudadanía Digital!</strong> Demuestras un alto nivel de conciencia sobre la privacidad, el respeto y la ciberseguridad. Sigue siendo un ejemplo en la red.</p>
            ) : resultado.aciertos >= 3 ? (
              <p>👍 <strong>¡Puedes hacerlo mejor!</strong> Tienes buenas bases, pero hay áreas de oportunidad en tu privacidad y manejo de huella digital. Te invitamos a revisar los casos de estudio de arriba.</p>
            ) : (
              <p>🔍 <strong>Sigue investigando más.</strong> Es importante que profundices en los conceptos de netiqueta y protección de datos personales para navegar de forma segura y responsable.</p>
            )}
          </div>

          <button 
            onClick={reiniciarCuestionario}
            style={{ background: '#06b6d4', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Intentar de Nuevo
          </button>
        </motion.div>
      )}
    </section>
  );
}