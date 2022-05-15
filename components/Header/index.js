import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  return(
    <View style={styles.headerContainer}>
      <Image source={require('../../assets/images/logo.svg')} style={styles.logo} />
      <Image source={require('../../assets/images/menu.svg')} style={styles.menu} />
    </View>
  );
};

export default Header;
