import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl">Home</Text>
      <Link href="/profile" className="mt-4 text-blue-500 underline">
        Go to Profile
      </Link>
    </View>
  );
};

export default Page;
