"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { promptChatBot } from "@/lib/actions/chat-action";
import { Send } from "lucide-react";
import React, { useState } from "react";

interface InputChatProps {
  onChangeMess: (e: any) => void;
  onChangeResult: (e: any) => void;
}

const InputChat = ({ onChangeMess, onChangeResult }: InputChatProps) => {
  const [value, setVal] = useState("");

  const handleGetResult = async (prompt: string) => {
    const data = await promptChatBot({ prompt: prompt });
    onChangeResult((prev: string[]) => {
      return [...prev, data.result];
    });
  };

  return (
    <section className="flex gap-2 container mx-auto my-3">
      <Input
        type="text"
        minLength={10}
        maxLength={10000}
        value={value}
        className=""
        onChange={(e) => {
          setVal(e.target.value);
        }}
        placeholder="Are you stucking with code, type your question here."
      />
      <Button
        onClick={() => {
          if (value.trim()) {
            onChangeMess((prev: string[]) => {
              return [...prev, value.trim()];
            });
            setVal("");
            handleGetResult(value.trim());
          }
        }}
      >
        <Send />
      </Button>
    </section>
  );
};

export default InputChat;
