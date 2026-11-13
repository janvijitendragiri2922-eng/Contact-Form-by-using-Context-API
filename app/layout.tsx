import type { Metadata } from "next";
import { AppProvider} from "./context/ContactContext";

import "./globals.css";



export const metadata: Metadata = {
  title: "Contact Management App",
  description: "Contact Form App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html >
      <body >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
