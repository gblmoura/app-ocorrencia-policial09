import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native"; // 💡 IMPORT NOVO

import Iniciologin from "./screens/Iniciologin";
import CadastroPrincipal from "./screens/CadastroPrincipal";
import MenuPrincipal from "./screens/MenuPrincipal";
import Cadastrodeveiculo from "./screens/Cadastrodeveiculo";
import DadosPessoais from "./screens/DadosPessoais";
import Endereco from "./screens/Endereco";
import Caracteristicas from "./screens/Caracteristicas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // 💡 APLICAR O ESTILO 'container' AQUI
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Iniciologin"
            component={Iniciologin}
            options={{ title: "Inicio login" }}
          />
          <Stack.Screen
            name="CadastroPrincipal"
            component={CadastroPrincipal}
            options={{ title: "Cadastro Principal" }}
          />
          <Stack.Screen
            name="MenuPrincipal" // 💡 NOVA ROTA
            component={MenuPrincipal}
            options={{ title: "Menu Principal" }}
          />
          <Stack.Screen
            name="Cadastrodeveiculo"
            component={Cadastrodeveiculo}
            options={{ title: "Cadastro de Veículo" }}
          />
          <Stack.Screen
            name="DadosPessoais"
            component={DadosPessoais}
            options={{ title: "Dados Pessoais" }}
          />
          <Stack.Screen
            name="Endereco"
            component={Endereco}
            options={{ title: "Endereço" }}
          />
          <Stack.Screen
            name="Caracteristicas"
            component={Caracteristicas}
            options={{ title: "Caracteristicas" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View> // 💡 FIM DO VIEW ENVOLVENTE
  );
}

// 💡 NOVO BLOCO DE ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o App ocupar 100% da altura da tela
  },
});
