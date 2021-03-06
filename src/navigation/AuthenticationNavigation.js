import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './../screens/auth/LoginScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';
import RegisterScreen from "../screens/auth/RegisterScreen";


const AppSwitchNavigator = createSwitchNavigator({
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
    ForgotPassword: {screen: ForgotPasswordScreen},
});

const AuthenticationContainer = createAppContainer(AppSwitchNavigator);

export default class AuthenticationNavigation extends React.Component {

    render() {
        return <AuthenticationContainer/>;
    }
}
