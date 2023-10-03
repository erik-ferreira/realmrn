import Realm, { PropertySchema } from "realm"

import { contact } from "./schemas/contact"

export async function getREalmInstance() {
  const realm = await Realm.open({
    schema: [contact],
  })

  return realm
}
