import React, {Component} from 'react';


import { Text, View, StyleSheet, TextInput, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




function PantallaInicial({ navigation, route }){
  const [myf1, onChangef1] = React.useState('0');
  return(
    
    <View style={{padding:20}}>
    <TextInput style={{height:40, fontSize:20}}
    placeholder="Escribe un numero" keyboardType="numeric" 
      onChangeText={text => onChangef1(text)}
        />

    <Button title="Dolaresapesos"
    onPress={()=>navigation.navigate("Dolaresapesos",{f1:myf1}) }
    />
    <Button title="Pesosadolares"
    onPress={()=>navigation.navigate("Pesosadolares") }
    />
    <Button title="Euroapesos"
    onPress={()=>navigation.navigate("Euroapesos") }
    />
    <Button title="Pesosaeuros"
    onPress={()=>navigation.navigate("Pesosaeuros") }
    />
    </View>
  );
}


function Dolaresapesos({ navigation, route }) {
    return(
    <View>
    <Text>Dolaresapesos</Text>

     <Text>{route.params.f1/22} </Text>
   </View>
  );
}

function Pesosadolares(props) {
    return(
    <View>
    <Text>Pesosadolares</Text>
     <Text>{"la conversion es:" +props.state.f1*22} </Text>
    </View>
  );
}

function Euroapesos(props) {
    return(
    <View>
    <Text>Euroapesos</Text>
     <Text>{"la conversion es:" +props.state.f1/24} </Text>
    </View>
  );
}

function Pesosaeuros(props) {
    return(
    <View>
    <Text>Pesosaeuros</Text>
     <Text>{"la conversion es:" +props.state.f1*24} </Text>
    </View>
  );
}

const Stack=createStackNavigator();
function App(){
   
   

  return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="PantallaInicial" component={PantallaInicial} initialParams={{ f1: 0 }}/>
<Stack.Screen name="Dolaresapesos" component={Dolaresapesos}/>
<Stack.Screen name="Pesosadolares" component={Pesosadolares}/>
<Stack.Screen name="Euroapesos" component={Euroapesos}/>
<Stack.Screen name="Pesosaeuros" component={Pesosaeuros}/>
</Stack.Navigator>
</NavigationContainer>
  );

}
export default App;
