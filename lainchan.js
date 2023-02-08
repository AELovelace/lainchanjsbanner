//2/7/2023
//Quick and dirty Webring Banner. stolen from some lame 
//Harry Potter Themed Tutorial. 
//quote is where you put your a tag, author shows the author of the site.
//call in your page using it with <script src="/path/to/lainchan.js/"></script>
//see code.html for html
//visible and running on https://sadgirlsclub.wtf

const generateQuote = function() {
    const quotes = [
{ quote: "<a href='http://alienozi.c1.biz/'><img src='/engine/media/banner/alienozi.png' target='_blank' alt='alienozi'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://jyushimatsu.web.fc2.com/'><img src='/engine/media/banner/jyushimatsu.png' target='_blank' alt='jyushimatsu'/></a>", author: "<p>jyushimatsu <p>" },
{ quote: "<a href='https://qorg11.net/'><img src='/engine/media/banner/qorg.png' target='_blank' alt='qorg'/></a>", author: "<p>qorg <p>" },
{ quote: "<a href='https://fönixfogelfuchs.eu/'><img src='/engine/media/banner/fonix.png' target='_blank' alt='fonix'/></a>", author: "<p>fonix <p>" },
{ quote: "<a href='https://xerophyte.neocities.org/'><img src='/engine/media/banner/xero.png' target='_blank' alt='xero'/></a>", author: "<p>xero <p>" },
{ quote: "<a href='https://nightt.neocities.org/'><img src='/engine/media/banner/nightt.gif' target='_blank' alt='Nightt's retro art'/></a>", author: "<p>Nightt's retro art <p>" },
{ quote: "<a href='https://volta.neocities.org/'><img src='/engine/media/banner/volta.png' target='_blank' alt='volta'/></a>", author: "<p>volta <p>" },
{ quote: "<a href='https://jakesthoughts.xyz/'><img src='/engine/media/banner/jakesthoughts.gif' target='_blank' alt='jake's thoughts'/></a>", author: "<p>jake's thoughts <p>" },
{ quote: "<a href='https://getimiskon.neocities.org/'><img src='/engine/media/banner/getimiskon.png' target='_blank' alt='getimiskon'/></a>", author: "<p>getimiskon <p>" },
{ quote: "<a href='https://concealed.world/'><img src='/engine/media/banner/concealed_world.gif' target='_blank' alt='concealed world'/></a>", author: "<p>concealed world <p>" },
{ quote: "<a href='https://mayvaneday.org/'><img src='/engine/media/banner/mayvaneday.png' target='_blank' alt='mayvaneday'/></a>", author: "<p>mayvaneday <p>" },
{ quote: "<a href='https://dataswamp.org/~lich/'><img src='/engine/media/banner/lich.png' target='_blank' alt='lich'/></a>", author: "<p>lich <p>" },
{ quote: "<a href='https://radioccc.xyz/'><img src='/engine/media/banner/radio.png' target='_blank' alt='radio chupacabra'/></a>", author: "<p>chupacabra <p>" },
{ quote: "<a href='https://uwcur.neocities.org/'><img src='/engine/media/banner/uwcur.png' target='_blank' alt='uwcur'/></a>", author: "<p>uwcur <p>" },
{ quote: "<a href='https://saltorn.neocities.org/'><img src='/engine/media/banner/saltorn.png' target='_blank' alt='saltorn'/></a>", author: "<p>saltorn <p>" },
{ quote: "<a href='http://geocities.ws/skeletons/'><img src='/engine/media/banner/the_bone_zone.png' target='_blank' alt='the bone zone'/></a>", author: "<p>the bone zone <p>" },
{ quote: "<a href='https://deurist.neocities.org/'><img src='/engine/media/banner/deurist.png' target='_blank' alt='deurist'/></a>", author: "<p>deurist <p>" },
{ quote: "<a href='https://www.tohya.net/'><img src='/engine/media/banner/tohya.png' target='_blank' alt='tohya'/></a>", author: "<p>tohya <p>" },
{ quote: "<a href='https://kyubit.neocities.org/'><img src='/engine/media/banner/kyubit.png' target='_blank' alt='kyubit'/></a>", author: "<p>kyubit <p>" },
{ quote: "<a href='https://kill-9.xyz/'><img src='/engine/media/banner/kill-9.xyz.png' target='_blank' alt='kill-9'/></a>", author: "<p>kill-9 <p>" },
{ quote: "<a href='https://sftn.github.io/'><img src='/engine/media/banner/sftn.png' target='_blank' alt='sftn'/></a>", author: "<p>sftn <p>" },
{ quote: "<a href='https://wiredspace.de/'><img src='/engine/media/banner/wiredspace.png' target='_blank' alt='wiredspace'/></a>", author: "<p>wiredspace <p>" },
{ quote: "<a href='https://strlst.myogaya.jp/index.html'><img src='/engine/media/banner/strlst.png' target='_blank' alt='strlst'/></a>", author: "<p>strlst <p>" },
{ quote: "<a href='https://user-index.xyz/'><img src='/engine/media/banner/user-index.gif' target='_blank' alt='user-index'/></a>", author: "<p>user-index <p>" },
{ quote: "<a href='https://skumsoft.ltd/slimenet/'><img src='/engine/media/banner/slime-net.png' target='_blank' alt='slime net'/></a>", author: "<p>slime net <p>" },
{ quote: "<a href='https://bendersteed.tech/'><img src='/engine/media/banner/bendersteed.jpg' target='_blank' alt='bendersteed'/></a>", author: "<p>bendersteed <p>" },
{ quote: "<a href='https://grafovolaverunt.xyz/index.html'><img src='/engine/media/banner/grafovolaverunt.gif' target='_blank' alt='grafovolaverunt'/></a>", author: "<p>grafovolaverunt <p>" },
{ quote: "<a href='https://hellishchemicals.neocities.org/mainpage.html'><img src='/engine/media/banner/hellchem.png' target='_blank' alt='hellishchemicals'/></a>", author: "<p>hellishchemicals <p>" },
{ quote: "<a href='https://jakes-mail.top/'><img src='/engine/media/banner/jakesmail.gif' target='_blank' alt='jakesmail'/></a>", author: "<p>jakesmail <p>" },
{ quote: "<a href='https://born2live.tk/'><img src='/engine/media/banner/born2live.png' target='_blank' alt='born2live'/></a>", author: "<p>born2live <p>" },
{ quote: "<a href='https://www.six10.pw/'><img src='/engine/media/banner/six10.png' target='_blank' alt='six10'/></a>", author: "<p>six10 <p>" },
{ quote: "<a href='https://jack---91.neocities.org/'><img src='/engine/media/banner/jack91.gif' target='_blank' alt='jack91'/></a>", author: "<p>jack91 <p>" },
{ quote: "<a href='https://xenobyte.xyz/'><img src='/engine/media/banner/xenobyte.jpg' target='_blank' alt='xenobyte'/></a>", author: "<p>xenobyte <p>" },
{ quote: "<a href='https://techur.live/'><img src='/engine/media/banner/techur.png' target='_blank' alt='techur'/></a>", author: "<p>techur <p>" },
{ quote: "<a href='https://flammableduck.xyz/'><img src='/engine/media/banner/flammableduck.png' target='_blank' alt='flammableduck'/></a>", author: "<p>flammableduck <p>" },
{ quote: "<a href='https://tildezero.xyz/~goat/'><img src='/engine/media/banner/goat.jpg' target='_blank' alt='goat'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://gapandfriends.neocities.org/'><img src='/engine/media/banner/gapandfriends.png' target='_blank' alt='gapandfriends'/></a>", author: "<p>gapandfriends <p>" },
{ quote: "<a href='https://purplevoid.neocities.org/'><img src='/engine/media/banner/purplevoid.png' target='_blank' alt='purplevoid'/></a>", author: "<p>purplevoid <p>" },
{ quote: "<a href='https://unix.tirol/'><img src='/engine/media/banner/unix.tirol.png' target='_blank' alt='unix.tirol'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://extramundane.xyz/'><img src='/engine/media/banner/extramundane.jpg' target='_blank' alt='extramundane'/></a>", author: "<p>extramundane <p>" },
{ quote: "<a href='https://omicronsetup.eu/'><img src='/engine/media/banner/omicron.gif' target='_blank' alt='omicron'/></a>", author: "<p>omicron <p>" },
{ quote: "<a href='https://workingsea.neocities.org/'><img src='/engine/media/banner/workingsea.png' target='_blank' alt='workingsea'/></a>", author: "<p>workingsea <p>" },
{ quote: "<a href='https://lukescabin.neocities.org/'><img src='/engine/media/banner/lukescabin.png' target='_blank' alt='lukescabin'/></a>", author: "<p>lukescabin <p>" },
{ quote: "<a href='https://protocol7.xyz/'><img src='/engine/media/banner/protocol7.png' target='_blank' alt='protocol7'/></a>", author: "<p>protocol7 <p>" },
{ quote: "<a href='https://beedge.neocities.org/'><img src='/engine/media/banner/beedge.png' target='_blank' alt='beedge'/></a>", author: "<p>beedge <p>" },
{ quote: "<a href='https://thealchemist.website/'><img src='/engine/media/banner/thealchemist.png' target='_blank' alt='thealchemist'/></a>", author: "<p>thealchemist <p>" },
{ quote: "<a href='https://0x1bi.net/'><img src='/engine/media/banner/0x1bi.png' target='_blank' alt='0x1bi'/></a>", author: "<p> <p>" },
{ quote: "<a href='https://deadendshrine.online/'><img src='/engine/media/banner/deadendshrine.png' target='_blank' alt='deadendshrine'/></a>", author: "<p>deadendshrine <p>" },
{ quote: "<a href='https://digilord.neocities.org/'><img src='/engine/media/banner/digilord.gif' target='_blank' alt='digilord'/></a>", author: "<p>digilord <p>" },
{ quote: "<a href='https://godcock.neocities.org/'><img src='/engine/media/banner/godcock.jpg' target='_blank' alt='godcock'/></a>", author: "<p>godcock <p>" },
{ quote: "<a href='https://michii.tk/'><img src='/engine/media/banner/michi.png' target='_blank' alt='michi'/></a>", author: "<p>michi <p>" },
{ quote: "<a href='https://erratas.neocities.org/'><img src='/engine/media/banner/erratas.gif' target='_blank' alt='erratas'/></a>", author: "<p>erratas <p>" },
{ quote: "<a href='https://nosleepforme.neocities.org/'><img src='/engine/media/banner/nosleep.png' target='_blank' alt='nosleep'/></a>", author: "<p>nosleep <p>" },
{ quote: "<a href='https://room4.neocities.org/'><img src='/engine/media/banner/room4.jpg' target='_blank' alt='room4'/></a>", author: "<p>room4 <p>" },
{ quote: "<a href='https://hen6003.xyz/'><img src='/engine/media/banner/hen6003.png' target='_blank' alt='hen6003'/></a>", author: "<p>hen6003 <p>" },
{ quote: "<a href='https://diskmagvp.neocities.org/'><img src='/engine/media/banner/diskmagvp.png' target='_blank' alt='diskmagvp'/></a>", author: "<p>diskmagvp <p>" },
{ quote: "<a href='https://www.slushbin.org/'><img src='/engine/media/banner/slushbin.gif' target='_blank' alt='slushbin'/></a>", author: "<p>slushbin <p>" },
{ quote: "<a href='https://mm4rk3t.neocities.org/'><img src='/engine/media/banner/mm4rk3t.gif' target='_blank' alt='mm4rk3t'/></a>", author: "<p>mm4rk3t <p>" },
{ quote: "<a href='https://smolthots.neocities.org/'><img src='/engine/media/banner/smolthots.jpg' target='_blank' alt='smolthots'/></a>", author: "<p>smolthots <p>" },
{ quote: "<a href='https://kassy.neocities.org/'><img src='/engine/media/banner/kassy.jpg' target='_blank' alt='kassy'/></a>", author: "<p>kassy <p>" },
{ quote: "<a href='https://cabbagesorter.neocities.org/'><img src='/engine/media/banner/cabbagesorter.png' target='_blank' alt='cabbagesorter'/></a>", author: "<p>cabbagesorter <p>" },
{ quote: "<a href='https://xiixiixii.xyz/'><img src='/engine/media/banner/xiixiixii.gif' target='_blank' alt='xiixiixii'/></a>", author: "<p>xiixiixii <p>" },
{ quote: "<a href='https://oedo808.neocities.org/'><img src='/engine/media/banner/oedo808.gif' target='_blank' alt='oedo808'/></a>", author: "<p>oedo808 <p>" },
{ quote: "<a href='https://猫.移动/'><img src='/engine/media/banner/xn-neko.gif' target='_blank' alt='xn-neko'/></a>", author: "<p>xn-neko <p>" },
{ quote: "<a href='https://jole.xyz/'><img src='/engine/media/banner/jole.png' target='_blank' alt='jole'/></a>", author: "<p>jole <p>" },
{ quote: "<a href='https://hb11f.net/'><img src='/engine/media/banner/hb11f.gif' target='_blank' alt='hb11f'/></a>", author: "<p>hb11f <p>" },
{ quote: "<a href='https://confusion.codeberg.page/'><img src='/engine/media/banner/confusion.png' target='_blank' alt='confusion'/></a>", author: "<p>confusion <p>" },
{ quote: "<a href='https://morituritesalutant.neocities.org/'><img src='/engine/media/banner/morituritesalutant.jpg' target='_blank' alt='morituritesalutant'/></a>", author: "<p>morituritesalutant <p>" },
{ quote: "<a href='https://forum.agoraroad.com/index.php'><img src='/engine/media/banner/agoraroad.gif' target='_blank' alt='agoraroad'/></a>", author: "<p>agoraroad <p>" },
{ quote: "<a href='https://nyarr.dev/'><img src='/engine/media/banner/nyarr.gif' target='_blank' alt='nyarr'/></a>", author: "<p>nyarr <p>" },
{ quote: "<a href='https://unpop.neocities.org/index.html'><img src='/engine/media/banner/unpop.gif' target='_blank' alt='unpop'/></a>", author: "<p>unpop <p>" },
{ quote: "<a href='https://driftt.neocities.org/'><img src='/engine/media/banner/driftt.png' target='_blank' alt='driftt'/></a>", author: "<p>driftt <p>" },
{ quote: "<a href='https://chaox.ro/'><img src='/engine/media/banner/chaox.png' target='_blank' alt='chaox'/></a>", author: "<p>chaox <p>" },
{ quote: "<a href='https://cached.world'><img src='/engine/media/banner/cachedworld.png' target='_blank' alt='cachedworld'/></a>", author: "<p>cachedworld <p>" },
{ quote: "<a href='https://hakase-shrine.cf/'><img src='/engine/media/banner/hakaseshrine.gif' target='_blank' alt='hakaseshrine'/></a>", author: "<p>hakaseshrine <p>" },
{ quote: "<a href='https://itsevergreen.rip/'><img src='/engine/media/banner/evergreen.png' target='_blank' alt='evergreen'/></a>", author: "<p>evergreen <p>" },
{ quote: "<a href='https://mazak.neocities.org/'><img src='/engine/media/banner/mazak.png' target='_blank' alt='mazak'/></a>", author: "<p>mazak <p>" },
{ quote: "<a href='https://spectrum-of-consciousness.neocities.org/'><img src='/engine/media/banner/spectrum.gif' target='_blank' alt='spectrum-of-consciousness'/></a>", author: "<p>spectrum-of-consciousness <p>" },
{ quote: "<a href='https://seapunk.xyz/'><img src='/engine/media/banner/cpnk.gif' target='_blank' alt='seapunk'/></a>", author: "<p>seapunk <p>" },
{ quote: "<a href='https://ty3r0x.chaox.ro/'><img src='/engine/media/banner/ty3r0x.png' target='_blank' alt='ty3r0x'/></a>", author: "<p>ty3r0x <p>" },
{ quote: "<a href='https://lckdscl.xyz/'><img src='/engine/media/banner/lckdscl.png' target='_blank' alt='lckdscl'/></a>", author: "<p>lckdscl <p>" },
{ quote: "<a href='https://qmaury.com/'><img src='/engine/media/banner/qmaury.jpg' target='_blank' alt='qmaury'/></a>", author: "<p>qmaury <p>" },
{ quote: "<a href='https://sizeof.cat/'><img src='/engine/media/banner/sizeofcat.jpeg' target='_blank' alt='sizeofcat'/></a>", author: "<p>sizeofcat <p>" },
{ quote: "<a href='https://ebin.city/~galladite/'><img src='/engine/media/banner/galladite.png' target='_blank' alt='galladite'/></a>", author: "<p>galladite <p>" },
{ quote: "<a href='https://halogenstars.neocities.org/'><img src='/engine/media/banner/halogenstars.png' target='_blank' alt='halogenstars'/></a>", author: "<p>halogenstars <p>" },
{ quote: "<a href='https://kirillov.neocities.org/'><img src='/engine/media/banner/kirillov.png' target='_blank' alt='kirillov'/></a>", author: "<p>kirillov <p>" },
{ quote: "<a href='https://nerdbox.neocities.org/'><img src='/engine/media/banner/nerdbox.png' target='_blank' alt='nerdbox'/></a>", author: "<p>nerdbox <p>" },
{ quote: "<a href='https://orizuru.neocities.org/'><img src='/engine/media/banner/orizuru.png' target='_blank' alt='orizuru'/></a>", author: "<p>orizuru <p>" },
{ quote: "<a href='https://rainisnot.neocities.org/'><img src='/engine/media/banner/rainisnot.png' target='_blank' alt='rainisnot'/></a>", author: "<p>rainisnot <p>" },
{ quote: "<a href='https://tilde.team/~lemon/'><img src='/engine/media/banner/tocjo.gif' target='_blank' alt='tocjo'/></a>", author: "<p>tocjo <p>" }
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
