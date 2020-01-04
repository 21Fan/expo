import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
   
    this.state={
      isLoading: true,
      username:'罗某',
      password:'123',
      token:'',
      logs:[],
  }
  }

  componentDidMount(){
      const{username,password}=this.state

      fetch("https://www.kingdom174.work/Login?username="+username+"&password="+password+"&location=",{method:'GET'})   
      .then(response=>response.text())
      .then(string=>{
        
          this.setState({
            isLoading: false,
            token:string
          
          })
          
      })
      .catch(error => console.error('Error:', error));
    // return fetch("https://www.kingdom174.work/Login",{method:'POST',body:JSON.stringify(data)}) 
    //   .then(res => res.json())
    //   .then((responseJson) => {

    //     this.setState({
    //       isLoading: false,
    //       token: responseJson.tokem,
    //     }, );

    //   })
    //   .catch(error => console.error('Error:', error))
    //   .then(response => console.log('Success:', response));  
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <Text>{this.state.token}</Text>
        
      </View>
    );
  }
}