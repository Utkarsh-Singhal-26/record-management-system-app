import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const List = () => {
  const records = [
    {
      id: 1,
      name: "John Doe",
      contact: "123-456-7890",
      email: "john@example.com",
      address: "123 Elm St, Springfield, IL, USA",
      password: "********",
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: "987-654-3210",
      email: "jane@example.com",
      address: "456 Oak St, Springfield, IL, USA",
      password: "********",
    },
  ];

  return (
    <SafeAreaView className="bg-primary h-full w-full flex items-center justify-center gap-4">
      <View className="w-[90%] flex flex-row items-center gap-10 mb-4">
        <Link href="/">
          <Ionicons
            name="arrow-back-circle-outline"
            size={32}
            color="#bdc6e4"
          />
        </Link>
        <Text className="text-accent text-2xl font-semibold">View Records</Text>
      </View>

      <View className="w-[90%] h-[70%] bg-secondary rounded-xl p-4">
        <ScrollView horizontal>
          <DataTable>
            <DataTable.Header className="border-primary">
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Contact</DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
              <DataTable.Title>Address</DataTable.Title>
              <DataTable.Title>Password</DataTable.Title>
            </DataTable.Header>

            {records.map((record) => (
              <DataTable.Row key={record.id} className="border-accent">
                <DataTable.Cell>{record.name}</DataTable.Cell>
                <DataTable.Cell>{record.contact}</DataTable.Cell>
                <DataTable.Cell>{record.email}</DataTable.Cell>
                <DataTable.Cell>{record.address}</DataTable.Cell>
                <DataTable.Cell>{record.password}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default List;
