export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          padding: "24px 28px",
          borderRadius: 16,
          background: "#020617",
          boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
          width: 360,
          maxWidth: "90vw",
        }}
      >
        <h1 style={{ margin: "0 0 8px", fontSize: 26 }}>Flipping Work App</h1>
        <p style={{ margin: "0 0 20px", opacity: 0.8, fontSize: 14 }}>
          Clean starting point. Once this is live on Railway, we&apos;ll add:
          name & language setup, home screen, and properties list.
        </p>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.7 }}>
          If you are seeing this page online, the base app is working.
        </p>
      </div>
    </main>
  );
}
