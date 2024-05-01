import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
  cartas : [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:8080/";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
  socket.emit("on_join_room", 123);
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("repartir_cartas", (...args)=> {
  console.log("Cartas: ", args[0])
  state.cartas = args[0]
});


socket.on("joined_room", (...args) => {
  console.log("Se triggero unirse a la sala :D")
  socket.emit("repartir_cartas", 123); 
})
