import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

const SettingsRow = ({ label, onPress, active, darkMode }) => {
  return (
    <Pressable
      style={[
        styles.row,
        active && styles.rowActive,
        darkMode && styles.darkRow,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.rowText, darkMode && styles.darkText]}>{label}</Text>
    </Pressable>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [form, setForm] = useState({
    name: "Jan",
    email: "jan@gmail.com",
    city: "Katowice",
    bio: "Student informatyki",
  });

  const [message, setMessage] = useState("");

  const MAX_BIO = 80;

  const handleSave = () => {
    if (!form.name.trim()) {
      setMessage("Imię nie może być puste");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Email musi zawierać @");
      return;
    }

    if (form.bio.length > MAX_BIO) {
      setMessage("Bio jest za długie");
      return;
    }

    setMessage("Zapisano poprawnie");
  };

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      {/* PROFIL */}
      <Text style={[styles.header, darkMode && styles.darkText]}>Profil</Text>

      <View style={[styles.profile, darkMode && styles.darkCard]}>
        <View style={styles.avatar} />
        <Text style={[styles.name, darkMode && styles.darkText]}>
          {form.name}
        </Text>
        <Text style={[styles.text, darkMode && styles.darkText]}>
          {form.city}
        </Text>
        <Text style={[styles.text, darkMode && styles.darkText]}>
          {form.bio}
        </Text>
      </View>

      {/* FORMULARZ */}
      <Text style={[styles.header, darkMode && styles.darkText]}>
        Edytuj dane
      </Text>

      <TextInput
        style={[styles.input, darkMode && styles.darkInput]}
        placeholder="Imię"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

      <TextInput
        style={[styles.input, darkMode && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <TextInput
        style={[styles.input, darkMode && styles.darkInput]}
        placeholder="Miasto"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={form.city}
        onChangeText={(text) => setForm({ ...form, city: text })}
      />

      <TextInput
        style={[styles.input, darkMode && styles.darkInput]}
        placeholder="Bio"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={form.bio}
        multiline
        onChangeText={(text) => setForm({ ...form, bio: text })}
      />

      {/* LICZNIK */}
      <Text style={[styles.counter, darkMode && styles.darkText]}>
        {form.bio.length}/{MAX_BIO}
      </Text>

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Zapisz zmiany</Text>
      </Pressable>

      {/* KOMUNIKAT */}
      {message !== "" && (
        <Text style={[styles.message, darkMode && styles.darkText]}>
          {message}
        </Text>
      )}

      {/* USTAWIENIA */}
      <Text style={[styles.header, darkMode && styles.darkText]}>
        Ustawienia
      </Text>

      <SettingsRow label="Powiadomienia" darkMode={darkMode} />
      <SettingsRow label="Prywatność" darkMode={darkMode} />
      <SettingsRow
        label="Ciemny motyw"
        active={darkMode}
        darkMode={darkMode}
        onPress={() => setDarkMode(!darkMode)}
      />
      <SettingsRow label="O aplikacji" darkMode={darkMode} />

      {/* WYLOGUJ */}
      <Pressable style={styles.logout}>
        <Text style={styles.logoutText}>Wyloguj</Text>
      </Pressable>
    </ScrollView>
  );
}

/* STYLE */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  darkContainer: {
    backgroundColor: "#222",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  darkText: {
    color: "white",
  },

  profile: {
    alignItems: "center",
    marginBottom: 20,
  },

  darkCard: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
  },

  avatar: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    borderRadius: 40,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    color: "gray",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  darkInput: {
    backgroundColor: "#333",
    color: "white",
    borderColor: "#555",
  },

  counter: {
    marginBottom: 10,
    color: "gray",
  },

  button: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  message: {
    marginBottom: 10,
  },

  row: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
  },

  rowActive: {
    backgroundColor: "#ddd",
  },

  darkRow: {
    backgroundColor: "#333",
    borderColor: "#555",
  },

  rowText: {},

  logout: {
    marginTop: 15,
    padding: 12,
    backgroundColor: "red",
    borderRadius: 8,
  },

  logoutText: {
    color: "white",
    textAlign: "center",
  },
});
