export default function Home() {
  return (
    <main className="app-home">
      <h1>盤匠</h1>
      <p>盤と駒を設計し、ローカル保存したゲームで遊べる静的Web作品です。</p>
      <a className="btn" href="/index.html">作品ページへ</a>
      <div className="links">
        <a href="/board-create.html">盤作成</a>
        <a href="/piece-create.html">駒作成</a>
        <a href="/game-setup.html">ゲーム設定</a>
        <a href="/play.html">プレイ</a>
      </div>
    </main>
  );
}
