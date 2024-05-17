import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HeaderScreenBtn = ({ iconURL, dimension, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Image
        source={iconURL}
        style={{ height: dimension, width: dimension }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default HeaderScreenBtn;
