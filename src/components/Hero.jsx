import './Hero.css';
import TrueGlitch from './TrueGlitch';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hola, soy <TrueGlitch text="Julio Cesár Hernández Durán" /></h1>
        <p>Desarrollador Web Frontend apasionado por crear experiencias digitales únicas.</p>
        <button className="btn-primary">Ver mis proyectos</button>
      </div>
    </section>
  );
};

export default Hero;