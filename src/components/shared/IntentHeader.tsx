import { useNavigate } from "@tanstack/react-router"
import { LogOut, Menu, Settings, User } from "lucide-react"
import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Button } from "#components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#components/ui/dropdown-menu"
import {
  IntentContext,
  type IntentContextType,
} from "#providers/IntentProvider"

const IntentHeaderDropDownMenu = () => {
  const navigator = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigator({ to: "/misc/profile" })}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigator({ to: "/misc/settings" })}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const IntentHeader = () => {
  const { title, sidebarToggle } = useContext(
    IntentContext,
  ) as IntentContextType

  return (
    <>
      <Helmet>
        <title>{title} | Ryder</title>
      </Helmet>
      <div className="border-b-2 border-foreground p-2 mb-3 flex flex-row flex-nowrap justify-between items-center z-10">
        <h2 className="uppercase md:text-2xl font-bold">{title}</h2>
        <div className="flex flex-row justify-between gap-2 items-center">
          <IntentHeaderDropDownMenu />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => sidebarToggle()}
            className="lg:hidden"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </>
  )
}

export default IntentHeader
