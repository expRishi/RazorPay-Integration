import RazorpayCheckout from 'react-native-razorpay';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import Payment from './screens/Payment'

const App = () => {
  return (
<View style={styles.container}>
            <TouchableHighlight 
            style = {styles.btn}
            onPress={() => {
                var options = {
                    description: 'Credits towards consultation',
                    image: 'https://i.imgur.com/3g7nmJC.jpg',
                    currency: 'INR',
                    key: 'rzp_test_vdMDnNv4ti7PPY',
                    amount: '5000',
                    name: 'Acme Corp',
                    order_id: 'order_MrzMAAz8h6NvSC',//Replace this with an order_id created using Orders API.
                    prefill: {
                        email: 'gaurav.kumar@example.com',
                        contact: '9191919191',
                        name: 'Gaurav Kumar'
                    },
                    theme: { color: '#53a20e' }
                }
                RazorpayCheckout.open(options).then((data) => {
                    // handle success
                    alert(`Success: ${data.razorpay_payment_id}`);
                }).catch((error) => {
                    // handle failure
                    alert(`Error: ${error.code} | ${error.description}`);
                });
            }}><Text>Press me</Text></TouchableHighlight>
        </View>
  )
}

export default App

const styles = StyleSheet.create({
   btn: {
     width: '75%',
     padding: 30,
     borderRadius: 100,
     marginTop: 30,
     backgroundColor: "#B0D9B1"
 },
// btnText: {
//     fontSize: 20,
//     textAlign: "center",
//     fontWeight: "900",
// },
})