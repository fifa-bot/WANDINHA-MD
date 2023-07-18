const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

★︦˟݂݁𖧗─┄⃟👑 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  👑⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍒.self 🅞
│⃕🍒.public 🅞
│⃕🍒.join 🅞
│⃕🍒.bctext 🅞
│⃕🍒.poll 🅞
│⃕🍒.bcimage 🅞
│⃕🍒.bcvideo 🅞
│⃕🍒.creategc 🅞
│⃕🍒.setexif 🅞
│⃕🍒.userjid 🅞
│⃕🍒.setbotname 🅞
│⃕🍒.setbotbio 🅞
│⃕🍒.delppbot 🅞
│⃕🍒.shutdown 🅞
│⃕🍒.setppbot 🅞
│⃕🍒.addprem 🅞
│⃕🍒.delprem 🅞
│⃕🍒.addowner 🅞
│⃕🍒.delowner 🅞
│⃕🍒.addvn 🅞
│⃕🍒.delvn 🅞
│⃕🍒.addsticker 🅞
│⃕🍒.delsticker 🅞
│⃕🍒.addimage 🅞
│⃕🍒.delimage 🅞
│⃕🍒.addvideo 🅞
│⃕🍒.delvideo 🅞
│⃕🍒.block 🅞
│⃕🍒.unblock del 🅞
│⃕🍒.leavegc 🅞
│⃕🍒.pushcontact 🅞
│⃕🍒.pushcontactv2 🅞
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍎 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 🍎⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍎.antilink 🅖
│⃕🍎.antiwame 🅖
│⃕🍎.grouplink 🅖
│⃕🍎.invite 🅖
│⃕🍎.ephemeral 🅖
│⃕🍎.delete 🅖
│⃕🍎.setppgroup 🅖
│⃕🍎.delppgroup 🅖
│⃕🍎.setname 🅖
│⃕🍎.setdesc 🅖
│⃕🍎.add 🅖
│⃕🍎.kick 🅖
│⃕🍎.promote 🅖
│⃕🍎.demote 🅖
│⃕🍎.hidetag 🅖
│⃕🍎.totag 🅖
│⃕🍎.tagall 🅖
│⃕🍎.editinfo 🅖
│⃕🍎.opentime 🅖
│⃕🍎.closetime 🅖
│⃕🍎.resetlink 🅖
│⃕🍎.getbio 🅖
│⃕🍎.vote 🅖
│⃕🍎.upvote 🅖
│⃕🍎.downvote 🅖
│⃕🍎.checkvote 🅖
│⃕🍎.delvote 🅖
│⃕🍎.autostickergc 🅖
│⃕🍎.antilinkgc 🅖
│⃕🍎.antiwame 🅖
│⃕🍎.antilinkall 🅖
│⃕🍎.antilinktiktok 🅖
│⃕🍎.antilinkfb 🅖
│⃕🍎.antilinktwitter 🅖
│⃕🍎.antilinkig 🅖
│⃕🍎.antlinktg 🅖
│⃕🍎.antilinkytvid 🅖
│⃕🍎.antilinkytch 🅖
│⃕🍎.antivirus 🅖
│⃕🍎.antitoxic 🅖
│⃕🍎.nsfw 🅖
│⃕🍎.react 🅖
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍋 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 🍋 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍋.ytsearch 🅕
│⃕🍋.play 🅕
│⃕🍋.ytmp3 🅕
│⃕🍋.ytmp4 🅕
│⃕🍋.google 🅕
│⃕🍋.imdb 🅕
│⃕🍋.weather 🅕
│⃕🍋.wanumber 🅕
│⃕🍋.instaimg 🅕
│⃕🍋.instavid 🅕
│⃕🍋.fbvid 🅕
│⃕🍋.twittervid 🅕
│⃕🍋.telestick 🅟
│⃕🍋.spotify 🅟
│⃕🍋.gitclone 🅕
│⃕🍋.happymod 🅕
│⃕🍋.gdrive 🅕
│⃕🍋.pinterest 🅕
│⃕🍋.ringtone 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🎬 𝙍𝘼𝙉𝘿𝙊𝙈 𝙑𝙄𝘿𝙀𝙊 🎬 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🎬.tiktokgirl 🅕
│⃕🎬.tiktoknukthy 🅕
│⃕🎬.tiktokkayes 🅕
│⃕🎬.tiktokpanrika 🅕
│⃕🎬.tiktoknotnot 🅕
│⃕🎬.tiktokghea 🅕
│⃕🎬.tiktoksantuy 🅕
│⃕🎬.tiktokbocil 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🐠 𝙎𝙏𝘼𝙇𝙆𝙀𝙍 𝙈𝙀𝙉𝙐 🐠 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🐠.igstalk 🅕
│⃕🐠.ffstalk 🅕
│⃕🐠.mlstalk 🅕
│⃕🐠.npmstalk 🅕
│⃕🐠.ghstalk 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🤖 𝘼𝙄 𝙈𝙀𝙉𝙐 🤖 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🤖.openai 🅕
│⃕🤖.ai 🅕
│⃕🤖.aimage 🅕
│⃕🤖.remini 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🌕 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 🌕 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🌕.define 🅕
│⃕🌕.qc 🅕
│⃕🌕.lyrics 🅕
│⃕🌕.suit 🅕
│⃕🌕.math 🅕
│⃕🌕.tictactoe 🅕
│⃕🌕.fact 🅕
│⃕🌕.truth 🅕
│⃕🌕.dare 🅕
│⃕🌕.couple 🅕
│⃕🌕.soulmate 🅕
│⃕🌕.stupidcheck 🅕
│⃕🌕.handsomecheck 🅕
│⃕🌕.uncleancheck 🅕
│⃕🌕.hotcheck 🅕
│⃕🌕.smartcheck 🅕
│⃕🌕.greatcheck 🅕
│⃕🌕.evilcheck 🅕
│⃕🌕.dogcheck 🅕
│⃕🌕.coolcheck 🅕
│⃕🌕.waifucheck 🅕
│⃕🌕.awesomecheck 🅕
│⃕🌕.gaycheck 🅕
│⃕🌕.cutecheck 🅕
│⃕🌕.lesbiancheck 🅕
│⃕🌕.hornycheck 🅕
│⃕🌕.prettycheck 🅕
│⃕🌕.lovelycheck 🅕
│⃕🌕.uglycheck 🅕
│⃕🌕.pick 🅕
│⃕🌕.quotes 🅕
│⃕🌕.can 🅕
│⃕🌕.is 🅕
│⃕🌕.when 🅕
│⃕🌕.where 🅕
│⃕🌕.what 🅕
│⃕🌕.how 🅕
│⃕🌕.rate 🅕
│⃕🌕.cry 🅕
│⃕🌕.kill 🅕
│⃕🌕.hug 🅕
│⃕🌕.pat 🅕
│⃕🌕.lick 🅕 
│⃕🌕.kiss 🅕
│⃕🌕.bite 🅕
│⃕🌕.yeet 🅕
│⃕🌕.bully 🅕
│⃕🌕.bonk 🅕
│⃕🌕.wink 🅕
│⃕🌕.poke 🅕
│⃕🌕.nom 🅕
│⃕🌕.slap 🅕
│⃕🌕.smile 🅕 
│⃕🌕.wave 🅕
│⃕🌕.awoo 🅕
│⃕🌕.blush 🅕
│⃕🌕.smug 🅕
│⃕🌕.glomp 🅕 
│⃕🌕.happy 🅕
│⃕🌕.dance 🅕
│⃕🌕.cringe 🅕
│⃕🌕.cuddle 🅕
│⃕🌕.highfive 🅕 
│⃕🌕.shinobu 🅕
│⃕🌕.handhold 🅕
│⃕🌕.spank 🅕
│⃕🌕.tickle 🅕
│⃕🌕.avatar 🅕
│⃕🌕.feed 🅕
│⃕🌕.foxgirl 🅕
│⃕🌕.gecg 🅕
│⃕🌕.checkme 🅕
│⃕🌕.sound1 - sound161 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍓 𝙍𝘼𝙉𝘿𝙊𝙈 𝙋𝙃𝙊𝙏𝙊 🍓 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍓.aesthetic 🅕
│⃕🍓.coffee 🅕
│⃕🍓.wikimedia 🅕
│⃕🍓.wallpaper 🅕
│⃕🍓.art 🅕
│⃕🍓.bts 🅕
│⃕🍓.dogwoof 🅕
│⃕🍓.catmeow 🅕
│⃕🍓.lizardpic 🅕
│⃕🍓.goosebird 🅕
│⃕🍓.8ballpool 🅕
│⃕🍓.cosplay 🅕
│⃕🍓.hacker 🅕
│⃕🍓.cyber 🅕
│⃕🍓.gamewallpaper 🅕
│⃕🍓.islamic 🅕
│⃕🍓.jennie 🅕
│⃕🍓.jiso 🅕
│⃕🍓.satanic 🅕
│⃕🍓.justina 🅕
│⃕🍓.cartoon 🅕
│⃕🍓.pentol 🅕
│⃕🍓.cat 🅕
│⃕🍓.kpop 🅕
│⃕🍓.exo 🅕
│⃕🍓.lisa 🅕
│⃕🍓.space 🅕
│⃕🍓.car 🅕
│⃕🍓.technology 🅕
│⃕🍓.bike 🅕
│⃕🍓.shortquote 🅕
│⃕🍓.antiwork 🅕
│⃕🍓.hacking 🅕
│⃕🍓.boneka 🅕
│⃕🍓.rose 🅕
│⃕🍓.ryujin 🅕
│⃕🍓.ulzzangboy 🅕
│⃕🍓.ulzzanggirl 🅕
│⃕🍓.wallml 🅕
│⃕🍓.wallphone 🅕
│⃕🍓.mountain 🅕
│⃕🍓.goose 🅕
│⃕🍓.profilepic 🅕
│⃕🍓.couplepic 🅕
│⃕🍓.programming 🅕
│⃕🍓.pubg 🅕
│⃕🍓.blackpink 🅕
│⃕🍓.randomboy 🅕  
│⃕🍓.randomgirl 🅕
│⃕🍓.hijab 🅕  
│⃕🍓.chinese 🅕
│⃕🍓.indo 🅕
│⃕🍓.japanese 🅕
│⃕🍓.korean 🅕
│⃕🍓.malay 🅕
│⃕🍓.thai 🅕
│⃕🍓.vietnamese 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍡 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 🍡 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍡.goose 🅕
│⃕🍡.woof 🅕
│⃕🍡.8ball 🅕
│⃕🍡.lizard 🅕
│⃕🍡.meow 🅕
│⃕🍡.gura 🅕
│⃕🍡.doge 🅕
│⃕🍡.patrick 🅕
│⃕🍡.lovestick 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍏 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 🍏 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍏.akira 🅕
│⃕🍏.akiyama 🅕
│⃕🍏.ana 🅕
│⃕🍏.asuna 🅕
│⃕🍏.ayuzawa 🅕
│⃕🍏.boruto 🅕
│⃕🍏.chiho 🅕
│⃕🍏.chitoge 🅕
│⃕🍏.cosplayloli 🅕
│⃕🍏.cosplaysagiri 🅕
│⃕🍏.deidara 🅕
│⃕🍏.doraemon 🅕
│⃕🍏.elaina 🅕
│⃕🍏.emilia 🅕
│⃕🍏.erza 🅕
│⃕🍏.gremory 🅕
│⃕🍏.hestia 🅕
│⃕🍏.hinata 🅕
│⃕🍏.husbu 🅕
│⃕🍏.inori 🅕
│⃕🍏.isuzu 🅕
│⃕🍏.itachi 🅕
│⃕🍏.itori 🅕
│⃕🍏.kaga 🅕
│⃕🍏.kagura 🅕
│⃕🍏.kakasih 🅕
│⃕🍏.kaori 🅕
│⃕🍏.keneki 🅕
│⃕🍏.kotori 🅕
│⃕🍏.kurumi 🅕
│⃕🍏.loli 🅕
│⃕🍏.madara 🅕
│⃕🍏.megumin 🅕
│⃕🍏.mikasa 🅕
│⃕🍏.mikey 🅕
│⃕🍏.miku 🅕
│⃕🍏.minato 🅕
│⃕🍏.naruto 🅕
│⃕🍏.neko 🅕
│⃕🍏.neko2 🅕
│⃕🍏.nekonime 🅕
│⃕🍏.nezuko 🅕
│⃕🍏.onepiece 🅕
│⃕🍏.pokemon 🅕
│⃕🍏.randomnime 🅕
│⃕🍏.randomnime2 🅕
│⃕🍏.rize 🅕
│⃕🍏.sagiri 🅕
│⃕🍏.sakura 🅕
│⃕🍏.sasuke 🅕
│⃕🍏.shina 🅕
│⃕🍏.shinka 🅕
│⃕🍏.shinomiya 🅕
│⃕🍏.shizuka 🅕
│⃕🍏.shota 🅕
│⃕🍏.tejina 🅕
│⃕🍏.toukachan 🅕
│⃕🍏.tsunade 🅕
│⃕🍏.waifu 🅕
│⃕🍏.animewall 🅕
│⃕🍏.yotsuba 🅕
│⃕🍏.yuki 🅕
│⃕🍏.yulibocil 🅕
│⃕🍏.yumeko 🅕
│⃕🍏.8ball 🅕
│⃕🍏.tickle 🅕
│⃕🍏.gecg 🅕
│⃕🍏.feed 🅕
│⃕🍏.animeawoo 🅕
│⃕🍏.animemegumin 🅕
│⃕🍏.animeshinobu 🅕
│⃕🍏.animehandhold 🅕
│⃕🍏.animehighfive 🅕
│⃕🍏.animecringe 🅕
│⃕🍏.animedance 🅕
│⃕🍏.animehappy 🅕
│⃕🍏.animeglomp 🅕
│⃕🍏.animeblush 🅕
│⃕🍏.animesmug 🅕
│⃕🍏.animewave 🅕
│⃕🍏.animesmille 🅕
│⃕🍏.animepoke 🅕
│⃕🍏.animewink 🅕
│⃕🍏.animebonk 🅕
│⃕🍏.animebully 🅕
│⃕🍏.animeyeet 🅕
│⃕🍏.animebite 🅕
│⃕🍏.animelick 🅕
│⃕🍏.animekill 🅕
│⃕🍏.animecry 🅕
│⃕🍏.animewlp 🅕
│⃕🍏.animekiss 🅕
│⃕🍏.animehug 🅕
│⃕🍏.animeneko 🅕
│⃕🍏.animepat 🅕
│⃕🍏.animeslap 🅕
│⃕🍏.animecuddle 🅕
│⃕🍏.animewaifu 🅕
│⃕🍏.animenom 🅕
│⃕🍏.animefoxgirl 🅕
│⃕🍏.animegecg 🅕
│⃕🍏.animetickle 🅕
│⃕🍏.animefeed 🅕
│⃕🍏.animeavatar 🅕
│⃕🍏.genshin 🅕
│⃕🍏.anime 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍑 𝘼𝙉𝙄𝙈𝙀 𝙉𝙎𝙁𝙒 🍑 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍑.hentai 🅕
│⃕🍑.gifhentai 🅕
│⃕🍑.gifblowjob 🅕
│⃕🍑.hentaivid 🅕
│⃕🍑.hneko 🅕
│⃕🍑.nwaifu 🅕
│⃕🍑.animespank 🅕
│⃕🍑.trap 🅕
│⃕🍑.gasm 🅕
│⃕🍑.ahegao 🅕
│⃕🍑.ass 🅕
│⃕🍑.bdsm 🅕
│⃕🍑.blowjob 🅕
│⃕🍑.cuckold 🅕
│⃕🍑.cum 🅕
│⃕🍑.milf 🅕
│⃕🍑.eba 🅕
│⃕🍑.ero 🅕
│⃕🍑.femdom 🅕
│⃕🍑.foot 🅕
│⃕🍑.gangbang 🅕
│⃕🍑.glasses 🅕
│⃕🍑.jahy 🅕
│⃕🍑.masturbation 🅕
│⃕🍑.manga 🅕
│⃕🍑.neko-hentai 🅕
│⃕🍑.neko-hentai2 🅕
│⃕🍑.nsfwloli 🅕
│⃕🍑.orgy 🅕
│⃕🍑.panties 🅕 
│⃕🍑.pussy 🅕
│⃕🍑.tentacles 🅕
│⃕🍑.thighs 🅕
│⃕🍑.yuri 🅕
│⃕🍑.zettai 🅕
│⃕🍑.xnxxsearch 🅟
│⃕🍑.xnxxdl 🅟
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟👒 𝙏𝙀𝙓𝙏 𝙈𝘼𝙆𝙀𝙍 𝙋𝙍𝙊 👒 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕👒.candy 🅕 
│⃕👒.christmas 🅕 
│⃕👒.3dchristmas 🅕 
│⃕👒.sparklechristmas 🅕
│⃕👒.deepsea 🅕 
│⃕👒.scifi 🅕 
│⃕👒.rainbow 🅕 
│⃕👒.waterpipe 🅕 
│⃕👒.spooky 🅕 
│⃕👒.pencil 🅕 
│⃕👒.circuit 🅕 
│⃕👒.discovery 🅕 
│⃕👒.metalic 🅕 
│⃕👒.fiction 🅕 
│⃕👒.demon 🅕 
│⃕👒.transformer 🅕 
│⃕👒.berry 🅕 
│⃕👒.thunder 🅕 
│⃕👒.magma 🅕 
│⃕👒.3dstone 🅕 
│⃕👒.neonlight 🅕 
│⃕👒.glitch 🅕 
│⃕👒.harrypotter 🅕 
│⃕👒.brokenglass 🅕 
│⃕👒.papercut 🅕 
│⃕👒.watercolor 🅕 
│⃕👒.multicolor 🅕 
│⃕👒.neondevil 🅕 
│⃕👒.underwater 🅕 
│⃕👒.graffitibike 🅕
│⃕👒.snow 🅕 
│⃕👒.cloud 🅕 
│⃕👒.honey 🅕 
│⃕👒.ice 🅕 
│⃕👒.fruitjuice 🅕 
│⃕👒.biscuit 🅕 
│⃕👒.wood 🅕 
│⃕👒.chocolate 🅕 
│⃕👒.strawberry 🅕 
│⃕👒.matrix 🅕 
│⃕👒.blood 🅕 
│⃕👒.dropwater 🅕 
│⃕👒.toxic 🅕 
│⃕👒.lava 🅕 
│⃕👒.rock 🅕 
│⃕👒.bloodglas 🅕 
│⃕👒.hallowen 🅕 
│⃕👒.darkgold 🅕 
│⃕👒.joker 🅕 
│⃕👒.wicker 🅕
│⃕👒.firework 🅕 
│⃕👒.skeleton 🅕 
│⃕👒.blackpink 🅕 
│⃕👒.sand 🅕 
│⃕👒.glue 🅕 
│⃕👒.1917 🅕 
│⃕👒.leaves 🅕
│⃕👒.retro 🅕
│⃕👒.pornhub 🅕
│⃕👒.8bit 🅕
│⃕👒.batman 🅕
│⃕👒.3dbox 🅕
│⃕👒.lion 🅕
│⃕👒.3davengers 🅕
│⃕👒.window 🅕
│⃕👒.3dspace 🅕
│⃕👒.bokeh 🅕
│⃕👒.holographic 🅕
│⃕👒.thewall 🅕
│⃕👒.carbon 🅕
│⃕👒.whitebear 🅕
│⃕👒.metallic 🅕
│⃕👒.steel 🅕
│⃕👒.fabric 🅕
│⃕👒.ancient 🅕
│⃕👒.marvel 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟📸 𝙋𝙃𝙊𝙏𝙊𝙊𝙓𝙔 𝙈𝘼𝙆𝙀𝙍 📸 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕📸.shadow 🅕 
│⃕📸.write 🅕 
│⃕📸.romantic 🅕 
│⃕📸.burnpaper 🅕
│⃕📸.smoke 🅕 
│⃕📸.narutobanner 🅕 
│⃕📸.love 🅕 
│⃕📸.undergrass 🅕
│⃕📸.doublelove 🅕 
│⃕📸.coffecup 🅕
│⃕📸.underwaterocean 🅕
│⃕📸.smokyneon 🅕
│⃕📸.starstext 🅕
│⃕📸.rainboweffect 🅕
│⃕📸.balloontext 🅕
│⃕📸.metalliceffect 🅕
│⃕📸.embroiderytext 🅕
│⃕📸.flamingtext 🅕
│⃕📸.stonetext 🅕
│⃕📸.writeart 🅕
│⃕📸.summertext 🅕
│⃕📸.wolfmetaltext 🅕
│⃕📸.nature3dtext 🅕
│⃕📸.rosestext 🅕
│⃕📸.naturetypography 🅕
│⃕📸.quotesunder 🅕
│⃕📸.shinetext 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🌻 𝙀𝙋𝙃𝙊𝙏𝙊360 𝙈𝘼𝙆𝙀𝙍 🌻 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🌻.glitchtext 🅕
│⃕🌻.writetext 🅕
│⃕🌻.advancedglow 🅕
│⃕🌻.typographytext 🅕
│⃕🌻.pixelglitch 🅕
│⃕🌻.neonglitch 🅕
│⃕🌻.flagtext 🅕
│⃕🌻.flag3dtext 🅕
│⃕🌻.deletingtext 🅕
│⃕🌻.blackpinkstyle 🅕
│⃕🌻.glowingtext 🅕
│⃕🌻.underwatertext 🅕
│⃕🌻.logomaker 🅕
│⃕🌻.cartoonstyle 🅕
│⃕🌻.papercutstyle 🅕
│⃕🌻.watercolortext 🅕
│⃕🌻.effectclouds 🅕
│⃕🌻.blackpinklogo 🅕
│⃕🌻.gradienttext 🅕
│⃕🌻.summerbeach 🅕
│⃕🌻.luxurygold 🅕
│⃕🌻.multicoloredneon 🅕
│⃕🌻.sandsummer 🅕
│⃕🌻.galaxywallpaper 🅕
│⃕🌻.1917style 🅕
│⃕🌻.makingneon 🅕
│⃕🌻.royaltext 🅕
│⃕🌻.freecreate 🅕
│⃕🌻.galaxystyle 🅕
│⃕🌻.lighteffects 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🏐 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀 🏐 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🏐.setcmd 🅕
│⃕🏐.delcmd 🅕
│⃕🏐.listcmd 🅕
│⃕🏐.lockcmd 🅕
│⃕🏐.addmsg 🅕
│⃕🏐.delmsg 🅕
│⃕🏐.getmsg 🅕
│⃕🏐.listmsg 🅕
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🥶 𝘽𝙐𝙂 🥶 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🥶.resetotp 🅞
│⃕🥶.xbugp 🅞
│⃕🥶.xbugr 🅞
╰–––––––––––––––༓

