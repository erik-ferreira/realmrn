import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { Button } from "../../components/Button"

import { styles } from "./styles"

interface HomeProps {}

export function Home({ ...rest }: HomeProps) {
  const { navigate } = useNavigation()

  function handleNew() {
    navigate("details")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Button title="Novo" onPress={handleNew} />
    </View>
  )
}
