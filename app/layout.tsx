export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99999,
            background: "lime",
            color: "black",
            padding: "12px",
            fontSize: "18px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          ✅ LAYOUT.TSX IS RENDERING
        </div>

        {children}
      </body>
    </html>
  )
}
