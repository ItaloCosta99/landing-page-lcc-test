import '../style.css';
import NavLinks from '../NavLinks';
import {FiMenu} from 'react-icons/fi';
import {IoMdClose} from 'react-icons/io';
import {useState} from 'react';

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = <FiMenu 
                        className="hamburger" size='40px' color='white'
                        onClick={() => setOpen(!open)}
                        />
  const closeIcon = <IoMdClose
                    className="hamburger" size='40px' color='white'
                    onClick={() => setOpen(!open)}
                    />
  const closeMobileMenu = () => setOpen(false);
  return(
    <nav className="mobile-navigation">
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
      {open ? closeIcon : hamburgerIcon}
    </nav>
  );
}