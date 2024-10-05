import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Modal = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="w-[100%] mx-auto h-[50%] absolute bottom-0 right-0 bg-white">
        <View className="">
          <Text>Hello, I am a modal!</Text>
          {/* Button to close modal */}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modal;

const styles = StyleSheet.create({});
