import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from './SummaryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Transactions') {
            iconName = focused ? 'file1' : 'file1';
          } else if (route.name === 'Summary') {
            iconName = focused ? 'info' : 'info';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5F8CB9',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Transactions" component={TransactionsStack} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
