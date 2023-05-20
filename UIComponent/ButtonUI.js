import React, { Fragment } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export const ContainedButton = (props) => {
  const theme = useTheme();
  const { disabled, } = props;

  return (
    <Fragment>
      <TouchableOpacity {...props} style={{ height: 40, borderWidth: 1, borderColor: disabled ? theme?.buttonContained?.inactiveBorderColor : theme?.buttonContained?.activeBorderColor, backgroundColor: disabled ? theme?.buttonContained?.inactiveBorderColor : theme?.buttonContained?.activeBorderColor, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 14, color: theme?.buttonContained?.color }}>{props?.children}</Text>
      </TouchableOpacity>
    </Fragment>
  )
}
export const OutlinedButton = (props) => {
  const theme = useTheme();
  const { disabled, } = props;

  return (
    <Fragment>
      <TouchableOpacity {...props} style={{ height: 40, borderWidth: 1, borderColor: disabled ? theme?.buttonOutlined?.inactiveBorderColor : theme?.buttonOutlined?.activeBorderColor, backgroundColor: disabled ? theme?.buttonOutlined?.inactiveColor : theme?.buttonOutlined?.activeColor, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 14, color: theme?.buttonOutlined?.color }}>{props?.children}</Text>
      </TouchableOpacity>
    </Fragment>
  )
}
export const TextButton = (props) => {
  const theme = useTheme();
  const { disabled,} = props;

  return (
    <Fragment>
      <TouchableOpacity {...props} style={{ height: 40, borderWidth: 1, borderColor: disabled ? theme?.buttonText?.inactiveBorderColor : theme?.buttonText?.activeBorderColor, backgroundColor: disabled ? theme?.buttonText?.inactiveColor : theme?.buttonText?.activeColor, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 14, color: theme?.buttonText?.color }}>{props?.children}</Text>
      </TouchableOpacity>
    </Fragment>
  )
}
