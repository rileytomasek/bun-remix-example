import { createRequestHandler, logDevReady } from "@remix-run/server-runtime";
import * as build from "./build";
import type { Serve } from "bun";

if (Bun.env.NODE_ENV === "development") {
  // @ts-ignore
  logDevReady(build);
  console.log("Server ready at http://localhost:3000");
}

export default {
  port: Bun.env.PORT || 3000,
  async fetch(request) {
    let { pathname } = new URL(request.url);
    let file = Bun.file(`${import.meta.dir}/public/${pathname}`);
    if (await file.exists()) return new Response(file);
    // @ts-ignore
    return createRequestHandler(build, "development")(request);
  },
} satisfies Serve;
