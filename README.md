## 環境構築

### 使用パッケージとそのバージョン

| パッケージ | バージョン |
| ---------- | ---------- |
| `yarn`     | 1.22.19    |
| `node`     | v16.16.0   |

### パッケージのインストール

```bash
yarn install
```

### 動作確認

```bash
yarn start
```

### ディレクトリ構造

```bash
src
 ├── components
 │   ├── parts          # ロジックが無いUIコンポーネントを定義
 │   ├── templates      # コンポーネントを組み合わせることを目的としたコンポーネントを定義
 │   └── views          # テンプレートにデータを渡すことを目的としたコンポーネントを定義
 ├── assets             # 画像やフォントなどの静的ファイル
 ├── types              # アプリケーション全体で使用されるEntityを定義
 └── utils
```
