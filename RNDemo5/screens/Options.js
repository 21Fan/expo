import {Image,Button} from 'react-native';
import  React,{Component} from 'react'
export default class Options extends Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',

    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }