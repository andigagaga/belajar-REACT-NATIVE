import { View, Text, Image } from "react-native";
import List from "./List";
export default function Props() {
  let pic = {
    uri: "https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg",
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
        <hr style={{ width: "100%" }}/>
      <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" }}>
        Ini Data List Props Saya
      </Text>
      <Image source={pic} style={{ width: 193, height: 110 }} />
      <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold", marginTop: 20 }}>
        <List data="Khasiat Pisang" />
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <List data="1. Menjaga Kesehatan Tubuh" />
        <List data=" 2. Menjaga Kesehatan Tulang" />
        <List data="3. Menjaga Kesehatan Mulut" />
        <List data="4. Menjaga Kesehatan Ginjal" />
      </Text>
    </View>
  );
}
