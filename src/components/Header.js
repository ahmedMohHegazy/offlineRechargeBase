import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../utilities/colors';
import {
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utilities/Helper';

const Header = ({backIcon = false, onBackPress, title}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={
            backIcon
              ? () => {
                  onBackPress();
                }
              : () => {}
          }
          activeOpacity={backIcon ? 0.5 : 1}
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {backIcon ? (
            <View style={{marginEnd: responsiveWidth(20)}}>
              <Image style={{height:24,width:24}}  source={require('../assets/Icons/arrowBack.png')} />
            </View>
          ) : null}
          <Text
            style={{
              textAlignVertical: 'center',
              color: colors.white,
              fontSize: getFontSize(20),
              lineHeight: 28,
            }}>
            {title}
          </Text>
        </TouchableOpacity>
        <Image source={require('../assets/images/PylonLogo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(64),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(16),
    backgroundColor: colors.blue,
    width: '100%',
  },
});
export default Header;
