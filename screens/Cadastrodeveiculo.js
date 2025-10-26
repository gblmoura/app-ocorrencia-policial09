import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
// Recomenda-se usar 'react-native-vector-icons' para ícones reais
// Aqui, usaremos um ícone de texto simples para simulação
// import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

export default function VehicleRegistrationScreen({ navigation }) {
  const [tipoVeiculo, setTipoVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [chassi, setChassi] = useState("");
  const [marcaModelo, setMarcaModelo] = useState("");
  const [cor, setCor] = useState("");
  const [semPlaca, setSemPlaca] = useState(false);

  const handleCheckboxToggle = () => {
    setSemPlaca((prev) => !prev);
    if (!semPlaca) {
      setPlaca("");
    }
  };

  const handleConclude = () => {
    if (!tipoVeiculo || (!placa && !semPlaca) || !marcaModelo || !cor) {
      Alert.alert(
        "Erro",
        "Por favor, preencha Tipo, Placa (ou marque Sem Placa), Marca/Modelo e Cor."
      );
      return;
    }

    const vehicleData = {
      tipoVeiculo,
      placa: semPlaca ? "Sem Placa" : placa,
      chassi,
      marcaModelo,
      cor,
    };

    console.log("Dados do Veículo:", vehicleData);
    Alert.alert("Sucesso", "Cadastro do veículo concluído!");
  };

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>VEÍCULO APREENDIDO</Text>

          {/* Simulação do Ícone do Carro (Font Awesome fas fa-car) */}
          <Text style={styles.iconCar}>🚗</Text>
          {/* Se estiver usando FontAwesome: <Icon name="car" size={40} color="#ffffff" style={styles.iconCar} /> */}

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Tipo (carro, moto...)"
              placeholderTextColor="#a0a0a0"
              onChangeText={setTipoVeiculo}
              value={tipoVeiculo}
              required
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={[styles.input, semPlaca && styles.inputDisabled]}
              placeholder="Placa"
              placeholderTextColor="#a0a0a0"
              onChangeText={setPlaca}
              value={placa}
              editable={!semPlaca}
              required
            />
          </View>

          {/* Checkbox em React Native */}
          <TouchableOpacity
            style={styles.checkboxGroup}
            onPress={handleCheckboxToggle}
            activeOpacity={0.8}
          >
            <View style={[styles.checkbox, semPlaca && styles.checkboxChecked]}>
              {semPlaca && <Text style={styles.checkboxCheckmark}>✓</Text>}
            </View>
            <Text style={styles.checkboxLabel}>Sem Placa</Text>
          </TouchableOpacity>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Chassi (opcional)"
              placeholderTextColor="#a0a0a0"
              onChangeText={setChassi}
              value={chassi}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Marca/Modelo"
              placeholderTextColor="#a0a0a0"
              onChangeText={setMarcaModelo}
              value={marcaModelo}
              required
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Cor"
              placeholderTextColor="#a0a0a0"
              onChangeText={setCor}
              value={cor}
              required
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={handleConclude}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Concluir Cadastro</Text>
          </TouchableOpacity>

          <View style={styles.link}>
            <Text style={styles.linkText}>
              <Text
                style={styles.linkAnchor}
                onPress={() => console.log("Navegar para Início")} // navigation.navigate('Index')
              >
                Voltar para a Tela Inicial
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  container: {
    maxWidth: 380,
    width: width * 0.95,
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
  },
  iconCar: {
    fontSize: 40, // Equivalente a 2.5em
    color: "#ffffff",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "#2a2a2a",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    color: "#f0f0f0",
    fontSize: 15,
    // Efeitos de foco (focus) precisam ser tratados com useState no RN
  },
  inputDisabled: {
    backgroundColor: "#1a1a1a",
    color: "#555555",
  },
  // Estilos do Checkbox
  checkboxGroup: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 5,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#a0a0a0",
    borderRadius: 4,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  checkboxCheckmark: {
    fontSize: 14,
    color: "#ffffff",
  },
  checkboxLabel: {
    color: "#f0f0f0",
    fontSize: 15,
  },
  // Estilos do Botão
  btn: {
    width: "100%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Estilos de Link
  link: {
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#a0a0a0",
    textAlign: "center",
  },
  linkAnchor: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
