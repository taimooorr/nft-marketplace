import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'


/* Local Imports */
import { COLORS, NFTData } from '../constants'
import { HomeHeader, NFTCard, FocusedStatusBar } from '../Components/index'
export default function Home() {
  const [nftData, setNftData] = useState(NFTData);

  /* Search HANDLER */
  const handleSearch = (text) => {
    if (!text.length) {
      return setNftData(NFTData)
    }
    const filteredData = NFTData.filter((item) => {
      item.name.toLowerCase().includes(text.toLowerCase())
    })
    if (filteredData.length) {
      setNftData(filteredData)
    }
    else {
      setNftData(NFTData)
    }
  }
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{}}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <NFTCard data={item} />}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ zIndex: -1, position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, height: 100, }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, height: 300, backgroundColor: COLORS.white }}></View>
        </View>

      </View>

    </SafeAreaView>

  )
}