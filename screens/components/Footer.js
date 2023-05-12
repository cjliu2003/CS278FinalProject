import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import HomeLogo from '../../assets/home.png'
import ProfileLogo from '../../assets/profile.png'
import CreateLogo from '../../assets/create.png'

import CameraModal from '../modals/cameraModal';

const screenWidth = Dimensions.get('window').width;

const Footer = (props) => {
    const [postModalVisible, setPostModalVisible] = useState(false);
    const handleProfileClick = () => {
        props.navigateProfile();
        console.log("clicked")
    }
    const handlePostClick = () => {
        setPostModalVisible(true);
    }

    const handleCloseModal = () => {
        setPostModalVisible(false);
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
            <Image source={HomeLogo} style={{width: 40, height: 40}} />
            <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePostClick} style={styles.iconContainer}>
            <Image source={CreateLogo} style={{width: 75, height: 75}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfileClick} style={styles.iconContainer}>
            <Image source={ProfileLogo} style={{width: 40, height: 40}} />
            <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>

        <Modal visible={postModalVisible}>
            <CameraModal closeModal={handleCloseModal} animationType="slide"/>
        </Modal>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconText: {
        color: '#fff',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})