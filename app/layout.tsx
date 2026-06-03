import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShiftGuard — Restaurant Schedule Compliance',
  description: 'Ensures restaurant schedules comply with labor laws. Prevent overtime violations, track break requirements, and generate compliance reports.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c9d60b00-44be-49d4-b3f3-f61a740b4d65"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
