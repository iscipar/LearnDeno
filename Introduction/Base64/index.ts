import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

const b64: string = base64.fromUint8Array(new TextEncoder().encode("Datos de ejemplo"));
console.log(b64);

const buf: Uint8Array = base64.toUint8Array(b64);
await Deno.stdout.write(buf);