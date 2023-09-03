import { View, Text, Image } from 'react-native'
import React from 'react'

/* ThirdpartyImports */
import { useNavigation } from '@react-navigation/native';

/* LocalImprts */
import { SubInfo,EthPrice,NftTitle } from './SubInfo';
import {CircleButton, RectButton} from '../Components/index'
import { COLORS,SIZES,SHADOWS, assets } from '../constants';
export default function NFTCard({ data }) {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,

    }}>
      <View style={{
        width: '100%',
        height: 250,
      }}>
        <Image 
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo/>
      <View style={{
        width: '100%',
        padding: SIZES.font
      }}>
        <NftTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View style={{
          marginTop: SIZES.font,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', {
              data: data
            })}
          />
        </View>
        </View>    
    </View>
  )
}