import { parseGIF, decompressFrames } from "gifuct-js";

async function requestGif() {
   const promisedGif = await fetch("https://i.imgur.com/A7Ly42B.gif")
   .then((resp) => resp.arrayBuffer())
   .then((buff) => parseGIF(buff))
   .then((gif) => decompressFrames(gif, true));
   return promisedGif;
}

export default requestGif;
