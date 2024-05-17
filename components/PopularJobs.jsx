import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { popularJobsStyle } from "../assets/styles/popularJobs.style";
import PopularJobCard from "./PopularJobCard";
import useFetchHook from "../hooks/useFetchHook";
import { router } from "expo-router";

const PopularJobs = () => {
  let pageNo = 1;
  let searchVal = "React";
  const { isLoading, hasError, data, reFetch } = useFetchHook(
    "search",
    {
      query: "React Developer",
    },
    pageNo
  );
  const pressHandler = (id) => {
    router.push(`/job-details/${id}`);
  };

  return (
    <View style={popularJobsStyle.main}>
      <View className="my-4 flex flex-row justify-between items-center">
        <Text className="text-xl">Popular Jobs</Text>
        <TouchableOpacity onPress={() => router.push(`/search/${searchVal}`)}>
          <Text className="text-blue-400 px-3">Show All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size={24} />
        ) : hasError ? (
          <View className=" p-2 ml-2 my-2 justify-center items-center">
            <Text className="text-gray-800 text-xl font-bold">
              Something went wrong {console.log(hasError)}
            </Text>
          </View>
        ) : (
          <ScrollView
            horizontal
            className="flex flex-row"
            showsHorizontalScrollIndicator={false}
          >
            {data.map((data, i) => (
              <PopularJobCard data={data} key={i} handlePress={pressHandler} />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
