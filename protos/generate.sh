# 第一引数にserver, clientのいずれかを指定
ARG="$1"

if [ $ARG != "server" ] && [ $ARG != "client" ]; then
  echo "第一引数にserver, clientのいずれかを指定してください"
  exit 1
fi

buf generate --template $ARG/$ARG.gen.yaml
