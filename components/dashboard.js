import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';



const dashboard = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Image
            style={styles.dashImg}
            source={require('../images/sunset-bicycle.jpg')}
            />

            <Text
            style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.welcomeText2}>Power Bike Shop</Text>

            <TouchableOpacity
            onPress = {() => navigation.navigate('Home')}

            activeOpacity={0.8}

            style={styles.gmailbutton}>
                <AntDesign name="google" size={24} color="black" />
              <Text style={{ fontSize: 20, marginLeft:10}}>Login with Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {() => navigation.navigate('Home')}
             style={styles.applebutton}>
                 <AntDesign name="apple1" size={24} color="white" />
                <Text style={{fontSize: 20, color: 'white', marginLeft:10}}>Login with Apple</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 10, fontSize:16}}>Not a member? <Text style={{color: "orange"}}>Sign up</Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        marginTop: 100,
        height: '100%',
        alignItems: "center"
    },

    dashImg: {
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        width: 200,
        height:180
    },

    welcomeText: {
        marginTop:40,
        fontSize: 30,
        fontWeight: "200"

    },

    welcomeText2: {
        marginTop:10,
        fontSize: 30,
        fontWeight: "700"
    },

    gmailbutton: {
        backgroundColor: "#e3e3e3",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop:20
    },

    applebutton: {
        backgroundColor: "black",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 10

    }
})

export default dashboard;