import miavatar from "../../assets/legrandchat.jpg"

function SeccionPersonal() {
    return (
        <section id="inicio" className ="personal">
            <div className="introduccion">
                <h1 className="intro"> ¿Quien soy? </h1>

                <h2>Soy Ignacio Miranda, estudiante Analista Programador</h2>

                <p className="descripcionprof">
                    Estudio la carrera Analista Programador en el IP Duoc UC.
                    Actualmente estoy cursando el 4to semestre. Me interesa bastante
                    la programación, los videojuegos, el arte y la música.
                    Una de mis metas a futuro es poder desarrollar o diseñar mi propia
                    serie de videojuegos.
                </p>
            </div>

            <img src={miavatar}
            alt="Mi avatar (mi gato)!"
            className="miavatar"
            />
        </section>
    );
}

export default SeccionPersonal;