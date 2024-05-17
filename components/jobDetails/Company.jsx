import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { defaultJobLogo } from "../../constants/contants";

import checkImageUrl from "../../utils/checkImageUrl";

const Company = ({ companyLogo, jobLoc, jobTitle, compName }) => {
  return (
    <View className="flex justify-center items-center my-2 ml-2 border border-gray-300 rounded-md py-2 px-4">
      <Image
        source={{
          uri: checkImageUrl(companyLogo)._j ? companyLogo : defaultJobLogo,
        }}
        resizeMode="contain"
        className="w-40 h-40 rounded-full "
      ></Image>
      <View className="items-center">
        <Text className="text-xl my-1 ">{jobTitle}</Text>
        <Text className="text-2xl ">{compName}</Text>
        <Text className="text-xl my-1 ">{jobLoc}</Text>
      </View>
    </View>
  );
};

export default Company;
