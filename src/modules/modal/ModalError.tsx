import React from 'react';
import { Alert, Modal as ModalReact, StyleSheet, Pressable, View } from 'react-native';
import Text from '../shared/components/text/Text';
import { Icon } from '../shared/icon/icon';
import { textTypes } from '../shared/components/text/textType';

interface ModalProps {
  title: string
  text: string
  onCloseModal: () => void
  visible: boolean
}

const Modal: React.FC<ModalProps> = ({ title, text, onCloseModal, visible, ...props }) => {
  
  return (
    <View style={styles.centeredView}>
      <ModalReact
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          onCloseModal()
        }}
        {...props}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="cancel-circle" style={styles.icon} size={70}></Icon>
            <Text style={styles.modalTitle} type={textTypes.SUBTITLE_BOLD}>{title}</Text>
            <Text style={styles.modalText}>{text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onCloseModal}>
              <Text style={styles.textStyle}>OK !</Text>
            </Pressable>
          </View>
        </View>
      </ModalReact>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {
    marginTop: '40%',
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 100,
  },
  icon : {
    color: '#F44B4B',
    marginBottom: 20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    margin: 0,
    width: '50%',
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    width: '50%',
    backgroundColor: '#F44B4B',
    margin: 20
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 10
  },
  modalText: {
    margin: 0,
    textAlign: 'center',
    borderRadius: 2,
    fontFamily: 'Poppins-Bold'
  },
});

export default Modal;
