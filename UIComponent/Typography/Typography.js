import React, { Fragment } from 'react'
import { Text } from 'react-native'
import { HelperText } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export const HelperTextUI = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <HelperText type="error" style={{ color: theme?.typography?.HelperTextUI, fontFamily: 'OpenSans-Regular', fontSize: 12 }}>
        {props?.children}
      </HelperText>
    </Fragment>
  )
}

export const HeaderTextUI = (props) => {
  const theme = useTheme();
  const { color = theme?.typography?.HeaderTextUI, fontFamily = 'OpenSans-SemiBold', fontSize = 16 } = props?.style;

  return (
    <Fragment>
      <Text {...props} style={{ ...props?.style, color: color, fontFamily: fontFamily, fontSize: fontSize, }}>
        {props?.children}
      </Text>
    </Fragment>
  )
}

export const TitleTextUI = (props) => {
  const theme = useTheme();
  const { color = theme?.typography?.TitleTextUI, fontFamily = 'OpenSans-SemiBold', fontSize = 14 } = props?.style;

  return (
    <Fragment>
      <Text {...props} style={{ ...props?.style, color: color, fontFamily: fontFamily, fontSize: fontSize, }}>
        {props?.children}
      </Text>
    </Fragment>
  )
}
export const SubTitleTextUI = (props) => {
  const theme = useTheme();
  const { color = theme?.typography?.SubTitleTextUI, fontFamily = 'OpenSans-SemiBold', fontSize = 14 } = props?.style;

  return (
    <Fragment>
      <Text {...props} style={{ ...props?.style, color: color, fontFamily: fontFamily, fontSize: fontSize, }}>
        {props?.children}
      </Text>
    </Fragment>
  )
}
export const ParagraphTextUI = (props) => {
  const theme = useTheme();
  const { color = theme?.typography?.ParagraphTextUI, fontFamily = 'OpenSans-SemiBold', fontSize = 12 } = props?.style;

  return (
    <Fragment>
      <Text style={{ color: color, fontFamily: fontFamily, fontSize: fontSize }}>
        {props?.children}
      </Text>
    </Fragment>
  )
}
export const SubParagraphTextUI = (props) => {
  const { color = theme?.typography?.SubParagraphTextUI, fontFamily = 'OpenSans-SemiBold', fontSize = 10 } = props?.style;

  return (
    <Fragment>
      <Text style={{ color: color, fontFamily: fontFamily, fontSize: fontSize }}>
        {props?.children}
      </Text>
    </Fragment>
  )
}