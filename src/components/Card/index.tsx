import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

import { styles } from "./styles"

export interface DataProps {
  id: string
  name: string
  email: string
}

export interface CardProps extends TouchableOpacityProps {
  data: DataProps
}

export function Card({ data, ...rest }: CardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.email}>{data.email}</Text>
    </TouchableOpacity>
  )
}
