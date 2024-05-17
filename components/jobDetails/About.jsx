import { View, Text } from "react-native";
import React from "react";

const About = ({ details }) => {
  return (
    <View className="py-2 px-2">
      <Text>{details}</Text>
    </View>
  );
};

export default About;
