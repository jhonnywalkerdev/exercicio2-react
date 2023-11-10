import React, { useState} from "react";
import { Button, Text, View } from "react-native";
import Estilos from "./Estilos";


export default ({ inicial, step }) => {

    const [number, setNumber] = useState(inicial);

    const [msg, setMsg] = useState();


    function inc(){
        setNumber(number + step)
    }

    function dec(){
        setNumber(number - step)

    }


    return(

        <>
        <Text style = {Estilos.text}>
            {number}
        </Text>
        <Text style = {Estilos.text}>
            {msg}
        </Text>

        <View style = {Estilos.contador}>
        <Button 
        title = "+"
        onPress={inc}/>

        <Button 
        title = "-"
        onPress={dec}/>

        </View>
            <Button title = "Este número é par ou impar?" onPress={() => number%2==0 ? setMsg('Numero é par!'):setMsg('Numero é impar!')} />
        </>
        
    )

}