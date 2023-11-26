import Body from "../Body/Body";
import Header from "../Header/Header";
import CardProps from "./Card.interface";

function Card (props: CardProps) {
  return (
    <>
      <Header nombre={props.name} siguiendo={props.sigiendo} />
      <Body setSiguiendo={props.setSiguiendo} sigiendo={props.sigiendo}/>
    </>
  )
}

export default Card;