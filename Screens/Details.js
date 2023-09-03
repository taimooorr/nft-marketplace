import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import React from 'react'


/* Local Imports */
import {
  COLORS,
  SIZES,
  FONTS,
  assets,
  SHADOWS
}
  from '../constants'
import {
  CircleButton,
  FocusedStatusBar,
  RectButton,
  DetailsDesc,
  DetailsBid,
  SubInfo,
}
  from '../Components/index'

const DetailsHeader = ({ data, navigation }) => {
  console.log(data)
  return (
  <View style={{
    width: '100%',
    height: 373,
  }}
  >
    <Image
      source={data.image}
      resizeMode='cover'
      style={{
        width: '100%',
        height: '100%',
      }}
      />
      <CircleButton imgUrl={assets.left} handlePress={
        () => navigation.goBack()
    }
        left={15}
        top={StatusBar.currentHeight + 8}
      />
      <CircleButton imgUrl={assets.heart} handlePress={
        () => console.log('added to fav')
      }
        right={15}
        top={StatusBar.currentHeight + 8}
      />
    </View>
  )
}


export default function Details({ route, navigation }) {
  const { data } = route.params;

  
  
  return (
    <SafeAreaView style={{
      flex: 1,
    }}
    >
      <FocusedStatusBar barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent={true} />
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)' ,
        zIndex: 1,
      }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <DetailsBid bid={
            item
          } />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge*3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailsDesc data={data} />
              {
                data.bids.length > 0 && (
                  <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,

                  }}
                  >
                    Current Bids
                  </Text>
                )
              }
            </View>
          </React.Fragment>
        )}
      
      />
    </SafeAreaView>
  )
}