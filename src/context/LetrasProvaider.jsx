import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext();

const LetrasProvaider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');
    const [cargando, setCargando] = useState(false);

    const busquedaLetra = async (busqueda) => {
        setCargando(true);
        try {
            const {artista, cancion} = busqueda;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios(url);
            setLetra(data.lyrics);
            setAlerta('')
        } catch (error) {
            setAlerta('Cancion No Encontrada')
        }
        setCargando(false);
    }

    //
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    //

    return(
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra,
                letra,
                cargando,
                busqueda,
                setBusqueda
            }}
        >
            {children}

        </LetrasContext.Provider>
    )
}

export {
    LetrasProvaider
}

export default LetrasContext;