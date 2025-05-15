import { createConnection, Socket } from "node:net";

let connection: Socket | null;
const getConnection = () => {
  if (!connection || connection.closed) {
    connection = createConnection({
      host: 'localhost',
      port: 5250,
    })
  }
  return connection;
}

export const send = (command:string) => {
  const socket = getConnection();
  socket.write(command, 'utf-8');
  if(!command.endsWith("\r\n")) {
    socket.write("\r\n");
  }
}

export const close = () => {
  const socket = getConnection();
  socket.end();
}
