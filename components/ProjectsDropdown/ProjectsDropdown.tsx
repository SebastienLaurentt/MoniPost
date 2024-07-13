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
        <svg
          className="size-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 md:mr-6">
        <DropdownMenuItem>
          <Link
            href="/#background-section"
            aria-label="Background section link"
          >
            Background
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/#models-section" aria-label="Models section link">
            Solutions
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/#price-section" aria-label="Prices section link">
            Prices
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/#team-section" aria-label="Team section link">
            Team
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectsDropdown;
