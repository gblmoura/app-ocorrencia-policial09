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
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

const tiposArma = [
  "Pistola",
  "Revólver",
  "Espingarda",
  "Fuzil",
  "Carabina",
  "Outro",
];
const calibres = [
  "9mm",
  ".38",
  ".40",
  ".380",
  ".45",
  "12",
  "5.56",
  "7.62",
  "Outro",
];
const tiposMunicao = [
  "9mm",
  ".38",
  ".40",
  ".380",
  "12",
  "7.62",
  "5.56",
  "Outro",
];
const tiposDroga = ["Maconha", "Cocaína", "Crack", "Ecstasy", "LSD", "Outra"];
const unidadesMedida = ["g (gramas)", "kg (quilos)", "un (unidades)"];
const situacoesObjeto = ["Apreendido", "Recuperado", "Danificado", "Outro"];
const tiposVeiculo = ["Carro", "Moto", "Caminhão", "Ônibus", "Outro"];
const funcoesPolicial = [
  "Comandante",
  "Motorista",
  "Patrulheiro",
  "Apoio",
  "Outra",
];
const novaArma = (id) => ({ id, tipo: "", calibre: "", serie: "" });
const novaMunicao = (id) => ({
  id,
  tipo: "",
  quantidade: "",
  infoApreensao: "",
});
const novaDroga = (id) => ({
  id,
  tipo: "",
  apresentacao: "",
  quantidade: "",
  unidade: "",
  embalagem: "",
});
const novoDinheiro = (id) => ({ id, valor: "", observacoes: "" });
const novoObjeto = (id) => ({
  id,
  descricao: "",
  marcaModelo: "",
  identificador: "",
  situacao: "",
});
const novoVeiculo = (id) => ({
  id,
  tipo: "",
  placa: "",
  chassi: "",
  marcaModelo: "",
  cor: "",
});
const novoPolicial = (id) => ({
  id,
  matricula: "",
  nome: "",
  funcao: "",
});

