import { View, Text } from 'react-native'
import React, { useState } from 'react'

/* lOCAL iMPORTS */
import { EthPrice, NftTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'
export default function DetailsDesc({ data }) {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}>
        <NftTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{
        marginVertical: SIZES.extraLarge * 1.5,
      }}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>Description</Text>
        <View style={{
          marginTop: SIZES.base,
        }}>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!readMore && ``}
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: 'blue',

            }}
              onPress={() => {

                if (!readMore) {
                  setText(data.description)
                  setReadMore(true)

                }
                else {
                  setText(data.description.slice(0, 100))
                  setReadMore(false)
                }
              }
              }
            >
              {readMore ? 'ShowLess' : '...Readmore'}
            </Text>
          </Text>

        </View>
      </View>

    </>
  )
}