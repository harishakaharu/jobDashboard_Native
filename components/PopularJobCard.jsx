import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import checkImageUrl from "../utils/checkImageUrl";
import { defaultJobLogo } from "../constants/contants";

const PopularJobCard = ({ data, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(data.job_id)}
      className="justify-center items-center ml-1 px-1 py-1"
    >
      <TouchableOpacity className="border border-#gray-300 rounded-full px-1 py-1">
        <Image
          source={{
            uri: checkImageUrl(data.employer_logo)._j
              ? data.employer_logo
              : defaultJobLogo,
          }}
          resizeMode="contain"
          className="w-40 h-40 rounded-full"
        />
      </TouchableOpacity>
      <Text numberOfLines={1} className="my-1">
        {data.employer_name}
      </Text>
      <View className="justify-center items-center">
        <Text numberOfLines={1} className="text-xl">
          {data.job_title.substring(0, 10)}
          {data.job_title.length > 10 ? "..." : ""}
        </Text>
        <Text numberOfLines={1}>{data.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
