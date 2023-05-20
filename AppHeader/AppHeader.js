import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper';

const AppHeader = ({ children, style }) => {

  return (
    <Fragment>
      <Appbar.Header style={{ ...style }}>
        {children}
      </Appbar.Header>
    </Fragment>
  )
}

export default AppHeader