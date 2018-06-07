import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { observer } from "mobx-react";
import styles from "./styles.styl";
import HTML from "react-native-render-html";

@observer
export default class Counter extends Component {
  handleButtonPress = action => {
    const { counterStore } = this.props;
    if (action == "increment") {
      counterStore.increment();
    } else {
      counterStore.decrement();
    }
  };
  render() {
    const { counterStore } = this.props;
    return (
      <LinearGradient
        colors={["#fdfbfb", "#ebedee"]}
        style={styles["counter-container"]}
      >
        <Text style={styles["counter-text"]}>{counterStore.count}</Text>
        <TouchableOpacity
          style={styles["counter-button"]}
          onPress={() => this.handleButtonPress("increment")}
        >
          <View style={styles["counter-button--rounding"]}>
            <LinearGradient
              colors={["#accbee", "#e7f0fd"]}
              style={styles["counter-button--gradient"]}
            >
              <Text style={styles["counter-button--text"]}>+</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles["counter-button"]}
          onPress={() => this.handleButtonPress("decrement")}
        >
          <View style={styles["counter-button--rounding"]}>
            <LinearGradient
              colors={["#accbee", "#e7f0fd"]}
              style={styles["counter-button--gradient"]}
            >
              <Text style={styles["counter-button--text"]}>-</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
