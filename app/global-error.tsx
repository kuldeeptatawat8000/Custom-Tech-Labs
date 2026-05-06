'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>

        <button
          onClick={() => reset()}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            marginTop: "10px",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}