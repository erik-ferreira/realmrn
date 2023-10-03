import { useState } from "react"
import { View, Text, Alert } from "react-native"

import { useRealm } from "../../database"
import { Contact } from "../../database/schemas/contact"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { styles } from "./styles"

interface DetailsProps {}

export function Details({ ...rest }: DetailsProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const realm = useRealm()

  async function handleSave() {
    realm.write(() => {
      realm.create("contact", Contact.generate({ name, email }))
    })

    Alert.alert("Salvo com sucesso")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <Input placeholder="Nome" value={name} onChangeText={setName} />
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  )
}
