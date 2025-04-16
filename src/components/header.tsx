import { Menu } from "lucide-react";
import React from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetFooter,
} from "./ui/sheet";
import AuthButtons from "./auth-buttons";

const Header = () => {
  const navLinks = [
    {
      id: crypto.randomUUID(),
      content: "About",
      href: "#about",
    },
  ];

  return (
    <div className="w-full h-20 px-4 md:px-20 flex flex-row justify-between items-center bg-white border-b border-b-neutral-200 shadow-md">
      <div className="w-full h-full hidden md:flex flex-row justify-between items-center">
        <div className="text-black">LOGO</div>
        <div className="flex flex-row gap-4 text-black">
          {navLinks.map((link) => (
            <a key={link.id}>{link.content}</a>
          ))}
        </div>
        <AuthButtons />
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu className="md:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[90%] md:hidden">
          <SheetHeader>
            <SheetTitle>Logo</SheetTitle>
          </SheetHeader>
          <div className="flex flex-row gap-4 text-black">
            {navLinks.map((link) => (
              <a key={link.id}>{link.content}</a>
            ))}
          </div>
          <SheetFooter>
            <AuthButtons />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="md:hidden">Logo</div>
      <Menu className="bg-neutral-100 text-neutral-100 md:hidden cursor-none" />
    </div>
  );
};

export default Header;
