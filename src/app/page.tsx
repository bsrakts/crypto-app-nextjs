// src/app/page.tsx
"use client";

import CryptoTable from "@/components/CryptoTable";

interface CryptoData {
  [key: string]: string;
}

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-y-4 my-8">
      <h1 className="text-blue-800 font-semibold font-sans tracking-wide text-3xl bg-blue-50 bg-opacity-50 py-4 text-center">
        Real-Time Crypto Prices
      </h1>
      <CryptoTable />
    </div>
  );
}
