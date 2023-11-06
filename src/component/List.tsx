import React from 'react'
import { View, Text } from 'react-native'

export default function List(props: {data: string}) {
  return (
    <View>
        <Text>{props.data}</Text>
    </View>
  )
}
