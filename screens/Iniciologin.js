import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function InitialScreen({ navigation }) {
  const handleAdvance = () => {
    navigation.navigate("CadastroPrincipal");
  };

  return (
    <View style={styles.initialScreenBody}>
      <View style={styles.container}>
        <Text style={styles.brasaoPlaceholder}>🔒</Text>
        <Text style={styles.titleInitial}>ROP</Text>
        <Text style={styles.subtitle}>Relatório Operacional Policial</Text>

        <TouchableOpacity
          style={styles.btnInitial}
          onPress={handleAdvance}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>Avançar</Text>
        </TouchableOpacity>

        <Text style={styles.tagline}>Rapidez. Segurança. Precisão</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  initialScreenBody: {
    flex: 1,
    backgroundColor: "#121212", 
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    textAlign: "center",
    maxWidth: 380,
    width: width * 0.95, 
    backgroundColor: "#1e1e1e", 
    borderRadius: 12,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    elevation: 10,
  },
  brasaoPlaceholder: {
    fontSize: 50,
    color: "#007bff",
    marginBottom: 30,
  },
  titleInitial: {
    fontSize: 52,
    fontWeight: "700",
    marginBottom: 10,
    color: "#ffffff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: "#b0b0b0",
  },
  tagline: {
    fontSize: 14,
    color: "#777",
    marginTop: 15,
  },
  btnInitial: {
    width: width * 0.6, 
    backgroundColor: "#007bff",
    paddingVertical: 13,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

