import React, { Component } from "react";
import HTML from "react-native-render-html";
import { Dimensions, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles.styl";
import { observer } from "mobx-react";
import LinearGradient from "react-native-linear-gradient";

const renderers = {
  linear: (attrs, children, style) => {
    console.log(attrs);
    return (
      <LinearGradient
        style={[style, styles[attrs.class]]}
        colors={JSON.parse(attrs.colors)}
        key={0}
      >
        {children}
      </LinearGradient>
    );
  },
  btn: (attrs, children, style, props) => {
    return (
      <TouchableOpacity
        key={0}
        style={styles["counter-button"]}
        onPress={() => {
          props.onPress(attrs.type);
        }}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

@observer
export default class CounterHTML extends Component {
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
    const htmlContent = `
    <linear colors='["#fdfbfb", "#ebedee"]' class="counter-container" style="width: ${Dimensions.get(
      "window"
    ).width * 0.75}; height: ${Dimensions.get("window").height * 0.4};">
        <p class="counter-text">${counterStore.count}</p>
        <btn title="+" type="increment">
            <div class="counter-button--rounding">
                <linear colors='["#accbee", "#e7f0fd"]' class="counter-button--gradient">
                    <p class="counter-button--text">+</p>
                </linear>
            </div>
        </btn>
        <btn title="-" type="decrement">
            <div class="counter-button--rounding">
                <linear colors='["#accbee", "#e7f0fd"]' class="counter-button--gradient">
                    <p class="counter-button--text">-</p>
                </linear>
            </div>
        </btn>
    </linear>
`;
    return (
      <HTML
        html={htmlContent}
        classesStyles={styles}
        renderers={renderers}
        onPress={this.handleButtonPress}
      />
    );
  }
}
