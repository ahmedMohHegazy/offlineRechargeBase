import {View, Text} from 'react-native';
import React from 'react';
import Header from './Header';

const ContainerWithHeader = ({
  children,
  backIcon = false,
  onBackPress,
  title,
}) => {
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <Header backIcon={backIcon} onBackPress={onBackPress} title={title} />
      {children}
    </View>
  );
};

export default ContainerWithHeader;
