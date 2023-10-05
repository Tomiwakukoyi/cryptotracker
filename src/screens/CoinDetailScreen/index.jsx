import { View, Text, Image } from "react-native";
import Header from "./components/Header/Header";
import crypto from "../../../assets/data/crypto.json";
import { styles } from "./styles";

const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price },
  } = crypto;
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Header
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceCont}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currPrice}>${current_price.usd}</Text>
        </View>
        <Text style={{ color: "white" }}>hello</Text>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
