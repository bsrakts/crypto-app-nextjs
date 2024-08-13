### CRYPTO-APP-NEXT.JS

This project is a real-time cryptocurrency dashboard built with Next.js 14, TypeScript, and WebSocket. The application fetches cryptocurrency data from CoinCap's API and displays it in a live-updating table.

## Features

- Real-time updates using WebSocket.
- Responsive design with TailwindCSS.
- Data fetching from CoinCap API with error handling.
- Historical price charts for each cryptocurrency using Sparklines.
- Sort and filter functionality for the cryptocurrency list.

## Prerequisites

Before running the application, ensure you have:

- Node.js (version specified in the `package.json`)
- npm or yarn

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/crypto-app-nextjs.git
cd crypto-app-nextjs
```

### VPN Requirement
Important: Due to certain restrictions, the API requests may not work without a VPN. If you encounter issues loading the data, please use a VPN.

VPN Connected
After connecting to a VPN, the data should load correctly, and the application will appear as follows:

![image](https://github.com/user-attachments/assets/4c056b9c-29ac-4400-a432-ad14a0b6eb7e)

VPN Not Connected
When VPN is not connected, you may see an error or blank data:
![image](https://github.com/user-attachments/assets/2c2a7fa7-842f-4bb5-b8f3-191d109784d5)

