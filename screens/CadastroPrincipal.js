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
  // 💡 NOVOS IMPORTS: KeyboardAvoidingView e Platform
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const { width } = Dimensions.get("window");

export default function CadastroPrincipal({ navigation }) {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [cargo, setCargo] = useState("");
  const [unidade, setUnidade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = () => {
    // 1. Validação (Impede o avanço se os campos estiverem vazios)
    if (!nome || !matricula || !cargo || !unidade || !email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Navega para a tela de Menu/Boas-vindas
    navigation.navigate("MenuPrincipal");
  };

  return (
    // 💡 CORREÇÃO APLICADA: Envolvemos o conteúdo com KeyboardAvoidingView.
    // O 'behavior' é ajustado para funcionar corretamente em iOS e Android.
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
      // O offset pode ser ajustado para garantir que não fique escondido sob a barra de navegação.
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        // Desativa o scroll vertical para evitar comportamentos inesperados do iOS, deixando a rolagem apenas para o KeyboardAvoidingView (opcional, mas recomendado)
        // scrollEnabled={false}
      >
        <View style={styles.container}>
          <Text style={styles.title}>CADASTRO</Text>

          {/* ... Todos os campos de TextInput ... */}
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Nome Completo:"
              placeholderTextColor="#a0a0a0"
              onChangeText={setNome}
              value={nome}
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Matrícula/ID Funcional:"
              placeholderTextColor="#a0a0a0"
              onChangeText={setMatricula}
              value={matricula}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Cargo/Função:"
              placeholderTextColor="#a0a0a0"
              onChangeText={setCargo}
              value={cargo}
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Unidade/Delegacia:"
              placeholderTextColor="#a0a0a0"
              onChangeText={setUnidade}
              value={unidade}
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="E-mail Institucional:"
              placeholderTextColor="#a0a0a0"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Senha:"
              placeholderTextColor="#a0a0a0"
              onChangeText={setSenha}
              value={senha}
              secureTextEntry={true}
            />
          </View>
          {/* ... Fim dos campos de TextInput ... */}

          <TouchableOpacity
            style={styles.btn}
            onPress={handleRegister}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Próximo Passo</Text>
          </TouchableOpacity>

          <View style={styles.link}>
            <Text style={styles.linkText}>
              Já Tenho Conta /{" "}
              <Text
                style={styles.linkAnchor}
                onPress={() => navigation.navigate("Iniciologin")}
              >
                Fazer Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ... Estilos (mantidos inalterados) ...
const styles = StyleSheet.create({
  body: {
    flex: 1, // Essencial para o KeyboardAvoidingView
    backgroundColor: "#121212",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  // ... (restante dos estilos)
  container: {
    maxWidth: 380,
    width: width * 0.95,
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 30,
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
  formGroup: {
    marginBottom: 15,
    textAlign: "left",
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
  },
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
  link: {
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#a0a0a0",
  },
  linkAnchor: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
