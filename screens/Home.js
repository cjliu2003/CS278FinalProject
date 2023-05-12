import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useUserContext } from '../contexts/UserContext'

const Home = ({navigation}) => {
  const {user} = useUserContext();

  useEffect(() => {
    if (!user) {
      navigation.navigate("Login")
    }
  }, [user])

  const navigateProfile = () => {
    navigation.navigate("Profile")
  }
  return (
    <View style={styles.container}>
        <Header name="Home"/>
      <Text></Text>
      <View style={styles.footerContainer}>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text>Test navigation to login</Text></TouchableOpacity> */}
        <Footer 
          navigateProfile={navigateProfile}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 40,
    }
})