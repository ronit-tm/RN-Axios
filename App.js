/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AlertDemo from './src/components/AlertDemo';
import First from './src/components/First';
import { StackNav } from './src/navigation/StackNav';
import { TabNav } from './src/navigation/TabNav';
import AxiosScreen from './src/screens/AxiosScreen';

const App = () => {
  return (
    <>
      {/* <AxiosScreen /> */}
      {/* <First /> */}
      {/* <AlertDemo /> */}
      {/* <TabNav /> */}
      <StackNav />
    </>
  );
};

export default App;