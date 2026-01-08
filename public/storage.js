(() => {
  const NS = "bansyou";
  const key = (name) => `${NS}:${name}`;

  const defaults = {
    boards: [
      { type: "board", name: "9x9", size: 9, blocked: [] }
    ],
    pieces: [
      {
        type: "piece",
        name: "歩",
        char: "歩",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: { normal: [{ x: 4, y: 3 }], cont: [] },
        effects: [],
        fusion: null
      }
    ],
    games: []
  };

  function readRaw(name) {
    try {
      const value = localStorage.getItem(key(name));
      if (value === null) return null;
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  function writeRaw(name, value) {
    localStorage.setItem(key(name), JSON.stringify(value));
  }

  function ensureDefaults() {
    for (const name of Object.keys(defaults)) {
      if (readRaw(name) === null) {
        writeRaw(name, defaults[name]);
      }
    }
  }

  function list(name) {
    ensureDefaults();
    return readRaw(name) || [];
  }

  function upsert(name, item) {
    const items = list(name);
    const idx = items.findIndex((v) => v.name === item.name);
    if (idx >= 0) {
      items[idx] = item;
    } else {
      items.push(item);
    }
    writeRaw(name, items);
    return item;
  }

  function getByName(name, itemName) {
    return list(name).find((v) => v.name === itemName) || null;
  }

  function removeByName(name, itemName) {
    const items = list(name).filter((v) => v.name !== itemName);
    writeRaw(name, items);
  }

  function resetAll() {
    for (const name of Object.keys(defaults)) {
      writeRaw(name, defaults[name]);
    }
  }

  window.BansyouStorage = {
    listBoards: () => list("boards"),
    getBoard: (name) => getByName("boards", name),
    saveBoard: (board) => upsert("boards", board),
    listPieces: () => list("pieces"),
    getPiece: (name) => getByName("pieces", name),
    savePiece: (piece) => upsert("pieces", piece),
    deletePiece: (name) => removeByName("pieces", name),
    listGames: () => list("games"),
    getGame: (name) => getByName("games", name),
    saveGame: (game) => upsert("games", game),
    deleteGame: (name) => removeByName("games", name),
    deleteBoard: (name) => removeByName("boards", name),
    resetAll
  };
})();
