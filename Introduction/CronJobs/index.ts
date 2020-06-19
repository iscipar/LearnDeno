import { Cron } from "https://deno.land/x/cron/cron.ts";

const cron = new Cron();
cron.add("* * * * *", () => {
    console.log("Actualizando fecha en archivo...");
    Deno.writeTextFileSync("./now.txt", `${Date.now()}`);
});
cron.start();