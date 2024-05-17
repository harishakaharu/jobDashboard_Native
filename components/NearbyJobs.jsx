import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { nearbyJobsStyle } from "../assets/styles/nearbyJob.style";
import NearbyJobCard from "./NearbyJobCard";
import useFetchHook from "../hooks/useFetchHook";
import { router } from "expo-router";

const NearbyJobs = () => {
  let pageNo = 1;
  let searchVal = "React";
  const { isLoading, hasError, data, reFetch } = useFetchHook(
    "search",
    {
      query: "React Developer",
    },
    pageNo
  );
  return (
    <View style={nearbyJobsStyle.main}>
      <View className="my-4 flex flex-row justify-between items-center">
        <Text className="text-xl">Nearby Jobs</Text>
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
            className="flex flex-row"
            showsVerticalScrollIndicator={false}
          >
            {data.map((job, i) => (
              <NearbyJobCard
                data={job}
                key={job?.job_id}
                handleNavigate={() =>
                  router.push(`/job-details/${job?.job_id}`)
                }
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
export default NearbyJobs;
