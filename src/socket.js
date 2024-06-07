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

        this.socket.on("recibir_jugadores", (event_data) => {
          console.log("HE recibidio los jugadores correctamente (autism ) ")
          this.main.recibir_usuarios(event_data[0])
        })

        this.socket.on("recibir_cartas", (event_data) => {
            this.main.recibir_cartas(event_data[0])
        })

        this.socket.on("mostrar_cartas_repartidas", (event_data)=> {
            this.main.recibir_cartas_tiradas(event_data[0])
        })

        this.socket.on("join_room", (event_data) => {
          console.log(event_data)
          this.main.join_room(event_data[0])
        })  

        this.socket.on('update_points',(event_data)=> {
          this.main.update_points(event_data[0], event_data[1])
        })

        this.socket.on('start_game',(event_data)=> {
          this.main.start_game()
        })
        
    }

    emit(...args){
        this.socket.emit(...args)
        
    }

    

}





