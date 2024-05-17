import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import checkImageUrl from "../utils/checkImageUrl";
import { defaultJobLogo } from "../constants/contants";
import { nearbyJobsStyle } from "../assets/styles/nearbyJob.style";

const NearbyJobCard = ({ data, handleNavigate }) => {
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      className="flex flex-row items-center ml-1 px-1 py-1"
    >
      <TouchableOpacity className="border border-#gray-300 rounded-full px-1 py-1">
        <Image
          source={{
            uri: checkImageUrl(data.employer_logo)._j
              ? data.employer_logo
              : defaultJobLogo,
          }}
          resizeMode="contain"
          className="w-20 h-20 rounded-full "
        />
      </TouchableOpacity>
      <View className="px-2 py-1">
        <Text numberOfLines={1} className="text-xl whitespace-nowrap">
          {data.job_title.substring(0, 30)}
          {data.job_title.length > 30 ? "..." : ""}
        </Text>
        <Text numberOfLines={1} style={nearbyJobsStyle.txt}>
          {data.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
