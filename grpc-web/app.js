const {HelloRequest, HelloReply} = require('./protobuf/helloworld_pb.js');
const {GreeterClient} = require('./protobuf/helloworld_grpc_web_pb.js');

const client = new GreeterClient('http://localhost:8080');

const request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(response.getMessage());
});
