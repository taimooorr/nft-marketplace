import { View, Text,Image } from 'react-native'
import React from 'react'

import { COLORS,SIZES,FONTS,SHADOWS ,assets} from '../constants'
export function NftTitle({
  title,
  subTitle,
  titleSize,
  subTitleSize,
}) {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >{title}</Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >{subTitle}</Text>
    </View>
  )
}
export function EthPrice({ price }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image
        source={assets.eth}
        resizeMode='contain'
        style={{
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >{price}</Text>
    </View>
  )
}
export function ImageCmp({ imgUrl, index}) {
  return (
    <Image
      source={imgUrl}
      resizeMode='contain'
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  )
}
export function People() {
  return (
    <View style={{
      flexDirection: 'row',

    }}>
      {
        [assets.person01, assets.person02, assets.person03].map((imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`Person-${index}`} />
        ))
      }
      
    </View>
  )
}
export function EndDate() {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
        borderRadius: SIZES.font,
      }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
      }}
      >
        Ends in
      </Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
      }}
      >
        2d 16h 32m
      </Text>
      
    </View>
  )
}
export function SubInfo() {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <People />
      <EndDate />
     
    </View>
  )
}