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
      ,
      {
        type: "piece",
        name: "玉",
        char: "玉",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 4 }, { x: 5, y: 4 },
            { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }
          ],
          cont: []
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "金",
        char: "金",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 4 }, { x: 5, y: 4 },
            { x: 4, y: 5 }
          ],
          cont: []
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "銀",
        char: "銀",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 5 }, { x: 5, y: 5 }
          ],
          cont: []
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "桂",
        char: "桂",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 3, y: 2 }, { x: 5, y: 2 }
          ],
          cont: []
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "香",
        char: "香",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 1,
        moves: {
          normal: [],
          cont: [{ x: 4, y: 3 }]
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "角",
        char: "角",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 1,
        moves: {
          normal: [],
          cont: [
            { x: 3, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 5 }, { x: 5, y: 5 }
          ]
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "飛",
        char: "飛",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 1,
        moves: {
          normal: [],
          cont: [
            { x: 4, y: 3 }, { x: 4, y: 5 },
            { x: 3, y: 4 }, { x: 5, y: 4 }
          ]
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "チェス_キング",
        char: "K",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 4 }, { x: 5, y: 4 },
            { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }
          ],
          cont: []
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "チェス_クイーン",
        char: "Q",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 1,
        moves: {
          normal: [],
          cont: [
            { x: 4, y: 3 }, { x: 4, y: 5 },
            { x: 3, y: 4 }, { x: 5, y: 4 },
            { x: 3, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 5 }, { x: 5, y: 5 }
          ]
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "チェス_ルーク",
        char: "R",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 1,
        moves: {
          normal: [],
          cont: [
            { x: 4, y: 3 }, { x: 4, y: 5 },
            { x: 3, y: 4 }, { x: 5, y: 4 }
          ]
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "チェス_ビショップ",
        char: "B",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 1,
        moves: {
          normal: [],
          cont: [
            { x: 3, y: 3 }, { x: 5, y: 3 },
            { x: 3, y: 5 }, { x: 5, y: 5 }
          ]
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "チェス_ナイト",
        char: "N",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 3, y: 2 }, { x: 5, y: 2 },
            { x: 2, y: 3 }, { x: 6, y: 3 },
            { x: 2, y: 5 }, { x: 6, y: 5 },
            { x: 3, y: 6 }, { x: 5, y: 6 }
          ],
          cont: []
        },
        effects: [],
        fusion: null
      },
      {
        type: "piece",
        name: "チェス_ポーン",
        char: "P",
        boardSize: 9,
        center: { x: 4, y: 4 },
        stride: 4,
        moves: {
          normal: [
            { x: 4, y: 3 },
            { x: 3, y: 3 }, { x: 5, y: 3 }
          ],
          cont: []
        },
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
