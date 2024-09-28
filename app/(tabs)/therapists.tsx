import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function therapists() {
  return (
    <SafeAreaView>
      <ThemedText lightColor='black' darkColor='white'>therapists</ThemedText>

    </SafeAreaView>
  )
}

export default therapists