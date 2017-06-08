import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight
} = ReactNative;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import InputText from './InputText';

/**
 * ItemList component
 */
export default class ItemList extends Component {

  /**
    * ItemList Component Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      value3Index:null,
      value3:null
    }
  }  

  /**
   * Handles the event when a item is pressed
   * @param {str} value
   * @param {int} index
   * @return {void}
   */
  onPress(value, index) {
    this.setState({
      value3: value,
      value3Index: index
    })
  }

  /**
   * Render Lists
   * @return {jsxresult} result in jsx format
   */
  render() {
    let {items} = this.props;

    return (
      <View style={styles.itemList}>
        <RadioForm animation={true}>
          {items.map((obj, i) => {            
            
            let radioStyle = (this.state.value3Index === i)?[styles.radio, styles.bg]:styles.radio;
            let radioLabelStyle = (this.state.value3Index === i)?[styles.radioLabel, styles.bold]:styles.radioLabel;
            return (              
              <View key={i} style={radioStyle}>
                <RadioButton key={i} style={{}}>
                  <View key={i} style={styles.list}>
                  {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <View style={{flex:0.1, justifyContent:'center'}}>
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.state.value3Index === i}
                        onPress={this.onPress.bind(this, obj, i)}
                        buttonInnerColor={'#00743C'}
                        buttonOuterColor={'#00743C'}
                        buttonSize={15}
                        buttonStyle={{marginLeft: 10}}
                        buttonWrapStyle={{}}
                      />
                    </View>
                    <View style={{flex:0.9}}>
                      <Text onPress={this.onPress.bind(this, obj, i)} style={radioLabelStyle}>{obj.label}</Text>                    
                    </View>
                  </View>
                </RadioButton>                
              </View>                
            )
          })}
        </RadioForm>

        {( (items.length) && items[items.length-1].label == "Other" ) &&
          (
          <View style={{marginTop:-10}}>
            <InputText placeholder="Other" />
          </View>
          )
        }
      </View>
    );
  }
}

var styles = StyleSheet.create({
  itemList: {
    marginTop:20
  },
  list:{
    flex: 1,
    flexDirection: 'row',
    margin:0
  },
  radio: {
    borderWidth:0.5,
    paddingTop:10,
    paddingBottom:5,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0.3,
    backgroundColor:'#EFEFEF'
  },
  bg:{
    backgroundColor:'#D0DB05'
  },
  radioLabel: {
    fontSize: 20, 
    color: '#00743D', 
    marginLeft:20
  },
  bold: {
    fontWeight:'bold'
  }
});