import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation'
import FeaturesScreen from "../screens/features/FeaturesScreen";
import FeatureScreen from "../screens/features/FeatureScreen";
import CharacterScreen from '../screens/CharacterScreen';
import MonstersScreen from "../screens/monsters/MonstersScreen";
import RollDiceScreen from "../screens/diceRoll/DiceRollScreen";
import DiceRollResultScreen from "../screens/diceRoll/DiceRollResultScreen";
import CharacterDisplayScreen from "../screens/CharacterDisplayScreen";
import SpellsScreen from "../screens/spells/SpellsScreen";
import Icons from "assets/icons";
import {Image} from "react-native";
import HeaderComponent from '../components/HeaderComponent';
import SettingsScreen from "../screens/SettingsScreen";

const DashboardTabNavigator = createMaterialTopTabNavigator({
    // TestScreen: {
    //     screen: TestScreen,
    //     navigationOptions: {
    //         tabBarIcon: ({ tintColor }) => {
    //             return(
    //                 <Image 
    //                     source = {Icons.bottomTabNavigatorIcons.skills}
    //                 />
    //             );
    //         }
    //     }
    // },
        CharacterScreen: {
            screen: CharacterScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => {
                    return(
                        <Image
                            source = {Icons.bottomTabNavigatorIcons.chars}
                        />
                    );
                }
            }
        },
        RollDiceScreen: {
            screen: RollDiceScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return (
                        <Image
                            source={Icons.bottomTabNavigatorIcons.dice}
                        />
                    );
                }
            }
        },
        FeaturesScreen: {
            screen: FeaturesScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return (
                        <Image
                            source={Icons.bottomTabNavigatorIcons.skills}
                        />
                    );
                }
            }
        },
        SpellsScreen: {
            screen: SpellsScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return (
                        <Image
                            source={Icons.bottomTabNavigatorIcons.spells}
                        />
                    );
                }
            }
        },
        MonstersScreen: {
            screen: MonstersScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return (
                        <Image
                            source={Icons.bottomTabNavigatorIcons.monsters}
                        />
                    );
                }
            }
        },
},
    {
        tabBarOptions: {
            showLabel: false,
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: '#f2f2f2',
                borderTopWidth: 0.5,
                borderTopColor: 'grey'
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
    },
{
    navigationOptions: ({ navigation }) => {
        [navigation.state.index];
        return {
            headerTitle: <HeaderComponent/>
        };
    }
});

const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator,
    FeatureScreen: {screen: FeatureScreen},
    HeaderComponent: {screen: HeaderComponent},
    SettingsScreen: {screen: SettingsScreen},
    CharacterDisplayScreen: {screen: CharacterDisplayScreen},
    DiceRollResultScreen: {screen: DiceRollResultScreen}
});
const DashboardContainer = createAppContainer(DashboardStackNavigator);

export default class DashboardNavigation extends React.Component {

    render() {
        return (
            <DashboardContainer/>
        )
    }
}