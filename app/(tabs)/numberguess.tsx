
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const Numberguess = () => {
  const [userGuess, setUserGuess] = useState<number | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<{ [key: number]: number | null }>({});
  const [gameState, setGameState] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<number>(0);

  const handleSelectNumber = (index: number) => {
    if (!userGuess) {
      Alert.alert('Action Needed', 'Please select your guessed number first!');
      return;
    }

    if (attempts >= 2) {
      Alert.alert('Game Over', 'You have already selected two numbers!');
      return;
    }

    if (selectedNumbers[index] !== undefined) {
      Alert.alert('Already Selected', 'You have already selected this number!');
      return;
    }

  // Generate random number
    const exactNumber = Math.floor(Math.random() * 9) + 1; 
    setSelectedNumbers({ ...selectedNumbers, [index]: exactNumber });
    setAttempts(attempts + 1);

    if (userGuess === exactNumber) {
      setGameState('Pass');
    } else if (attempts === 1) {
      setGameState('Fail');
    }
  };

  const handleStartGame = () => {
    if (userGuess === null || userGuess < 1 || userGuess > 9) {
      Alert.alert('Invalid Input', 'Please select a number between 1 and 9.');
      return;
    }
    setSelectedNumbers({});
    setGameState(null);
    setAttempts(0);
  };

  const handleRestart = () => {
    setUserGuess(null);
    setSelectedNumbers({});
    setGameState(null);
    setAttempts(0);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number!</Text>
      <Text style={styles.subtitle}>Select your guessed number:</Text>

      <View style={styles.numberGrid}>
        {[...Array(9)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.numberButton,
              userGuess === index + 1 ? styles.selectedButton : null,
            ]}
            onPress={() => setUserGuess(index + 1)}
          >
            <Text style={styles.buttonText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Touch up to two numbers:</Text>

      <View style={styles.numberGrid}>
        {[...Array(9)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.numberButton,
              selectedNumbers[index] !== undefined ? styles.revealedButton : null,
            ]}
            onPress={() => handleSelectNumber(index)}
            disabled={selectedNumbers[index] !== undefined || attempts >= 2}
          >
            <Text style={styles.buttonText}>
              {selectedNumbers[index] !== undefined ? selectedNumbers[index] : '?'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {gameState && (
        <Text
          style={[
            styles.resultText,
            gameState === 'Pass' ? styles.passText : styles.failText,
          ]}
        >
          {gameState === 'Pass'
            ? 'Congratulations! 🎉 You guessed it right!'
            : 'Oops! Better luck next time!'}
        </Text>
      )}

      <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF00CD',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  numberGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  numberButton: {
    width: 60,
    height: 60,
    backgroundColor: '#64b5f6',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  selectedButton: {
    backgroundColor: '#1976d2',
  },
  revealedButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#FF00CD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#fa3208',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  passText: {
    color: '#4caf50',
  },
  failText: {
    color: '#f44336',
  },
});

export default Numberguess;

