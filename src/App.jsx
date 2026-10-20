import { useEffect, useState } from 'react';
import TemplatePortafolio from './components/templates/TemplatePortafolio';
import './App.css';
import PortafolioPages from './components/pages/PortafolioPages';

function App() {
  const [pantallaActual, setPantallaActual] = useState("inicio");

  useEffect(() => {
    document.title = "Portafolio Ignacio Miranda";
  }, []);

  const cambioPantalla = (pantalla) => {
    setPantallaActual(pantalla);
  };

  return (
    <TemplatePortafolio
      pantallaActual={pantallaActual}
      cambioPantalla={cambioPantalla}
    >
      <PortafolioPages pantallaActual={pantallaActual} cambioPantalla={cambioPantalla} />
    </TemplatePortafolio>
  );
}

export default App;
