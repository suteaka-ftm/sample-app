// grpc-web　app
import { GreeterClient } from './protobuf/helloworld_grpc_web_pb.js';
import { HelloRequest } from './protobuf/helloworld_pb.js';

var client = new GreeterClient('server.local:50051');

// on click event
// var button = document.getElementById('button');
// button.onclick = () => {
//   var request = new HelloRequest();
//   var input = document.getElementById('input');
//   request.setName(input.value);

//   client.sayHello(request, {}, (err, response) => {
//     document.getElementById('output').innerHTML = response.getMessage();
//   });

//   // add h3 tag with response message
//   var h3 = document.createElement('h3');
//   h3.innerHTML = response.getMessage();

//   document.getElementById('output').appendChild(h3);
// };

function showHello() {
  var requestedElement = document.createElement('div');
  requestedElement.innerHTML = "hello";
  document.body.appendChild(requestedElement);
}

function callSayHello() {
  var request = new HelloRequest();
  var input = document.getElementById('input');
  request.setName(input.value);

  client.sayHello(request, {}, (err, response) => {
    document.getElementById('output').innerHTML = response.getMessage();
  });

  var requestedElement = document.createElement('div');
  requestedElement.innerHTML = response.getMessage();
  document.body.appendChild(requestedElement);
}
