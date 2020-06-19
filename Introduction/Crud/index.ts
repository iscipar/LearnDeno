import { Application } from "https://deno.land/x/abc/mod.ts";
import { findAll, findOne, create, remove } from "./handler.ts";

const app = new Application();

app
    .get("/", findAll)
    .get("/:id", findOne)
    .post("/", create)
    .delete("/:id", remove)
    .start({ port: 5000 });

console.log("Servidor escuchando en http://localhost:5000");