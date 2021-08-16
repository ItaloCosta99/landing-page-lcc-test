import './style.css';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <h1>Resenhei</h1>
      <Navigation />
      <MobileNavigation />
    </nav>
  );
}