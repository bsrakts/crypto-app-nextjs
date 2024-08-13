import React from "react";
import Link from "next/link";
import VpnLockIcon from "@mui/icons-material/VpnLock";

const ErrorPage: React.FC = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-red-500 uppercase font-semibold text-4xl flex gap-x-2 items-center">
        <VpnLockIcon className="text-5xl" />
        VPN Connection Error
      </h1>
      <p>It seems there was an issue connecting to the server.</p>
      <p>
        Please try connecting through a VPN service to access the required data.
      </p>
      <Link
        href="https://chromewebstore.google.com/detail/free-vpn-for-chrome-vpn-p/majdfhpaihoncoakbjgbdhglocklcgno"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-green-700"
      >
        Recommended VPN Service for Google Users
      </Link>
      <br />
      <b className="text-stone-800">Did you connected any VPN services?</b>
      <Link
        href="/"
        className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Try Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
