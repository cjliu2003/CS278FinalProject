import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import Header from './components/Header';

const Settings = () => {
  const [name, setName] = useState("Your Name");
  const [bio, setBio] = useState("Your Bio");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState("name");

  const handleNameChange = () => {
    setActiveModal("name")
    setModalVisible(true);
  }

  const handleBioChange = () => {
    setActiveModal("bio")
    setModalVisible(true);
  }

  const handleSaveChanges = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Header name="Settings" />
      <TouchableOpacity style={styles.profilePicContainer}>
        <Image source={require('../assets/create.png')} style={styles.profilePic} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editName} onPress={handleNameChange}>
        <Text style={styles.editText}>Name</Text>
        <Text style={styles.editValue}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editBio} onPress={handleBioChange}>
        <Text style={styles.editText}>Bio</Text>
        <Text style={styles.editValue}>{bio}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Change {activeModal === "name" ? "Name" : "Bio"}</Text>
          <TextInput style={styles.modalInput} value={activeModal === "name" ? name : bio} onChangeText={activeModal === "name" ? setName : setBio} />
          <TouchableOpacity style={styles.modalButton} onPress={handleSaveChanges}>
            <Text style={styles.modalButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
</Modal>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#FAFAFA',
    height: 80,
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#262626',
  },
  profilePicContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    height: 20,
    width: 20,
    tintColor: '#fff',
  },
  editName: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  editBio: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  editText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#262626',
  },
  editValue: {
    fontSize: 16,
    fontWeight: '300',
    color: '#8E8E8E',
  },
  saveButton: {
    backgroundColor: 'red',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 16,
    color: '#fff',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 16,
    width: '100%',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    color: '#fff',
  },
  modalButton: {
    backgroundColor: 'red',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
  
});

export default Settings;