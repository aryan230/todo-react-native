import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Edit, Plus, Trash } from "lucide-react-native";
import Checkbox from "expo-checkbox";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
const RootLayout = () => {
  const [data, setData] = useState();
  const addTask = async (task) => {
    const updatedTasks = [...data, task];
    await setData(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = async (index) => {
    const updatedTasks = data.filter((_, i) => i !== index);
    await setData(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTask = async (check, index) => {
    const updatedTodo = { ...data[index], completed: check };
    const updatedTasks = [
      ...data.slice(0, index),
      updatedTodo,
      ...data.slice(index + 1),
    ];
    await setData(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("tasks");
      if (value) {
        console.log(value);
        setData(JSON.parse(value));
      } else {
        setData([]);
      }
    } catch (error) {
      setData([]);
      console.warn(error);
    }
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, [data]);

  return (
    <SafeAreaView className="h-full bg-[#0d0d0d]">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        {data && (
          <View className="w-[80%] mx-auto spacey-2">
            <View className="border-2 border-[#514b42] rounded-xl p-5 flex-row items-center justify-between">
              <View>
                <Text className="text-[#c2b39b] text-2xl font-black">
                  Todo Done
                </Text>
                <Text className="text-[#c2b39b]">keep it up</Text>
              </View>
              <View>
                <View className="w-32 h-32 bg-[#ff5631] rounded-full flex items-center justify-center">
                  <Text className="text-[#0a0c0d] text-3xl font-black">
                    {data.filter((t) => t.completed === true).length}/
                    {data.length}
                  </Text>
                </View>
              </View>
            </View>
            <View className="w-[100%] mt-5">
              <AddTask addTask={addTask} />
            </View>
            {/* <TouchableOpacity
              type="submit"
              onPress={async () => {
                try {
                  await AsyncStorage.removeItem("tasks");
                  setData([]);
                } catch (e) {
                  console.warn("er");
                }
              }}
              className="text-white"
            >
              <Text className="text-orange-500 font-medium">remove</Text>
            </TouchableOpacity> */}
            <View className="mt-5 overflow-y-auto">
              {data.length > 0 &&
                data.map((t, index) => (
                  <Task
                    key={index}
                    t={t}
                    index={index}
                    setData={setData}
                    data={data}
                    removeTask={removeTask}
                    updateTask={updateTask}
                  />
                ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
