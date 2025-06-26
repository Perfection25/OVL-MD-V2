const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PREFIXE: process.env.PREFIXE || "™",
  NOM_OWNER: process.env.NOM_OWNER || "𓆩༼𝑃𝐸𝑅𝐹𝐸𝐶𝑇_𝑂𝑁𝐸_𝐾𝐴𝑅𝐴༽𓆪",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "22390500302",
  MODE: process.env.MODE || "public",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_cC2xk7Hy_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "Wa-Perfect-stickers",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "𓆩༼𝑃𝐸𝑅𝐹𝐸𝐶𝑇_𝑂𝑁𝐸_𝐾𝐴𝑅𝐴༽𓆪",
  DATABASE: process.env.DATABASE,
  RENDER_API_KEY: process.env.RENDER_API_KEY,
  THEME: "1"
};
