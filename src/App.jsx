import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Aplicamos el atributo al body para que el CSS cambie
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const misProyectos = [
    {
      title: "E-commerce App",
      description: "Una tienda online con carrito de compras y pasarela de pagos.",
      techStack: ["React", "CSS3", "Firebase"],
      link: "#"
    },
    {
      title: "Delivery App",
      description: "Aplicación fullstack para pequeños y grandes negocios para ofrecer servicio de delivery a los clientes con seguiminento gps real.",
      techStack: ["JavaScript", "NodeJS", "Flutter", "API"],
      link: "#"
    },

    {
      title: "Citas Medicas",
      description: "Aplicación que para consultorios medicos, donde los clientes pueden reserver citas con el meedico de su preferencia.",
      techStack: ["JavaScript", "Laravel", "MySql", "API"],
      link: "#"
    }
  ];

  return (
    <div>

      <Navbar toggleTheme={toggleTheme} theme={theme} />

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