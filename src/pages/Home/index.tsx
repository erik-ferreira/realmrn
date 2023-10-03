import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { useQuery, useRealm } from "../../database"
import { Contact } from "../../database/schemas/contact"

import { Button } from "../../components/Button"
import { Card, CardProps, DataProps } from "../../components/Card"

import { styles } from "./styles"

interface HomeProps {}

export function Home({ ...rest }: HomeProps) {
  const { navigate } = useNavigation()
  const contactsQuery = useQuery(Contact)
  const realm = useRealm()

  const [contacts, setContacts] = useState<DataProps[]>([])

  function handleNew() {
    navigate("details", { id: undefined })
  }

  function handleOpenContact(id: string) {
    navigate("details", { id })
  }

  async function fetchContacts() {
    const response = contactsQuery.toJSON()

    setContacts(response)
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  useEffect(() => {
    realm.addListener("change", fetchContacts)

    return () => realm.removeListener("change", fetchContacts)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card data={item} onPress={() => handleOpenContact(item.id)} />
        )}
      />

      <Button title="Novo" onPress={handleNew} />
    </View>
  )
}
