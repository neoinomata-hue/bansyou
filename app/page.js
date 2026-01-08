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
          <div className="card">
            <div className="label">盤作成</div>
            <div className="note">マス数と通行不可マスを設定して、盤の土台を作ります。</div>
            <a className="btn secondary" href="/board-create.html">盤作成</a>
          </div>
          <div className="card">
            <div className="label">駒作成</div>
            <div className="note">動き方を配置して、独自の駒セットを用意します。</div>
            <a className="btn secondary" href="/piece-create.html">駒作成</a>
          </div>
          <div className="card">
            <div className="label">ゲーム作成</div>
            <div className="note">盤と駒を配置し、持ち駒ルールを設定して保存します。</div>
            <a className="btn secondary" href="/game-setup.html">ゲーム作成</a>
          </div>
          <div className="card">
            <div className="label">盤一覧</div>
            <div className="note">作成した盤を確認・編集・削除します。</div>
            <a className="btn secondary" href="/board-list.html">盤一覧</a>
          </div>
          <div className="card">
            <div className="label">駒一覧</div>
            <div className="note">作成した駒を確認・編集・削除します。</div>
            <a className="btn secondary" href="/piece-list.html">駒一覧</a>
          </div>
          <div className="card">
            <div className="label">ゲーム一覧</div>
            <div className="note">作成したゲームを確認・編集・削除します。</div>
            <a className="btn secondary" href="/game-list.html">ゲーム一覧</a>
          </div>
          <div className="card">
            <div className="label">作成したゲームをプレイする</div>
            <div className="note">保存済みゲームを選び、盤上で動かして確認します。</div>
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
