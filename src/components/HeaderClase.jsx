import { motion } from 'framer-motion';

export default function HeaderClase() {
  return (
    <header className="header-container">
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <span className="badge">Plan de Clase Digital Interactivo</span>
        <h1>Ética Digital y Huella en la Red</h1>
        <p>Aprende a navegar con responsabilidad, privacidad y respeto en el entorno digital.</p>
      </motion.div>
    </header>
  );
}