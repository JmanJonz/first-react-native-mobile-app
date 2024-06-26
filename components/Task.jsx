import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  square: {
    width: 24,
    height: 24, 
    backgroundColor: "#def7e4",
    borderRadius: 5,
    marginRight: 15
  },
  itemText: {
    maxWidth: "80%"
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#def7e4",
    borderWidth: 2,
    borderRadius: 2
  }

})

import React from 'react'

export const Task = ({text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText} >{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}


