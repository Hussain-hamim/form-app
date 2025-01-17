import { ComponentProps } from "react";
import { useController } from "react-hook-form";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";

// this type is extended wow
type CustomTextInput = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
} & ComponentProps<typeof TextInput>; // this type will have some custom type and also textInput built component types too.

export default function CustomTextInput({
  label,
  containerStyle,
  name,
  ...textInputProps
}: CustomTextInput) {
  //
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={[containerStyle, styles.textInputCard]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 5,

    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "tomato",
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
  error: {
    color: "tomato",
    height: 17,
  },
  textInputCard: {
    paddingBottom: 10,
  },
});
