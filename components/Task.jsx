import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Edit, Trash } from "lucide-react-native";

const Task = ({ t, setData, index, data, removeTask, updateTask }) => {
  const [isChecked, setChecked] = useState(t.completed);

  return (
    <View className="w-[100%] bg-[#1e1e1e] border border-[#4b453e] mx-auto my-2 rounded-xl flex-row items-center justify-between px-4 py-3">
      <View className="flex items-center justify-center">
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            className={`w-5 h-5 border border-[#ff5631] ${
              isChecked && "bg-[#ff5631] border-0"
            } rounded-full`}
            onPress={(e) => {
              updateTask(!isChecked, index);
              setChecked(!isChecked);
            }}
          />

          <Text
            className={`ml-1 text-[#c2b39b] font-black ${
              isChecked && "line-through"
            }`}
          >
            {" "}
            {t.name}
          </Text>
        </View>
      </View>
      <View>
        <Text>
          <Trash
            color="#b2a48f"
            onPress={(e) => {
              removeTask(index);
            }}
          />
        </Text>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
