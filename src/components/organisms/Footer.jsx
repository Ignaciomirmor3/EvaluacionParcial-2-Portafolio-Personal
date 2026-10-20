function Footer() {
    const anno = new Date().getFullYear();

    return(
        <footer className="footer">
            <p>
                Hecho para examen parcial 2 por Ignacio Miranda en Vite con React
            </p>

            <p>
                {anno} , Analista Programador, Duoc UC
            </p>
            
            <div className="redessociales">
                <a href="https://github.com/Ignaciomirmor3"
                   target="_blank"
                   rel="noreferrer">
                    Cuenta de GitHub
                   </a>
            </div>
        </footer>
    );
}
export default Footer;