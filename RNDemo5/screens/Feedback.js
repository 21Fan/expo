import  React,{Component} from 'react'
import {Text,View,TextInput,Dimensions, Button} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
import { SafeAreaView } from 'react-navigation';
export default class Feedback extends Component{
    static navigationOptions = {
        title: 'feedback',

      };
    constructor(props){
        super(props)
        this.state={
            token:'',
            username:'',
            title:'',
            content:''
        }
    }

    Feedback_to_server(){
        

        // fetch("https://www.kingdom174.work",{method:'GET',body:JSON.stringify(data)})   
        // .then(response => response.json()) // parses response to JSON
        const{token,username,title,content}=this.state

        fetch("https://www.kingdom174.work/feedback?token="+token+"&username"+username+"&title="+title+"&content="+content,{method:'POST'})   
        .catch(error => console.error('Error:', error));
        
    }
    render(){

        return(
            
            <View style={{flexDirection: 'column',flex: 1}}>

                <Text style={{height: 50}}>标题</Text>
                <TextInput style={{height: 50}}
                placeholder="请输入标题"
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
                />
                <Text style={{height: 50}}>内容</Text>
                <TextInput style={{height: 150}}
                placeholder="请输入内容"
                onChangeText={(content) => this.setState({content})}
                value={this.state.content}
                />
                 <Button 
                title="提交"
                onPress={()=>{this.Feedback_to_server();  }}
                ></Button>
            </View>

        );
    }
}
