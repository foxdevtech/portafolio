import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  const misProyectos = [
    {
      title: "E-commerce App",
      description: "Una tienda online con carrito de compras y pasarela de pagos.",
      techStack: ["React", "CSS3", "Firebase"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Aplicación que consume una API de clima en tiempo real.",
      techStack: ["JavaScript", "React", "API"],
      link: "#"
    }
  ];

  return (
    <div>

      <Navbar/>

      <section id="hero">
        <Hero />
      </section>

      <section id="sobre-mi">
        <About />
      </section>
      
      <section id="proyectos" style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Mis Proyectos</h2>
        
        {/* Contenedor Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px' 
        }}>
          {misProyectos.map((proyecto, index) => (
            <ProjectCard 
              key={index}
              title={proyecto.title}
              description={proyecto.description}
              techStack={proyecto.techStack}
              link={proyecto.link}
            />
          ))}
        </div>
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;