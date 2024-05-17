import React, { useState } from "react";

import left from "../../assets/extraImages/left.png";
import share from "../../assets/extraImages/share.png";
import { useRoute } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Company,
  JobAbout,
  JobFooter,
  About,
  AboutSpecifics,
  ScreenHdrBtn,
} from "../../components/jobDetails/index";
import useFetchHook from "../../hooks/useFetchHook";
import { Stack, useNavigation } from "expo-router";
import {
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
export default function JobDetails() {
  const { params } = useRoute();
  const nav = useNavigation();
  const { id } = params;
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, hasError, reFetch } = useFetchHook("job-details", {
    job_id: id,
  });
  const tabs = ["About", "Qualifications", "Responsibilities"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onPressHandler = () => {};
  const refreshHandler = () => {};
  const displayContent = () => {
    switch (activeTab) {
      case "About": {
        return <About details={data[0]?.job_description} />;
        break;
      }
      case "Qualifications": {
        return (
          <AboutSpecifics
            details={data[0]?.job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
        break;
      }
      case "Responsibilities": {
        return (
          <AboutSpecifics
            details={data[0]?.job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
        break;
      }
      default: {
        return <AboutSpecifics details={"hello"} />;
        break;
      }
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
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
            headerRight: () => (
              <ScreenHdrBtn
                dimension={35}
                iconURL={share}
                onPressHandler={onPressHandler}
              />
            ),

            headerTitle: "",
          }}
        />
        <View className="mr-2">
          <ScrollView
            showVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refreshHandler}
              />
            }
          >
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : hasError ? (
              <Text>Something went wrong</Text>
            ) : data.length === 0 ? (
              <Text>No data found</Text>
            ) : (
              <View>
                <Company
                  companyLogo={data[0].employer_logo}
                  jobLoc={data[0].job_country}
                  jobTitle={data[0].job_title}
                  compName={data[0].employer_name}
                />
                <JobAbout
                  tabs={tabs}
                  activeTab={activeTab}
                  activeTabHandler={setActiveTab}
                />
              </View>
            )}
            <View>{displayContent(activeTab)}</View>
            <JobFooter
              jobUrl={
                data[0]?.job_apply_link ??
                "https:/careers.google.com/jobs/results"
              }
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
