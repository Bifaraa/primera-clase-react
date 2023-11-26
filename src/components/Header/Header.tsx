import HeaderProps from "./Header.interface"

function Header (props: HeaderProps) {

  return (
    <header className="header">
      <h2 className="header__title">{props.nombre}</h2>
      <span className="header__siguiendo">{props.siguiendo}</span>
    </header>
  )
}

export default Header