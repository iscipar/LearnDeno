import "https://deno.land/x/denv/mod.ts";

const appName = await Deno.env.get("APP_NAME") as string;
console.log(appName);