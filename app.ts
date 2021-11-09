import { readline } from 'https://deno.land/x/readline/mod.ts';


console.log('start');

const input = await Deno.open('./input.txt');

const rl = readline(input);

for await (const line of rl) {
  const url = new TextDecoder().decode(line);

  if (url) {
    const res = await fetch(url);
    const json = await res.json();
    console.log(res.status, json.username);      
  }
}

input.close();
console.log('end');
