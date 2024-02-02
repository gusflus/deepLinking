import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TestPage2 = ({route}: {route: any}) => {
  const theme = useTheme();
  const styles = allStyles(theme);

  const {id} = route?.params || {};

  return (
    <View style={styles.container}>
      <Text>Test Page 2</Text>
      <Text>id: {id}</Text>
    </View>
  );
};

export default TestPage2;

const allStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
  });
