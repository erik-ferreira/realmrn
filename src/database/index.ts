import Realm, { PropertySchema } from "realm"
import { createRealmContext } from "@realm/react"

import { Contact } from "./schemas/contact"

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext({
    schema: [Contact],
  })
