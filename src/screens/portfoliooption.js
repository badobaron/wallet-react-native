/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
/*
  React-native-elements for UI components;
*/
import {Button} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import Lovechain from '../components/lovechainlogo';

export default class PortfolioOption extends Component {
  constructor(props){
    super(props);

    /*
     *  Bind the function t 
     */
    this._navigateToScreen = this._navigateToScreen.bind(this);
  }

  /*
   * Function for button to navigate to desired screen
   */
  _navigateToScreen(option){
    if(option === "Existing"){
      alert("Existing");
      this.props.navigation.navigate('CreatePortfolioScreen');
    }else{
      alert("Create");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Lovechain/>
        </View>
        
        
        <View style={styles.innerContainer}>
          <View style={styles.buttonContainer}>
            <Button title="Create Portfolio"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              onPress={()=> this.props.navigation.navigate('CreatePortfolioScreen')}
              />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Existing Portfolio"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              onPress={()=> this.props.navigation.navigate('LoginScreen')}
              />
          </View>
        </View>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  innerContainer:{
    flex:9,
    justifyContent:'center',
  },
  buttonContainer:{
    marginTop:'15rem',
    marginLeft:'20rem',
    marginRight:'20rem',

  },
  buttonStyle:{
    borderRadius:20,
    backgroundColor:"rgba(200,200,200,1)",
    paddingTop:'5rem',
    paddingBottom:'5rem',
  },
  buttonText:{
    color:'#000000',
    fontSize:'16rem',
    fontWeight:'700'
  }
});
