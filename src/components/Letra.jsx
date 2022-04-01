import useLetras from "../hooks/useLetras";
import Spinner from "./Spinner";
import { useRef } from "react";

const Letra = () => {
    const {letra, cargando, busqueda} = useLetras();

    const artistaRef = useRef(busqueda.artista);
    const cancionRef = useRef(busqueda.cancion);

  return (
      cargando ? <Spinner/> : 
      
      <div className="letra">
        <h2>Has buscado por el Artista <span>{artistaRef.current}</span> con la Cancion <span>{cancionRef.current}</span></h2>
        {letra}</div>
  )
}

export default Letra