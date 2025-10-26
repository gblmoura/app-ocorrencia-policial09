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
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [tipoEnvolvido, setTipoEnvolvido] = useState("");
  const [sexo, setSexo] = useState("");
  const [condicaoFisica, setCondicaoFisica] = useState("");
  const [usoAlgema, setUsoAlgema] = useState("");

  const handleNext = () => {
    if (!nome.trim() || !cpf.trim() || !dataNascimento.trim()) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha Nome, CPF e Data de Nascimento antes de continuar."
      );
      return;
    }
    navigation.navigate("Endereco");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.fullScreen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.sectionTitle}>Cadastro</Text>


          <Text style={styles.label}>Tipo de Envolvido*</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tipoEnvolvido}
              onValueChange={(itemValue) => setTipoEnvolvido(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" color="#999" />
              <Picker.Item label="Autor" value="autor" />
              <Picker.Item label="Vítima" value="vitima" />
              <Picker.Item label="Testemunha" value="testemunha" />
              <Picker.Item label="Abordado" value="abordado" />
              <Picker.Item label="Outro" value="outro" />
            </Picker>
          </View>

          <Text style={styles.label}>CPF*</Text>
          <MaskedTextInput
            mask="999.999.999-99"
            onChangeText={(text) => setCpf(text)}
            style={styles.input}
            keyboardType="numeric"
            placeholder="000.000.000-00"
            placeholderTextColor="#999"
            value={cpf}
          />

          <Text style={styles.label}>Nome Completo*</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome completo"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>RG</Text>
          <TextInput
            style={styles.input}
            placeholder="RG"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Data de Nascimento*</Text>
          <MaskedTextInput
            mask="99/99/9999"
            onChangeText={(text) => setDataNascimento(text)}
            style={styles.input}
            keyboardType="numeric"
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#999"
            value={dataNascimento}
          />

          <Text style={styles.label}>Pai</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do pai"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Mãe</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da mãe"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Sexo*</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sexo}
              onValueChange={(itemValue) => setSexo(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" color="#999" />
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Feminino" value="feminino" />
              <Picker.Item label="Outro" value="outro" />
            </Picker>
          </View>

          <Text style={styles.label}>Apelido</Text>
          <TextInput
            style={styles.input}
            placeholder="Apelido"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Condição Física</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={condicaoFisica}
              onValueChange={(itemValue) => setCondicaoFisica(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" color="#999" />
              <Picker.Item label="Sem ferimentos" value="semFerimentos" />
              <Picker.Item label="Ferimentos leves" value="ferimentosLeves" />
              <Picker.Item label="Ferimentos graves" value="ferimentosGraves" />
            </Picker>
          </View>

          <Text style={styles.label}>Houve uso de algema?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={usoAlgema}
              onValueChange={(itemValue) => setUsoAlgema(itemValue)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione..." value="" color="#999" />
              <Picker.Item label="Sim" value="sim" />
              <Picker.Item label="Não" value="nao" />
            </Picker>
          </View>

          <Text style={styles.label}>Nacionalidade</Text>
          <TextInput style={styles.input} value="BRASILEIRO" editable={false} />

          {/* 💡 MUDANÇA PRINCIPAL: Botão inserido dentro do ScrollView */}
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullScreen: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
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

  button: {
    backgroundColor: "#002366",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

