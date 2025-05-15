import { send, close } from "./casper.ts";
import { scheduleJob } from "node-schedule";

/* send startup command */
send("CG 1 ADD 1 main.MAIN 1");


const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});

/* setup job for increment commands */
scheduleJob("0 * * * * *", (date) => {
  const formattedDate = timeFormatter.format(date)
  send(`CG 1 INVOKE 1 "leftTab('on', 'BBC NEWS ${formattedDate}')"`);
});

process.on('exit', close)
