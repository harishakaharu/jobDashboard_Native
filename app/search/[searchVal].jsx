import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import left from "../../assets/extraImages/left.png";
import { router, Stack, useNavigation } from "expo-router";
import React, { memo, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import useFetchHook from "../../hooks/useFetchHook";
import NearbyJobCard from "../../components/NearbyJobCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScreenHdrBtn } from "../../components/jobDetails/index";

const searchDetails = memo(() => {
  const [pageNo, setPageNo] = useState(1);
  const nav = useNavigation();
  const { params } = useRoute();
  const { searchVal } = params;
  const { isLoading, hasError, data, reFetch } = useFetchHook(
    "search",
    {
      query: searchVal,
    },
    pageNo
  );
  useEffect(() => {
    reFetch();
  }, [pageNo]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHdrBtn
                dimension={35}
                iconURL={left}
                onPressHandler={() => nav.goBack()}
              />
            ),
            headerTitle: "",
          }}
        />
        <View className="bg-gray-200 p-2 ml-2 my-2 items-center">
          <Text className="text-gray-800 text-xl font-bold">
            Search Results for : {searchVal}
          </Text>
        </View>
        <ScrollView>
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
              className="flex flex-row ml-2"
              //showsVerticalScrollIndicator={false}
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
        </ScrollView>
        <View className="flex flex-row ml-2 my-2 justify-evenly items-center">
          <TouchableOpacity
            className="px-8 py-4  bg-red-300 rounded-lg"
            onPress={() => {
              if (pageNo > 1) {
                setPageNo((prev) => --prev);
              }
            }}
          >
            <Text className="text-xl">{"<"}</Text>
          </TouchableOpacity>

          <Text className="px-2 py-2 text-xl">{`Page : ${pageNo}`}</Text>
          <TouchableOpacity
            className="px-8 py-4  bg-red-300 rounded-lg"
            onPress={() => {
              setPageNo((prev) => ++prev);
            }}
          >
            <Text className="text-xl">{">"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
});

export default searchDetails;
