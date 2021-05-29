import React, { Component } from 'react';
import { StyleSheet, Button,Text,View, TextInput, Touchable, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/IconAntDesign';
import BellIcon from 'react-bell-icon';
export default class Homepage extends Component {
    render() {
        return(
            <View style={styles.container}>
              <Text style={styles.text}>Welcome, Jessie.</Text>
              <IconAntDesign name="minus" style={styles.icon1}></IconAntDesign>
              <IconAntDesign name="minus" style={styles.icon2}></IconAntDesign>
              <IconAntDesign name="minus" style={styles.icon3}></IconAntDesign>
              <BellIcon style={styles.notification} width='17px' active={true} animate={true} />
              <View style={styles.totalasset}>
                <Text style={styles.titlelabel}>Your total asset portfolio</Text>
                <Text style={styles.assetlabel}>N203,935</Text>
                <View style={styles.rectangle}>
                    <Text style={styles.text2}>Invest now</Text>
                </View>
              </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#E5E5E5',
   },
   text2: {
       color: '#31A078',
       backgroundColor: '#FEFFFE',
       fontSize: '14px',
       fontFamily: 'SF Pro Text',
       fontWeight: 600,
       width: '74px',
   },
   rectangle: {
       backgroundColor: '#FEFFFE',
       position: 'absolute',
       paddingTop: 63,
       paddingLeft: 219,
       paddingRight: 10,
       paddingBottom: 22,
       borderRadius: '15px',
   },
   assetlabel: {
       fontWeight: 600,
       fontFamily: 'SF Pro Display',
       fontSize: '32px',
       color: '#FFFFFF',
       paddingTop: 60,
       paddingLeft: 30,
       paddingBottom: 27,
       paddingRight: 175,
   },
   titlelabel: {
       fontFamily: 'SF Pro Text',
       fontWeight: 500,
       fontSize: '16px',
       color: '#FFFFFF',
       width: '318px',
       paddingTop: 30,
       paddingBottom: 76,
       paddingLeft: 30,
       paddingRight: 6, 
   },
   totalasset: {
       backgroundColor: '#31A078',
       paddingTop: 178,
       paddingHorizontal: 30,
       paddingBottom: 629,
       position: 'absolute',
       borderRadius: '20px',
   },
   notification: {
       backgroundColor: '#E5E5E5',
       paddingBottom: 853.2,
       paddingRight: 33.5,
       paddingLeft: 363.5,
       paddingTop: 63,
       borderRadius: '1.5px',
       borderColor: '#000000',
   },
   icon1: {
       paddingTop: 67,
       paddingLeft: 34,
       color: '#000000',
       paddingRight: 362,
       paddingBottom: 865,
   },
   icon2: {
    paddingTop: 73,
    paddingLeft: 34,
    color: '#000000',
    paddingRight: 362,
    paddingBottom: 859,
},
icon3: {
    paddingTop: 79,
    paddingLeft: 34,
    color: '#000000',
    paddingRight: 362,
    paddingBottom: 853,
},
   text: {
    fontSize: 34,
    fontWeight: '700',
    paddingTop: 103,
    paddingHorizontal: 30,
    paddingBottom: 788,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    alignContent: 'center',
    color: '#000000',
    paddingBottom: 384,
   }
});