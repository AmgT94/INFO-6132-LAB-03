import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

const TransactionsListScreen = ({ navigation, transactions }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: 'Transactions List' });
  }, [navigation]);

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.transactionItem}
      onPress={() => navigation.navigate('TransactionDetailScreen', { transaction: item })}
    >
      <Text>{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.amount}>${item.amount}</Text>
        <AntDesign name="right" size={20} color="#5F8CB9" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    marginRight: 10,
    color: '#5F8CB9',
  },
});

const mapStateToProps = (state) => ({
  transactions: state.transactionsData,
});

export default connect(mapStateToProps)(TransactionsListScreen);
