import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

function TemplatePortafolio({children, pantallaActual, cambioPantalla})
 {
    return(
        <>
            <Header
            pantallaActual={pantallaActual}
            cambioPantalla={cambioPantalla}
            />

            <main>{children}</main>

            <Footer />
        </>
    );
}

export default TemplatePortafolio;