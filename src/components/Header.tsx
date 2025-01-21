'use client';

import { CommandDemo }  from "../components/Command";
import { Button } from "./ui/button";
import { BellIcon} from "lucide-react";

export default function Header() {
    return (
      <div className="grid grid-cols-2 gap-4 border-b p-4">
        <CommandDemo />
        <div className="flex items-center justify-end">
            <Button variant="outline" size="icon">
                <BellIcon className="h-4 w-4"/>
            </Button>
        </div>
      </div>
    );
  }
  