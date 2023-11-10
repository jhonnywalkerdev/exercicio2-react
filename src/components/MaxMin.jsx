import { Text } from "react-native";
import Estilos from "./Estilos";

export default ({x, y}) => {
    
let msg;
    
    if (x == y){
        msg = `Valor ${x} e ${y} são iguais`
    }else if (x > y){
        msg = `Valor ${x} é MAIOR que o valor ${y}`
    }else{
        msg = `Valor ${y} é MAIOR que o valor ${x}`
    }

    return <Text style = {Estilos.text}>{msg}</Text>;
}
