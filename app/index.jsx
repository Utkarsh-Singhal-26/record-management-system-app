import { Link } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const handlePress = () => {
    alert("Button Pressed!");
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full flex items-center justify-center gap-4">
      <Text className="text-accent text-3xl text-center font-sextrabold">
        Record Management <br /> System App
      </Text>
      <View className="w-[90%] h-[30%] bg-secondary rounded-xl p-8 flex items-center justify-between">
        <View className="w-full">
          <Text className="font-sbold">
            Number of Records currently with us :
          </Text>
          <TextInput value="1034" className="input-field" editable={false} />
        </View>

        <View className="w-full grid grid-cols-2 gap-4">
          <Link href="/record">
            <TouchableOpacity
              className="bg-primary p-4 rounded-lg"
              activeOpacity={0.7}
            >
              <Text className="text-white text-center">Create Record</Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity
            onPress={handlePress}
            className="border-2 border-primary rounded-lg"
          >
            <Text className="text-black p-4 text-center">View Records</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
