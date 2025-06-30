import { Link, useLocation } from "react-router-dom";
import {
  navbarData,
  type NavItem,
  type MegaMenuDomain,
} from "../data/navbarData";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type MobileNavMenuProps = {
  closeMenu: () => void;
};

export function NavMenu() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarData.map((item: NavItem) => (
          <NavigationMenuItem key={item.name}>
            {item.megaMenu ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname.startsWith(item.path || "___")
                      ? "text-primary bg-primary/10"
                      : "text-foreground",
                    "font-medium hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                    {item.megaMenu.map((domain: MegaMenuDomain) => (
                      <li key={domain.name} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to={domain.path}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <domain.icon className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                              {domain.name}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {domain.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground",
                  "font-medium hover:bg-primary/10 hover:text-primary"
                )}
              >
                <Link to={item.path || "#"}>{item.name}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavMenu({ closeMenu }: MobileNavMenuProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex flex-col space-y-2">
      {navbarData.map((item: NavItem) => (
        <div key={item.name}>
          {item.megaMenu ? (
            <>
              <button
                onClick={() => toggleMenu(item.name)}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium transition-colors",
                  pathname.startsWith(item.path || "")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.name}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openMenus[item.name] && "rotate-180"
                  )}
                />
              </button>
              {openMenus[item.name] && (
                <div className="ml-4 mt-1 flex flex-col space-y-1">
                  {item.megaMenu.map((domain: MegaMenuDomain) => (
                    <Link
                      key={domain.name}
                      to={domain.path}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-md px-4 py-2 text-sm transition-colors",
                        pathname === domain.path
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {domain.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.path || "#"}
              onClick={closeMenu}
              className={cn(
                "block w-full rounded-md px-4 py-2 text-left text-sm font-medium transition-colors",
                pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
