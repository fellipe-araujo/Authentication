import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Dashboard;
