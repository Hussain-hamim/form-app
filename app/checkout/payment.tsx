// import { View, StyleSheet } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import { router } from 'expo-router';
// import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
// import CustomTextInput from '../../components/CustomTextInput';
// import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   PaymentInfo,
//   PaymentInfoSchema,
//   useCheckoutForm,
// } from '../../contexts/CheckoutFormProvider';
// import CustomCheckbox from '../../components/CustomCheckbox';
// import CustomSwitch from '../../components/CustomSwitch';

// export default function PaymentDetailsForm() {
//   const { setPaymentInfo, paymentInfo } = useCheckoutForm();

//   const form = useForm<PaymentInfo>({
//     resolver: zodResolver(PaymentInfoSchema),
//     defaultValues: paymentInfo,
//   });

//   const onNext: SubmitHandler<PaymentInfo> = (data) => {
//     // validate form
//     setPaymentInfo(data);
//     // redirect next
//     router.push('/checkout/confirm');
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <FormProvider {...form}>
//         <CustomTextInput
//           name="cardNumber"
//           label="Card number"
//           placeholder="1234123141234123"
//         />

//         <View style={{ flexDirection: 'row', gap: 5 }}>
//           <CustomTextInput
//             name="expireDate"
//             label="Expire date"
//             placeholder="01/23"
//             containerStyle={{ flex: 1 }}
//           />

//           <CustomTextInput
//             name="cvv"
//             label="Cvv"
//             placeholder="123"
//             inputMode="numeric"
//             containerStyle={{ flex: 1 }}
//           />
//         </View>

//         <CustomCheckbox name="saveCard" label="Save credit card" />
//         <CustomSwitch name="switchValue" label="On or off?" />

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
//     backgroundColor: 'white',
//     flex: 1,
//     padding: 10,
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
import { StyleSheet, Text, View } from "react-native";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  PaymentInfo,
  PaymentInfoSchema,
  useCheckoutForm,
} from "@/contexts/CheckoutFormProvider";
import CustomCheckbox from "@/components/CustomCheckbox";

export default function Payment() {
  const { setPaymentInfo, paymentInfo } = useCheckoutForm();

  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo,
  });

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    setPaymentInfo(data);
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          label="Card Number"
          placeholder="123123123123"
        />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expireDate"
            label="Expire date"
            placeholder="01/23"
            containerStyle={{ flex: 1 }}
          />

          <CustomTextInput
            name="cvv"
            label="Cvv"
            placeholder="123"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomCheckbox name="saveCard" label="Save credit card" />
        {/* <CustomSwitch name="switchValue" label="On or off?" /> */}

        <CustomButton
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
          title="Next"
        />
      </FormProvider>

      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});
