import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

type ButtonType = {
  id: number;
  name: string;
  value: number;
  image: any;
  isRevealed: boolean;
};

type Player = {
  name: string;
  score: number;
};

const shuffleButtons = (buttons: ButtonType[]): ButtonType[] => {
  return buttons
    .map((button) => ({ ...button, isRevealed: false }))
    .sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [turnCount, setTurnCount] = useState<number>(0);
  const [buttons, setButtons] = useState<ButtonType[]>(
    shuffleButtons([
      { id: 1, name: "Book", value: 200, image: require("@/assets/points-images/books.png"), isRevealed: false },
      { id: 2, name: "Degree", value: 175, image: require("@/assets/points-images/degree.png"), isRevealed: false },
      { id: 3, name: "Pen", value: 150, image: require("@/assets/points-images/pen.png"), isRevealed: false },
      { id: 4, name: "Diamond", value: 125, image: require("@/assets/points-images/diamond.png"), isRevealed: false },
      { id: 5, name: "Silver", value: 100, image: require("@/assets/points-images/gold.png"), isRevealed: false },
      { id: 6, name: "Gold", value: 75, image: require("@/assets/points-images/silver.png"), isRevealed: false },
      { id: 7, name: "Dolor", value: 50, image: require("@/assets/points-images/dolor.png"), isRevealed: false },
      { id: 8, name: "Phone", value: -25, image: require("@/assets/points-images/phone.png"), isRevealed: false },
      { id: 9, name: "Shirt", value: -50, image: require("@/assets/points-images/shirt.png"), isRevealed: false },
      { id: 10, name: "Iron", value: -75, image: require("@/assets/points-images/iron.png"), isRevealed: false },
      { id: 11, name: "Stone", value: -100, image: require("@/assets/points-images/stone.png"), isRevealed: false },
      { id: 12, name: "Fire", value: 0, image: require("@/assets/points-images/fire.png"), isRevealed: false },
    ])
  );

  // When 3 tasks are completed.
  const handlePress = (buttonId: number): void => {
    if (turnCount === 3) return; 

    const buttonIndex = buttons.findIndex((button) => button.id === buttonId);
    if (buttonIndex === -1 || buttons[buttonIndex].isRevealed) return;

    const updatedButtons = [...buttons];
    updatedButtons[buttonIndex].isRevealed = true;
    setButtons(updatedButtons);

    // Show the value instantly.
    const button = buttons[buttonIndex];
    Alert.alert(`${button.name}`, `Value: ${button.value}`); 

    if (button.name === "Fire") {
      resetCurrentPlayerScore();
    } else {
      updateCurrentPlayerScore(button.value);
    }

    const newTurnCount = turnCount + 1;
    setTurnCount(newTurnCount);

    if (newTurnCount === 3) {
      if (currentPlayerIndex === players.length - 1) {
        setTimeout(displayWinner, 500); // Waiting time before showing the winner/draw message.
      } else {
        setTimeout(() => {
          Alert.alert("Turn Over", `Next player: ${players[currentPlayerIndex + 1].name}`);
          endTurn();
        }, 500);
      }
    }
  };

  const updateCurrentPlayerScore = (value: number): void => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) =>
        index === currentPlayerIndex ? { ...player, score: player.score + value } : player
      )
    );
  };

  const resetCurrentPlayerScore = (): void => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) =>
        index === currentPlayerIndex ? { ...player, score: 0 } : player
      )
    );
  };

  const endTurn = (): void => {
    setTurnCount(0);
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    setButtons(shuffleButtons(buttons));
  };

  const startNewGame = (): void => {
    setPlayers(
      players.map((player) => ({ ...player, score: 0 }))
    );
    setButtons(shuffleButtons(buttons));
    setCurrentPlayerIndex(0);
    setTurnCount(0);
  };

  const displayWinner = (): void => {
    const maxScore = Math.max(...players.map((player) => player.score));
    const winners = players.filter((player) => player.score === maxScore);

    if (winners.length > 1) {
      Alert.alert("Game Over", "It's a draw!");
    } else {
      Alert.alert("Game Over", `The winner is ${winners[0].name} with ${winners[0].score} points!`);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Lucky Points</Text>

      <View style={styles.scoreboard}>
        {players.map((player, index) => (
          <View
            key={index}
            style={[
              styles.playerContainer,
              { backgroundColor: index === 0 ? "#00FFEE" : "#00FFEE" },
            ]}
          >
            <Text
              style={[
                styles.playerName,
                { color: index === 0 ? "#000000" : "#000000" },
              ]}
            >
              {player.name}
            </Text>
            <Text
              style={[
                styles.playerScore,
                { color: index === 0 ? "#FF00CD" : "#FF00CD" },
              ]}
            >
              {player.score}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={[styles.button, { backgroundColor: button.isRevealed ? "#ddd" : "#FF00CD" }]}
            onPress={() => handlePress(button.id)}
            disabled={turnCount === 3}
          >
            {button.isRevealed && (
              <Image source={button.image} style={styles.image} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: "#fa3208", paddingTop:10, paddingLeft:25, paddingRight:25, }]}
          onPress={startNewGame}
        >
          <Text style={styles.actionText}>Restart Game</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#FF00CD',
  },
  scoreboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  playerContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  playerScore: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  actionButton: {
    padding: 15,
    borderRadius: 10,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;
