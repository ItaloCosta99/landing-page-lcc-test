import './style.css';
import Navigation from './navigation';
import MobileNavigation from './mobilenavigation';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <h1>Logo</h1>
      <Navigation />
      <MobileNavigation />
    </nav>
  );
}