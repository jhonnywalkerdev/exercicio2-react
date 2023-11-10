import { Text } from "react-native";
import Estilos from "./Estilos";

export default ({min,max}) =>{
    
    const delta = max - min
    const aleatorio = parseInt(Math.random() * delta) + min

    return (
        <Text style = {Estilos.text}>Valor aleatorio é: {aleatorio}</Text>
        );
}