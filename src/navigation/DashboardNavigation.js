import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import FeaturesScreen from "../screens/features/FeaturesScreen";
import CharacterScreen from '../screens/CharacterScreen';
import MonstersScreen from "../screens/monsters/MonstersScreen";
import SpellsScreen from "../screens/spells/SpellsScreen";
import FeatureScreen from "../screens/features/FeatureScreen";
import HeaderComponent from '../components/HeaderComponent';
import SettingsScreen from "../screens/SettingsScreen";
import CharacterDisplayScreen from "../screens/CharacterDisplayScreen";

const DashboardTabNavigator = createBottomTabNavigator({
    CharacterScreen: {screen: CharacterScreen},
    FeaturesScreen: {screen: FeaturesScreen},
    SpellsScreen: {screen: SpellsScreen},
    MonstersScreen: {screen: MonstersScreen}
},
{
    navigationOptions: ({ navigation }) => {
        [navigation.state.index];
        return {
            headerTitle: <HeaderComponent/>
        };
    }
}
);

const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator,
    FeatureScreen: {screen: FeatureScreen},
    HeaderComponent: {screen: HeaderComponent},
    SettingsScreen: {screen: SettingsScreen},
    CharacterDisplayScreen: {screen: CharacterDisplayScreen}
});
const DashboardContainer = createAppContainer(DashboardStackNavigator);

export default class DashboardNavigation extends React.Component {

    render() {
        return (
            <DashboardContainer/>
        ) 
    }
}