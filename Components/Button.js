import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


/* Local imports */
import { COLORS,SIZES,FONTS,SHADOWS } from '../constants'
export const CircleButton = ({
  imgUrl,
  handlePress,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.dark,
        ...otherProps
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{
          width: 24,
          height: 24,
        }}
      />

    </TouchableOpacity>
  )
}
export const RectButton = ({minWidth,fontSize,handlePress,...otherProps}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...otherProps
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: 'center',
      }}>
        Place a bid
      </Text>

    </TouchableOpacity>
  )
}
