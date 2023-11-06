# 第一引数にserver, clientのいずれかを指定
if [ $# -ne 1 ]; then
    echo "引数にserver, clientのいずれかを指定してください"
    exit 1
fi

if [ $1 != "server" ] && [ $1 != "grpc-web" ]; then
    echo "引数にserver, clientのいずれかを指定してください"
    exit 1
fi

buf generate --template $1.gen.yaml
