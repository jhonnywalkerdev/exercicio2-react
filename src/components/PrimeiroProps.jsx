
import { Text } from 'react-native'
import Estilos from './Estilos'

const PrimeiroProps = (props) => {

    const texto = props.number >= 10 ? "Numero Grande!" : "Numero Pequeno!"
    return (
        
            <Text style = {Estilos.text}>
                {texto}
            </Text>
            
        
        
  )
}

export default PrimeiroProps