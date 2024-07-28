import { Ionicons } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";
import { readData, writeData } from "../firebase/functions";

const Record = () => {
  const { id } = useLocalSearchParams();
  const isEdit = !!id;

  const [record, setRecord] = useState({
    name: "",
    contact: 0,
    email: "",
    address: "",
    password: "",
    image: null,
  });

  useEffect(() => {
    if (isEdit) {
      const fetchData = async () => {
        const response = await readData(id);
        setRecord(response);
      };
      fetchData();
    }
  }, [id]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setRecord((prev) => ({ ...prev, image: result.assets[0].uri }));
    }
  };

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
      record.password === "" ||
      record.image === null
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await writeData(isEdit ? id : uuid.v4(), record);
      if (isEdit) {
        alert("Record updated successfully");
      } else {
        alert("Record saved successfully");
      }
    } catch (error) {
      alert(error);
    } finally {
      router.push("/list");
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full flex flex-1 items-center justify-center gap-4">
      <View className="w-[90%] flex flex-row items-center gap-10">
        <Link href="/">
          <Ionicons
            name="arrow-back-circle-outline"
            size={32}
            color="#bdc6e4"
          />
        </Link>
        <Text className="text-accent text-2xl font-sextrabold">
          {isEdit ? "Edit" : "Enter"} Record Details
        </Text>
      </View>

      <View className="w-[90%] h-[80%] bg-secondary rounded-xl p-8 flex items-center justify-between">
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          <View className="space-y-4">
            <View>
              <Text className="font-ssemibold text-lg">Name: </Text>
              <TextInput
                placeholder="Utkarsh Singhal"
                className="border-2 border-accent p-4 rounded-lg focus:border-accent focus:outline-none placeholder:text-gray-400"
                value={record.name}
                onChangeText={(value) => handleChange(value, "name")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Contact: </Text>
              <TextInput
                placeholder="7303478907"
                className="border-2 border-accent p-4 rounded-lg focus:border-accent focus:outline-none placeholder:text-gray-400"
                keyboardType="numeric"
                value={record.contact === 0 ? "" : record.contact.toString()}
                onChangeText={(value) => handleChange(value, "contact", true)}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Email: </Text>
              <TextInput
                placeholder="singhalutkarsh26@gmail.com"
                className="border-2 border-accent p-4 rounded-lg focus:border-accent focus:outline-none placeholder:text-gray-400"
                keyboardType="email-address"
                value={record.email}
                onChangeText={(value) => handleChange(value, "email")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Address: </Text>
              <TextInput
                placeholder="Delhi, India"
                className="border-2 border-accent p-4 rounded-lg focus:border-accent focus:outline-none placeholder:text-gray-400"
                value={record.address}
                onChangeText={(value) => handleChange(value, "address")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Password: </Text>
              <TextInput
                placeholder="Enter Password"
                className="border-2 border-accent p-4 rounded-lg focus:border-accent focus:outline-none placeholder:text-gray-400"
                secureTextEntry={true}
                value={record.password}
                onChangeText={(value) => handleChange(value, "password")}
              />
            </View>

            <View>
              <Text className="font-ssemibold text-lg">Profile Picture: </Text>
              <Pressable onPress={pickImage}>
                {record.image ? (
                  <Image
                    source={{ uri: record.image }}
                    className="w-60 h-60 object-contain rounded-lg"
                  />
                ) : (
                  <Text className="font-smedium w-full border-2 border-primary text-black text-center py-2 rounded-lg">
                    Pick an Image
                  </Text>
                )}
              </Pressable>
            </View>
          </View>

          <Pressable
            onPress={handleSubmit}
            className="bg-primary p-4 rounded-lg w-full mt-6"
            activeOpacity={0.7}
          >
            <Text className="text-white text-center">
              {isEdit ? "Update" : "Save"} Record
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Record;
