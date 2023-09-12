import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import ChargeNavigator from './ChargeNavigator';
import HistoryNavigator from './HistoryNavigator';
import colors from '../utilities/colors';
import {
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utilities/Helper';
import {Image, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: styles.TabBar,
          tabBarLabelStyle: styles.TabBarLabelStyle,
          tabBarIcon: ({focused, color, size}) => {
            let iconComponent;
            const iconWidth = responsiveWidth(20);
            const iconHeight = responsiveHeight(20);
            if (route.name === 'Recharge') {
              iconComponent = (
                <Image
                  style={{
                    width: iconWidth,
                    height: iconHeight,
                  }}
                  source={
                    focused
                      ? require('../assets/Icons/electricIconWhite.png')
                      : require('../assets/Icons/electricIcon.png')
                  }
                />
              );
            } else if (route.name === 'Transactions') {
              iconComponent = (
                <Image
                  style={{
                    width: iconWidth,
                    height: iconHeight,
                  }}
                  source={
                    focused
                      ? require('../assets/Icons/transactionsIconWhite.png')
                      : require('../assets/Icons/transactionsIcon.png')
                  }
                />
              );
            }
            return (
              <View
                style={[
                  styles.TabBarLabelIcon,
                  {
                    backgroundColor: focused ? colors.blue : colors.white,
                  },
                ]}>
                {iconComponent}
              </View>
            );
          },
          tabBarActiveTintColor: colors.darkGray,
          tabBarInactiveTintColor: colors.gray,
        })}>
        <Tab.Screen name="Recharge" component={ChargeNavigator} />
        <Tab.Screen name="Transactions" component={HistoryNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    paddingBottom: responsiveHeight(15),
    height: responsiveHeight(80),
    elevation: 0, // for Android
    shadowOffset: {
      width: 0,
      height: 0, // for iOS
    },
    borderTopColor: colors.gray,
  },
  TabBarLabelStyle: {
    fontSize: getFontSize(12),
    fontWeight: 500,
  },
  TabBarLabelIcon: {
    paddingVertical: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
