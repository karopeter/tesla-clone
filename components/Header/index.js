import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.svg')} />
      <Image style={styles.menu} source={require('../../assets/images/menu.svg')} />
    </View>
  );
};

export default Header;
