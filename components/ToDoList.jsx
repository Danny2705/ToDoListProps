import React from 'react';
import {StyleSheet, View, ScrollView, Pressable, Text} from 'react-native';

function ToDoList({tasks}) {
  return (
    <>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text key={index}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
export default ToDoList;
