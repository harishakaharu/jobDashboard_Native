import { View, Text } from "react-native";
import React from "react";

const AboutSpecifics = ({ details }) => {
  return details.map((data, index) => (
    <View key={data + index} className="px-2 py-2">
      <Text>
        {"\u2022"} {data}
      </Text>
    </View>
  ));
};

export default AboutSpecifics;
