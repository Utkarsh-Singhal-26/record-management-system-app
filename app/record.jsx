import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Record = () => {
  const [record, setRecord] = useState({
    name: "",
    contact: 0,
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (value, field, isNumber) => {
    if (field === "contact") {
      value = value.replace(/[^0-9]/g, "");
    }
    setRecord({
      ...record,
      [field]: isNumber ? parseInt(value) : value,
    });
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full flex items-center justify-center gap-4">
      <View className="w-[90%] flex flex-row items-center gap-10">
        <Link href="/">
          <Ionicons
            name="arrow-back-circle-outline"
            size={32}
            color="#bdc6e4"
          />
        </Link>
        <Text className="text-accent text-2xl font-sextrabold">
          Enter Record Details
        </Text>
      </View>

      <View className="w-[90%] h-[70%] bg-secondary rounded-xl p-8 flex items-center justify-between">
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          <View className="space-y-4">
            <View>
              <Text className="font-ssemibold text-lg">Name: </Text>
              <TextInput
                placeholder="Utkarsh Singhal"
                className="input-field"
                value={record.name}
                onChangeText={(value) => handleChange(value, "name")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Contact: </Text>
              <TextInput
                placeholder="7303478907"
                className="input-field"
                keyboardType="numeric"
                value={record.contact === 0 ? "" : record.contact.toString()}
                onChangeText={(value) => handleChange(value, "contact", true)}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Email: </Text>
              <TextInput
                placeholder="singhalutkarsh26@gmail.com"
                className="input-field"
                keyboardType="email-address"
                value={record.email}
                onChangeText={(value) => handleChange(value, "email")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Address: </Text>
              <TextInput
                placeholder="Delhi, India"
                className="input-field"
                value={record.address}
                onChangeText={(value) => handleChange(value, "address")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Password: </Text>
              <TextInput
                placeholder="Enter Password"
                className="input-field"
                secureTextEntry={true}
                value={record.password}
                onChangeText={(value) => handleChange(value, "password")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Record;
