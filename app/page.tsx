"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession()
  return (
<div>
hello front page : {session.data?.user?.name}
</div>
  );
}
