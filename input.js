import React, { Component } from 'react'
import { View, Text,  TextInput, StyleSheet, Button} from 'react-native'
import MultiSelect from 'react-native-multiple-select';
import DropDownPicker from 'react-native-dropdown-picker';
import Select from 'react-select/src/Select';

const items = [{
    id: '92iijs7yta',
    name: 'Python',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'C++',
  }, {
    id: '16hbajsabsd',
    name: 'C',
  }, {
    id: 'nahs75a5sg',
    name: 'Java',
  }, {
    id: '667atsas',
    name: 'Javascript',
  }];

class Inputs extends Component {

   
     
    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems:selectedItems });
      };

   handleName = (text) => {
      this.setState({ name: text })
   }
   handleCollege = (text) => {
      this.setState({ College: text })
   }
   handleAddress = (text) => {
    this.setState({ Address: text })
 }
   submit = (name) => {
      alert(name)
   }

   state = {
    name: '',
    College: '',
    Address:'',
    selectedItems :[],
 }
 static navigationOptions = {
   title: 'Home',
};

   render() {
    
    const { selectedItems } = this.state;
    
  
   
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "College"
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleCollege}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress}/>




 

        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
        
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
         submitButtonText="submit"
        
        />
        <View>

        { this.multiSelect ? this.multiSelect.getSelectedItemsExt(selectedItems) : null}
    
        </View>
        



        <View style={styles.submitButton}>
            <Button
            
               onPress = {
                  ()=>{
                     this.props.navigation.navigate('Second')
                   
                  }
               }
               title="Press Me">
            </Button>
            </View>
            

            
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 100,
     
   },
   input: {
      margin: 15,
      height: 50,
      borderColor: '#4B0082',
      borderWidth: 1,
      padding:5
   },
   submitButton: {
    margin:120,
    backgroundColor: '#4169E1',
       
    },
 
    submitButtonText:{
       color: 'white'
    }
 })