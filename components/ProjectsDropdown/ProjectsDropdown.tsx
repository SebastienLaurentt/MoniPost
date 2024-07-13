import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const ProjectsDropdown = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="text-md text-white lg:hidden">
        Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuItem>
          <Link
            href="/#background-section"
            aria-label="Background section link"
          >
            Background
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/#models-section"
            aria-label="Models section link"
          >
            Solutions
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/#price-section"
            aria-label="Prices section link"
          >
            Prices
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/#team-section"
            aria-label="Team section link"
          >
            Team
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectsDropdown;
