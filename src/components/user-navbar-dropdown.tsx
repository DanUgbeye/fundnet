import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

export function UserNavbarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="green"
          className=" grid aspect-square place-items-center rounded-full "
        >
          DU
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-10 mt-3 w-56 ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="grid grid-cols-[1fr,minmax(1.5rem,auto)] ">
            Profile
            <DropdownMenuShortcut>
              <FaUser className=" h-3 w-3 " />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="grid grid-cols-[1fr,minmax(1.5rem,auto)] ">
          Settings
          <DropdownMenuShortcut>
            <FiSettings className=" h-4 w-4 " />
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem className="grid grid-cols-[1fr,minmax(1.5rem,auto)] ">
          Log out
          <DropdownMenuShortcut>
            <IoLogOutOutline className=" h-4 w-4 " />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
