import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button className="w-15 h-9">Login</Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-6">
          <Link
            href={`/u/${user.username}`}
            className="flex text-muted-foreground items-center  hover:text-primary transition"
          >
            <Clapperboard className="h-5 w-5 lg:mr-2" />
            <span className="hidden lg:block">Dashboard</span>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};
