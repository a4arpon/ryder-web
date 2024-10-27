import {
  Outlet,
  createRootRoute,
  useLocation,
  useNavigate,
} from "@tanstack/react-router"
import { useContext, useEffect, useState } from "react"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "sonner"
import Login from "#components/extra/Login"
import IntentHeader from "#components/shared/IntentHeader"
import Sidebar from "#components/shared/Sidebar"
import {
  IntentContext,
  type IntentContextType,
  IntentProvider,
} from "#providers/IntentProvider"
import { ThemeProvider } from "#providers/ThemeProviders"

const AppRenderer = () => {
  const [isAuth, setIsAuth] = useState(true)
  const { isSidebarOpened } = useContext(IntentContext) as IntentContextType

  const navigator = useNavigate()
  const location = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!isAuth && location.pathname !== "/") {
      navigator({ to: "/" })
    }

    return () => { }
  }, [isAuth])

  if (isAuth) {
    return (
      <div className="grid lg:grid-cols-9">
        <Sidebar />
        {!isSidebarOpened && (
          <div className="lg:col-span-7 max-h-screen overflow-hidden pb-12">
            <IntentHeader />
            <main
              id="intent-content"
              className="p-3 overflow-y-auto max-h-screen pb-20 space-y-4"
            >
              <Outlet />
            </main>
          </div>
        )}
      </div>
    )
  }

  return <Login setIsAuth={setIsAuth} />
}



const RootLayout = () => {
  return (
    <HelmetProvider>
      <IntentProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <AppRenderer />
        </ThemeProvider>
        <Toaster />
      </IntentProvider>
    </HelmetProvider>
  )
}

export const Route = createRootRoute({
  component: () => <RootLayout />,
})
