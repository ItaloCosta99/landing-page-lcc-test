export default function NavLinks(props) {
  return (
    <ul className="wrapper">
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#home">Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#about">About Us</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
}