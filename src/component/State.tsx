import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function State() {
    const [counter, setCounter] = useState<number>(0);


    function add() {
        setCounter(counter + 1)
    }

    function less() {
        setCounter(counter - 1)
    }

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <hr style={{ width: "100%" }} />
      <StatusBar />
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
        }}
      >
        <View style={{ display: "flex" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>CLICK BUTTON</Text>

          <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
          <TouchableOpacity
            style={{ backgroundColor: "red", padding: 10}}
            onPress={less} >
            <Text style={{ color: "white" }}>Less</Text>
          </TouchableOpacity>
          <Text style={{ padding: 10 , marginLeft: 10, marginRight: 10, fontSize: 20, fontWeight: "bold", color: counter < -0 ? "red" : "green"}}>{counter}</Text>
          <TouchableOpacity
            style={{ backgroundColor: "blue", padding: 10}}
            onPress={add}>
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
          </View>
         
        </View>
      </View>
    </View>
  );
}
