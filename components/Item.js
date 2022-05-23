import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Item = ({ children, data }) => {
  return (
    <View style={styles.item}>
      <View style={styles.innerItem}>
        {children}
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.value}>{data.value}</Text>
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    width: "50%",
    padding: 5,
  },
  innerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
