// import { Text, View, StyleSheet } from 'react-native';
// import CustomButton from '../../components/CustomButton';
// import { Link, router } from 'expo-router';
// import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
// import { useCheckoutForm } from '../../contexts/CheckoutFormProvider';

// export default function ConfirmForm() {
//   const { personalInfo, paymentInfo, onSubmit } = useCheckoutForm();

//   return (
//     <KeyboardAwareScrollView>
//       <View style={{ gap: 10, flex: 1 }}>
//         {personalInfo && (
//           <View style={styles.dataContainer}>
//             <View style={styles.dataContainerHeader}>
//               <Text style={styles.title}>Personal</Text>
//               <Link
//                 href={'/checkout'}
//                 style={{ color: '#005055', fontWeight: '600' }}
//               >
//                 Edit
//               </Link>
//             </View>
//             {Object.entries(personalInfo).map(([key, value]) => (
//               <Text key={key}>
//                 {key}: {value?.toString()}
//               </Text>
//             ))}
//           </View>
//         )}

//         {paymentInfo && (
//           <View style={styles.dataContainer}>
//             <View style={styles.dataContainerHeader}>
//               <Text style={styles.title}>Payment</Text>
//               <Link
//                 href={'/checkout/payment'}
//                 style={{ color: '#005055', fontWeight: '600' }}
//               >
//                 Edit
//               </Link>
//             </View>
//             {Object.entries(paymentInfo).map(([key, value]) => (
//               <Text key={key}>
//                 {key}: {value?.toString()}
//               </Text>
//             ))}
//           </View>
//         )}

//         <CustomButton title="Submit" onPress={onSubmit} style={styles.button} />
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 15,
//     paddingBottom: 25,
//     gap: 15,
//   },
//   dataContainer: {
//     borderWidth: 1,
//     borderColor: 'gainsboro',
//     padding: 10,
//     borderRadius: 10,
//     gap: 3,
//   },
//   dataContainerHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
// });

import CustomButton from "@/components/CustomButton";
import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import { useCheckoutForm } from "@/contexts/CheckoutFormProvider";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function confirm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { personalInfo, paymentInfo, onSubmit } = useCheckoutForm();

  return (
    <KeyboardAwareScrollView>
      <View style={{ gap: 10, flex: 1 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}:{" "}
                <Text style={{ fontWeight: "500" }}>{value?.toString()}</Text>
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}:{" "}
                <Text style={{ fontWeight: "500" }}>{value?.toString()}</Text>
              </Text>
            ))}
          </View>
        )}
        <CustomButton onPress={onSubmit} title="submit" />
      </View>

      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});
