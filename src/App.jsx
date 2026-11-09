import HeaderClase from './components/HeaderClase';
import ObjetivoCard from './components/ObjetivoCard';
import ActividadItem from './components/ActividadItem';
import EvaluacionForm from './components/EvaluacionForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* HEADER SEMÁNTICO */}
      <HeaderClase />

      {/* MAIN SEMÁNTICO */}
      <main className="main-content">
        
        {/* SECCIÓN 1: OBJETIVOS */}
        <section className="seccion-bloque">
          <h2 className="titulo-seccion">Objetivos de la Sesión</h2>
          <div className="flex-grid">
            <ObjetivoCard 
              icono="🔒" 
              titulo="Protección de Privacidad" 
              descripcion="Identificar qué datos personales no deben compartirse públicamente en redes sociales." 
            />
            <ObjetivoCard 
              icono="👣" 
              titulo="Huella Digital Consciente" 
              descripcion="Comprender la permanencia y el alcance de las publicaciones en el entorno web." 
            />
            <ObjetivoCard 
              icono="🤝" 
              titulo="Netiqueta y Respeto" 
              descripcion="Promover una convivencia digital empática y libre de ciberacoso." 
            />
          </div>
        </section>

        {/* SECCIÓN 2: ACTIVIDADES / CASOS */}
        <section className="seccion-bloque">
          <h2 className="titulo-seccion">Casos Prácticos de Ética Digital</h2>
          <div className="flex-column">
            <ActividadItem 
              numero="1"
              titulo="El dilema de la contraseña compartida"
              descripcion="Un amigo de tu confianza te pide la contraseña de tu cuenta para ver un juego."
              consejo="Las credenciales de acceso son privadas e intransferibles. Compartirlas vulnera tu ciberseguridad y expone tus datos personales."
            />
            <ActividadItem 
              numero="2"
              titulo="La foto sin consentimiento"
              descripcion="Tomas una foto graciosa de un compañero en clase y piensas subirla a redes sociales."
              consejo="Respeta la privacidad y dignidad de los demás. Publicar contenido de terceros sin su autorización constituye una falta a la netiqueta."
            />
          </div>
        </section>

        {/* SECCIÓN 3: EVALUACIÓN Y NOCODB */}
        <EvaluacionForm />

      </main>

      {/* FOOTER SEMÁNTICO */}
      <footer className="footer-container">
        <p>© 2026 Plan de Clase Digital Interactivo | Asignatura: Tecnologías de la Información y Comunicación</p>
      </footer>
    </div>
  );
}

export default App;