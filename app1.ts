import { serve } from "https://deno.land/std@0.117.0/http/server.ts";

serve(() => new Response("Hello World\n"));
console.log("http://localhost:8000");
