import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class Second extends React.Component {
    static navigationOptions = {
    title: "Second"}
    render()
    {
    return(
        <View>
            <Text style={{fontSize:32}}>Welcome</Text>
        </View>
    )
    }
}
export default Second