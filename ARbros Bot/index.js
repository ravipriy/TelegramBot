const { Telegraf } = require("telegraf");
//const { Composer } = require("micro-bot");

const TOKEN1 = "5445563827:AAHS6ldgsUrGTsWaeQpQUlEJsGOODyIzcEk";

const bot = new Telegraf(TOKEN1);
//const bot = new Composer();



// Naive authorization middleware
bot.start((ctx,next) => {
  
  var data=getUserRole(ctx.message).then((str)=>{
    console.log('From use')
    console.log(str)
  })
  console.log(data)
  return next
})


async function getUserRole(msg){
  console.log('=======im from getuserrole method=====')
  bot.on('text',(ctx)=>{
    ctx.reply(msg.chat.first_name+" "+msg.chat.last_name)
  console.log('From get user role')
  var str='ary'
    return str
  })
}





// 200810012409
//this cmd work in grp also
bot.hears('hi',(ctx)=>{
  ctx.reply('hello')
})



//LAST DATA PUSHED
/*
//Remains the same
bot.start((ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Hey I'm here for you 😐\nJoin Us and Enjoy your day...",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "All Channels List", callback_data: "AllList" }],

          [
            { text: "AR Support Group", url: "https://t.me/request2AR" },
            { text: "Private Chat", url: "https://t.me/ARbrosHelp" },
          ],
          [{ text: "Close Menu", callback_data: "CloseMenu" }],
        ],
      },
    }
  );
});

//My buttons ================================
// bot.action('pc',(ctx)=>{
//   ctx.telegram.sendMessage(
//     ctx.chat.id,
//     "<b>Message to ARbros Help for private chat <a href='t.me/arbroshelp'>ARbrosHelp</a>,</b>",
//     {
//       parse_mode: "HTML",
//     }
//   );
// })
bot.action("AllList", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "All Channels List\nWatch video of channel which you want to join.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "AR Movies Hub 🎞",
              url: "https://www.youtube.com/watch?v=qAi2mdUOxtU",
            },
          ],
          [
            {
              text: "AR Webseries Hub 🎞",
              url: "https://www.youtube.com/watch?v=_8tCo2PkAkI",
            },
          ],
          [
            {
              text: "Unrated Hub 🎞",
              url: "https://www.youtube.com/watch?v=1yg0LzjFwok",
            },
          ],
          [{ text: "ARbros Hub 🎞", url: "t.me/ARbroshub"}],
          [
            { text: "Go Back", callback_data: "BackToMainMenu" },
            { text: "Close Menu", callback_data: "CloseMenu" },
          ],
        ],
      },
    }
  );
});
bot.action("armh", (ctx) => {});

bot.action("BackToMainMenu", (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Hey I'm here for you 😐\nJoin Us and Enjoy your day...",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "All Channels List", callback_data: "AllList" }],

          [
            { text: "AR Support Group", url: "https://t.me/request2AR" },
            { text: "Private Chat", url: "https://t.me/ARbrosHelp" },
          ],
          [{ text: "Close Menu", callback_data: "CloseMenu" }],
        ],
      },
    }
  );
});
bot.action("CloseMenu", (ctx) => {
  ctx.deleteMessage();
  ctx.reply(
    "Available commands are\n/start - Start Me\n/help - Need Help\n/report - Report Bug"
  );
});
//=========================================

bot.command("help", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "<b>Message your query in our <a href='t.me/request2AR'>Support Group</a>,</b>",
    {
      parse_mode: "HTML",
    }
  );
});

bot.command("report", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "<b>Report any bug to my developer\n👉 <i>Arav Aryan</i></b>",
    {
      parse_mode: "HTML",
    }
  );
});
*/







bot.launch();
//module.exports = bot;
