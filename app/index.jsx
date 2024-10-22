import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { countRecord } from "../firebase/functions";

const Home = () => {
  const [records, setRecords] = useState(0);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await countRecord();
      setRecords(response);
    };
    fetchRecords();
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full flex flex-1 items-center justify-center gap-4">
      <Text className="text-accent text-3xl text-center font-sextrabold">
        Record Management System App
      </Text>
      <View className="w-[90%] h-[30%] bg-secondary rounded-xl p-8 flex justify-between">
        <View className="w-full">
          <Text className="font-sbold">
            Number of Records currently with us :
          </Text>
          <Text className="border-2 border-accent p-4 rounded-lg focus:border-accent focus:outline-none placeholder:text-gray-400">
            {records}
          </Text>
        </View>

        <View className="w-full grid grid-cols-2 gap-2">
          <Pressable
            className="bg-primary p-4 rounded-lg w-full"
            onPress={() => {
              router.push("/record");
            }}
          >
            <Text className="text-white text-center">Create Record</Text>
          </Pressable>
          <Pressable
            className={`p-4 rounded-lg w-full ${
              records === 0
                ? "bg-gray-300 border-gray-300"
                : "border-2 border-primary"
            }`}
            disabled={records === 0}
            onPress={() => {
              if (records !== 0) {
                router.push("/list");
              }
            }}
          >
            <Text
              className={`text-center ${
                records === 0 ? "text-gray-500" : "text-black"
              }`}
            >
              View Records
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
