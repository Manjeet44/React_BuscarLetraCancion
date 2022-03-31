import {useContext} from 'react';
import LetrasContext from '../context/LetrasProvaider';

const useLetras = () => {
    return useContext(LetrasContext);
}
export default useLetras;