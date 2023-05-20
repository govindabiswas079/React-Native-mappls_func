import React, { Fragment, useState } from 'react'
import { TextInput, View, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

export const FirstNameInput = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TextInput {...props} autoCorrect={true} autoCapitalize={'none'} textContentType={'givenName'} placeholderTextColor={theme?.textInput?.placeholderColor} maxLength={50} keyboardType={'default'} style={{ flex: 1, height: 40, paddingHorizontal: 12, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color, borderRadius: 8, }} />
      </View>
    </Fragment>
  )
}

export const LastNameInput = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TextInput {...props} autoCorrect={true} autoCapitalize={'none'} textContentType={'familyName'} placeholderTextColor={theme?.textInput?.placeholderColor} maxLength={50} keyboardType={'default'} style={{ flex: 1, height: 40, paddingHorizontal: 12, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color, borderRadius: 8, }} />
      </View>
    </Fragment>
  )
}

export const EmailInput = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TextInput {...props} autoCorrect={true} autoCapitalize={'none'} textContentType={'emailAddress'} placeholderTextColor={theme?.textInput?.placeholderColor} maxLength={50} keyboardType={'email-address'} style={{ flex: 1, height: 40, paddingHorizontal: 12, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color, borderRadius: 8, }} />
      </View>
    </Fragment>
  )
}
export const MobileInput = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TextInput {...props} placeholderTextColor={theme?.textInput?.placeholderColor} autoCorrect={true} autoCapitalize={'none'} textContentType={'telephoneNumber'} maxLength={10} keyboardType={'phone-pad'} style={{ flex: 1, height: 40, paddingHorizontal: 12, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color, borderRadius: 8, }} />
      </View>
    </Fragment>
  )
}

export const PasswordInput = (props) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <Fragment>
      <View style={{ marginTop: 15, width: '100%', height: 40, borderWidth: 1, borderColor: theme?.textInput?.borderColor, borderRadius: 8, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TextInput {...props} placeholderTextColor={theme?.textInput?.placeholderColor} secureTextEntry={!secureTextEntry} autoCorrect={false} autoCapitalize={'none'} textContentType={'password'} maxLength={50} keyboardType={'default'} style={{ flex: 1, height: 40, fontSize: 14, fontFamily: 'OpenSans-Regular', color: theme?.textInput?.color, borderRadius: 8, }} />
        <Pressable onPress={() => setSecureTextEntry(secureTextEntry => !secureTextEntry)}>
          <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} color={theme?.textInput?.iocnColor} size={22} />
        </Pressable>
      </View>
    </Fragment>
  )
}