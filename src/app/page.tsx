// src/app/page.tsx
"use client";

import CryptoTable from "@/components/CryptoTable";

interface CryptoData {
  [key: string]: string;
}

export default function Home() {
  return (
    <div>
      <h1>Real-Time Crypto Prices</h1>
      <CryptoTable />
    </div>
  );
}
