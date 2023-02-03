import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <View><Text style={styles.textStyle}>Carteira</Text></View>
          <View>
            <TouchableOpacity style={styles.buttonAdd}>
              <Text>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    color: "#fff",
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    flex: "flex",
    flexDirection: "column"
  },
  textStyle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900"
  },
  buttonAdd: {
    backgroundColor: "red"
  }
});
