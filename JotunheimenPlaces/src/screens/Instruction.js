import React, {Component} from 'react';
import ReactNative from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import { Actions } from 'react-native-router-flux';
import {Motion, spring} from 'react-motion';
const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView
} = ReactNative;

/**
 * Container component for Instruction page
 */
class Instruction extends Component {

  /**
    * Instruction Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Instruction page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    let back_btn_str = "<<";
    return (
      
      <View
        style={styles.container}>
        <View style={{flex:4, justifyContent: 'center'}}>
          <ScrollView >
            <View>
              <Text style={styles.headTextContainer}>
                Please follow these instructions:
              </Text>
              <Text style={styles.descTextContainer}>
                1. Sign the confidentiality consent.
              </Text>
              <Text style={styles.descTextContainer}>
                2. Complete a short survey with demographic variables.
              </Text>
              <Text style={styles.descTextContainer}>
                3. Track your activity. The activity could take from few minutes jogging, finishing, hiking... to several days backpacking in nature for several days. Do not stop tracking until you completely finish the activity. Mark interesting waypoints and tag non-material benefits.
              </Text>
              <Text style={styles.descTextContainer}>
                4. Complete a survey about the experience you just had doing your nature activity TODAY only.
              </Text>
              <Text style={styles.descTextContainer}>
                5. Press "Send" button when you have completed the survey. You will be able to withdraw from the study at any point by sending an email to lorena.munoz@uit.no
              </Text>
            </View>            
          </ScrollView>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
          <View>
            <ButtonCircle onPress={()=>{Actions.indexsurvey();}}>{back_btn_str}</ButtonCircle>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',    
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  headTextContainer: {
    color: '#00743d',
    fontSize: 20,    
    fontWeight:'bold'
  },
  descTextContainer: {
    color: '#00743d',
    fontSize: 18,    
    marginTop:5
  },
  ovalText: {
    color:'white',
    fontSize: 34,
    lineHeight:55,
    textAlign:'center'
  }
});

export default Instruction;