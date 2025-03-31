"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <Button className="btn-secondary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
