import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const hash: string = await bcrypt.hash("password");
console.log(hash);