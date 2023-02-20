import fetch from 'node-fetch'
import fs from 'fs'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
    let user = global.db.data.users[m.sender] 
    let name = await conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender]
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850)   
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let m2 = `
ᴛʜᴇ Ash_BOT
`
let pp = './Guru.jpg' 
    conn.sendButton(m.chat, m2, `╭═══〘 ✯✯✯✯✯✯✯ 〙══╮
║    *ᴛʜᴇ ASH-ʙᴏᴛ* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ii, ${taguser}* 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Creater:* ASH UCHIHA 
║➤ *Number:* wa.me/6281255369012
║➤ 
║➤ *Insta:* was_ash_enough
║➤ *Total Users:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯╞═══╯
┏━━━━━━━━━━━━━━━━┓
┃ *< USER INFO />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ level:* ${level}
┣ *🧰 Experience:* ${exp}
┣ *⚓ Rank:* ${role}
┣ *💎 Diamonds:* ${diamond}
┣ *🎟️ Premium:* ${user.premium = 'true' ? '✅' : '❌'}
┗━━━━━━━━━━━━━━━━┛`, pp, 
      ['⌬ MENU LIST', `${usedPrefix}list`]
    ,m, rpyt)
    //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu', 'help', 'h'] 

export default handler
