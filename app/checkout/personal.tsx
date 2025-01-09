// import { View, StyleSheet } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import { router } from 'expo-router';
// import CustomTextInput from '../../components/CustomTextInput';
// import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   useForm,
//   SubmitHandler,
//   FormProvider,
//   Controller,
// } from 'react-hook-form';
// import {
//   PersonalInfo,
//   PersonalInfoSchema,
//   useCheckoutForm,
// } from '../../contexts/CheckoutFormProvider';
// import RNPickerSelect from 'react-native-picker-select';
// import countries from '../../../assets/countries.json';
// import CustomPicker from '../../components/CustomPicker';
// import CustomDateTimePicker from '../../components/CustomDateTimePicker';

// export default function PersonalDetailsForm() {
//   const { setPersonalInfo, personalInfo } = useCheckoutForm();

//   const form = useForm<PersonalInfo>({
//     resolver: zodResolver(PersonalInfoSchema),
//     defaultValues: personalInfo,
//   });

//   const onNext: SubmitHandler<PersonalInfo> = (data) => {
//     // the data is Valid
//     setPersonalInfo(data);

//     // redirect next
//     router.push('/checkout/payment');
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <FormProvider {...form}>
//         <CustomTextInput
//           name="fullName"
//           label="Full name"
//           placeholder="Joe do"
//         />

//         <CustomTextInput name="address" label="Address" placeholder="Address" />

//         <View style={{ flexDirection: 'row', gap: 5 }}>
//           <CustomTextInput
//             name="city"
//             label="City"
//             placeholder="City"
//             containerStyle={{ flex: 1 }}
//           />
//           <CustomTextInput
//             name="postcode"
//             label="Post code"
//             placeholder="1234"
//             containerStyle={{ flex: 1 }}
//           />
//         </View>

//         <CustomPicker
//           name="country"
//           placeholder={{ label: 'Select country' }}
//           items={countries.map((country) => ({
//             label: country.name,
//             value: country.code,
//           }))}
//         />

//         <CustomTextInput
//           name="phone"
//           label="Phone number"
//           placeholder="601234123123"
//           inputMode="tel"
//         />

//         <CustomDateTimePicker name="birthdate" />

//         <CustomButton
//           title="Next"
//           onPress={form.handleSubmit(onNext)}
//           style={styles.button}
//         />
//       </FormProvider>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 10,
//     gap: 5,
//   },
//   button: {
//     marginTop: 'auto',
//   },
// });

import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

export default function Personal() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <Controller
        control={control}
        name="fullName"
        rules={{ required: "Name is required.", minLength: 3 }}
        render={({ field: { value, onChange, onBlur } }) => (
          ////
          <CustomTextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Full Name"
            placeholder="Hussain"
            placeholderTextColor="lightgray"
            name="what"
            returnKeyType="next"
          />
        )}
      />

      <CustomTextInput
        label="َAddress"
        placeholder="Khost, Afghanistan"
        placeholderTextColor="lightgray"
        name="what"
      />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          containerStyle={{ flex: 1 }}
          label="City"
          placeholder="Khost"
          placeholderTextColor="lightgray"
          name="what"
        />
        <CustomTextInput
          containerStyle={{ flex: 1 }}
          label="Post Code"
          placeholder="1234"
          placeholderTextColor="lightgray"
          name="what"
        />
      </View>

      <CustomTextInput
        label="Phone Number"
        inputMode="tel"
        placeholder="phone"
        placeholderTextColor="lightgray"
        name="what"
      />

      <CustomButton
        onPress={handleSubmit(onNext)} // we are calling onNext inside handleSubmit so that it only be called when the form validation passes
        style={styles.button}
        title="Checkout"
      />
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {},
  button: {
    marginTop: "auto",
  },
});
