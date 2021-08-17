export default function NavLinks(props) {
  return (
    <ul className="wrapper">
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#home">Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#about">Sobre nós</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#contact">Contato</a>
      </li>
    </ul>
  );
}