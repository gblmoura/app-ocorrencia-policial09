import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Endereco({ navigation }) {
  const handleNext = () => {
    navigation.navigate("Caracteristicas");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Informações de Endereço</Text>

        <Text style={styles.label}>Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="Telefone ou celular"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@exemplo.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          placeholder="00000000"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={8}
        />

        <Text style={styles.label}>Logradouro</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua, Avenida..."
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={styles.input}
          placeholder="Apartamento, bloco..."
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Cidade (Obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#999"
        />

        {/* Espaço ajustado para o botão */}
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 120,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#222",
  },
  fixedButtonContainer: {
    position: "absolute",
    bottom: 27,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#002366",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
