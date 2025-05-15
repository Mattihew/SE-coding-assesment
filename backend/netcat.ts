import {createServer} from 'node:net';

const server = createServer(c => {
  c.pipe(process.stdout);
});

server.listen(5250);





