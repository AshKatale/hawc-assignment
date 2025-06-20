import WelcomePage from "@/components/WelcomePage";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WelcomePage />
    </View>
  );
}
