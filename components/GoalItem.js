import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
