import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { welcomeStyle } from "../assets/styles/welcome.style";
import { router } from "expo-router";

const jobTypes = ["Part-time", "Full-time", "Contractual"];
const Welcome = ({ searchVal, setSearchVal, searchHandler }) => {
  const [activeJobs, setActiveJobs] = useState("Full-time");
  return (
    <View>
      <View>
        <Text className="text-xl">Hello Harish,</Text>
        <Text className="text-2xl font-bold text-#2e2626">
          Find your perfect job!
        </Text>
      </View>
      <View style={welcomeStyle.searchContainer}>
        <View
          className="flex rounded-lg my-2"
          style={welcomeStyle.txtContainer}
        >
          <TextInput
            onChangeText={(text) => setSearchVal(text)}
            placeholder="What are you looking for..."
            className="flex-grow px-2 py-2  bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></TextInput>
        </View>
        <TouchableOpacity
          style={welcomeStyle.searchIcon}
          onPress={searchHandler}
          className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
        >
          <FontAwesome name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row"
      >
        {jobTypes.map((searchVal, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              setActiveJobs(searchVal);
              router.push(`/search/${searchVal}`);
            }}
            className="ml-1"
          >
            <Text
              className="border border-gray-300 rounded-lg my-1  px-4 py-2 text-base"
              style={{
                backgroundColor: `${
                  activeJobs == searchVal ? "#d6d6d6d3" : "#fffefed3"
                }`,
                color: `${activeJobs == searchVal ? "black" : "#635f5fd3"}`,
                textAlign: "center",
              }}
            >
              {searchVal}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Welcome;
