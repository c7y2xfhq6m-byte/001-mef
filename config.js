// ============================================================
// MEF 接続設定 config.js
// 目的: HTML本体と認証情報を分離し、ファイル全体置換運用での
//       認証情報消失事故を防止する(開発環境引き継ぎ書§5.2 恒久対策)
// 注意: このファイルはHTML差し替え時にも上書きしないこと。
//       ここに書いてよいのは Publishable key(旧anon key)のみ。
//       Secret key / service_role キーは絶対に書かないこと
//       (書くと③の機微データを含む全データが公開状態になる)。
// ============================================================
const MEF_CONFIG = {
  SUPABASE_URL: "https://ydpqtviptsyifeocpaqh.supabase.co",   // Project Settings > API の Project URL
  SUPABASE_ANON_KEY: "sb_publishable_q3hKMmauxBohLkSN8R2j4A_2XkQ9Q-V"    // 同 Publishable key(sb_publishable_...)
};