★︦˟݂݁𖧗─┄⃟🍇 𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐 🍇 ⃞𖡙݁𖧗─★︦˟݂݁
│⃕🍇.ping 🅕
│⃕🍇.menu 🅕
│⃕🍇.myip 🅕
│⃕🍇.reportbug 🅕
│⃕🍇.listpem 🅕
│⃕🍇.liststicker 🅕
│⃕🍇.listimage 🅕
│⃕🍇.listvideo 🅕
│⃕🍇.listvn 🅕
│⃕🍇.listbadword 🅕
│⃕🍇.listpc 🅕
│⃕🍇.listgc 🅕
│⃕🍇.owner 🅕
│⃕🍇.rentbot 🅕
│⃕🍇.listrentbot 🅕
│⃕🍇.donate 🅕
│⃕🍇.friend 🅕
│⃕🍇.obfuscate 🅕
│⃕🍇.styletext 🅕
│⃕🍇.fliptext 🅕
│⃕🍇.tts 🅕
│⃕🍇.say 🅕
│⃕🍇.togif 🅕
│⃕🍇.toqr 🅕
│⃕🍇.bass 🅕
│⃕🍇.blown 🅕
│⃕🍇.deep 🅕
│⃕🍇.earrape 🅕
│⃕🍇.fast 🅕
│⃕🍇.fat 🅕
│⃕🍇.nightcore 🅕
│⃕🍇.reverse 🅕
│⃕🍇.robot 🅕
│⃕🍇.slow 🅕
│⃕🍇.smooth 🅕
│⃕🍇.squirrel 🅕
│⃕🍇.tinyurl 🅕
│⃕🍇.tinyurl 🅕
│⃕🍇.tovn 🅕
│⃕🍇.toaudio 🅕
│⃕🍇.tomp3 🅕
│⃕🍇.tomp4🅕
│⃕🍇.toimg 🅕
│⃕🍇.toonce 🅕
│⃕🍇.sticker 🅕
│⃕🍇.take 🅟
│⃕🍇.emoji 🅕
│⃕🍇.volume 🅕
│⃕🍇.ebinary 🅕
│⃕🍇.dbinary 🅕
│⃕🍇.ssweb 🅕
│⃕🍇.quoted 🅕
│⃕🍇.runtime 🅕
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Anime 』
│⃕୧💚 ⿻ᖗ.akira 🅕
│⃕୧💚 ⿻ᖗ.akiyama 🅕
│⃕୧💚 ⿻ᖗ.ana ??
│⃕୧💚 ⿻ᖗ.asuna 🅕
│⃕୧💚 ⿻ᖗ.ayuzawa 🅕
│⃕୧💚 ⿻ᖗ.boruto 🅕
│⃕୧💚 ⿻ᖗ.chiho 🅕
│⃕୧💚 ⿻ᖗ.chitoge 🅕
│⃕୧💚 ⿻ᖗ.cosplayloli 🅕
│⃕୧💚 ⿻ᖗ.cosplaysagiri 🅕
│⃕୧💚 ⿻ᖗ.deidara 🅕
│⃕୧💚 ⿻ᖗ.doraemon 🅕
│⃕୧💚 ⿻ᖗ.elaina 🅕
│⃕୧💚 ⿻ᖗ.emilia 🅕
│⃕୧💚 ⿻ᖗ.erza 🅕
│⃕୧💚 ⿻ᖗ.gremory 🅕
│⃕୧💚 ⿻ᖗ.hestia 🅕
│⃕୧💚 ⿻ᖗ.hinata 🅕
│⃕୧💚 ⿻ᖗ.husbu 🅕
│⃕୧💚 ⿻ᖗ.inori 🅕
│⃕୧💚 ⿻ᖗ.isuzu 🅕
│⃕୧💚 ⿻ᖗ.itachi 🅕
│⃕୧💚 ⿻ᖗ.itori 🅕
│⃕୧💚 ⿻ᖗ.kaga 🅕
│⃕୧💚 ⿻ᖗ.kagura 🅕
│⃕୧💚 ⿻ᖗ.kakasih 🅕
│⃕୧💚 ⿻ᖗ.kaori 🅕
│⃕୧💚 ⿻ᖗ.keneki 🅕
│⃕୧💚 ⿻ᖗ.kotori 🅕
│⃕୧💚 ⿻ᖗ.kurumi 🅕
│⃕୧💚 ⿻ᖗ.loli 🅕
│⃕୧💚 ⿻ᖗ.madara 🅕
│⃕୧💚 ⿻ᖗ.megumin 🅕
│⃕୧💚 ⿻ᖗ.mikasa 🅕
│⃕୧💚 ⿻ᖗ.mikey 🅕
│⃕୧💚 ⿻ᖗ.miku 🅕
│⃕୧💚 ⿻ᖗ.minato 🅕
│⃕୧💚 ⿻ᖗ.naruto 🅕
│⃕୧💚 ⿻ᖗ.neko 🅕
│⃕୧💚 ⿻ᖗ.neko2 🅕
│⃕୧💚 ⿻ᖗ.nekonime 🅕
│⃕୧💚 ⿻ᖗ.nezuko 🅕
│⃕୧💚 ⿻ᖗ.onepiece 🅕
│⃕୧💚 ⿻ᖗ.pokemon 🅕
│⃕୧💚 ⿻ᖗ.randomnime 🅕
│⃕୧💚 ⿻ᖗ.randomnime2 🅕
│⃕୧💚 ⿻ᖗ.rize 🅕
│⃕୧💚 ⿻ᖗ.sagiri 🅕
│⃕୧💚 ⿻ᖗ.sakura 🅕
│⃕୧💚 ⿻ᖗ.sasuke 🅕
│⃕୧💚 ⿻ᖗ.shina 🅕
│⃕୧💚 ⿻ᖗ.shinka 🅕
│⃕୧💚 ⿻ᖗ.shinomiya 🅕
│⃕୧💚 ⿻ᖗ.shizuka 🅕
│⃕୧💚 ⿻ᖗ.shota 🅕
│⃕୧💚 ⿻ᖗ.tejina 🅕
│⃕୧💚 ⿻ᖗ.toukachan 🅕
│⃕୧💚 ⿻ᖗ.tsunade 🅕
│⃕୧💚 ⿻ᖗ.waifu 🅕
│⃕୧💚 ⿻ᖗ.animewall 🅕
│⃕୧💚 ⿻ᖗ.yotsuba 🅕
│⃕୧💚 ⿻ᖗ.yuki 🅕
│⃕୧💚 ⿻ᖗ.yulibocil 🅕
│⃕୧💚 ⿻ᖗ.yumeko 🅕
│⃕୧💚 ⿻ᖗ.8ball 🅕
│⃕୧💚 ⿻ᖗ.tickle 🅕
│⃕୧💚 ⿻ᖗ.gecg 🅕
│⃕୧💚 ⿻ᖗ.feed 🅕
│⃕୧💚 ⿻ᖗ.animeawoo 🅕
│⃕୧💚 ⿻ᖗ.animemegumin 🅕
│⃕୧💚 ⿻ᖗ.animeshinobu 🅕
│⃕୧💚 ⿻ᖗ.animehandhold 🅕
│⃕୧💚 ⿻ᖗ.animehighfive 🅕
│⃕୧💚 ⿻ᖗ.animecringe 🅕
│⃕୧💚 ⿻ᖗ.animedance 🅕
│⃕୧💚 ⿻ᖗ.animehappy 🅕
│⃕୧💚 ⿻ᖗ.animeglomp 🅕
│⃕୧💚 ⿻ᖗ.animeblush 🅕
│⃕୧💚 ⿻ᖗ.animesmug 🅕
│⃕୧💚 ⿻ᖗ.animewave 🅕
│⃕୧💚 ⿻ᖗ.animesmille 🅕
│⃕୧💚 ⿻ᖗ.animepoke 🅕
│⃕୧💚 ⿻ᖗ.animewink 🅕
│⃕୧💚 ⿻ᖗ.animebonk 🅕
│⃕୧💚 ⿻ᖗ.animebully 🅕
│⃕୧💚 ⿻ᖗ.animeyeet 🅕
│⃕୧💚 ⿻ᖗ.animebite 🅕
│⃕୧💚 ⿻ᖗ.animelick 🅕
│⃕୧💚 ⿻ᖗ.animekill 🅕
│⃕୧💚 ⿻ᖗ.animecry 🅕
│⃕୧💚 ⿻ᖗ.animewlp 🅕
│⃕୧💚 ⿻ᖗ.animekiss 🅕
│⃕୧💚 ⿻ᖗ.animehug 🅕
│⃕୧💚 ⿻ᖗ.animeneko 🅕
│⃕୧💚 ⿻ᖗ.animepat 🅕
│⃕୧💚 ⿻ᖗ.animeslap 🅕
│⃕୧💚 ⿻ᖗ.animecuddle 🅕
│⃕୧💚 ⿻ᖗ.animewaifu 🅕
│⃕୧💚 ⿻ᖗ.animenom 🅕
│⃕୧💚 ⿻ᖗ.animefoxgirl 🅕
│⃕୧💚 ⿻ᖗ.animegecg 🅕
│⃕୧💚 ⿻ᖗ.animetickle 🅕
│⃕୧💚 ⿻ᖗ.animefeed 🅕
│⃕୧💚 ⿻ᖗ.animeavatar 🅕
│⃕୧💚 ⿻ᖗ.genshin 🅕
│⃕୧💚 ⿻ᖗ.anime 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Owner Menu 』
│⃕୧💚 ⿻ᖗ.self 🅞
│⃕୧💚 ⿻ᖗ.public 🅞
│⃕୧💚 ⿻ᖗ.join 🅞
│⃕୧💚 ⿻ᖗ.bctext 🅞
│⃕୧💚 ⿻ᖗ.poll 🅞
│⃕୧💚 ⿻ᖗ.bcimage 🅞
│⃕୧💚 ⿻ᖗ.bcvideo 🅞
│⃕୧💚 ⿻ᖗ.creategc 🅞
│⃕୧💚 ⿻ᖗ.userjid 🅞
│⃕୧💚 ⿻ᖗ.setexif 🅞
│⃕୧💚 ⿻ᖗ.setbotname 🅞
│⃕୧💚 ⿻ᖗ.setbotbio 🅞
│⃕୧💚 ⿻ᖗ.delppbot 🅞
│⃕୧💚 ⿻ᖗ.shutdown 🅞
│⃕୧💚 ⿻ᖗ.setppbot 🅞
│⃕୧💚 ⿻ᖗ.addprem 🅞
│⃕୧💚 ⿻ᖗ.delprem 🅞
│⃕୧💚 ⿻ᖗ.addowner 🅞
│⃕୧💚 ⿻ᖗ.delowner 🅞
│⃕୧💚 ⿻ᖗ.addvn 🅞
│⃕୧💚 ⿻ᖗ.delvn 🅞
│⃕୧💚 ⿻ᖗ.addsticker 🅞
│⃕୧💚 ⿻ᖗ.delsticker 🅞
│⃕୧💚 ⿻ᖗ.addimage 🅞
│⃕୧💚 ⿻ᖗ.delimage 🅞
│⃕୧💚 ⿻ᖗ.addvideo 🅞
│⃕୧💚 ⿻ᖗ.delvideo 🅞
│⃕୧💚 ⿻ᖗ.block 🅞
│⃕୧💚 ⿻ᖗ.unblock del 🅞
│⃕୧💚 ⿻ᖗ.leavegc 🅞
│⃕୧💚 ⿻ᖗ.pushcontact 🅞
│⃕୧💚 ⿻ᖗ.pushcontactv2 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Other Menu 』
│⃕୧💚 ⿻ᖗ.ping 🅕
│⃕୧💚 ⿻ᖗ.menu 🅕
│⃕୧💚 ⿻ᖗ.myip 🅕
│⃕୧💚 ⿻ᖗ.reportbug 🅕
│⃕୧💚 ⿻ᖗ.listpem 🅕
│⃕୧💚 ⿻ᖗ.liststicker 🅕
│⃕୧💚 ⿻ᖗ.listimage 🅕
│⃕୧💚 ⿻ᖗ.listvideo 🅕
│⃕୧💚 ⿻ᖗ.listvn 🅕
│⃕୧💚 ⿻ᖗ.listbadword 🅕
│⃕୧💚 ⿻ᖗ.listpc 🅕
│⃕୧💚 ⿻ᖗ.listgc 🅕
│⃕୧💚 ⿻ᖗ.owner 🅕
│⃕୧💚 ⿻ᖗ.rentbot 🅕
│⃕୧💚 ⿻ᖗ.listrentbot 🅕
│⃕୧💚 ⿻ᖗ.donate 🅕
│⃕୧💚 ⿻ᖗ.friend 🅕
│⃕୧💚 ⿻ᖗ.obfuscate 🅕
│⃕୧💚 ⿻ᖗ.styletext 🅕
│⃕୧💚 ⿻ᖗ.fliptext 🅕
│⃕୧💚 ⿻ᖗ.tts 🅕
│⃕୧💚 ⿻ᖗ.say 🅕
│⃕୧💚 ⿻ᖗ.togif 🅕
│⃕୧💚 ⿻ᖗ.toqr 🅕
│⃕୧💚 ⿻ᖗ.bass 🅕
│⃕୧💚 ⿻ᖗ.blown 🅕
│⃕୧💚 ⿻ᖗ.deep 🅕
│⃕୧💚 ⿻ᖗ.earrape 🅕
│⃕୧💚 ⿻ᖗ.fast 🅕
│⃕୧💚 ⿻ᖗ.fat 🅕
│⃕୧💚 ⿻ᖗ.nightcore 🅕
│⃕୧💚 ⿻ᖗ.reverse 🅕
│⃕୧💚 ⿻ᖗ.robot 🅕
│⃕୧💚 ⿻ᖗ.slow 🅕
│⃕୧💚 ⿻ᖗ.smooth 🅕
│⃕୧💚 ⿻ᖗ.squirrel 🅕
│⃕୧💚 ⿻ᖗ.tinyurl 🅕
│⃕୧💚 ⿻ᖗ.tinyurl 🅕
│⃕୧💚 ⿻ᖗ.tovn 🅕
│⃕୧💚 ⿻ᖗ.toaudio 🅕
│⃕୧💚 ⿻ᖗ.tomp3 🅕
│⃕୧💚 ⿻ᖗ.tomp4🅕
│⃕୧💚 ⿻ᖗ.toimg 🅕
│⃕୧💚 ⿻ᖗ.toonce 🅕
│⃕୧💚 ⿻ᖗ.sticker 🅕
│⃕୧💚 ⿻ᖗ.take 🅟
│⃕୧💚 ⿻ᖗ.emoji 🅕
│⃕୧💚 ⿻ᖗ.volume 🅕
│⃕୧💚 ⿻ᖗ.ebinary 🅕
│⃕୧💚 ⿻ᖗ.dbinary 🅕
│⃕୧💚 ⿻ᖗ.ssweb 🅕
│⃕୧💚 ⿻ᖗ.quoted 🅕
│⃕୧💚 ⿻ᖗ.runtime 🅕
│⃕୧💚 ⿻ᖗ.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Download Menu 』
│⃕୧💚 ⿻ᖗ.ytsearch 🅕
│⃕୧💚 ⿻ᖗ.play 🅕
│⃕୧💚 ⿻ᖗ.ytmp3 🅕
│⃕୧💚 ⿻ᖗ.ytmp4 🅕
│⃕୧💚 ⿻ᖗ.google 🅕
│⃕୧💚 ⿻ᖗ.imdb 🅕
│⃕୧💚 ⿻ᖗ.weather 🅕
│⃕୧💚 ⿻ᖗ.wanumber 🅕
│⃕୧💚 ⿻ᖗ.instaimg 🅕
│⃕୧💚 ⿻ᖗ.instavid 🅕
│⃕୧💚 ⿻ᖗ.fbvid 🅕
│⃕୧💚 ⿻ᖗ.twittervid 🅕
│⃕୧💚 ⿻ᖗ.telestick 🅟
│⃕୧💚 ⿻ᖗ.spotify 🅟
│⃕୧💚 ⿻ᖗ.gitclone 🅕
│⃕୧💚 ⿻ᖗ.happymod 🅕
│⃕୧💚 ⿻ᖗ.gdrive 🅕
│⃕୧💚 ⿻ᖗ.pinterest 🅕
│⃕୧💚 ⿻ᖗ.ringtone 🅕
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Group Menu 』
│⃕୧💚 ⿻ᖗ.antilink 🅖
│⃕୧💚 ⿻ᖗ.antiwame 🅖
│⃕୧💚 ⿻ᖗ.grouplink 🅖
│⃕୧💚 ⿻ᖗ.invite 🅖
│⃕୧💚 ⿻ᖗ.ephemeral 🅖
│⃕୧💚 ⿻ᖗ.delete 🅖
│⃕୧💚 ⿻ᖗ.setppgroup 🅖
│⃕୧💚 ⿻ᖗ.delppgroup 🅖
│⃕୧💚 ⿻ᖗ.setname 🅖
│⃕୧💚 ⿻ᖗ.setdesc 🅖
│⃕୧💚 ⿻ᖗ.add 🅖
│⃕୧💚 ⿻ᖗ.kick 🅖
│⃕୧💚 ⿻ᖗ.promote 🅖
│⃕୧💚 ⿻ᖗ.demote 🅖
│⃕୧💚 ⿻ᖗ.hidetag 🅖
│⃕୧💚 ⿻ᖗ.totag 🅖
│⃕୧💚 ⿻ᖗ.tagall 🅖
│⃕୧💚 ⿻ᖗ.editinfo 🅖
│⃕୧💚 ⿻ᖗ.opentime 🅖
│⃕୧💚 ⿻ᖗ.closetime 🅖
│⃕୧💚 ⿻ᖗ.resetlink 🅖
│⃕୧💚 ⿻ᖗ.getbio 🅖
│⃕୧💚 ⿻ᖗ.vote 🅖
│⃕୧💚 ⿻ᖗ.upvote 🅖
│⃕୧💚 ⿻ᖗ.downvote 🅖
│⃕୧💚 ⿻ᖗ.checkvote 🅖
│⃕୧💚 ⿻ᖗ.delvote 🅖
│⃕୧💚 ⿻ᖗ.autostickergc 🅖
│⃕୧💚 ⿻ᖗ.antilinkgc 🅖
│⃕୧💚 ⿻ᖗ.antiwame 🅖
│⃕୧💚 ⿻ᖗ.antilinkall 🅖
│⃕୧💚 ⿻ᖗ.antilinktiktok 🅖
│⃕୧💚 ⿻ᖗ.antilinkfb 🅖
│⃕୧💚 ⿻ᖗ.antilinktwitter 🅖
│⃕୧💚 ⿻ᖗ.antilinkig 🅖
│⃕୧💚 ⿻ᖗ.antlinktg 🅖
│⃕୧💚 ⿻ᖗ.antilinkytvid 🅖
│⃕୧💚 ⿻ᖗ.antilinkytch 🅖
│⃕୧💚 ⿻ᖗ.antivirus 🅖
│⃕୧💚 ⿻ᖗ.antitoxic 🅖
│⃕୧💚 ⿻ᖗ.nsfw 🅖
│⃕୧💚 ⿻ᖗ.react 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Fun Menu 』
│⃕୧💚 ⿻ᖗ.define 🅕
│⃕୧💚 ⿻ᖗ.qc 🅕
│⃕୧💚 ⿻ᖗ.lyrics 🅕
│⃕୧💚 ⿻ᖗ.tictactoe 🅕
│⃕୧💚 ⿻ᖗ.suit 🅕
│⃕୧💚 ⿻ᖗ.math 🅕
│⃕୧💚 ⿻ᖗ.fact 🅕
│⃕୧💚 ⿻ᖗ.truth 🅕
│⃕୧💚 ⿻ᖗ.dare 🅕
│⃕୧💚 ⿻ᖗ.couple 🅕
│⃕୧💚 ⿻ᖗ.soulmate 🅕
│⃕୧💚 ⿻ᖗ.stupidcheck 🅕
│⃕୧💚 ⿻ᖗ.handsomecheck 🅕
│⃕୧💚 ⿻ᖗ.uncleancheck 🅕
│⃕୧💚 ⿻ᖗ.hotcheck 🅕
│⃕୧💚 ⿻ᖗ.smartcheck 🅕
│⃕୧💚 ⿻ᖗ.greatcheck 🅕
│⃕୧💚 ⿻ᖗ.evilcheck 🅕
│⃕୧💚 ⿻ᖗ.dogcheck 🅕
│⃕୧💚 ⿻ᖗ.coolcheck 🅕
│⃕୧💚 ⿻ᖗ.waifucheck 🅕
│⃕୧💚 ⿻ᖗ.awesomecheck 🅕
│⃕୧💚 ⿻ᖗ.gaycheck 🅕
│⃕୧💚 ⿻ᖗ.cutecheck 🅕
│⃕୧💚 ⿻ᖗ.lesbiancheck 🅕
│⃕୧💚 ⿻ᖗ.hornycheck 🅕
│⃕୧💚 ⿻ᖗ.prettycheck 🅕
│⃕୧💚 ⿻ᖗ.lovelycheck 🅕
│⃕୧💚 ⿻ᖗ.uglycheck 🅕
│⃕୧💚 ⿻ᖗ.pick 🅕
│⃕୧💚 ⿻ᖗ.quotes 🅕
│⃕୧💚 ⿻ᖗ.can 🅕
│⃕୧💚 ⿻ᖗ.is 🅕
│⃕୧💚 ⿻ᖗ.when 🅕
│⃕୧💚 ⿻ᖗ.where 🅕
│⃕୧💚 ⿻ᖗ.what 🅕
│⃕୧💚 ⿻ᖗ.how 🅕
│⃕୧💚 ⿻ᖗ.rate 🅕
│⃕୧💚 ⿻ᖗ.cry 🅕
│⃕୧💚 ⿻ᖗ.kill 🅕
│⃕୧💚 ⿻ᖗ.hug 🅕
│⃕୧💚 ⿻ᖗ.pat 🅕
│⃕୧💚 ⿻ᖗ.lick 🅕 
│⃕୧💚 ⿻ᖗ.kiss 🅕
│⃕୧💚 ⿻ᖗ.bite 🅕
│⃕୧💚 ⿻ᖗ.yeet 🅕
│⃕୧💚 ⿻ᖗ.bully 🅕
│⃕୧💚 ⿻ᖗ.bonk 🅕
│⃕୧💚 ⿻ᖗ.wink 🅕
│⃕୧💚 ⿻ᖗ.poke 🅕
│⃕୧💚 ⿻ᖗ.nom 🅕
│⃕୧💚 ⿻ᖗ.slap 🅕
│⃕୧💚 ⿻ᖗ.smile 🅕 
│⃕୧💚 ⿻ᖗ.wave 🅕
│⃕୧💚 ⿻ᖗ.awoo 🅕
│⃕୧💚 ⿻ᖗ.blush 🅕
│⃕୧💚 ⿻ᖗ.smug 🅕
│⃕୧💚 ⿻ᖗ.glomp 🅕 
│⃕୧💚 ⿻ᖗ.happy 🅕
│⃕୧💚 ⿻ᖗ.dance 🅕
│⃕୧💚 ⿻ᖗ.cringe 🅕
│⃕୧💚 ⿻ᖗ.cuddle 🅕
│⃕୧💚 ⿻ᖗ.highfive 🅕 
│⃕୧💚 ⿻ᖗ.shinobu 🅕
│⃕୧💚 ⿻ᖗ.handhold 🅕
│⃕୧💚 ⿻ᖗ.spank 🅕
│⃕୧💚 ⿻ᖗ.tickle 🅕
│⃕୧💚 ⿻ᖗ.avatar 🅕
│⃕୧💚 ⿻ᖗ.feed 🅕
│⃕୧💚 ⿻ᖗ.foxgirl 🅕
│⃕୧💚 ⿻ᖗ.gecg 🅕
│⃕୧💚 ⿻ᖗ.checkme 🅕
│⃕୧💚 ⿻ᖗ.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Stalker 』
│⃕୧💚 ⿻ᖗ.igstalk 🅕
│⃕୧💚 ⿻ᖗ.ffstalk 🅕
│⃕୧💚 ⿻ᖗ.mlstalk 🅕
│⃕୧💚 ⿻ᖗ.npmstalk 🅕
│⃕୧💚 ⿻ᖗ.ghstalk 🅕
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Sticker 』
│⃕୧💚 ⿻ᖗ.goose 🅕
│⃕୧💚 ⿻ᖗ.woof 🅕
│⃕୧💚 ⿻ᖗ.8ball 🅕
│⃕୧💚 ⿻ᖗ.lizard 🅕
│⃕୧💚 ⿻ᖗ.meow 🅕
│⃕୧💚 ⿻ᖗ.gura 🅕
│⃕୧💚 ⿻ᖗ.doge 🅕
│⃕୧💚 ⿻ᖗ.patrick 🅕
│⃕୧💚 ⿻ᖗ.lovestick 🅕
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Database 』
│⃕୧💚 ⿻ᖗ.setcmd 🅕
│⃕୧💚 ⿻ᖗ.delcmd 🅕
│⃕୧💚 ⿻ᖗ.listcmd 🅕
│⃕୧💚 ⿻ᖗ.lockcmd 🅕
│⃕୧💚 ⿻ᖗ.addmsg 🅕
│⃕୧💚 ⿻ᖗ.delmsg 🅕
│⃕୧💚 ⿻ᖗ.getmsg 🅕
│⃕୧💚 ⿻ᖗ.listmsg 🅕
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 OpenAI 』
│⃕୧💚 ⿻ᖗ.openai 🅕
│⃕୧💚 ⿻ᖗ.ai 🅕
│⃕୧💚 ⿻ᖗ.aimage 🅕
│⃕୧💚 ⿻ᖗ.remini 🅕
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Bug & War 』
│⃕୧💚 ⿻ᖗ.resetotp 🅞
│⃕୧💚 ⿻ᖗ.xbugp 🅞
│⃕୧💚 ⿻ᖗ.xbugr 🅞
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Random Photo 』
│⃕୧💚 ⿻ᖗ.aesthetic 🅕
│⃕୧💚 ⿻ᖗ.coffee 🅕
│⃕୧💚 ⿻ᖗ.wikimedia 🅕
│⃕୧💚 ⿻ᖗ.wallpaper 🅕
│⃕୧💚 ⿻ᖗ.art 🅕
│⃕୧💚 ⿻ᖗ.bts 🅕
│⃕୧💚 ⿻ᖗ.dogwoof 🅕
│⃕୧💚 ⿻ᖗ.catmeow 🅕
│⃕୧💚 ⿻ᖗ.lizardpic 🅕
│⃕୧💚 ⿻ᖗ.goosebird 🅕
│⃕୧💚 ⿻ᖗ.8ballpool 🅕
│⃕୧💚 ⿻ᖗ.cosplay 🅕
│⃕୧💚 ⿻ᖗ.hacker 🅕
│⃕୧💚 ⿻ᖗ.cyber 🅕
│⃕୧💚 ⿻ᖗ.gamewallpaper 🅕
│⃕୧💚 ⿻ᖗ.islamic 🅕
│⃕୧💚 ⿻ᖗ.jennie 🅕
│⃕୧💚 ⿻ᖗ.jiso 🅕
│⃕୧💚 ⿻ᖗ.satanic 🅕
│⃕୧💚 ⿻ᖗ.justina 🅕
│⃕୧💚 ⿻ᖗ.cartoon 🅕
│⃕୧💚 ⿻ᖗ.pentol 🅕
│⃕୧💚 ⿻ᖗ.cat 🅕
│⃕୧💚 ⿻ᖗ.kpop 🅕
│⃕୧💚 ⿻ᖗ.exo 🅕
│⃕୧💚 ⿻ᖗ.lisa 🅕
│⃕୧💚 ⿻ᖗ.space 🅕
│⃕୧💚 ⿻ᖗ.car 🅕
│⃕୧💚 ⿻ᖗ.technology 🅕
│⃕୧💚 ⿻ᖗ.bike 🅕
│⃕୧💚 ⿻ᖗ.shortquote 🅕
│⃕୧💚 ⿻ᖗ.antiwork 🅕
│⃕୧💚 ⿻ᖗ.hacking 🅕
│⃕୧💚 ⿻ᖗ.boneka 🅕
│⃕୧💚 ⿻ᖗ.rose 🅕
│⃕୧💚 ⿻ᖗ.ryujin 🅕
│⃕୧💚 ⿻ᖗ.ulzzangboy 🅕
│⃕୧💚 ⿻ᖗ.ulzzanggirl 🅕
│⃕୧💚 ⿻ᖗ.wallml 🅕
│⃕୧💚 ⿻ᖗ.wallphone 🅕
│⃕୧💚 ⿻ᖗ.mountain 🅕
│⃕୧💚 ⿻ᖗ.goose 🅕
│⃕୧💚 ⿻ᖗ.profilepic 🅕
│⃕୧💚 ⿻ᖗ.couplepic 🅕
│⃕୧💚 ⿻ᖗ.programming 🅕
│⃕୧💚 ⿻ᖗ.pubg 🅕
│⃕୧💚 ⿻ᖗ.blackpink 🅕
│⃕୧💚 ⿻ᖗ.randomboy 🅕  
│⃕୧💚 ⿻ᖗ.randomgirl 🅕
│⃕୧💚 ⿻ᖗ.hijab 🅕  
│⃕୧💚 ⿻ᖗ.chinese 🅕
│⃕୧💚 ⿻ᖗ.indo 🅕
│⃕୧💚 ⿻ᖗ.japanese 🅕
│⃕୧💚 ⿻ᖗ.korean 🅕
│⃕୧💚 ⿻ᖗ.malay 🅕
│⃕୧💚 ⿻ᖗ.thai 🅕
│⃕୧💚 ⿻ᖗ.vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Random Video 』
│⃕୧💚 ⿻ᖗ.tiktokgirl 🅕
│⃕୧💚 ⿻ᖗ.tiktoknukthy 🅕
│⃕୧💚 ⿻ᖗ.tiktokkayes 🅕
│⃕୧💚 ⿻ᖗ.tiktokpanrika 🅕
│⃕୧💚 ⿻ᖗ.tiktoknotnot 🅕
│⃕୧💚 ⿻ᖗ.tiktokghea 🅕
│⃕୧💚 ⿻ᖗ.tiktoksantuy 🅕
│⃕୧💚 ⿻ᖗ.tiktokbocil 🅕
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Textpro Maker 』
│⃕୧💚 ⿻ᖗ.candy 🅕 
│⃕୧💚 ⿻ᖗ.christmas 🅕 
│⃕୧💚 ⿻ᖗ.3dchristmas 🅕 
│⃕୧💚 ⿻ᖗ.sparklechristmas 🅕
│⃕୧💚 ⿻ᖗ.deepsea 🅕 
│⃕୧💚 ⿻ᖗ.scifi 🅕 
│⃕୧💚 ⿻ᖗ.rainbow 🅕 
│⃕୧💚 ⿻ᖗ.waterpipe 🅕 
│⃕୧💚 ⿻ᖗ.spooky 🅕 
│⃕୧💚 ⿻ᖗ.pencil 🅕 
│⃕୧💚 ⿻ᖗ.circuit 🅕 
│⃕୧💚 ⿻ᖗ.discovery 🅕 
│⃕୧💚 ⿻ᖗ.metalic 🅕 
│⃕୧💚 ⿻ᖗ.fiction 🅕 
│⃕୧💚 ⿻ᖗ.demon 🅕 
│⃕୧💚 ⿻ᖗ.transformer 🅕 
│⃕୧💚 ⿻ᖗ.berry 🅕 
│⃕୧💚 ⿻ᖗ.thunder 🅕 
│⃕୧💚 ⿻ᖗ.magma 🅕 
│⃕୧💚 ⿻ᖗ.3dstone 🅕 
│⃕୧💚 ⿻ᖗ.neonlight 🅕 
│⃕୧💚 ⿻ᖗ.glitch 🅕 
│⃕୧💚 ⿻ᖗ.harrypotter 🅕 
│⃕୧💚 ⿻ᖗ.brokenglass 🅕 
│⃕୧💚 ⿻ᖗ.papercut 🅕 
│⃕୧💚 ⿻ᖗ.watercolor 🅕 
│⃕୧💚 ⿻ᖗ.multicolor 🅕 
│⃕୧💚 ⿻ᖗ.neondevil 🅕 
│⃕୧💚 ⿻ᖗ.underwater 🅕 
│⃕୧💚 ⿻ᖗ.graffitibike 🅕
│⃕୧💚 ⿻ᖗ.snow 🅕 
│⃕୧💚 ⿻ᖗ.cloud 🅕 
│⃕୧💚 ⿻ᖗ.honey 🅕 
│⃕୧💚 ⿻ᖗ.ice 🅕 
│⃕୧💚 ⿻ᖗ.fruitjuice 🅕 
│⃕୧💚 ⿻ᖗ.biscuit 🅕 
│⃕୧💚 ⿻ᖗ.wood 🅕 
│⃕୧💚 ⿻ᖗ.chocolate 🅕 
│⃕୧💚 ⿻ᖗ.strawberry 🅕 
│⃕୧💚 ⿻ᖗ.matrix 🅕 
│⃕୧💚 ⿻ᖗ.blood 🅕 
│⃕୧💚 ⿻ᖗ.dropwater 🅕 
│⃕୧💚 ⿻ᖗ.toxic 🅕 
│⃕୧💚 ⿻ᖗ.lava 🅕 
│⃕୧💚 ⿻ᖗ.rock 🅕 
│⃕୧💚 ⿻ᖗ.bloodglas 🅕 
│⃕୧💚 ⿻ᖗ.hallowen 🅕 
│⃕୧💚 ⿻ᖗ.darkgold 🅕 
│⃕୧💚 ⿻ᖗ.joker 🅕 
│⃕୧💚 ⿻ᖗ.wicker 🅕
│⃕୧💚 ⿻ᖗ.firework 🅕 
│⃕୧💚 ⿻ᖗ.skeleton 🅕 
│⃕୧💚 ⿻ᖗ.blackpink 🅕 
│⃕୧💚 ⿻ᖗ.sand 🅕 
│⃕୧💚 ⿻ᖗ.glue 🅕 
│⃕୧💚 ⿻ᖗ.1917 🅕 
│⃕୧💚 ⿻ᖗ.leaves 🅕
│⃕୧💚 ⿻ᖗ.retro 🅕
│⃕୧💚 ⿻ᖗ.pornhub 🅕
│⃕୧💚 ⿻ᖗ.8bit 🅕
│⃕୧💚 ⿻ᖗ.batman 🅕
│⃕୧💚 ⿻ᖗ.3dbox 🅕
│⃕୧💚 ⿻ᖗ.lion 🅕
│⃕୧💚 ⿻ᖗ.3davengers 🅕
│⃕୧💚 ⿻ᖗ.window 🅕
│⃕୧💚 ⿻ᖗ.3dspace 🅕
│⃕୧💚 ⿻ᖗ.bokeh 🅕
│⃕୧💚 ⿻ᖗ.holographic 🅕
│⃕୧💚 ⿻ᖗ.thewall 🅕
│⃕୧💚 ⿻ᖗ.carbon 🅕
│⃕୧💚 ⿻ᖗ.whitebear 🅕
│⃕୧💚 ⿻ᖗ.metallic 🅕
│⃕୧💚 ⿻ᖗ.steel 🅕
│⃕୧💚 ⿻ᖗ.fabric 🅕
│⃕୧💚 ⿻ᖗ.ancient 🅕
│⃕୧💚 ⿻ᖗ.marvel 🅕
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 PhotoOxy Maker 』
│⃕୧💚 ⿻ᖗ.shadow 🅕 
│⃕୧💚 ⿻ᖗ.write 🅕 
│⃕୧💚 ⿻ᖗ.romantic 🅕 
│⃕୧💚 ⿻ᖗ.burnpaper 🅕
│⃕୧💚 ⿻ᖗ.smoke 🅕 
│⃕୧💚 ⿻ᖗ.narutobanner 🅕 
│⃕୧💚 ⿻ᖗ.love 🅕 
│⃕୧💚 ⿻ᖗ.undergrass 🅕
│⃕୧💚 ⿻ᖗ.doublelove 🅕 
│⃕୧💚 ⿻ᖗ.coffecup 🅕
│⃕୧💚 ⿻ᖗ.underwaterocean 🅕
│⃕୧💚 ⿻ᖗ.smokyneon 🅕
│⃕୧💚 ⿻ᖗ.starstext 🅕
│⃕୧💚 ⿻ᖗ.rainboweffect 🅕
│⃕୧💚 ⿻ᖗ.balloontext 🅕
│⃕୧💚 ⿻ᖗ.metalliceffect 🅕
│⃕୧💚 ⿻ᖗ.embroiderytext 🅕
│⃕୧💚 ⿻ᖗ.flamingtext 🅕
│⃕୧💚 ⿻ᖗ.stonetext 🅕
│⃕୧💚 ⿻ᖗ.writeart 🅕
│⃕୧💚 ⿻ᖗ.summertext ??
│⃕୧💚 ⿻ᖗ.wolfmetaltext 🅕
│⃕୧💚 ⿻ᖗ.nature3dtext 🅕
│⃕୧💚 ⿻ᖗ.rosestext 🅕
│⃕୧💚 ⿻ᖗ.naturetypography 🅕
│⃕୧💚 ⿻ᖗ.quotesunder 🅕
│⃕୧💚 ⿻ᖗ.shinetext 🅕
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

