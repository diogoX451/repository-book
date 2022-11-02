import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import api from "./services/api";
import { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/cad-author/2").then(({ data }) => {
      setBooks(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {books?.map((book) => (
        <Text key={book.id}>{book.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
