import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts link */}
        {/* <link
          href="https://fonts.fontshare.com/css?f[]=clash-grotesk@400"
          rel="stylesheet"
        /> */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
