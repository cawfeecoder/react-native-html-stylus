/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles.styl";
import LinearGradient from "react-native-linear-gradient";
import CounterStore from "./src/stores/counter";
import Counter from "./src/components/Counter";
import CounterHTML from "./src/components/CounterHTML";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu :)",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const counterStore = new CounterStore();

export default class App extends Component {
  render() {
    return (
      <LinearGradient colors={["#d4fc79", "#96e6a1"]} style={styles.container}>
        <Counter counterStore={counterStore} />
        <CounterHTML counterStore={counterStore} />
      </LinearGradient>
    );
  }
}
