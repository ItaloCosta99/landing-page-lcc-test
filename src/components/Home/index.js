import './style.css';
import { FaArrowCircleLeft } from 'react-icons/fa';

export default function Home() {
  return (
    <div id="home" className="hero">
      <div className="hero-text">
        <h3>Esse e-book foi preparado com as melhores dicas para realizar suas resenhas.</h3>
      </div>
      <div className="download" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <a href="/">Download</a>
        <FaArrowCircleLeft color="#00fa43" size="30" />
      </div>
    </div>
  );
}