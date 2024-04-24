import { Inter } from "next/font/google";
import "./globals.css";

import { UserProvider} from "./context/UserContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitStar",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
      
    </html>
  );
}
