# Node.js 14をベースイメージとして使用
FROM node:14

# 作業ディレクトリを/appに設定
WORKDIR /app

# クライアントコードと依存関係をコピー
# COPY package.json package-lock.json ./
COPY index.html ./
COPY protobuf ./

# 依存関係をインストール
RUN npm install

# ポート8080を公開
EXPOSE 8080

# アプリケーションを起動
CMD ["npm", "start"]
