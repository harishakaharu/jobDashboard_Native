import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const JobAbout = ({ tabs, activeTab, activeTabHandler }) => {
  const dynamicStyle = (data) => {
    if (data === activeTab) {
      return {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#4299e1",
        borderRadius: 10,
        padding: 10,
      };
    } else {
      return {
        borderWidth: 0,
        borderColor: "#ccc",
        backgroundColor: "transparent",
        borderRadius: 10,
        padding: 10,
      };
    }
  };

  return (
    <View>
      <View className="flex flex-row justify-evenly items-center">
        {tabs.map((data, i) => (
          <TouchableOpacity
            style={dynamicStyle(data)}
            key={data + i}
            onPress={() => activeTabHandler(data)}
            className="ml-2 mr-2 w-1/3"
          >
            <Text className="text text-center">{data}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="bg-gray-200 p-2 ml-2 my-2 items-center">
        <Text className="text-gray-800 text-2xl font-bold">{activeTab}</Text>
      </View>
    </View>
  );
};

export default JobAbout;
