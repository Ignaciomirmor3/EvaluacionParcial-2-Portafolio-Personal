function Header({pantallaActual, cambioPantalla}) {
    const secciones = [
        {id: "inicio", texto:"Inicio"},
        {id: "estudios", texto:"Estudios"},
        {id: "experiencia", texto: "Experiencia"},
        {id: "proyectos", texto: "Proyectos"},
        {id: "contacto", texto: "Contacto"},
    ];

    return(
        <header>
            <a href="#inicio"
            className="logo"
            onClick={(e) => {
                e.preventDefault();
                cambioPantalla("inicio");
            }}
            >
            </a>

            <nav>
                {secciones.map((seccion) =>(
                    <button key={seccion.id}
                    type="button"
                    className={
                        pantallaActual === seccion.id ? "navactual" : ""
                    }
                    onClick={() => cambioPantalla(seccion.id)}
                    >
                        {seccion.texto}
                    </button>
                ))}
            </nav>
        </header>
    );
}
export default Header;