import "./globals.css";
import "@/styles/main.scss";
import "@/styles/res.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Turnkey",
  description: "Turnkey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
        {children}
      </body>
    </html>
  );
}
