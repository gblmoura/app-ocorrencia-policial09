import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
 
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Caracteristicas({ navigation }) {
  const [tipoSinal, setTipoSinal] = useState("");
  const [localSinal, setLocalSinal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "É necessário permitir o acesso à galeria para enviar imagens."
      );
      return;
    }

    
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri;
      if (
        !uri.endsWith(".jpg") &&
        !uri.endsWith(".png") &&
        !uri.endsWith(".jpeg")
      ) {
        Alert.alert("Formato inválido", "Envie apenas arquivos JPG ou PNG.");
        return;
      }
      setImagem(uri);
    }
  };

  const handleFinalizar = () => {
    if (!tipoSinal.trim() || !localSinal.trim() || !descricao.trim()) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha todos os campos antes de finalizar."
      );
      return;
    }

    Alert.alert("Sucesso!", "Cadastro concluído com sucesso.");
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
          <Text style={styles.sectionTitle}>Características do Envolvido</Text>

          <Text style={styles.label}>Tipo de Sinal Identificador</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: tatuagem, cicatriz, pinta, marca, etc."
            placeholderTextColor="#999"
            value={tipoSinal}
            onChangeText={setTipoSinal}
          />

          <Text style={styles.label}>Local do Sinal</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: braço direito, rosto, cabeça, perna, costas, etc."
            placeholderTextColor="#999"
            value={localSinal}
            onChangeText={setLocalSinal}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: "top" }]}
            placeholder="Descreva o sinal..."
            placeholderTextColor="#999"
            multiline
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.label}>Upload de Imagem (opcional)</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={selecionarImagem}
          >
            <Text style={styles.uploadText}>Selecionar Imagem</Text>
          </TouchableOpacity>

          {imagem && (
            <Image source={{ uri: imagem }} style={styles.imagePreview} />
          )}

          <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    backgroundColor: "#000",
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 50,
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
  uploadButton: {
    backgroundColor: "#002366", 
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  uploadText: {
    color: "#fff",
    fontWeight: "bold",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#002366",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20, 
    marginBottom: 20, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

