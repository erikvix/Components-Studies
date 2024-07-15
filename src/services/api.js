const apiUrl = "https://official-joke-api.appspot.com/jokes/random";

export const fetchJoke = async () => {
  const res = await fetch(apiUrl);
  if (res.ok) return res.json();
  throw new Error("Fetch error");
};
