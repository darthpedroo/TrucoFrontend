import { io } from "socket.io-client";

export default class Socket {
    constructor(main){
        this.main = main;
        this.url = import.meta.env.NODE_ENV === "production" ? undefined : "http://localhost:8080/";
        this.socket = io(this.url);

        this.socket.on("connect", () => {
          this.main.test_connection()
        });

        this.socket.on("disconnect", () => {
          this.main.test_disconnection()
        })

        this.socket.on("recibir_jugadores", (usuarios) => {
          console.log(usuarios)
          this.main.recibir_usuarios(usuarios)
        })

        
    }

    emit(...args){
        console.log("estos son los args: ", ...args)
        this.socket.emit(...args)
        
    }

    

}





