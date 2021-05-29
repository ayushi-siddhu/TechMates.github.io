/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from 'react';
import { StyleSheet, Button,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Createaccount from './Createaccount';
import Homepage from './Homepage';

export class Signup extends Component{
  render() {
    return(
      
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Stay on top of your finance with us.</Text>
          <Text style={styles.sectionTitle2}>We are your new financial Advisors
to recommed the best investments for you.</Text>
          <Button style={styles.button1} title="Create account"></Button>
          <TouchableOpacity>
            <Text style={styles.pageTitle}>Login</Text>
          </TouchableOpacity>
        </View>
    );
    }
  }

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator ({
  Login: Signup,
  Register: Createaccount,
  Home: Homepage
})
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  pageTitle: {
    fontFamily: 'SF Pro Text',
    paddingLeft: 34,
    paddingRight: 26,
    paddingTop: 787,
    paddingBottom: 125,
    color: '#31A062',
    fontWeight: '600',
    alignContent: 'center',
  },
 
  button1: {
    position: 'absolute',
    width: '343px',
    height: '60px',
    paddingLeft: 43,
    paddingRight: 28,
    paddingTop: 710,
    paddingBottom: 162,
    backgroundColor: '#31A062',
    borderRadius: 20,
  },
  
  sectionTitle: {
    fontSize: 34,
    fontWeight: '700',
    paddingTop: 466,
    paddingLeft: 41,
    paddingRight: 19,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    alignContent: 'center',
    color: '#000000',
    paddingBottom: 384,
  },
  sectionTitle2: {
    fontSize: 17,
    fontWeight: '600',
    paddingTop: 565,
    paddingLeft: 41,
    paddingRight: 19,
    fontFamily: 'SF Pro Text',
    color: '#4F4F4F',
    alignContent: 'center',
    fontStyle: 'normal',
    paddingBottom: 301,
  },
  
});


