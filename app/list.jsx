import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { listData } from "../firebase/functions";

const List = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await listData();
      setRecords(response);
    };
    fetchRecords();
  }, []);

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
              <DataTable.Title className="border-r-2 border-accent mr-2">Name</DataTable.Title>
              <DataTable.Title className="border-r-2 border-accent mr-2">Contact</DataTable.Title>
              <DataTable.Title className="border-r-2 border-accent mr-2">Email</DataTable.Title>
              <DataTable.Title>Address</DataTable.Title>
            </DataTable.Header>

            {records.map((record) => (
              <DataTable.Row key={record.id} className="border-accent">
                <DataTable.Cell className="border-r-2 border-accent mr-2">{record.name}</DataTable.Cell>
                <DataTable.Cell className="border-r-2 border-accent mr-2">{record.contact}</DataTable.Cell>
                <DataTable.Cell className="border-r-2 border-accent mr-2">{record.email}</DataTable.Cell>
                <DataTable.Cell>{record.address}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default List;
