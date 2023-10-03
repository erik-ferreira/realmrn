import { useState } from "react"
import { View, Text, Alert } from "react-native"

import { useRealm, useObject } from "../../database"
import { Contact } from "../../database/schemas/contact"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { styles } from "./styles"
import { useRoute } from "@react-navigation/native"

interface RouteParamsProps {
  id: string
}

export function Details() {
  const realm = useRealm()
  const route = useRoute()
  const { id } = route.params as RouteParamsProps

  const contact = id ? useObject(Contact, id) : undefined

  const [name, setName] = useState(contact?.name || "")
  const [email, setEmail] = useState(contact?.email || "")

  async function handleSave() {
    if (id && contact) {
      realm.write(() => {
        contact.name = name
        contact.email = email
        contact.updated_at = new Date()
      })
    } else {
      realm.write(() => {
        realm.create("contact", Contact.generate({ name, email }))
      })
    }

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
