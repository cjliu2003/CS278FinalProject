import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useUserContext } from '../contexts/UserContext'

const Profile = ({navigation}) => {
  const {user} = useUserContext()
  useEffect(() => {
    if (!user) {
      navigation.replace("Login")
    }
  }, [user])

  const navigateSettings = () => {
    navigation.navigate("Settings")
  }
  
  return (
    <View style={styles.container}>
      <Header name="Profile" />
      <TouchableOpacity onPress={navigateSettings} style={styles.moreButton}>
        <Text style={styles.moreButtonText}>...</Text>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/create.png')} style={styles.profilePic} />
        <Text style={styles.name}>name</Text>
        <Text style={styles.bio}>Bio text goes here</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Memories')}>
          <Text style={styles.ctaButtonText}>View Memories</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  )
}

export default Profile

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
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff'
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
    marginBottom: 32,
    color: '#fff'
  },
  ctaButton: {
    backgroundColor: '#ec0c0c',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  moreButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  moreButtonText: {
    fontSize: 36,
    color: '#ddd',
    fontWeight: 'bold',
  },
})