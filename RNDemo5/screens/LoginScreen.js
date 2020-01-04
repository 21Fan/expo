import  React,{Component} from 'react'
import {Text,View,TextInput,StyleSheet,Botton ,ActivityIndicator} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading: true,
            username:'',
            password:'',
            token:'',

        }
    }
    // componentDidMount(){}
    //  Login(){
    //         const{username,password}=this.state
    //         if(username===password&&username==='admin')
    //         {
    //             alert('登陆成功')
    //             this.props.navigation.navigate('MainMenu')
    //         }else{
    //             alert('账号或密码错误')
    //         }
    // }
    Test(){
        

        // fetch("https://www.kingdom174.work",{method:'GET',body:JSON.stringify(data)})   
        // .then(response => response.json()) // parses response to JSON
        const{username,password}=this.state

        fetch("https://www.kingdom174.work/Login?username="+username+"&password="+password+"&location=",{method:'GET'})   
        .then(response=>response.text())
        .then(string=>{
          
            this.setState({
              isLoading: false,
              token:string
            
            })
            if(string=="密码错误")alert(string)
        })
        .catch(error => console.error('Error:', error));
        
    }
    render(){

        return(
            <View style ={styles.container}>
                <Text style={styles.title}>登陆</Text>
                <TextInput style={styles.input} 
                onChangeText={(username)=>this.setState({username})}
                value={this.state.username}
                placeholder={'请输入用户名(admin)'}/>
                <TextInput style={styles.input} 
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                placeholder={'请输入密码(admin)'}/>
                <Text style={styles.login} onPress={()=>{this.Test()}}>Login</Text>
                
            </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white'
        },
        title:{
            fontSize:40,
            fontWeight:'bold',
            marginBottom:20
        },
        input:{
            fontSize: 20,
            width: 300,
            margin: 10,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: '#841584',
            padding: 5,
            marginBottom:20
        },
        login:{
            fontSize:24,
            fontWeight:'bold',
            color: 'white',
            margin: 20,
            backgroundColor: 'orange',
            width: 150,
            height: 50,
            lineHeight: 50,
            textAlign: 'center',
   
        }
    }
);
