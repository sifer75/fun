export const getUserInfo = async () => {
  const response = await fetch("http://localhost:3333/user/get", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des infos de l'utilisateur connecté"
    );
  }
  return response.json();
};
