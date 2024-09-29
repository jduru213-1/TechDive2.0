
import React from 'react';

export default function Loading() {
  return (
    <main className="text-center bg-black h-screen  dark:bg-black flex flex-col justify-center items-center">
      {/* Welcome message */}

      {/* Three bouncing dots */}
      <div className="flex space-x-5 justify-center items-center animate-fadeAndZoom">
        <div className="h-10 w-10 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.4s]"></div>
        <div className="h-10 w-10 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-10 w-10 bg-black dark:bg-white rounded-full animate-bounce"></div>
      </div>
    </main>
  );
}

