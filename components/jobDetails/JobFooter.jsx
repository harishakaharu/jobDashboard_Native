import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";

const JobFooter = ({ jobUrl }) => {
  const pressHandler = () => {
    Linking.openURL(jobUrl);
  };
  return (
    <View className="my-10 ml-5 items-center">
      <TouchableOpacity
        className="ml-2 mr-2 bg-red-300 rounded-lg py-3 px4 w-1/3"
        onPress={pressHandler}
      >
        <Text className="text-#525050 font-bold text-center">Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;
