import Primeiro from "./src/components/Primeiro";
import PrimeiroProps from "./src/components/PrimeiroProps";
import { View } from "react-native";
import Estilos from "./src/components/Estilos";
import { Group1, Group2 } from "./src/components/Multi";
import Aleatorio from "./src/components/Aleatorio";
import MaxMin from "./src/components/MaxMin";
import Botao from "./src/components/Botao";
import Contador from "./src/components/Contador";

export default function App() {
  return (

      <View style = {Estilos.view}>
        {/*<Aleatorio min={7} max = {99}/>
        <Aleatorio min={7} max = {99}/>
        <Aleatorio min={7} max = {99}/>
        <Primeiro/>
        <PrimeiroProps/>
        <Group1/>
        <Group2/>
        <MaxMin x={10} y={9}/>
        <MaxMin x={1} y={90}/>
        <MaxMin x={2} y={2}/>

  <Botao/>*/}
        <Contador inicial={(10)} step={(1)}/>
      </View>


  );
}

/*
Grupo: 
1 Alexandre de Carvalho Paiva ;
2 Dennis França de Oliveira Duarte;
3 José Roberto da Silva Junior;
4 Mateus Jonas Ferreira
5 Josimere Santos da Silveira Garcia;
6 João Guilherme Silveira Garcia
*/

