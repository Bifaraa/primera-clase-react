import BodyProps from "./BodyProps.interface";

function Body (props: BodyProps) {

    const handleClick = () => {
        props.setSiguiendo(props.sigiendo === 'true' ? 'false' : 'true');
    }

    return (
        <section className="card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quod quidem quaerat mollitia exercitationem, consequatur aliquid nisi incidunt quas eius voluptas nam debitis, aut saepe minus sapiente molestias quasi consectetur.
          </p>
          <button onClick={handleClick}>Seguir</button>
        </section>
    );
}

export default Body;