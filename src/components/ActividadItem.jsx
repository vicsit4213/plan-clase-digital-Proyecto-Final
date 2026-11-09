import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ActividadItem({ numero, titulo, descripcion, consejo }) {
  const [revelado, setRevelado] = useState(false);

  return (
    <motion.article 
      className="actividad-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="actividad-header">
        <span className="paso-num">Caso #{numero}</span>
        <h3>{titulo}</h3>
      </div>
      <p>{descripcion}</p>
      
      <button 
        className="btn-revelar"
        onClick={() => setRevelado(!revelado)}
      >
        {revelado ? 'Ocultar Análisis Ético' : 'Ver Análisis Ético'}
      </button>

      <AnimatePresence>
        {revelado && (
          <motion.div 
            className="consejo-box"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p><strong>Reflexión:</strong> {consejo}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}