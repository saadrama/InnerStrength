import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-paper'

type Props={
    title:string,
    option:object | null
}
function CategoryHeader({title, option}:Props) {
  return (
    <ThemedView style={[styles.row, { marginVertical: 20, padding: 20 }]}>
    <ThemedText type="subtitle" lightColor="black" darkColor="white">
      {title}
    </ThemedText>
    <TouchableOpacity
      onPress={() => console.log("Pressed")}
    >
      <Icon source="dots-vertical" color="black" size={28} />
    </TouchableOpacity>
  </ThemedView>
  )
}
const styles = StyleSheet.create({
   
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }})
  
export default CategoryHeader