import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import FEFLogo from '../../assets/FEFLogo.png'
import { useUserContext } from '../../contexts/UserContext';

const Header = (props) => {
  const {logoutUser, user} = useUserContext();

  const handleLogoutClick = async () => {
    logoutUser();
  }
  
    return (
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
            <Image source={FEFLogo} style={{width: 50, height: 50}} />
          <Text style={styles.headerText}>{props.name}</Text>
        </View>
        {user && 
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogoutClick}><Text style={styles.logoutBtnText}>Log Out</Text></TouchableOpacity>
        }
      </View>
    );
  };

export default Header

const styles = StyleSheet.create({
    logoContainer: {
        paddingLeft: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContainer: {
      backgroundColor: 'black',
      height: 100,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingTop: 16,
      paddingHorizontal: 16,
    },
    headerText: {
      fontSize: 30,
      fontWeight: '400',
      color: '#fff',
      paddingLeft: 16,
    },
    logoutBtn: {
      backgroundColor: 'red',
      padding: 8,
      borderRadius: 5,
    },
    logoutBtnText: {
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
  });