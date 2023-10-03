import uuid from "react-native-uuid"

export const contact = {
  name: "contact",
  primaryKey: "id",

  properties: {
    id: {
      type: "string",
      default: uuid.v4(),
    },
    name: "string",
    email: "string",
    created_at: {
      type: "date",
      default: new Date().toString(),
    },
    updated_at: {
      type: "date",
      default: new Date().toString(),
    },
  },
}
