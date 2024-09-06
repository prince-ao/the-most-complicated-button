"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState("loading...");

  async function handleClick() {
    const res = await fetch("/api/click", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: localStorage.getItem("who") }),
    });

    if (res.status === 400) {
      setClicks("there was an error, please reload the page.");
      return;
    } else {
      setClicks(clicks + 1);
    }
  }

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/click", {
        method: "GET",
        headers: localStorage.getItem("who")
          ? { from: localStorage.getItem("who") }
          : {},
      });

      const p_res = await res.json();

      if (p_res.uuid) {
        localStorage.setItem("who", p_res.uuid);
      }

      setClicks(p_res.clicks);
    })();
  }, []);

  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-3xl font-bold mb-6">{clicks} click</h1>
      <button
        onClick={handleClick}
        className="w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
      >
        Click Me!
      </button>
    </main>
  );
}
