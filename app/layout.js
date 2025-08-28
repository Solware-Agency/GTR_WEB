export const metadata = {
  title: 'GTR Web',
  description: 'GTR Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}