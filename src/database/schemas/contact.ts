import uuid from "react-native-uuid"

interface GenerateProps {
  name: string
  email: string
}

export class Contact extends Realm.Object<Contact> {
  id!: string
  name!: string
  email!: string
  created_at!: Date
  updated_at!: Date

  static generate({ name, email }: GenerateProps) {
    return {
      id: uuid.v4(),
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    }
  }

  static schema = {
    name: "contact",
    primaryKey: "id",

    properties: {
      id: "string",
      name: "string",
      email: "string",
      created_at: "date",
      updated_at: "date",
    },
  }
}
