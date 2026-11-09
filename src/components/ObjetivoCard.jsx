import { motion } from 'framer-motion';

export default function ObjetivoCard({ titulo, descripcion, icono }) {
  return (
    <motion.div 
      className="objetivo-card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="icon-container">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </motion.div>
  );
}