export default function Apreencoes({ navigation }) {
  // Estados existentes
  const [armas, setArmas] = useState([novaArma(1)]);
  const [municoes, setMunicoes] = useState([]);
  const [drogas, setDrogas] = useState([]);
  const [dinheiro, setDinheiro] = useState([]);

  const [objetos, setObjetos] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [policiais, setPoliciais] = useState([]);
  const [historico, setHistorico] = useState("");

  let nextArmaId = armas.length > 0 ? armas[armas.length - 1].id + 1 : 1;
  let nextMunicaoId =
    municoes.length > 0 ? municoes[municoes.length - 1].id + 1 : 1;
  let nextDrogaId = drogas.length > 0 ? drogas[drogas.length - 1].id + 1 : 1;
  let nextDinheiroId =
    dinheiro.length > 0 ? dinheiro[dinheiro.length - 1].id + 1 : 1;
  let nextObjetoId =
    objetos.length > 0 ? objetos[objetos.length - 1].id + 1 : 1;
  let nextVeiculoId =
    veiculos.length > 0 ? veiculos[veiculos.length - 1].id + 1 : 1;
  let nextPolicialId =
    policiais.length > 0 ? policiais[policiais.length - 1].id + 1 : 1;

  const handleAddArma = () => {
    setArmas([...armas, novaArma(nextArmaId++)]);
  };
  const handleRemoveArma = (id) => {
    setArmas(armas.filter((arma) => arma.id !== id));
  };
  const handleUpdateArma = (id, field, value) => {
    setArmas(
      armas.map((arma) => (arma.id === id ? { ...arma, [field]: value } : arma))
    );
  };
  const handleAddMunicao = () => {
    setMunicoes([...municoes, novaMunicao(nextMunicaoId++)]);
  };
  const handleRemoveMunicao = (id) => {
    setMunicoes(municoes.filter((municao) => municao.id !== id));
  };
  const handleUpdateMunicao = (id, field, value) => {
    setMunicoes(
      municoes.map((municao) =>
        municao.id === id ? { ...municao, [field]: value } : municao
      )
    );
  };
  const handleAddDroga = () => {
    setDrogas([...drogas, novaDroga(nextDrogaId++)]);
  };
  const handleRemoveDroga = (id) => {
    setDrogas(drogas.filter((droga) => droga.id !== id));
  };
  const handleUpdateDroga = (id, field, value) => {
    setDrogas(
      drogas.map((droga) =>
        droga.id === id ? { ...droga, [field]: value } : droga
      )
    );
  };
  const handleAddDinheiro = () => {
    setDinheiro([...dinheiro, novoDinheiro(nextDinheiroId++)]);
  };
  const handleRemoveDinheiro = (id) => {
    setDinheiro(dinheiro.filter((item) => item.id !== id));
  };
  const handleUpdateDinheiro = (id, field, value) => {
    setDinheiro(
      dinheiro.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAddObjeto = () => {
    setObjetos([...objetos, novoObjeto(nextObjetoId++)]);
  };
  const handleRemoveObjeto = (id) => {
    setObjetos(objetos.filter((objeto) => objeto.id !== id));
  };
  const handleUpdateObjeto = (id, field, value) => {
    setObjetos(
      objetos.map((objeto) =>
        objeto.id === id ? { ...objeto, [field]: value } : objeto
      )
    );
  };

  const handleAddVeiculo = () => {
    setVeiculos([...veiculos, novoVeiculo(nextVeiculoId++)]);
  };
  const handleRemoveVeiculo = (id) => {
    setVeiculos(veiculos.filter((veiculo) => veiculo.id !== id));
  };
  const handleUpdateVeiculo = (id, field, value) => {
    setVeiculos(
      veiculos.map((veiculo) =>
        veiculo.id === id ? { ...veiculo, [field]: value } : veiculo
      )
    );
  };

  const handleAddPolicial = () => {
    setPoliciais([...policiais, novoPolicial(nextPolicialId++)]);
  };
  const handleRemovePolicial = (id) => {
    setPoliciais(policiais.filter((policial) => policial.id !== id));
  };
  const handleUpdatePolicial = (id, field, value) => {
    setPoliciais(
      policiais.map((policial) =>
        policial.id === id ? { ...policial, [field]: value } : policial
      )
    );
  };

  const handleNext = () => {
    Alert.alert("Sucesso", "Dados de Apreensões validados.");
  };

  const ArmaDeFogoForm = ({ arma }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Arma #{armas.findIndex((a) => a.id === arma.id) + 1}     {" "}
      </Text>
            <Text style={styles.label}>Tipo da Arma *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={arma.tipo}
          onValueChange={(v) => handleUpdateArma(arma.id, "tipo", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione o Tipo..." value="" color="#999" />     
             {" "}
          {tiposArma.map((t, i) => (
            <Picker.Item key={i} label={t} value={t} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
            <Text style={styles.label}>Calibre *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={arma.calibre}
          onValueChange={(v) => handleUpdateArma(arma.id, "calibre", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione o Calibre..." value="" color="#999" /> 
                 {" "}
          {calibres.map((c, i) => (
            <Picker.Item key={i} label={c} value={c} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
            <Text style={styles.label}>Nº de Série / ID (Opcional)</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Nº de Série ou Identificação"
        placeholderTextColor="#999"
        value={arma.serie}
        onChangeText={(v) => handleUpdateArma(arma.id, "serie", v)}
      />
           {" "}
      {armas.length > 1 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveArma(arma.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Arma</Text>       {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const MunicaoForm = ({ municao }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Munição #{municoes.findIndex((m) => m.id === municao.id) + 1}   
         {" "}
      </Text>
            <Text style={styles.label}>Tipo (Calibre) *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={municao.tipo}
          onValueChange={(v) => handleUpdateMunicao(municao.id, "tipo", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione o Tipo..." value="" color="#999" />     
             {" "}
          {tiposMunicao.map((t, i) => (
            <Picker.Item key={i} label={t} value={t} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
            <Text style={styles.label}>Quantidade *</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Quantidade (apenas números)"
        placeholderTextColor="#999"
        value={municao.quantidade}
        onChangeText={(v) => handleUpdateMunicao(municao.id, "quantidade", v)}
        keyboardType="numeric"
      />
            <Text style={styles.label}>Informações da Apreensão</Text>     {" "}
      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: "top" }]}
        placeholder="Detalhes sobre a apreensão (opcional)"
        placeholderTextColor="#999"
        multiline
        value={municao.infoApreensao}
        onChangeText={(v) =>
          handleUpdateMunicao(municao.id, "infoApreensao", v)
        }
      />
           {" "}
      {municoes.length > 0 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveMunicao(municao.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Munição</Text>   
             {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const DrogaForm = ({ droga }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Droga #{drogas.findIndex((d) => d.id === droga.id) + 1}     {" "}
      </Text>
            <Text style={styles.label}>Tipo *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={droga.tipo}
          onValueChange={(v) => handleUpdateDroga(droga.id, "tipo", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione o Tipo..." value="" color="#999" />     
             {" "}
          {tiposDroga.map((t, i) => (
            <Picker.Item key={i} label={t} value={t} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
           {" "}
      <Text style={styles.label}>Apresentação (Ex.: tablete, pó, pedra) *</Text>
           {" "}
      <TextInput
        style={styles.input}
        placeholder="Apresentação da droga"
        placeholderTextColor="#999"
        value={droga.apresentacao}
        onChangeText={(v) => handleUpdateDroga(droga.id, "apresentacao", v)}
      />
           {" "}
      <View style={styles.inlineGroup}>
               {" "}
        <View style={styles.inputContainerHalf}>
                    <Text style={styles.label}>Quantidade *</Text>         {" "}
          <TextInput
            style={styles.inputInline}
            placeholder="Qtd."
            placeholderTextColor="#999"
            value={droga.quantidade}
            onChangeText={(v) => handleUpdateDroga(droga.id, "quantidade", v)}
            keyboardType="numeric"
          />
                 {" "}
        </View>
               {" "}
        <View style={styles.inputContainerHalf}>
                    <Text style={styles.label}>Unidade *</Text>         {" "}
          <View style={[styles.pickerContainer, styles.pickerContainerInline]}>
                       {" "}
            <Picker
              selectedValue={droga.unidade}
              onValueChange={(v) => handleUpdateDroga(droga.id, "unidade", v)}
              dropdownIconColor="#fff"
              style={styles.pickerBase}
            >
                           {" "}
              <Picker.Item label="Unidade" value="" color="#999" />             {" "}
              {unidadesMedida.map((u, i) => (
                <Picker.Item key={i} label={u} value={u.split(" ")[0]} />
              ))}
                         {" "}
            </Picker>
                     {" "}
          </View>
                 {" "}
        </View>
             {" "}
      </View>
            <Text style={styles.label}>Embalagem</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Tipo de embalagem (Ex.: saco plástico, papel alumínio)"
        placeholderTextColor="#999"
        value={droga.embalagem}
        onChangeText={(v) => handleUpdateDroga(droga.id, "embalagem", v)}
      />
           {" "}
      {drogas.length > 0 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveDroga(droga.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Droga</Text>     
           {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const DinheiroForm = ({ item }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Dinheiro Apreendido #
        {dinheiro.findIndex((d) => d.id === item.id) + 1}     {" "}
      </Text>
            <Text style={styles.label}>Valor Total (R$) *</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="R$ 0,00"
        placeholderTextColor="#999"
        value={item.valor}
        onChangeText={(v) => handleUpdateDinheiro(item.id, "valor", v)}
        keyboardType="numeric"
      />
            <Text style={styles.label}>Observações (Opcional)</Text>     {" "}
      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: "top" }]}
        placeholder="Ex.: Discriminação de cédulas, origem do dinheiro"
        placeholderTextColor="#999"
        multiline
        value={item.observacoes}
        onChangeText={(v) => handleUpdateDinheiro(item.id, "observacoes", v)}
      />
           {" "}
      {dinheiro.length > 0 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveDinheiro(item.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Item</Text>       {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const ObjetoForm = ({ objeto }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Objeto #{objetos.findIndex((o) => o.id === objeto.id) + 1}     {" "}
      </Text>
            <Text style={styles.label}>Descrição *</Text>     {" "}
      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: "top" }]}
        placeholder="Ex.: Telefone celular, notebook, jóias, documento"
        placeholderTextColor="#999"
        multiline
        value={objeto.descricao}
        onChangeText={(v) => handleUpdateObjeto(objeto.id, "descricao", v)}
      />
            <Text style={styles.label}>Marca/Modelo (Opcional)</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Ex.: Apple iPhone 13, Samsung Galaxy S21"
        placeholderTextColor="#999"
        value={objeto.marcaModelo}
        onChangeText={(v) => handleUpdateObjeto(objeto.id, "marcaModelo", v)}
      />
           {" "}
      <Text style={styles.label}>
        Identificador (Ex.: IMEI/Serial) (Opcional)
      </Text>
           {" "}
      <TextInput
        style={styles.input}
        placeholder="IMEI, número de série, etc."
        placeholderTextColor="#999"
        value={objeto.identificador}
        onChangeText={(v) => handleUpdateObjeto(objeto.id, "identificador", v)}
      />
            <Text style={styles.label}>Situação *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={objeto.situacao}
          onValueChange={(v) => handleUpdateObjeto(objeto.id, "situacao", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione a Situação..." value="" color="#999" /> 
                 {" "}
          {situacoesObjeto.map((s, i) => (
            <Picker.Item key={i} label={s} value={s} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
           {" "}
      {objetos.length > 0 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveObjeto(objeto.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Objeto</Text>     
           {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const VeiculoForm = ({ veiculo }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Veículo #{veiculos.findIndex((v) => v.id === veiculo.id) + 1}   
         {" "}
      </Text>
            <Text style={styles.label}>Tipo *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={veiculo.tipo}
          onValueChange={(v) => handleUpdateVeiculo(veiculo.id, "tipo", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione o Tipo..." value="" color="#999" />     
             {" "}
          {tiposVeiculo.map((t, i) => (
            <Picker.Item key={i} label={t} value={t} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
            <Text style={styles.label}>Placa *</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Placa ou 'SEM PLACA'"
        placeholderTextColor="#999"
        value={veiculo.placa}
        onChangeText={(v) => handleUpdateVeiculo(veiculo.id, "placa", v)}
        autoCapitalize="characters"
      />
            <Text style={styles.label}>Marca/Modelo *</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Marca/Modelo (Ex.: Fiat Uno, Honda CG 160)"
        placeholderTextColor="#999"
        value={veiculo.marcaModelo}
        onChangeText={(v) => handleUpdateVeiculo(veiculo.id, "marcaModelo", v)}
      />
           {" "}
      <View style={styles.inlineGroup}>
               {" "}
        <View style={styles.inputContainerHalf}>
                    <Text style={styles.label}>Cor *</Text>         {" "}
          <TextInput
            style={styles.inputInline}
            placeholder="Cor"
            placeholderTextColor="#999"
            value={veiculo.cor}
            onChangeText={(v) => handleUpdateVeiculo(veiculo.id, "cor", v)}
          />
                 {" "}
        </View>
               {" "}
        <View style={styles.inputContainerHalf}>
                    <Text style={styles.label}>Chassi (Opcional)</Text>         {" "}
          <TextInput
            style={styles.inputInline}
            placeholder="Nº do Chassi"
            placeholderTextColor="#999"
            value={veiculo.chassi}
            onChangeText={(v) => handleUpdateVeiculo(veiculo.id, "chassi", v)}
          />
                 {" "}
        </View>
             {" "}
      </View>
           {" "}
      {veiculos.length > 0 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveVeiculo(veiculo.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Veículo</Text>   
             {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const PolicialForm = ({ policial }) => (
    <View style={styles.itemCard}>
           {" "}
      <Text style={styles.itemTitle}>
                Policial #{policiais.findIndex((p) => p.id === policial.id) + 1}
             {" "}
      </Text>
            <Text style={styles.label}>Matrícula *</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        placeholderTextColor="#999"
        value={policial.matricula}
        onChangeText={(v) => handleUpdatePolicial(policial.id, "matricula", v)}
        keyboardType="numeric"
      />
            <Text style={styles.label}>Nome *</Text>     {" "}
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#999"
        value={policial.nome}
        onChangeText={(v) => handleUpdatePolicial(policial.id, "nome", v)}
      />
            <Text style={styles.label}>Função na Ocorrência *</Text>     {" "}
      <View style={styles.pickerContainer}>
               {" "}
        <Picker
          selectedValue={policial.funcao}
          onValueChange={(v) => handleUpdatePolicial(policial.id, "funcao", v)}
          dropdownIconColor="#fff"
          style={styles.pickerBase}
        >
                   {" "}
          <Picker.Item label="Selecione a Função..." value="" color="#999" />   
               {" "}
          {funcoesPolicial.map((f, i) => (
            <Picker.Item key={i} label={f} value={f} />
          ))}
                 {" "}
        </Picker>
             {" "}
      </View>
           {" "}
      {policiais.length > 0 && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemovePolicial(policial.id)}
        >
                    <FontAwesome name="trash-o" size={18} color="#ff4444" />   
                <Text style={styles.removeButtonText}>Remover Policial</Text>   
             {" "}
        </TouchableOpacity>
      )}
         {" "}
    </View>
  );

  const HistoricoNarrativa = () => (
    <View>
           {" "}
      <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                2.9 Histórico / Narrativa *      {" "}
      </Text>
           {" "}
      <TextInput
        style={[
          styles.input,
          { height: 200, textAlignVertical: "top", marginBottom: 0 },
        ]}
        placeholder="Relato técnico e detalhado da ocorrência..."
        placeholderTextColor="#999"
        multiline
        value={historico}
        onChangeText={setHistorico}
      />
         {" "}
    </View>
  );

  return (
    <SafeAreaView style={styles.fullScreen}>
           {" "}
      <KeyboardAvoidingView
        style={styles.fullScreen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
               {" "}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
                    <Text style={styles.pageTitle}>Apreensões e Relato</Text>   
                         {" "}
          <Text style={styles.sectionTitle}>
                        2.2 Armas de Fogo ({armas.length})          {" "}
          </Text>
                   {" "}
          {armas.map((arma) => (
            <ArmaDeFogoForm key={arma.id} arma={arma} />
          ))}
                   {" "}
          <TouchableOpacity style={styles.addButton} onPress={handleAddArma}>
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Outra Arma</Text> 
                   {" "}
          </TouchableOpacity>
                             {" "}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        2.3 Munições ({municoes.length})          {" "}
          </Text>
                   {" "}
          {municoes.length === 0 && (
            <Text style={styles.emptyText}>Nenhuma munição cadastrada.</Text>
          )}
                   {" "}
          {municoes.map((municao) => (
            <MunicaoForm key={municao.id} municao={municao} />
          ))}
                   {" "}
          <TouchableOpacity style={styles.addButton} onPress={handleAddMunicao}>
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Munição</Text>     
               {" "}
          </TouchableOpacity>
                             {" "}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        2.4 Drogas Apreendidas ({drogas.length})          {" "}
          </Text>
                   {" "}
          {drogas.length === 0 && (
            <Text style={styles.emptyText}>Nenhuma droga cadastrada.</Text>
          )}
                   {" "}
          {drogas.map((droga) => (
            <DrogaForm key={droga.id} droga={droga} />
          ))}
                   {" "}
          <TouchableOpacity style={styles.addButton} onPress={handleAddDroga}>
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Droga</Text>       
             {" "}
          </TouchableOpacity>
                             {" "}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        2.5 Dinheiro Apreendido ({dinheiro.length})          {" "}
          </Text>
                   {" "}
          {dinheiro.length === 0 && (
            <Text style={styles.emptyText}>Nenhum valor cadastrado.</Text>
          )}
                   {" "}
          {dinheiro.map((item) => (
            <DinheiroForm key={item.id} item={item} />
          ))}
                   {" "}
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddDinheiro}
          >
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Dinheiro</Text>   
                 {" "}
          </TouchableOpacity>
                   {" "}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        2.6 Objetos ({objetos.length})          {" "}
          </Text>
                   {" "}
          {objetos.length === 0 && (
            <Text style={styles.emptyText}>Nenhum objeto cadastrado.</Text>
          )}
                   {" "}
          {objetos.map((objeto) => (
            <ObjetoForm key={objeto.id} objeto={objeto} />
          ))}
                   {" "}
          <TouchableOpacity style={styles.addButton} onPress={handleAddObjeto}>
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Objeto</Text>     
               {" "}
          </TouchableOpacity>
                   {" "}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        2.7 Veículos ({veiculos.length})          {" "}
          </Text>
                   {" "}
          {veiculos.length === 0 && (
            <Text style={styles.emptyText}>Nenhum veículo cadastrado.</Text>
          )}
                   {" "}
          {veiculos.map((veiculo) => (
            <VeiculoForm key={veiculo.id} veiculo={veiculo} />
          ))}
                   {" "}
          <TouchableOpacity style={styles.addButton} onPress={handleAddVeiculo}>
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Veículo</Text>     
               {" "}
          </TouchableOpacity>
                 {" "}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                        2.8 Policiais Envolvidos ({policiais.length})          {" "}
          </Text>
                   {" "}
          {policiais.length === 0 && (
            <Text style={styles.emptyText}>Nenhum policial cadastrado.</Text>
          )}
                   {" "}
          {policiais.map((policial) => (
            <PolicialForm key={policial.id} policial={policial} />
          ))}
                   {" "}
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddPolicial}
          >
                       {" "}
            <FontAwesome name="plus-circle" size={20} color="#007bff" />       
                <Text style={styles.addButtonText}>Adicionar Policial</Text>   
                 {" "}
          </TouchableOpacity>
                    <HistoricoNarrativa />         {" "}
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextButtonText}>Próxima Etapa</Text>
                     {" "}
          </TouchableOpacity>
                 {" "}
        </ScrollView>
             {" "}
      </KeyboardAvoidingView>
         {" "}
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
  pageTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    paddingBottom: 8,
    marginTop: 15,
  },
  itemCard: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  itemTitle: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 14,
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
  inlineGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    gap: 10,
  },
  inputContainerHalf: {
    flex: 1,
  },
  inputInline: {
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
    borderRadius: 8,
    marginBottom: 15,
    height: 45,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  pickerContainerInline: {
    marginBottom: 15,
  },
  pickerBase: {
    color: "#fff",
    fontSize: 16,
    backgroundColor: "#111",
    marginHorizontal: Platform.OS === "android" ? -5 : 0,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#007bff50",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#007bff",
    marginLeft: 10,
    fontWeight: "bold",
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    marginTop: 5,
  },
  removeButtonText: {
    color: "#ff4444",
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
  },
  emptyText: {
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 2,
    marginBottom: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
