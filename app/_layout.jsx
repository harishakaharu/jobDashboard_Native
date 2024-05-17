import { Stack } from "expo-router";
const rootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  );
};

export default rootLayout;
