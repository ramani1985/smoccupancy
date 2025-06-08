// api.js
export async function queryDesks(query) {
  const res = await fetch("http://localhost:5000/api/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return await res.json();
}
