import { View, Text } from "react-native"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { styles } from "./styles"

interface DetailsProps {}

export function Details({ ...rest }: DetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />

      <Button title="Salvar" />
    </View>
  )
}
