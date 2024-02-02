import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = ({route}: {route: any}) => {
  const theme = useTheme();
  const styles = allStyles(theme);

  const {id} = route?.params || {};

  return (
    <View style={styles.container}>
      <View>
        <Text>Home Page</Text>
        <Text>id: {id}</Text>
      </View>
    </View>
  );
};

export default Home;

const allStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
  });
