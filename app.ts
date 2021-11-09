import { readline } from "https://deno.land/x/readline/mod.ts";

(async () => {
  console.log("start");

  const file = await Deno.open("./input.txt");

  const rl = readline(file);

  for await (const line of rl) {
    const url = new TextDecoder().decode(line);

    if (url) {
      const res = await fetch(url);
      const json = await res.json();
      console.log(url, res.status, json.username);
    }
  }

  file.close();
  console.log("end");
})();
