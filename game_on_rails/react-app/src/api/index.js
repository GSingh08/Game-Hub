const api = {
  getGames() {
    return fetch("/api/games").then(response => response.json());
  },

  createGame(newGame) {
    return fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGame)
    });
  }
};

export default api;
