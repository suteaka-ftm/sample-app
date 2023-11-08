## 構成
sample-app
├── README.md
├── docker-compose.yml
├── envoy  # envoy proxy
│   ├── Dockerfile
│   └── envoy.yaml
├── grpc-web #client
│   ├── Dockerfile
│   ├── app.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── protobuf
│       ├── helloworld_grpc_web_pb.js
│       └── helloworld_pb.js
├── protos # hello, world proto
│   ├── Dockerfile
│   ├── generate.sh
│   ├── grpc-web.gen.yaml
│   ├── grpcurl.sh
│   ├── helloworld.proto
│   ├── protobuf
│   │   └── helloworld
│   └── server.gen.yaml
└── server # server
    ├── Dockerfile
    ├── entry_point.sh
    ├── go.mod
    ├── go.sum
    ├── main.go
    └── protobuf
        ├── helloworld.pb.go
        └── helloworld_grpc.pb.go

