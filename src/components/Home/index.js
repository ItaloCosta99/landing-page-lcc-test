import './style.css';
import {FaArrowCircleRight} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="hero">
      <div>
        <a href="/">Download</a>
        <FaArrowCircleRight color="#00fa43" size="30"/>
      </div>
    </div>
  );
}