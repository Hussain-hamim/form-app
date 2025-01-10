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
import {
  SubmitHandler,
  useForm,
  Controller,
  FormProvider,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
});

type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export default function Personal() {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    console.log(data);
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          label="Full Name"
          placeholder="Hussain"
          placeholderTextColor="lightgray"
          returnKeyType="next"
        />

        <CustomTextInput
          name="address"
          label="َAddress"
          placeholder="Khost, Afghanistan"
          placeholderTextColor="lightgray"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            label="City"
            containerStyle={{ flex: 1 }}
            placeholder="Khost"
            placeholderTextColor="lightgray"
          />
          <CustomTextInput
            name="postcode"
            label="Post Code"
            containerStyle={{ flex: 1 }}
            placeholder="1234"
            placeholderTextColor="lightgray"
          />
        </View>

        <CustomTextInput
          name="phone"
          label="Phone Number"
          inputMode="tel"
          placeholder="phone"
          placeholderTextColor="lightgray"
        />

        <CustomButton
          onPress={form.handleSubmit(onNext)} // we are calling onNext inside handleSubmit so that it only be called when the form validation passes
          style={styles.button}
          title="Checkout"
        />
        <StatusBar style="auto" />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {},
  button: {
    marginTop: "90%",
    // position: "absolute",
    // bottom: 10,
  },
});
