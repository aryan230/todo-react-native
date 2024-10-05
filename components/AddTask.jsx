import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState();

  return (
    <View>
      <Text
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </Text>
      <View className="relative">
        <TextInput
          className="block w-full p-4 ps-10 text-sm text-white rounded-lg bg-[#1e1e1e]"
          placeholder="write your next task"
          placeholderTextColor="#645e54"
          value={input}
          onChangeText={(e) => setInput(e)}
          onSubmitEditing={() => {
            addTask({
              completed: false,
              name: input,
            });
            setInput("");
          }}
        />
        <TouchableOpacity
          type="submit"
          onPress={() => {
            addTask({
              completed: false,
              name: input,
            });
            setInput("");
          }}
          className="text-white absolute right-2.5 bottom-2.5 bg-[#ff5631] rounded-lg text-sm px-4 py-2"
        >
          <Text className="text-[#0b070a] font-medium">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
