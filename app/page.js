"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bansyou:games");
      const list = raw ? JSON.parse(raw) : [];
      setGames(list);
      if (list.length) setSelected(list[0].name);
    } catch {
      setGames([]);
    }
  }, []);

  const handlePlay = () => {
    setMessage("");
    if (!selected) {
      setMessage("ゲームを選択してください。");
      return;
    }
    window.location.href = `/play.html?game=${encodeURIComponent(selected)}`;
  };

  return (
    <>
      <header className="topbar">
        <div>
          <div className="brand">盤匠</div>
          <div className="subtitle">盤と駒を設計して遊ぶ</div>
        </div>
      </header>

      <main>
        <section className="grid">
          <a className="btn secondary" href="/board-create.html">盤作成</a>
          <a className="btn secondary" href="/piece-create.html">駒作成</a>
          <a className="btn secondary" href="/game-setup.html">ゲーム作成</a>
          <a className="btn secondary" href="/board-list.html">盤一覧</a>
          <a className="btn secondary" href="/piece-list.html">駒一覧</a>
          <a className="btn secondary" href="/game-list.html">ゲーム一覧</a>
          <div className="card">
            <div className="label">作成したゲームをプレイする</div>
            <div className="row">
              <select
                value={selected}
                onChange={(event) => setSelected(event.target.value)}
                disabled={!games.length}
              >
                {games.length ? (
                  games.map((game) => (
                    <option key={game.name} value={game.name}>
                      {game.name}
                    </option>
                  ))
                ) : (
                  <option value="">ゲームがありません</option>
                )}
              </select>
              <button className="btn secondary" onClick={handlePlay} disabled={!games.length}>
                プレイ
              </button>
            </div>
            <div className="msg err">{message}</div>
          </div>
        </section>
      </main>
    </>
  );
}
