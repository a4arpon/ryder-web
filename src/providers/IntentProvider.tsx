import { createContext, useContext, useState } from "react"

export type IntentContextType = {
  title: string
  isSidebarOpened: boolean
  updateTitle: (title: string) => void
  sidebarToggle: () => void
}

export const IntentContext = createContext<IntentContextType | null>(null)

export const IntentProvider = ({ children }: { children: React.ReactNode }) => {
  const [intentTitle, setIntentTitle] = useState<string | null>()
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)

  const updateTitle = (title: string) => setIntentTitle(title)

  const sidebarToggle = () => {
    setIsSidebarOpened(!isSidebarOpened)
  }

  const intentConfig = {
    title: intentTitle ?? "Ryder | Ride Management App",
    updateTitle,
    isSidebarOpened,
    sidebarToggle,
  }

  return (
    <IntentContext.Provider value={intentConfig}>
      {children}
    </IntentContext.Provider>
  )
}

export const useIntentTitle = (title: string) => {
  const { updateTitle } = useContext(IntentContext) as IntentContextType
  updateTitle(title)
}
