import { createContext, useState } from "react"

export const AppContext = createContext({})

export default function AppContextProvider() {
  return <div>app-context</div>
}
