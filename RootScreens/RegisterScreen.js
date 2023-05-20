import { View, Text, TouchableOpacity, ScrollView, } from 'react-native'
import React, { Fragment, useState, } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { Col, Row } from 'react-native-responsive-grid-system';
import { ContainedButton } from '../UIComponent'
import HeaderComponent from './HeaderComponent'
import { FirstNameInput, LastNameInput, EmailInput, MobileInput, PasswordInput } from '../UIComponent'
import { useDispatch } from 'react-redux';
import { setRegData } from '../store/ReducerSlicer'
import { HelperTextUI, HeaderTextUI } from '../UIComponent/Typography'
import { MainContainer, SubContainer, TextButton } from '../UIComponent'

const RegisterScreen = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState({ FistName: '', LastName: '', Mobile: '', Email: '', Password: '', ConfirmPassword: '' });

  const onSubmit = () => {    
    dispatch(setRegData(value));
    Navigation.navigate('VerifyScreen')
  };

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={theme?.statusbar?.backgroundColor} />
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
          <SubContainer>
            <HeaderComponent Title={'Sign Up'} showTitle={true} SubTitle={'enter your credentials to continue'} showSubTitle={true} />
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <FirstNameInput placeholder={'First Name'} value={value?.FistName} onChangeText={(Text) => setValue({ ...value, FistName: Text })} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <LastNameInput placeholder={'Last Name'} value={value?.LastName} onChangeText={(Text) => setValue({ ...value, LastName: Text })} />
              </Col>
            </Row>

            <MobileInput placeholder={'Mobile'} value={value?.Mobile} onChangeText={(Text) => setValue({ ...value, Mobile: Text })} />
            {!value?.Mobile ? null : value?.Mobile?.length !== 10 ? <HelperTextUI >Enter 10 digit mobile number</HelperTextUI> : null}
            <EmailInput placeholder={'Email'} value={value?.Email} onChangeText={(Text) => setValue({ ...value, Email: Text })} />
            <PasswordInput placeholder={'Password'} value={value?.Password} onChangeText={(Text) => setValue({ ...value, Password: Text })} />
            <PasswordInput placeholder={'Confirm Password'} value={value?.ConfirmPassword} onChangeText={(Text) => setValue({ ...value, ConfirmPassword: Text })} />
            {(!value?.Password || !value?.ConfirmPassword) ? null : (value?.Password !== value?.ConfirmPassword) ? <HelperTextUI>Password not same</HelperTextUI> : null}

            <View style={{ paddingTop: 30 }}>
              <ContainedButton onPress={() => onSubmit()} disabled={!value?.FistName || !value?.LastName || !value?.Mobile || !value?.Email || !value?.Password || !value?.ConfirmPassword || (value?.Password !== value?.ConfirmPassword) || (value?.Mobile.length !== 10)} >
                <Text style={[{ textAlign: 'center', color: '#ffffff', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }]}>Sign Up</Text>
              </ContainedButton>
            </View>

            <View style={{ paddingTop: 10, width: "100%", }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "#666C8E", fontSize: 16, fontFamily: "OpenSans-Regular" }}>Already have an account? </Text>
                <TextButton onPress={() => Navigation.goBack()}>
                  Log In
                </TextButton>
              </View>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  )
}

export default RegisterScreen