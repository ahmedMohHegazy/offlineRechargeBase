import React from 'react';
import {StatusBar, View} from 'react-native';
import Tabs from './src/routes/AppNavigator';
import colors from './src/utilities/colors';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={colors.blue} />
      <Tabs />
    </>
  );
}

export default App;
