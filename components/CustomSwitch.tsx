import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";
import { View, Text, Switch } from "react-native";

type CustomSwitch = {
  name: string;
  label?: string;
};

export default function CustomSwitch({ name, label }: CustomSwitch) {
  const {
    field: { value, onChange },
  } = useController({ name });

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        marginVertical: 5,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "semibold" }}>{label}</Text>
      <Switch
        thumbColor="#005055"
        trackColor={{ false: "lightgray", true: "#005055" }}
        style={{}}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
}
