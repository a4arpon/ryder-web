import {
  type UseNavigateResult,
  useLocation,
  useNavigate,
} from "@tanstack/react-router"
import {
  Box,
  Car,
  ContactRound,
  FileX,
  LayoutDashboard,
  List,
  MapPin,
  Table,
  UsersRound,
  X,
} from "lucide-react"
import { useContext } from "react"
import {
  IntentContext,
  type IntentContextType,
} from "#providers/IntentProvider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { ThemeChanger } from "./ThemeChanger"

type SidebarItemsType = {
  icon: JSX.Element
  title: string
  links: {
    title: string
    icon: JSX.Element
    link: string
  }[]
}

const sidebarItems: SidebarItemsType[] = [
  {
    icon: <LayoutDashboard />,
    title: "Dashboard",
    links: [
      {
        title: "Analytics",
        icon: <UsersRound />,
        link: "/",
      },
      {
        title: "Trips",
        icon: <Car />,
        link: "/trips",
      },
    ],
  },
  {
    icon: <ContactRound />,
    title: "Drivers",
    links: [
      {
        title: "Drivers By Location",
        icon: <MapPin />,
        link: "/drivers/by-location",
      },
      {
        title: "Drivers List",
        icon: <List />,
        link: "/drivers/list",
      },
    ],
  },
  {
    icon: <FileX />,
    title: "Earning Reports",
    links: [
      {
        title: "Statics",
        icon: <Box />,
        link: "/statics/earnings",
      },
      {
        title: "List",
        icon: <Table />,
        link: "/earnings",
      },
    ],
  },
]

const SidebarItem = ({
  sidebarItem,
  navigator,
  pathname,
  index,
}: {
  sidebarItem: SidebarItemsType
  navigator: UseNavigateResult<string>
  pathname: string
  index: number
}) => {
  const { sidebarToggle } = useContext(IntentContext) as IntentContextType

  const sidebarToggler = () => {
    // If the screen size is mobile, toggle the sidebar
    if (window.innerWidth < 768) {
      sidebarToggle()
    }
  }
  return (
    <AccordionItem value={`${`${index}`}_69`}>
      <AccordionTrigger className="hover:no-underline bg-background/5 p-4 ">
        <div className="flex gap-2 flex-nowrap">
          {sidebarItem?.icon}
          {sidebarItem?.title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-1 pt-2">
        {sidebarItem?.links?.map((linkItem, key) => (
          <Button
            variant={pathname === linkItem?.link ? "default" : "ghost"}
            className="w-full gap-2 justify-start"
            key={`${`${key}`}_69`}
            onClick={() => {
              navigator({
                to: linkItem?.link,
              })
              sidebarToggler()
            }}
          >
            {linkItem?.icon}
            {linkItem?.title}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

const Sidebar = () => {
  const navigator = useNavigate()
  const { pathname } = useLocation()
  const { isSidebarOpened, sidebarToggle } = useContext(
    IntentContext,
  ) as IntentContextType

  return (
    <aside
      className={`lg:col-span-2 bg-secondary/80 dark:bg-secondary/40 h-full min-h-screen p-3 ${!isSidebarOpened && "hidden lg:inline"} duration-300 ease-in transition-all`}
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-4xl font-semibold pt-3">Ryder</h1>
        <div className="flex flex-row gap-1 justify-between items-center">
          <ThemeChanger />
          <Button
            size="icon"
            variant="outline"
            onClick={() => sidebarToggle()}
            className="lg:hidden"
          >
            <X />
          </Button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-15vh)] sidebar-mini-scrollbar">
        <Accordion type="single" collapsible>
          {sidebarItems?.map((sidebarItem, key) => (
            <SidebarItem
              key={`${`${key}`}_69`}
              sidebarItem={sidebarItem}
              navigator={navigator}
              pathname={pathname}
              index={key}
            />
          ))}
        </Accordion>
      </div>
    </aside>
  )
}

export default Sidebar
