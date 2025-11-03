import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaskedTextInput } from "react-native-mask-text";

const cidades = ["Aracaju", "São Cristóvão", "Nossa Senhora do Socorro"];
const bairrosPorCidade = {
  Aracaju: ["Centro", "Jardins", "Atalaia"],
  "São Cristóvão": ["Centro (SC)", "Rosa Elze"],
  "Nossa Senhora do Socorro": ["Conj. João Alves", "Taiçoca"],
};
const tiposRop = ["Prisão em Flagrante", "Ocorrência Simples", "Apoio"];
const eventos = ["Blitz", "Patrulhamento", "Mandado de Busca"];

export default function DadosDoFato({ navigation }) {
  const [tipoRop, setTipoRop] = useState("");
  const [evento, setEvento] = useState("");
  const [numAtendimento, setNumAtendimento] = useState("");
  const [destino, setDestino] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [referencia, setReferencia] = useState("");
  const [dataFato, setDataFato] = useState("");
  const [horaFato, setHoraFato] = useState("");
  const [elementos, setElementos] = useState({
    envolvidos: false,
    armaFogo: false,
    municoes: false,
    dinheiro: false,
    drogas: false,
    objetos: false,
    veiculos: false,
  });

  const handleToggle = (key) => {
    setElementos((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleNext = () => {
    if (!tipoRop || !cidade || !logradouro || !dataFato || !horaFato) {
      Alert.alert(
        "Campos Obrigatórios",
        "Preencha o Tipo do ROP, Cidade, Logradouro, Data e Hora do Fato."
      );
      return;
    }
    navigation.navigate("DadosPessoais");
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <KeyboardAvoidingView
        style={styles.fullScreen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.sectionTitle}>Etapa 1: Dados do Fato</Text>
          <Text style={styles.label}>Tipo do ROP *</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tipoRop}
              onValueChange={(itemValue) => setTipoRop(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione o Tipo..." value="" color="#999" />
              {tiposRop.map((tipo, index) => (
                <Picker.Item key={index} label={tipo} value={tipo} />
              ))}
            </Picker>
          </View>
          <Text style={styles.label}>Evento/Operação</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={evento}
              onValueChange={(itemValue) => setEvento(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item
                label="Selecione o Evento..."
                value=""
                color="#999"
              />
              {eventos.map((evento, index) => (
                <Picker.Item key={index} label={evento} value={evento} />
              ))}
            </Picker>
          </View>
          <Text style={styles.label}>Número de Atendimento</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 19000123"
            placeholderTextColor="#999"
            value={numAtendimento}
            onChangeText={setNumAtendimento}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Destino</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Unidade PM X, Delegacia Y"
            placeholderTextColor="#999"
            value={destino}
            onChangeText={setDestino}
          />
          <Text style={styles.label}>Cidade *</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={cidade}
              onValueChange={(itemValue) => {
                setCidade(itemValue);
                setBairro("");
              }}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item
                label="Selecione a Cidade..."
                value=""
                color="#999"
              />
              {cidades.map((cidade, index) => (
                <Picker.Item key={index} label={cidade} value={cidade} />
              ))}
            </Picker>
          </View>
          <Text style={styles.label}>Bairro</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={bairro}
              onValueChange={(itemValue) => setBairro(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
              enabled={!!cidade}
            >
              <Picker.Item
                label="Selecione o Bairro..."
                value=""
                color="#999"
              />
              {cidade &&
                bairrosPorCidade[cidade]?.map((bairro, index) => (
                  <Picker.Item key={index} label={bairro} value={bairro} />
                ))}
            </Picker>
          </View>
          <Text style={styles.label}>Logradouro do Fato *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Rua A, Avenida B, Rodovia C"
            placeholderTextColor="#999"
            value={logradouro}
            onChangeText={setLogradouro}
          />
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            placeholder="Número"
            placeholderTextColor="#999"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Ponto de Referência</Text>
          <TextInput
            style={styles.input}
            placeholder="Perto da escola, em frente ao mercado..."
            placeholderTextColor="#999"
            value={referencia}
            onChangeText={setReferencia}
          />

          <Text style={styles.label}>Data do Fato *</Text>
          <MaskedTextInput
            mask="99/99/9999"
            onChangeText={setDataFato}
            style={styles.input}
            keyboardType="numeric"
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#999"
            value={dataFato}
          />

          <Text style={styles.label}>Hora do Fato *</Text>
          <MaskedTextInput
            mask="99:99"
            onChangeText={setHoraFato}
            style={styles.input}
            keyboardType="numeric"
            placeholder="HH:MM"
            placeholderTextColor="#999"
            value={horaFato}
          />

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
            Elementos Presentes
          </Text>

          {Object.keys(elementos).map((key) => (
            <View key={key} style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#007bff" }}
                thumbColor={elementos[key] ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={() => handleToggle(key)}
                value={elementos[key]}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Próxima Etapa</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#000",
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 50,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    paddingBottom: 10,
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
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: "#111",
    borderRadius: 10,
    marginBottom: 15,
    height: 45,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  picker: {
    color: "#fff",
    backgroundColor: "#111",
    fontSize: 16,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#222",
  },
  toggleLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
