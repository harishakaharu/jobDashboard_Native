import { Stack, router } from "expo-router";
import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderScreenBtn from "../components/HeaderScreenBtn";
import Welcome from "../components/Welcome";
import PopularJobs from "../components/PopularJobs";
import NearbyJobs from "../components/NearbyJobs";
import { indexStyle } from "../assets/styles/index.style";
import menuImg from "../assets/extraImages/menu.png";
import profImg from "../assets/extraImages/profImg.jpg";

export default function index() {
  const [searchVal, setSearchVal] = useState("");
  console.log(searchVal);
  const searchHandler = () => {
    if (searchVal) router.push(`/search/${searchVal}`);
  };
  const onPressHandler = () => {
    console.log("menu");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={indexStyle.main}>
        <Stack.Screen
          options={{
            headerLeft: () => (
              <HeaderScreenBtn
                iconURL={menuImg}
                dimension={35}
                onPressHandler={onPressHandler}
              />
            ),
            headerRight: () => (
              <HeaderScreenBtn
                iconURL={profImg}
                dimension={35}
                onPressHandler={onPressHandler}
              />
            ),
            headerTitle: "",
          }}
        />
        <ScrollView>
          <View style={indexStyle.mainView}>
            <Welcome
              searchVal={searchVal}
              setSearchVal={setSearchVal}
              searchHandler={searchHandler}
            />
            <PopularJobs />
            <NearbyJobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
