export async function PATCH(request) {
  const body = await request.json();

  let data = await fetch("http://localhost:8080/api/click", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: body?.from }),
  });

  return data;
}

export async function GET(request) {
  const headers = request.headers;
  console.log(headers.get("from"));

  let data = await fetch("http://localhost:8080/api/click", {
    method: "GET",
    headers: { from: headers.get("from") },
  });

  return data;
}
