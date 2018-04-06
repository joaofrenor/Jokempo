import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {userChoice : '', computerChoice: '', resultado: '', alertas: 'Desativados'}
  }

  jokenpo(userChoice){
    var ranNumb = Math.floor(Math.random() * 3)

    var choices = ["Pedra", "Papel", "Tesoura"]

    var computerChoice = choices[ranNumb]

    var pc = computerChoice
    var user = userChoice
    if (pc == user) resultado = 'Você Empatou'
    else if ((user == 'Pedra' & pc == 'Tesoura') || (user == 'Papel' & pc == 'Pedra') || (user == 'Tesoura' & pc == 'Papel') ) resultado = 'Você Ganhou'
    else resultado = 'Você Perdeu'

    this.setState({userChoice: userChoice,
                  computerChoice: computerChoice,
                  resultado: resultado})
    if(this.state.alertas == 'Ativados'){
      Alert.alert(resultado)
    }
  }
  alerta(){
    if(this.state.alertas == 'Ativados') this.setState({alertas: 'Desativados'})
    else this.setState({alertas: 'Ativados'})
  }
  render() {
    return (
      <View>
        <Topo/>
           <View style={styles.btnsView}>
              <View style={styles.btn}>
                <Button title='Pedra' 
                  onPress={() => {this.jokenpo('Pedra')}}/>
              </View>                     
              <View style={styles.btn}>
                <Button title='Papel' 
                  onPress={() => {this.jokenpo('Papel')}}/>
              </View>
              <View style={styles.btn}>
                <Button title='Tesoura' 
                  onPress={() => {this.jokenpo('Tesoura')}}/>
              </View>
           </View>
           <View style={styles.painel}>
            <Text style={styles.h1}> PC:{this.state.computerChoice ? this.state.computerChoice : '(Esperando Jogada)'} VS Você:{this.state.userChoice ? this.state.userChoice : '(Esperando Jogada)'} </Text>
            <Text style={styles.h2}>{this.state.resultado}</Text>

            <View style={styles.btnAlert}>
              <Button title={'Alertas '+ this.state.alertas} onPress={() => {this.alerta()}}/>
            </View>
          </View>
      </View>
    );
  }
}

class Topo extends Component{
  render(){
    return(
      <View>
        <Image style={styles.img} source={require('./img/jokenpo.png')} />
      </View>
    );
  }
}

export default StackNavigator(
{
  home: {
    screen: App
  },
},
{
 navigationOptions: {
      title: 'JoKenPo',
      headerStyle: {
        backgroundColor: '#2196F3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const styles = StyleSheet.create({
  painel:{
    alignItems: 'center'
  },
  img:{
    width: '100%'
  },
  h2:{
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold'
  },
  h1:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  btn:{
    width: 110
  },
  btnAlert:{
    width: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnsView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  }
});
