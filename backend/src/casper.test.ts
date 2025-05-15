import { expect, test } from "vitest";
import { send } from "./casper.ts";
import { createServer } from "node:net";

test("send command is recieved", async () => {
  const promise = new Promise<string>((resolve) => {
    const server = createServer((c) => {
      c.on("data", (data) => {
        resolve(data.toString());
        server.close();
      });
    });
    server.listen(5250);
  });

  send("test");
  await expect(promise).resolves.toEqual("test\r\n");
});
