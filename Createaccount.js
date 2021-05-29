import React, { Component } from 'react';
import { StyleSheet, jsx, Button,Text,View, TextInput, Touchable, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/IconAntDesign';
import { createStackNavigator } from 'react-navigation';
export class Createaccount extends Component {
    render() {
        return (
           <View style={styles.container}>
           <IconAntDesign name="left" style={styles.icon}></IconAntDesign>
           <Text style={styles.top}>Create an account</Text>
              <View style={styles.textfields}>
                <TextInput style={styles.input}>
                   placeholder="Full name"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="name"
                   autoCapitalize="none"
                   autoCorrect={false}
                </TextInput>
                <TextInput style={styles.input}>
                   placeholder="Email address"
                   returnKeyType="next"
                   onSubmitEditing={()=>this.passwordInput.focus()}
                   keyboardType="email address"
                   autoCapitalize="none"
                   autoCorrect={false}
                </TextInput>
                <TextInput style={styles.input}>
                   placeholder="Password"
                   returnKeyType="go"
                   secureTextEntry
                   ref={(input)=> this.passwordInput =input}
                </TextInput>
                <TouchableOpacity style={styles.buttoncontainer}>
                   <Text style={styles.buttontext}>Create account</Text>
                </TouchableOpacity>
                <Button title="Already have an account?" color="#31A062"></Button>
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
    icon :{
       paddingTop: 71,
       paddingLeft: 29,
       color: '#000000',
       paddingRight: 379,
       paddingBottom: 849,

    },
    input: {

    },

});