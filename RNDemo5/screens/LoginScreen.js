import  React,{Component} from 'react'
import {Text,View,TextInput,StyleSheet} from 'react-native';


export default class LoginScreen extends Component{
    static navigationOptions = {
        title: '登录',
        /* No more header config here! */
      };
    constructor(props){
        super(props)
        this.state={
            isLoading: true,
            username:'',
            password:'',
            token:'',

        }
    }

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
            if(string=="密码错误"||string=="用户名不存在")alert(string)
            else{
                this.props.navigation.push('Home', {
                    'token': string,'transition':'forHorizontal'});
            }
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
                
                placeholder={'请输入用户名'}/>
                <TextInput style={styles.input} 
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}//文本框会遮住之前输入的文字
                placeholder={'请输入密码'}/>
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
            backgroundColor: 'green',
            width: 150,
            height: 50,
            lineHeight: 50,
            textAlign: 'center',
   
        }
    }
);
