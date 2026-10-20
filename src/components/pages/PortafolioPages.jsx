import SeccionPersonal from "../organisms/SeccionPersonal"
import Estudios from "../organisms/Estudios"
import ExperienciaLaboral from "../organisms/ExperienciaLaboral"
import Proyectos from "../organisms/Proyectos"
import Contacto from "../organisms/Contacto"

function PortafolioPages( {pantallaActual, cambioPantalla} ) {
    switch(pantallaActual) {
        case "inicio":
            return<SeccionPersonal cambioPantalla={cambioPantalla} />;

        case "estudios":
            return <Estudios/>;
        
        case "experiencia":
            return <ExperienciaLaboral/>;

        case "proyectos":
            return <Proyectos/>;
        
        case "contacto":
            return <Contacto/>;
        
        default:
            return <SeccionPersonal cambioPantalla={cambioPantalla} />;
    }
}

export default PortafolioPages;