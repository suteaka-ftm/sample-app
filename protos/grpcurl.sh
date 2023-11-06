grpcurl -plaintext -d \
'{
  "name": "world"
}' \
-proto ./helloworld.proto server.local:50051 helloworld.Greeter/SayHello
