import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";

const proxy = "https://afternoon-plains-04156.herokuapp.com/";
const api_key = "RGAPI-b90333f1-4361-41e4-a00c-b789ec39df8a";

type Summoner = {
  id: string;
};

export default function Home() {
  const [summonerName, setSummonerName] = React.useState("");
  const [summonerInfo, setSummonerInfo] = React.useState<Summoner | null>(null);

  const searchSummoner = async () => {
    console.log("Searching for summoner");
    fetch(
      `${proxy}https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
    )
      .then(async (response) => {
        const summoner = await response.json();
        console.log(summoner);
        setSummonerInfo(summoner);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Input
        label="Summoner Name"
        onChangeText={(text) => setSummonerName(text)}
        onSubmitEditing={searchSummoner}
      />
      <Button title="Search" onPress={searchSummoner} />
      <Text>{summonerInfo?.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "30%",
    marginVertical: 50,
  },
});
