"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Appbar({ showThemeSwitch = true }) {
  const { status } = useSession();
  const router = useRouter();

  return (
    <div className="flex justify-between px-5 py-4 md:px-10 xl:px-20">
      <div
        onClick={() => router.push("/")}
        className={`flex flex-col justify-center text-lg font-bold hover:cursor-pointer ${
          showThemeSwitch ? "" : "text-white"
        }`}
      >
        Muzer
      </div>
      <div className="flex items-center gap-x-2">
        {status === "authenticated" ? (
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </Button>
        ) : (
          <div className="space-x-3">
       <Button onClick={() => signIn("google")}>Signin</Button>
            <Link
              href={{
                pathname: "/auth",
                query: { authType: "signUp" },
              }}
              passHref
            >
             <Button onClick={() => signIn("google", { callbackUrl: "/" })}>Signup</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
