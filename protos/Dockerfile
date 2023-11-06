FROM golang:1.21.1-bullseye

WORKDIR /app

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

RUN go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
RUN go install github.com/bufbuild/buf/cmd/buf@latest
RUN go install github.com/bufbuild/connect-go/cmd/protoc-gen-connect-go@latest

ENTRYPOINT ["sleep", "infinity"]
