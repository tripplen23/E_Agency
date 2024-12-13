import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

interface MessChatProps {
  result: string;
  role: "user" | "bot";
}

const MessChat = ({ role, result }: MessChatProps) => {
  const variantStyle = {
    user: "ml-auto bg-primary text-white",
    bot: "mr-auto bg-secondary",
  };
  return (
    <Card className={`my-3 w-fit mx-2 max-w-[60rem] ${variantStyle[role]}`}>
      <CardTitle className="p-3">{role === "user" ? "User" : "Bot"}</CardTitle>
      <CardContent>{result}</CardContent>
    </Card>
  );
};

export default MessChat;
