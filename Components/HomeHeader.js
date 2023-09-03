import { View, Text ,Image,TextInput} from 'react-native'

/* lOCAL Imports */
import { COLORS, FONTS, SIZES, assets } from '../constants'

export default function HomeHeader({onSearch}) {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
    }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={assets.logo}
          resizeMode='contain'
          style={{
            width: 90,
            height: 20,
          }}
        />
        <View style={{
          width: 45,
          height: 45,
        }}
        >
          <Image
            source={assets.person04}
            resizeMode='contain'
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            source={assets.badge}
            resizeMode='contain'
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{
        marginVertical: SIZES.font
      }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.medium,
          color: COLORS.white,
        }}>
          Hello, Taimoor
        </Text>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.extraLarge,
          color: COLORS.white,
          marginTop: SIZES.base/2,
        }}>
          Welcome Back!
        </Text>
      </View>
      <View style={{
        marginTop: SIZES.font,
      }}>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small/2,
        }}>
          <Image
            source={assets.search}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder='Search for NFTs, Collectibles, and more'
            style={{
              flex: 1,
            }}
            onChangeText={onSearch}
          />
        </View>
        </View>
    </View>
  )
}