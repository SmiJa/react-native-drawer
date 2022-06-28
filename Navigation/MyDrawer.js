import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './../Screens/Home';
import About from './../Screens/About';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}