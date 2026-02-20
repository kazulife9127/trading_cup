# Trading Cup

IZKY トークンのトレーディング大会プラットフォーム

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| User フロントエンド | Next.js 14, TailwindCSS, wagmi, RainbowKit |
| Admin フロントエンド | Next.js 14, TailwindCSS, Firebase Auth |
| バックエンド API | NestJS 10, Firebase Admin SDK |
| データベース | Firestore |
| デプロイ (Frontend) | Vercel |
| デプロイ (API) | GCP Cloud Run |
| モノレポ管理 | Turborepo + pnpm |

## プロジェクト構成

```
Trading-Cup/
├── apps/
│   ├── user/       User向け Next.js (Vercel)
│   ├── admin/      Admin向け Next.js (Vercel)
│   └── api/        NestJS API (Cloud Run)
├── packages/
│   ├── shared/     共通型定義
│   ├── ui/         共通UIコンポーネント
│   └── config/     TSConfig, ESLint設定
└── docker-compose.yml
```

## 前提条件

- Node.js 20 以上
- pnpm 9 以上
- Docker Desktop (Firebase Emulator 用)

## セットアップ

```bash
# 1. リポジトリをクローン
git clone <repository-url>
cd Trading-Cup

# 2. 環境変数ファイルを作成
cp .env.example .env

# 3. 依存関係をインストール
pnpm install

# 4. Firebase Emulator を起動
docker compose up -d

# 5. 全アプリを起動
pnpm dev
```

## 開発コマンド

```bash
# 全アプリ一括起動
pnpm dev

# 個別起動
pnpm --filter @trading-cup/user dev     # User画面:  http://localhost:3000
pnpm --filter @trading-cup/admin dev    # Admin画面: http://localhost:3002
pnpm --filter @trading-cup/api dev      # API:       http://localhost:3001

# Firebase Emulator
docker compose up -d                    # 起動
docker compose down                     # 停止

# ビルド
pnpm build

# リント・フォーマット
pnpm lint
pnpm format
```

## API ドキュメント

開発サーバー起動後、以下の URL で Swagger UI を確認できます:

http://localhost:3001/api/docs

## デプロイ

### フロントエンド (Vercel)

Vercel に GitHub リポジトリを接続し、以下の 2 プロジェクトを作成:

1. **trading-cup-user** - Root Directory: `apps/user`
2. **trading-cup-admin** - Root Directory: `apps/admin`

Vercel Dashboard で以下の環境変数を設定:

- `NEXT_PUBLIC_API_URL` - Cloud Run API の URL
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` (User のみ)
- `NEXT_PUBLIC_CHAIN_ID` (User のみ)

### バックエンド (GCP Cloud Run)

```bash
# Cloud Run にデプロイ (Cloud Build 使用)
gcloud builds submit --config cloudbuild.yaml
```

GCP で必要なサービス:

- Cloud Run
- Firestore
- Firebase Auth
- Secret Manager
- Cloud Scheduler (30分バッチ)
- Artifact Registry
