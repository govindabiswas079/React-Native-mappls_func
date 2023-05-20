import { View, Text, TextInput, ScrollView, Pressable } from 'react-native'
import React, { Fragment, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ContainedButton } from '../UIComponent'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import HeaderComponent from './HeaderComponent';
import { setAuthLoader } from '../store/ReducerSlicer';
import { MainContainer, SubContainer, TextButton } from '../UIComponent'
import { HeaderTextUI } from '../UIComponent/Typography'

const LoginScreen = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const [value, setValue] = useState({ email: '', password: '' })

  const onLogin = async () => {
    dispatch(setAuthLoader(true));
    await AsyncStorage.setItem('isAuth', 'true')
  };

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer style={{ backgroundColor: 'red' }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
          <SubContainer style={{ backgroundColor: '#FFFFFF', }}>
            <HeaderComponent Title={'Log In'} showTitle={true} showSubTitle={true} SubTitle={'enter your credentials to continue'} />
            <LoginInput value={value} setValue={setValue} />

            <View style={{ width: "100%", }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end' }}>
                <TextButton onPress={() => Navigation.navigate('ForgotEmailScreen')}>
                  Forgot Password
                </TextButton>
              </View>
            </View>

            <View style={{ marginTop: 30 }}>
              <ContainedButton onPress={() => onLogin()} disabled={!value?.email || !value?.password}>
                Login
              </ContainedButton>
            </View>

            <View style={{ paddingTop: 10, width: "100%", }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "#666C8E", fontSize: 16, fontFamily: "OpenSans-Regular" }}>Don't have an account? </Text>
                <TextButton onPress={() => Navigation.navigate('RegisterScreen')}>
                  Sign Up
                </TextButton>
              </View>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  )
}

export default LoginScreen;


const LoginInput = ({ value, setValue }) => {
  const theme = useTheme();
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name='user' color={theme?.textInput?.iocnColor} size={22} />
        <TextInput value={value?.email} onChangeText={(Text) => setValue({ ...value, email: Text })} placeholderTextColor={theme?.textInput?.placeholderColor} placeholder={'Username'} style={{ flex: 1, paddingHorizontal: 12, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color }} />
      </View>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='lock-closed' color={theme?.textInput?.iocnColor} size={22} />
        <TextInput secureTextEntry={!show} value={value?.password} onChangeText={(Text) => setValue({ ...value, password: Text })} placeholderTextColor={theme?.textInput?.placeholderColor} placeholder={'Password'} style={{ flex: 1, paddingHorizontal: 12, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color }} />
        <Pressable onPress={() => setShow(state => !state)}>
          <Ionicons name={show ? 'eye-off' : 'eye'} color={theme?.textInput?.iocnColor} size={22} />
        </Pressable>
      </View>
    </Fragment>
  )
}