FROM node:14

WORKDIR /app

COPY . .

# 依存関係をインストール
RUN npm install -g http-server

# ポート8080を公開
EXPOSE 8080

# アプリケーションを起動
CMD ["http-server", "-p", "8080"]
