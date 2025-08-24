import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f8f7f3]">{children}</body>
    </html>
  );
}
