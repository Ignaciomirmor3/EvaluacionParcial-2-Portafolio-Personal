import { useState, useRef } from "react";
import CampoDeFormulario from "../molecules/CampoDeFormulario";
import Boton from "../atoms/Boton"

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");
    const [enviado, setEnviado] = useState(false);

    const nombreRef = useRef(null);

    const manejoEnvio = (e) => {
        e.preventDefault();

        setError("");

        setEnviado(false);

        if (!nombre.trim()) {
            setError("ERROR: Debe ingresar su nombre.");
            nombreRef.current.focus();
            return;
        }

        if(!email.trim() || !mensaje.trim()) {
            setError("ERROR: Debe ingresar todos los datos necesarios.");
            return;
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("ERROR: Correo invalido. Compruebe e ingreselo nuevamente.");
            return;
        }

        setEnviado(true);
        setNombre("");
        setEmail("");
        setMensaje("");
    };

    return (
        <section id="contacto" className="contacto">
            <h2>Contacto</h2>

            <p> Si es que desea contactarse conmigo, por favor, rellene el siguiente formulario:</p>

            <form onSubmit={manejoEnvio}>
                <CampoDeFormulario
                id="nombre"
                tag="Nombre"
                valor={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa tu nombre aquí.."
                inputRef={nombreRef}
                maxLength={100}
                />

                <CampoDeFormulario
                id="email"
                tag="Correo"
                tipo="email"
                valor={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico aquí (ejemplo@mail.com)"
                />

                <CampoDeFormulario
                id="mensaje"
                tag="Mensaje"
                valor={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Ingrese su mensaje aquí..."
                multilinea={true}
                maxLength={800}
                rows={5}
                />

                <Boton type="submit">Enviar</Boton>

                {error && <p role="alert">{error}</p>}

                {enviado && (<p role="status">Formulario enviado.</p>)}
            </form>
        </section>
    );
}

export default Contacto;