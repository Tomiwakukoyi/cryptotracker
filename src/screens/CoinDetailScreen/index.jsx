import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import crypto from "../../../assets/data/crypto.json";

const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    market_data: { market_cap_rank },
  } = crypto;
  return (
    <View>
      <Ionicons name="chevron-back-sharp" size={38} color="white" />
      <Image source={{ uri: small }} style={{ width: 25, height: 25 }} />
      <Text style={{ color: "white" }}>{name}</Text>
      <Text style={{ color: "white" }}>#{market_cap_rank}</Text>
      <EvilIcons name="user" size={38} color="white" />
    </View>
  );
};

export default CoinDetailScreen;
