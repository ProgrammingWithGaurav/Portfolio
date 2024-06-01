
import { FloatingNav } from "./ui/FloatingNavbar";
import { IconHome, IconTools, IconUserCircle, IconPhone} from "@tabler/icons-react";
export function FloatingNavDemo() {

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <span className="h-4 w-4 text-neutral-500 dark:text-white" >🚀</span>
      ),
    },
    {
      name: "About Me",
      link: "/about",
      icon: (
        <IconUserCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact Me",
      link: "/contact",
      icon: (
        <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white"/>
      ),
    },
  ];