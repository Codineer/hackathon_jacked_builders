export const metadata = {
  title: "Jacked Builders",
  description: "Created By Utkarsh aka Lunatic",
};

import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}