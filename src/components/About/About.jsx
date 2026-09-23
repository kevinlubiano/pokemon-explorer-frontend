import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">Acerca del autor</h2>
      <p className="about__text">
        Hola, soy Kevin. Creé esta Pokédex como proyecto final para poner en
        práctica React y el consumo de APIs externas usando la PokeAPI.
      </p>
    </section>
  );
}

export default About;
