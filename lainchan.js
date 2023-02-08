//2/7/2023
//Quick and dirty Webring Banner. stolen from some lame 
//Harry Potter Themed Tutorial. 
//quote is where you put your a tag, author shows the author of the site.
//call in your page using it with <script src="/path/to/lainchan.js/"></script>
//see code.html for html
//visible and running on https://sadgirlsclub.wtf

const generateQuote = function() {
    const quotes = [
{ quote: "<a href='http://alienozi.c1.biz/' target='_blank'><img src='/engine/media/banner/alienozi.png' alt='alienozi'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://jyushimatsu.web.fc2.com/' target='_blank'><img src='/engine/media/banner/jyushimatsu.png' alt='jyushimatsu'/></a>", author: "<p>jyushimatsu <p>" },
{ quote: "<a href='https://qorg11.net/' target='_blank'><img src='/engine/media/banner/qorg.png' alt='qorg'/></a>", author: "<p>qorg <p>" },
{ quote: "<a href='https://fönixfogelfuchs.eu/' target='_blank'><img src='/engine/media/banner/fonix.png' alt='fonix'/></a>", author: "<p>fonix <p>" },
{ quote: "<a href='https://xerophyte.neocities.org/' target='_blank'><img src='/engine/media/banner/xero.png' alt='xero'/></a>", author: "<p>xero <p>" },
{ quote: "<a href='https://nightt.neocities.org/' target='_blank'><img src='/engine/media/banner/nightt.gif' alt='Nightt's retro art'/></a>", author: "<p>Nightt's retro art <p>" },
{ quote: "<a href='https://volta.neocities.org/' target='_blank'><img src='/engine/media/banner/volta.png' alt='volta'/></a>", author: "<p>volta <p>" },
{ quote: "<a href='https://jakesthoughts.xyz/' target='_blank'><img src='/engine/media/banner/jakesthoughts.gif' alt='jake's thoughts'/></a>", author: "<p>jake's thoughts <p>" },
{ quote: "<a href='https://getimiskon.neocities.org/' target='_blank'><img src='/engine/media/banner/getimiskon.png' alt='getimiskon'/></a>", author: "<p>getimiskon <p>" },
{ quote: "<a href='https://concealed.world/' target='_blank'><img src='/engine/media/banner/concealed_world.gif' alt='concealed world'/></a>", author: "<p>concealed world <p>" },
{ quote: "<a href='https://mayvaneday.org/' target='_blank'><img src='/engine/media/banner/mayvaneday.png' alt='mayvaneday'/></a>", author: "<p>mayvaneday <p>" },
{ quote: "<a href='https://dataswamp.org/~lich/' target='_blank'><img src='/engine/media/banner/lich.png' alt='lich'/></a>", author: "<p>lich <p>" },
{ quote: "<a href='https://radioccc.xyz/' target='_blank'><img src='/engine/media/banner/radio.png' alt='radio chupacabra'/></a>", author: "<p>chupacabra <p>" },
{ quote: "<a href='https://uwcur.neocities.org/' target='_blank'><img src='/engine/media/banner/uwcur.png' alt='uwcur'/></a>", author: "<p>uwcur <p>" },
{ quote: "<a href='https://saltorn.neocities.org/' target='_blank'><img src='/engine/media/banner/saltorn.png' alt='saltorn'/></a>", author: "<p>saltorn <p>" },
{ quote: "<a href='http://geocities.ws/skeletons/' target='_blank'><img src='/engine/media/banner/the_bone_zone.png' alt='the bone zone'/></a>", author: "<p>the bone zone <p>" },
{ quote: "<a href='https://deurist.neocities.org/' target='_blank'><img src='/engine/media/banner/deurist.png' alt='deurist'/></a>", author: "<p>deurist <p>" },
{ quote: "<a href='https://www.tohya.net/' target='_blank'><img src='/engine/media/banner/tohya.png' alt='tohya'/></a>", author: "<p>tohya <p>" },
{ quote: "<a href='https://kyubit.neocities.org/' target='_blank'><img src='/engine/media/banner/kyubit.png' alt='kyubit'/></a>", author: "<p>kyubit <p>" },
{ quote: "<a href='https://kill-9.xyz/' target='_blank'><img src='/engine/media/banner/kill-9.xyz.png' alt='kill-9'/></a>", author: "<p>kill-9 <p>" },
{ quote: "<a href='https://sftn.github.io/' target='_blank'><img src='/engine/media/banner/sftn.png' alt='sftn'/></a>", author: "<p>sftn <p>" },
{ quote: "<a href='https://wiredspace.de/' target='_blank'><img src='/engine/media/banner/wiredspace.png' alt='wiredspace'/></a>", author: "<p>wiredspace <p>" },
{ quote: "<a href='https://strlst.myogaya.jp/index.html'><img src='/engine/media/banner/strlst.png' alt='strlst'/></a>", author: "<p>strlst <p>" },
{ quote: "<a href='https://user-index.xyz/' target='_blank'><img src='/engine/media/banner/user-index.gif' alt='user-index'/></a>", author: "<p>user-index <p>" },
{ quote: "<a href='https://skumsoft.ltd/slimenet/' target='_blank'><img src='/engine/media/banner/slime-net.png' alt='slime net'/></a>", author: "<p>slime net <p>" },
{ quote: "<a href='https://bendersteed.tech/' target='_blank'><img src='/engine/media/banner/bendersteed.jpg' alt='bendersteed'/></a>", author: "<p>bendersteed <p>" },
{ quote: "<a href='https://grafovolaverunt.xyz/index.html'><img src='/engine/media/banner/grafovolaverunt.gif' alt='grafovolaverunt'/></a>", author: "<p>grafovolaverunt <p>" },
{ quote: "<a href='https://hellishchemicals.neocities.org/mainpage.html'><img src='/engine/media/banner/hellchem.png' alt='hellishchemicals'/></a>", author: "<p>hellishchemicals <p>" },
{ quote: "<a href='https://jakes-mail.top/' target='_blank' target='_blank'><img src='/engine/media/banner/jakesmail.gif' alt='jakesmail'/></a>", author: "<p>jakesmail <p>" },
{ quote: "<a href='https://born2live.tk/' target='_blank'><img src='/engine/media/banner/born2live.png' alt='born2live'/></a>", author: "<p>born2live <p>" },
{ quote: "<a href='https://www.six10.pw/' target='_blank'><img src='/engine/media/banner/six10.png' alt='six10'/></a>", author: "<p>six10 <p>" },
{ quote: "<a href='https://jack---91.neocities.org/' target='_blank'><img src='/engine/media/banner/jack91.gif' alt='jack91'/></a>", author: "<p>jack91 <p>" },
{ quote: "<a href='https://xenobyte.xyz/' target='_blank'><img src='/engine/media/banner/xenobyte.jpg' alt='xenobyte'/></a>", author: "<p>xenobyte <p>" },
{ quote: "<a href='https://techur.live/' target='_blank'><img src='/engine/media/banner/techur.png' alt='techur'/></a>", author: "<p>techur <p>" },
{ quote: "<a href='https://flammableduck.xyz/' target='_blank'><img src='/engine/media/banner/flammableduck.png' alt='flammableduck'/></a>", author: "<p>flammableduck <p>" },
{ quote: "<a href='https://tildezero.xyz/~goat/' target='_blank'><img src='/engine/media/banner/goat.jpg' alt='goat'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://gapandfriends.neocities.org/' target='_blank'><img src='/engine/media/banner/gapandfriends.png' alt='gapandfriends'/></a>", author: "<p>gapandfriends <p>" },
{ quote: "<a href='https://purplevoid.neocities.org/' target='_blank'><img src='/engine/media/banner/purplevoid.png' alt='purplevoid'/></a>", author: "<p>purplevoid <p>" },
{ quote: "<a href='https://unix.tirol/' target='_blank'><img src='/engine/media/banner/unix.tirol.png' alt='unix.tirol'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://extramundane.xyz/' target='_blank'><img src='/engine/media/banner/extramundane.jpg' alt='extramundane'/></a>", author: "<p>extramundane <p>" },
{ quote: "<a href='https://omicronsetup.eu/' target='_blank'><img src='/engine/media/banner/omicron.gif' alt='omicron'/></a>", author: "<p>omicron <p>" },
{ quote: "<a href='https://workingsea.neocities.org/' target='_blank'><img src='/engine/media/banner/workingsea.png' alt='workingsea'/></a>", author: "<p>workingsea <p>" },
{ quote: "<a href='https://lukescabin.neocities.org/' target='_blank'><img src='/engine/media/banner/lukescabin.png' alt='lukescabin'/></a>", author: "<p>lukescabin <p>" },
{ quote: "<a href='https://protocol7.xyz/' target='_blank'><img src='/engine/media/banner/protocol7.png' alt='protocol7'/></a>", author: "<p>protocol7 <p>" },
{ quote: "<a href='https://beedge.neocities.org/' target='_blank'><img src='/engine/media/banner/beedge.png' alt='beedge'/></a>", author: "<p>beedge <p>" },
{ quote: "<a href='https://thealchemist.website/' target='_blank'><img src='/engine/media/banner/thealchemist.png' alt='thealchemist'/></a>", author: "<p>thealchemist <p>" },
{ quote: "<a href='https://0x1bi.net/' target='_blank'><img src='/engine/media/banner/0x1bi.png' alt='0x1bi'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://deadendshrine.online/' target='_blank'><img src='/engine/media/banner/deadendshrine.png' alt='deadendshrine'/></a>", author: "<p>deadendshrine <p>" },
{ quote: "<a href='https://digilord.neocities.org/' target='_blank'><img src='/engine/media/banner/digilord.gif' alt='digilord'/></a>", author: "<p>digilord <p>" },
{ quote: "<a href='https://godcock.neocities.org/' target='_blank'><img src='/engine/media/banner/godcock.jpg' alt='godcock'/></a>", author: "<p>godcock <p>" },
{ quote: "<a href='https://michii.tk/' target='_blank'><img src='/engine/media/banner/michi.png' alt='michi'/></a>", author: "<p>michi <p>" },
{ quote: "<a href='https://erratas.neocities.org/' target='_blank'><img src='/engine/media/banner/erratas.gif' alt='erratas'/></a>", author: "<p>erratas <p>" },
{ quote: "<a href='https://nosleepforme.neocities.org/' target='_blank'><img src='/engine/media/banner/nosleep.png' alt='nosleep'/></a>", author: "<p>nosleep <p>" },
{ quote: "<a href='https://room4.neocities.org/' target='_blank'><img src='/engine/media/banner/room4.jpg' alt='room4'/></a>", author: "<p>room4 <p>" },
{ quote: "<a href='https://hen6003.xyz/' target='_blank'><img src='/engine/media/banner/hen6003.png' alt='hen6003'/></a>", author: "<p>hen6003 <p>" },
{ quote: "<a href='https://diskmagvp.neocities.org/' target='_blank'><img src='/engine/media/banner/diskmagvp.png' alt='diskmagvp'/></a>", author: "<p>diskmagvp <p>" },
{ quote: "<a href='https://www.slushbin.org/' target='_blank'><img src='/engine/media/banner/slushbin.gif' alt='slushbin'/></a>", author: "<p>slushbin <p>" },
{ quote: "<a href='https://mm4rk3t.neocities.org/' target='_blank'><img src='/engine/media/banner/mm4rk3t.gif' alt='mm4rk3t'/></a>", author: "<p>mm4rk3t <p>" },
{ quote: "<a href='https://smolthots.neocities.org/' target='_blank'><img src='/engine/media/banner/smolthots.jpg' alt='smolthots'/></a>", author: "<p>smolthots <p>" },
{ quote: "<a href='https://kassy.neocities.org/' target='_blank'><img src='/engine/media/banner/kassy.jpg' alt='kassy'/></a>", author: "<p>kassy <p>" },
{ quote: "<a href='https://cabbagesorter.neocities.org/' target='_blank'><img src='/engine/media/banner/cabbagesorter.png' alt='cabbagesorter'/></a>", author: "<p>cabbagesorter <p>" },
{ quote: "<a href='https://xiixiixii.xyz/' target='_blank'><img src='/engine/media/banner/xiixiixii.gif' alt='xiixiixii'/></a>", author: "<p>xiixiixii <p>" },
{ quote: "<a href='https://oedo808.neocities.org/' target='_blank'><img src='/engine/media/banner/oedo808.gif' alt='oedo808'/></a>", author: "<p>oedo808 <p>" },
{ quote: "<a href='https://猫.移动/' target='_blank'><img src='/engine/media/banner/xn-neko.gif' alt='xn-neko'/></a>", author: "<p>xn-neko <p>" },
{ quote: "<a href='https://jole.xyz/' target='_blank'><img src='/engine/media/banner/jole.png' alt='jole'/></a>", author: "<p>jole <p>" },
{ quote: "<a href='https://hb11f.net/' target='_blank'><img src='/engine/media/banner/hb11f.gif' alt='hb11f'/></a>", author: "<p>hb11f <p>" },
{ quote: "<a href='https://confusion.codeberg.page/' target='_blank'><img src='/engine/media/banner/confusion.png' alt='confusion'/></a>", author: "<p>confusion <p>" },
{ quote: "<a href='https://morituritesalutant.neocities.org/' target='_blank'><img src='/engine/media/banner/morituritesalutant.jpg' alt='morituritesalutant'/></a>", author: "<p>morituritesalutant <p>" },
{ quote: "<a href='https://forum.agoraroad.com/index.php'><img src='/engine/media/banner/agoraroad.gif' alt='agoraroad'/></a>", author: "<p>agoraroad <p>" },
{ quote: "<a href='https://nyarr.dev/' target='_blank'><img src='/engine/media/banner/nyarr.gif' alt='nyarr'/></a>", author: "<p>nyarr <p>" },
{ quote: "<a href='https://unpop.neocities.org/index.html'><img src='/engine/media/banner/unpop.gif' alt='unpop'/></a>", author: "<p>unpop <p>" },
{ quote: "<a href='https://driftt.neocities.org/' target='_blank'><img src='/engine/media/banner/driftt.png' alt='driftt'/></a>", author: "<p>driftt <p>" },
{ quote: "<a href='https://chaox.ro/' target='_blank'><img src='/engine/media/banner/chaox.png' alt='chaox'/></a>", author: "<p>chaox <p>" },
{ quote: "<a href='https://cached.world'><img src='/engine/media/banner/cachedworld.png' alt='cachedworld'/></a>", author: "<p>cachedworld <p>" },
{ quote: "<a href='https://hakase-shrine.cf/' target='_blank'><img src='/engine/media/banner/hakaseshrine.gif' alt='hakaseshrine'/></a>", author: "<p>hakaseshrine <p>" },
{ quote: "<a href='https://itsevergreen.rip/' target='_blank'><img src='/engine/media/banner/evergreen.png' alt='evergreen'/></a>", author: "<p>evergreen <p>" },
{ quote: "<a href='https://mazak.neocities.org/' target='_blank'><img src='/engine/media/banner/mazak.png' alt='mazak'/></a>", author: "<p>mazak <p>" },
{ quote: "<a href='https://spectrum-of-consciousness.neocities.org/' target='_blank'><img src='/engine/media/banner/spectrum.gif' alt='spectrum-of-consciousness'/></a>", author: "<p>spectrum-of-consciousness <p>" },
{ quote: "<a href='https://seapunk.xyz/' target='_blank'><img src='/engine/media/banner/cpnk.gif' alt='seapunk'/></a>", author: "<p>seapunk <p>" },
{ quote: "<a href='https://ty3r0x.chaox.ro/' target='_blank'><img src='/engine/media/banner/ty3r0x.png' alt='ty3r0x'/></a>", author: "<p>ty3r0x <p>" },
{ quote: "<a href='https://lckdscl.xyz/' target='_blank'><img src='/engine/media/banner/lckdscl.png' alt='lckdscl'/></a>", author: "<p>lckdscl <p>" },
{ quote: "<a href='https://qmaury.com/' target='_blank'><img src='/engine/media/banner/qmaury.jpg' alt='qmaury'/></a>", author: "<p>qmaury <p>" },
{ quote: "<a href='https://sizeof.cat/' target='_blank'><img src='/engine/media/banner/sizeofcat.jpeg' alt='sizeofcat'/></a>", author: "<p>sizeofcat <p>" },
{ quote: "<a href='https://ebin.city/~galladite/' target='_blank'><img src='/engine/media/banner/galladite.png' alt='galladite'/></a>", author: "<p>galladite <p>" },
{ quote: "<a href='https://halogenstars.neocities.org/' target='_blank'><img src='/engine/media/banner/halogenstars.png' alt='halogenstars'/></a>", author: "<p>halogenstars <p>" },
{ quote: "<a href='https://kirillov.neocities.org/' target='_blank'><img src='/engine/media/banner/kirillov.png' alt='kirillov'/></a>", author: "<p>kirillov <p>" },
{ quote: "<a href='https://nerdbox.neocities.org/' target='_blank'><img src='/engine/media/banner/nerdbox.png' alt='nerdbox'/></a>", author: "<p>nerdbox <p>" },
{ quote: "<a href='https://orizuru.neocities.org/' target='_blank'><img src='/engine/media/banner/orizuru.png' alt='orizuru'/></a>", author: "<p>orizuru <p>" },
{ quote: "<a href='https://rainisnot.neocities.org/' target='_blank'><img src='/engine/media/banner/rainisnot.png' alt='rainisnot'/></a>", author: "<p>rainisnot <p>" },
{ quote: "<a href='https://tilde.team/~lemon/' target='_blank'><img src='/engine/media/banner/tocjo.gif' alt='tocjo'/></a>", author: "<p>tocjo <p>" }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.addEventListener ('load', function () {
    setInterval (generateQuote, 5000);
}, false);
window.onload = function() {
    generateQuote();
}
