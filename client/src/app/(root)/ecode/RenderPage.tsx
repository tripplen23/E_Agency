"use client";
import React, { useState } from "react";
import ShowChat from "@/components/ecode/ShowChat";
import InputChat from "@/components/ecode/InputChat";
import MessChat from "@/components/ecode/MessChat";

const RenderPage = () => {
  const [mess, setMess] = useState<string[]>([]);
  const [result, setResult] = useState<string[]>([]);

  console.log("Mess:", mess);
  console.log("Result:", result);

  return (
    <main className="py-10">
      <ShowChat>
        {mess &&
          mess.map((item, index) => {
            return (
              <>
                <MessChat key={index} result={item} role="user" />
                {result[index] && (
                  <MessChat key={index} result={result[index]} role="bot" />
                )}
              </>
            );
          })}
      </ShowChat>
      <InputChat onChangeMess={setMess} onChangeResult={setResult} />
    </main>
  );
};

export default RenderPage;
