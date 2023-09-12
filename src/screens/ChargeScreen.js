import {View, Text, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import ContainerWithHeader from '../components/ContainerWithHeader';

const ChargeScreen = () => {
  return (
    <ContainerWithHeader
      backIcon={false}
      onBackPress={() => {}}
      title={'Electricity Charging'}></ContainerWithHeader>
  );
};

export default ChargeScreen;
