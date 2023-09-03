import { View, Text,Image} from 'react-native'
import React from 'react'

import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants'
import { EthPrice } from './SubInfo'
export default function DetailsBid({
  bid
}) {
  return (
    <View style={{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base*2,
    }}>
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View style={{
      }}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}>Bid placed by {bid.name}</Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.secondary,
          marginTop:3
        }}>{bid.date}</Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  )
}