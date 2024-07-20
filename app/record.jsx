import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { writeData } from "../firebase/functions";

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

  const handleSubmit = async () => {
    if (
      record.name === "" ||
      record.contact === 0 ||
      record.email === "" ||
      record.address === "" ||
      record.password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await writeData(nanoid(), record);
      alert("Record saved successfully");
      setRecord({
        name: "",
        contact: 0,
        email: "",
        address: "",
        password: "",
      });
    } catch (error) {
      alert(error);
    }
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

      <View className="w-[90%] h-[80%] bg-secondary rounded-xl p-8 flex items-center justify-between">
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

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-primary p-4 rounded-lg w-full mt-6"
            activeOpacity={0.7}
          >
            <Text className="text-white text-center">Save Record</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Record;
