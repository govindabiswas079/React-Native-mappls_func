import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
import { HeaderTextUI } from '../UIComponent/Typography'

const HeaderComponent = ({ showTitle = false, showSubTitle = false, Title = 'Log In', SubTitle = 'enter your credentials to continue' }) => {
  const theme = useTheme();

  return (
    <Fragment>
      <View style={{ width: '100%', alignItems: "center", justifyContent: 'center' }}>
        <View style={{ width: 120, height: 120, alignItems: "center", justifyContent: 'center', borderRadius: 100, backgroundColor: theme?.colors?.avatarBackground, elevation: 2 }}>
          <FontAwesome name='user' color={'blue'} size={60} />
        </View>

        <HeaderTextUI style={{ display: showTitle ? 'flex' : 'none', fontFamily: 'OpenSans-Bold', fontSize: 16, paddingTop: 10, textTransform: 'capitalize' }}>{Title}</HeaderTextUI>
        <HeaderTextUI style={{ display: showSubTitle ? 'flex' : 'none', color: "gray", fontFamily: 'OpenSans-SemiBold', fontSize: 16, paddingTop: 6, paddingBottom: 20, textTransform: 'capitalize' }}>{SubTitle}</HeaderTextUI>
      </View>
    </Fragment>
  )
}

export default HeaderComponent