╭––『 Ephoto360 Maker 』
│⃕୧💚 ⿻ᖗ.glitchtext 🅕
│⃕୧💚 ⿻ᖗ.writetext 🅕
│⃕୧💚 ⿻ᖗ.advancedglow 🅕
│⃕୧💚 ⿻ᖗ.typographytext 🅕
│⃕୧💚 ⿻ᖗ.pixelglitch 🅕
│⃕୧💚 ⿻ᖗ.neonglitch 🅕
│⃕୧💚 ⿻ᖗ.flagtext 🅕
│⃕୧💚 ⿻ᖗ.flag3dtext 🅕
│⃕୧💚 ⿻ᖗ.deletingtext 🅕
│⃕୧💚 ⿻ᖗ.blackpinkstyle 🅕
│⃕୧💚 ⿻ᖗ.glowingtext 🅕
│⃕୧💚 ⿻ᖗ.underwatertext 🅕
│⃕୧💚 ⿻ᖗ.logomaker 🅕
│⃕୧💚 ⿻ᖗ.cartoonstyle 🅕
│⃕୧💚 ⿻ᖗ.papercutstyle 🅕
│⃕୧💚 ⿻ᖗ.watercolortext 🅕
│⃕୧💚 ⿻ᖗ.effectclouds 🅕
│⃕୧💚 ⿻ᖗ.blackpinklogo 🅕
│⃕୧💚 ⿻ᖗ.gradienttext 🅕
│⃕୧💚 ⿻ᖗ.summerbeach 🅕
│⃕୧💚 ⿻ᖗ.luxurygold 🅕
│⃕୧💚 ⿻ᖗ.multicoloredneon 🅕
│⃕୧💚 ⿻ᖗ.sandsummer 🅕
│⃕୧💚 ⿻ᖗ.galaxywallpaper 🅕
│⃕୧💚 ⿻ᖗ.1917style 🅕
│⃕୧💚 ⿻ᖗ.makingneon 🅕
│⃕୧💚 ⿻ᖗ.royaltext 🅕
│⃕୧💚 ⿻ᖗ.freecreate 🅕
│⃕୧💚 ⿻ᖗ.galaxystyle 🅕
│⃕୧💚 ⿻ᖗ.lighteffects 🅕
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `
•━──────≪🦋🍭≫──────━
🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User
•━──────≪🦋🍭≫──────━

『 Anime NSFW 』
│⃕୧💚 ⿻ᖗ.hentai 🅕
│⃕୧💚 ⿻ᖗ.gifhentai 🅕
│⃕୧💚 ⿻ᖗ.gifblowjob 🅕
│⃕୧💚 ⿻ᖗ.hentaivid 🅕
│⃕୧💚 ⿻ᖗ.hneko 🅕
│⃕୧💚 ⿻ᖗ.nwaifu 🅕
│⃕୧💚 ⿻ᖗ.animespank 🅕
│⃕୧💚 ⿻ᖗ.trap 🅕
│⃕୧💚 ⿻ᖗ.gasm 🅕
│⃕୧💚 ⿻ᖗ.ahegao 🅕
│⃕୧💚 ⿻ᖗ.ass 🅕
│⃕୧💚 ⿻ᖗ.bdsm 🅕
│⃕୧💚 ⿻ᖗ.blowjob 🅕
│⃕୧💚 ⿻ᖗ.cuckold 🅕
│⃕୧💚 ⿻ᖗ.cum 🅕
│⃕୧💚 ⿻ᖗ.milf 🅕
│⃕୧💚 ⿻ᖗ.eba 🅕
│⃕୧💚 ⿻ᖗ.ero 🅕
│⃕୧💚 ⿻ᖗ.femdom 🅕
│⃕୧💚 ⿻ᖗ.foot 🅕
│⃕୧💚 ⿻ᖗ.gangbang 🅕
│⃕୧💚 ⿻ᖗ.glasses 🅕
│⃕୧💚 ⿻ᖗ.jahy 🅕
│⃕୧💚 ⿻ᖗ.masturbation 🅕
│⃕୧💚 ⿻ᖗ.manga 🅕
│⃕୧💚 ⿻ᖗ.neko-hentai 🅕
│⃕୧💚 ⿻ᖗ.neko-hentai2 🅕
│⃕୧💚 ⿻ᖗ.nsfwloli 🅕
│⃕୧💚 ⿻ᖗ.orgy 🅕
│⃕୧💚 ⿻ᖗ.panties 🅕 
│⃕୧💚 ⿻ᖗ.pussy 🅕
│⃕୧💚 ⿻ᖗ.tentacles 🅕
│⃕୧💚 ⿻ᖗ.thighs 🅕
│⃕୧💚 ⿻ᖗ.yuri 🅕
│⃕୧💚 ⿻ᖗ.zettai 🅕
│⃕୧💚 ⿻ᖗ.xnxxsearch 🅟
│⃕୧💚 ⿻ᖗ.xnxxdl 🅟
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
