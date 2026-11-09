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
        
        {/* SECCIÓN NUEVA: MARCO TEÓRICO AMPLIADO SOBRE ÉTICA DIGITAL */}
        <section className="seccion-bloque">
          <h2 className="titulo-seccion">Fundamentos de la Ética Digital en el Nivel Medio</h2>
          <div className="card-teoria" style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', lineHeight: '1.7' }}>
            <p>
              La <strong>Ética Digital</strong> comprende el conjunto de principios, normas y valores que orientan nuestro comportamiento al interactuar con las Tecnologías de la Información y la Comunicación (TIC). En la actualidad, los estudiantes de Nivel Medio (Ciclo Básico y Bachillerato) se enfrentan cotidianamente a escenarios virtuales donde la delgada línea entre lo público y lo privado puede comprometer su integridad y seguridad.
            </p>
            <h3 style={{ color: '#4f46e5', marginTop: '1.2rem', fontSize: '1.2rem' }}>Pilares Fundamentales:</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <li><strong>Privacidad y Datos Personales:</strong> Conciencia sobre qué información compartir y los riesgos de exponer datos sensibles en plataformas públicas.</li>
              <li><strong>Huella Digital:</strong> Comprensión de que cada registro, comentario o fotografía publicada en la web es persistente y forma una reputación digital a largo plazo.</li>
              <li><strong>Netiqueta:</strong> Práctica de normas de cortesía, respeto mutuo y empatía para prevenir el ciberacoso (cyberbullying).</li>
              <li><strong>Propiedad Intelectual:</strong> Reconocimiento y citación adecuada de los contenidos creados por terceros en el entorno digital.</li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN 1: OBJETIVOS */}
        <section className="seccion-bloque">
          <h2 className="titulo-seccion">Objetivos de Aprendizaje</h2>
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
          <h2 className="titulo-seccion">Casos Prácticos de Análisis Ético</h2>
          <div className="flex-column">
            <ActividadItem 
              numero="1"
              titulo="El dilema de la contraseña compartida"
              descripcion="Un amigo de tu confianza te pide la contraseña de tu cuenta personal para ver un videojuego o red social."
              consejo="Las credenciales de acceso son privadas e intransferibles. Compartirlas vulnera tu ciberseguridad y te hace responsable civil y éticamente de cualquier acción realizada bajo tu cuenta."
            />
            <ActividadItem 
              numero="2"
              titulo="La fotografía sin consentimiento"
              descripcion="Tomas una foto en el aula donde un compañero aparece en una situación graciosa y piensas publicarla en tus estados públicos."
              consejo="Respeta la dignidad y el derecho a la propia imagen de los demás. Publicar contenido de terceros sin autorización explícita vulnera las normas básicas de netiqueta escolar."
            />
          </div>
        </section>

        {/* SECCIÓN 3: EVALUACIÓN / CUESTIONARIO INTERACTIVO */}
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