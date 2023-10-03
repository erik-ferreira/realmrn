import { StatusBar } from "expo-status-bar"

import { Routes } from "./src/routes"
import { RealmProvider } from "./src/database"

export default function App() {
  return (
    <RealmProvider>
      <StatusBar style="light" />
      <Routes />
    </RealmProvider>
  )
}
