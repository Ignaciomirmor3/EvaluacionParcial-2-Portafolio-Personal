function Proyectos() {
    const misproyectos = [
        {
            titulo: "Devilmay.st",
            categoria: "Programación",
            desc: "Proyecto para el examen de Fullstack I. Programa con APIs REST para una tienda de ropa",
            link: "https://github.com/Ignaciomirmor3/Proyecto-Devilmay.st"
        },

        {
            titulo:"Prueba Formativa Perros y Gatos",
            categoria:"Programación",
            desc:"Proyecto hecho para la primera evaluación parcial del curso",
            link:"https://github.com/IgnacioLobos-MC/PruebaFormativa_PerrosyGatos"
        }
    ];

    return (
        <section id="proyectos" className="proyectos">
            <h2>Proyectos Personales</h2>

            <p className="texto1proyectos"> 
                Proyectos que he realizado o en los que he participado hasta ahora.
            </p>
            
            <div className="proyectos-grid">
                {misproyectos
                .filter((proyecto) => proyecto.categoria === "Programación")
                .map((proyecto) => (
                    <article className="proyecto" key={proyecto.titulo}>
                    <span className="proyecto-categoria">
                        {proyecto.categoria}
                    </span>

                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.desc}</p>

                    <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Proyectos;