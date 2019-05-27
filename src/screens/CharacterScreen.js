import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { Container, Content, Button, Icon, ListItem, List  } from 'native-base'
import * as firebase from 'firebase';
import HeaderComponent from '../components/HeaderComponent';
var data = []

export default class CharacterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
        listViewData: data,
        newContact: "",
        dataLoaded: false
        }
        console.disableYellowBox = true
    }

    async componentDidMount() {
        var that = this
        firebase.database().ref('characters/').on('child_added', function (data) {
        var newData = [...that.state.listViewData]
        newData.push(data)
        that.setState({ listViewData: newData })
        })

        await Expo.Font.loadAsync({
            'Toms Handwritten': require('../../assets/fonts/TomsHandwritten.ttf')
        });
        this.setState({dataLoaded: true});
    }

    async deleteRow(secId, rowId, rowMap, data) {
        await firebase.database().ref('characters/' + data.key).set(null)
        rowMap[`${secId}${rowId}`].props.closeRow();
        var newData = [...this.state.listViewData];
        newData.splice(rowId, 1)
        this.setState({ listViewData: newData });
    }


    FloatingButtonEvent=()=>{
        Alert.alert("This should redirect to character creation");
    }

    CharacterClickEvent=(name)=>{
        Alert.alert("Redirect to character information screen. You clicked on " + name);
    }

  render() {
    if (this.state.dataLoaded) {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem onPress={() => this.CharacterClickEvent(data.val().name)}>
               <View style={styles.flatview}>
                    <Image  
                        style={{width: 50, height: 50}}
                        source={require('../../assets/character.png')}
                    />
                    <Text style={styles.details}> {data.val().name},</Text>
                    <Text style={styles.details}> {data.val().characterClass} poziomu {data.val().level}</Text>
                </View>
              </ListItem>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap, data)}>
                <Icon name="trash" />
              </Button>
            }
            rightOpenValue={-75}
          />
        </Content>

         <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent} style={styles.TouchableOpacityStyle} >
           <Image source={require('../../assets/button.png')}  style={styles.FloatingButtonStyle} />
         </TouchableOpacity>

      </Container>
      );
  } else {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <HeaderComponent />
            <ActivityIndicator size="large"/>
        </View>
    )
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  flatview: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    paddingTop: 5,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Toms Handwritten',
    fontSize: 35
  },
  details: {
    fontSize: 33,
    fontFamily: 'Toms Handwritten'
  }
});