<script setup>
import { ref } from 'vue';
import { GreeterClient } from "../protobuf/helloworld_grpc_web_pb.js";
import { HelloRequest, HelloReply } from "../protobuf/helloworld_pb.js";

const client = new GreeterClient("envoy.local:8080", null, null);
const res = ref(null); // Use a ref here to make it reactive
const name = ref(""); // Reactive variable for the input field

const onClick = () => {
  // const request = new HelloRequest();
  // request.setName(name.value); // Set the name from the input field
  // client.sayHello(request, {}, (err, response) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   res.value = response.getMessage(); // Update the reactive variable with the response
  // });
  res.value = "Hello " + name.value;
};
</script>

<template>
  <h1>Let's call hello rpc!!</h1>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="name" type="text" placeholder="Enter your name"/>
    <button @click="onClick">Submit</button>
  </div>

  <div>
    <h2>Response</h2>
    <p v-if="res">{{ res }}</p>
  </div>
</template>
