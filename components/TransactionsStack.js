import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './TransactionsListScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5F8CB9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsListScreen}
        options={{ title: 'Transactions List' }}
      />
      <Stack.Screen
        name="TransactionDetailScreen"
        component={TransactionDetailScreen}
        options={{ title: 'Transaction Detail' }}
      />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
