// Arquivo: screens/MenuPrincipal.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MenuPrincipal({ navigation }) {
  // Função para navegar para a próxima tela do fluxo
  const handleStartOccurrence = () => {
    // 💡 Navega para a tela 'DadosPessoais', que inicia o fluxo da ocorrência.
    // Certifique-se de que a rota 'DadosPessoais' existe no seu App.js
    navigation.navigate("DadosPessoais");
  };

  return (
    <View style={styles.container}>
      {/* Mensagem de Boas-Vindas */}
      <Text style={styles.welcomeText}>Bem-vindo(a) ao ROP</Text>
      <Text style={styles.subtitle}>
        Seu cadastro foi concluído com sucesso.
      </Text>

      {/* Botão de Ação Central */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleStartOccurrence}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Fazer Cadastro de Ocorrência</Text>
      </TouchableOpacity>

      {/* Opcional: Link para Sair/Outras Ações */}
      <TouchableOpacity onPress={() => navigation.navigate("Iniciologin")}>
        <Text style={styles.logoutText}>Sair/Trocar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Fundo escuro
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#b0b0b0",
    marginBottom: 50,
    textAlign: "center",
  },
  actionButton: {
    // Estilo semelhante ao botão "Avançar" das telas anteriores
    width: "90%", // Ocupa a maior parte da largura
    maxWidth: 350,
    backgroundColor: "#007bff",
    paddingVertical: 20, // Mais alto para ser o destaque
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    // Sombra para destacar
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutText: {
    color: "#777",
    fontSize: 14,
    marginTop: 20,
  },
});
