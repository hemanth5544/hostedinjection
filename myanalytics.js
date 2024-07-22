  
//   (function() {
    (async () => {
  
    (function(window,undefined){"use strict";var LIBVERSION="1.0.37",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=500;var AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",BROWSER="Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",OPERA="Opera",SAMSUNG="Samsung",SHARP="Sharp",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",FACEBOOK="Facebook",CHROMIUM_OS="Chromium OS",MAC_OS="Mac OS";var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i]}return enums},has=function(str1,str2){return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},lowerize=function(str){return str.toLowerCase()},majorize=function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,EMPTY).split(".")[0]:undefined},trim=function(str,len){if(typeof str===STR_TYPE){str=str.replace(/^\s\s*/,EMPTY);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){if(!regex[j]){break}matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined:i}}return str};var oldSafariMap={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UC"+BROWSER]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[VERSION,[NAME,"Smart Lenovo "+BROWSER]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure "+BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI "+BROWSER]],[/fxios\/([-\w\.]+)/i],[VERSION,[NAME,FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360 "+BROWSER]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 "+BROWSER],VERSION],[/samsungbrowser\/([\w\.]+)/i],[VERSION,[NAME,SAMSUNG+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/metasr[\/ ]?([\d\.]+)/i],[VERSION,[NAME,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[NAME,"Sogou Mobile"],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[VERSION,[NAME,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android "+BROWSER]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,strMapper,oldSafariMap]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[NAME,VERSION],[/(cobalt)\/([\w\.]+)/i],[NAME,[VERSION,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/(macintosh);/i],[MODEL,[VENDOR,APPLE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,SHARP],[TYPE,MOBILE]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[MODEL,[VENDOR,"Ulefone"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(u304aa)/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/\bsie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/\b(rct\w+) b/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/\b(venue[\d ]{2,7}) b/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/\b(q(?:mv|ta)\w+) b/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/\b(tm\d{3}\w+) b/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/\b(k88) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/\b(nx\d{3}j) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/\b(gen\d{3}) b.+49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/\b(zur\d{3}) b/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/\b((zeki)?tb.*\b) b/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/\b(ns-?\w{0,9}) b/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/\b((nxa|next)-?\w{0,9}) b/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/\b(lvtel\-)?(v1[12]) b/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/\b(ph-1) /i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/\b(trio[-\w\. ]+) b/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/\btu_(1491) b/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w+)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[MODEL,[VENDOR,SHARP],[TYPE,SMARTTV]],[/(bravia[\w ]+)( bui|\))/i],[MODEL,[VENDOR,SONY],[TYPE,SMARTTV]],[/(mitv-\w{5}) bui/i],[MODEL,[VENDOR,XIAOMI],[TYPE,SMARTTV]],[/Hbbtv.*(technisat) (.*);/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation [345portablevi]+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[MODEL,[VENDOR,APPLE],[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( 2| pro)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/(aeobc)\b/i],[MODEL,[VENDOR,AMAZON],[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[VERSION,strMapper,windowsVersionMap],[NAME,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,MAC_OS],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[VERSION,[NAME,"watchOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[NAME,CHROMIUM_OS],VERSION],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua===OBJ_TYPE){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _navigator=typeof window!==UNDEF_TYPE&&window.navigator?window.navigator:undefined;var _ua=ua||(_navigator&&_navigator.userAgent?_navigator.userAgent:EMPTY);var _uach=_navigator&&_navigator.userAgentData?_navigator.userAgentData:undefined;var _rgxmap=extensions?extend(regexes,extensions):regexes;var _isSelfNav=_navigator&&_navigator.userAgent==_ua;this.getBrowser=function(){var _browser={};_browser[NAME]=undefined;_browser[VERSION]=undefined;rgxMapper.call(_browser,_ua,_rgxmap.browser);_browser[MAJOR]=majorize(_browser[VERSION]);if(_isSelfNav&&_navigator&&_navigator.brave&&typeof _navigator.brave.isBrave==FUNC_TYPE){_browser[NAME]="Brave"}return _browser};this.getCPU=function(){var _cpu={};_cpu[ARCHITECTURE]=undefined;rgxMapper.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={};_device[VENDOR]=undefined;_device[MODEL]=undefined;_device[TYPE]=undefined;rgxMapper.call(_device,_ua,_rgxmap.device);if(_isSelfNav&&!_device[TYPE]&&_uach&&_uach.mobile){_device[TYPE]=MOBILE}if(_isSelfNav&&_device[MODEL]=="Macintosh"&&_navigator&&typeof _navigator.standalone!==UNDEF_TYPE&&_navigator.maxTouchPoints&&_navigator.maxTouchPoints>2){_device[MODEL]="iPad";_device[TYPE]=TABLET}return _device};this.getEngine=function(){var _engine={};_engine[NAME]=undefined;_engine[VERSION]=undefined;rgxMapper.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={};_os[NAME]=undefined;_os[VERSION]=undefined;rgxMapper.call(_os,_ua,_rgxmap.os);if(_isSelfNav&&!_os[NAME]&&_uach&&_uach.platform!="Unknown"){_os[NAME]=_uach.platform.replace(/chrome os/i,CHROMIUM_OS).replace(/macos/i,MAC_OS)}return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}else if(typeof window!==UNDEF_TYPE){window.UAParser=UAParser}}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);
      // crating global variables using ua-parser
     
  

      // Include UAParser.js library (make sure to add it in your HTML or install via npm/yarn)
      var parser = new UAParser();
      var browserData = parser.getResult();

      // FONT DETECTOR IMPLEMENTATION
   /* eslint-disable strict */
   
   /**
    * JavaScript code to detect available availability of a
    * particular font in a browser using JavaScript and CSS.
    *
    * Author : Lalit Patel
    * Website: http://www.lalit.org/lab/javascript-css-font-detect/
    * License: Apache Software License 2.0
    *          http://www.apache.org/licenses/LICENSE-2.0
    * Version: 0.15 (21 Sep 2009)
    *          Changed comparision font to default from sans-default-default,
    *          as in FF3.0 font of child element didn't fallback
    *          to parent element if the font is missing.
    * Version: 0.2 (04 Mar 2012)
    *          Comparing font against all the 3 generic font families ie,
    *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
    *          then that font is 100% not available in the system
    * Version: 0.3 (24 Mar 2012)
    *          Replaced sans with serif in the list of baseFonts
    */
   
   /**
    * Usage: d = new Detector();
    *        d.detect('font name');
    */
 
   
   
   //MURMURHASH IMPLEMENTATION
   /**
   
    * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
   
    * 
   
    * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   
    * @see http://github.com/garycourt/murmurhash-js
   
    * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
   
    * @see http://sites.google.com/site/murmurhash/
   
    * 
   
    * @param {string} key ASCII only
   
    * @param {number} seed Positive integer only
   
    * @return {number} 32-bit positive integer hash 
   
    */
   function murmurhash3_32_gc(f,$){var x,_,e,c,a,h,r,t;for(x=3&f.length,_=f.length-x,e=$,a=3432918353,h=461845907,t=0;t<_;)r=255&f.charCodeAt(t)|(255&f.charCodeAt(++t))<<8|(255&f.charCodeAt(++t))<<16|(255&f.charCodeAt(++t))<<24,++t,e^=r=(65535&(r=(r=(65535&r)*a+(((r>>>16)*a&65535)<<16)&4294967295)<<15|r>>>17))*h+(((r>>>16)*h&65535)<<16)&4294967295,e=(65535&(c=(65535&(e=e<<13|e>>>19))*5+(((e>>>16)*5&65535)<<16)&4294967295))+27492+(((c>>>16)+58964&65535)<<16);switch(r=0,x){case 3:r^=(255&f.charCodeAt(t+2))<<16;case 2:r^=(255&f.charCodeAt(t+1))<<8;case 1:r^=255&f.charCodeAt(t),e^=r=(65535&(r=(r=(65535&r)*a+(((r>>>16)*a&65535)<<16)&4294967295)<<15|r>>>17))*h+(((r>>>16)*h&65535)<<16)&4294967295}return e^=f.length,e^=e>>>16,e=(65535&e)*2246822507+(((e>>>16)*2246822507&65535)<<16)&4294967295,e^=e>>>13,e=(65535&e)*3266489909+(((e>>>16)*3266489909&65535)<<16)&4294967295,(e^=e>>>16)>>>0}
   


        // calculating hash using user data
      
      // Get user-id.  Return a 32-bit integer representing the browsers user-id.
      function getUserId() {
        var bar = '|';
      
        var userAgent = browserData.ua;
        var screenPrint = getScreenPrintX();
        var pluginList = getPlugins();
        // var fontList = getFontsX();
        var localStorage = isLocalStorageX();
        var sessionStorage = isSessionStorageX();
        var timeZone = getTimeZoneX();
        var language = getLanguageX();
        var systemLanguage = getSystemLanguageX();
        var cookies = isCookieX();
        var canvasPrint = getCanvasPrintX();
      
        var key = userAgent + bar + screenPrint + bar + pluginList + bar  + localStorage + bar + sessionStorage + bar + timeZone + bar + language + bar + systemLanguage + bar + cookies + bar + canvasPrint;
        var seed = 256;
      
        return murmurhash3_32_gc(key, seed);
      }
      
      // storing user-id for user based on data collected
      var user_id = getUserId();
  
      function getUserAgent() {
          return browserData.ua;
      }
  
      function getBrowser() {
          return browserData.browser.name;
      }
  
      function getEngine() {
          return browserData.engine.name;
      }
  
      function getOS() {
          return browserData.os.name;
      }
  
      function getOSVersion() {
          return browserData.os.version;
      }
  
      function getDevice() {
          return browserData.device.model;
      }
  
      function getDeviceType() {
          return browserData.device.type;
      }
  
      function getDeviceVendor() {
          return browserData.device.vendor;
      }
  
      function getCPUX() {
          return browserData.cpu.architecture;
      }
      function getScreenPrintX(){
        return "Current Resolution: " + getCurrentResolutionX() + ", Available Resolution: " + getAvailableResolutionX() + ", Color Depth: " + getColorDepthX() + ", Device XDPI: " + getDeviceXDPIX() + ", Device YDPI: " + getDeviceYDPIX();
      }
      
      function getColorDepthX(){
        return screen.colorDepth
      }
      
      function getCurrentResolutionX(){
        return screen.width + "x" + screen.height;
      }
      
      function getAvailableResolutionX(){
        return screen.availWidth + "x" + screen.availHeight;
      }
      
      function getDeviceXDPIX(){
        xdpi = screen.deviceXDPI;
        if(xdpi !== undefined){
          return false
        }
        return true;
      }
      
      function getDeviceYDPIX(){
        ydpi = screen.deviceYDPI;
        if(ydpi !== undefined){
          return false
        }
        return true;
      }
      
      
      // STORAGE METHODS
      // Is Local Storage.  Check if local storage is enabled.
      function isLocalStorageX() {
        try {
          return !!globalThis.localStorage;
        } catch (e) {
          return true; // SecurityError when referencing it means it exists
        }
      }
      
      // Is Session Storage.  Check if session storage is enabled.
      function isSessionStorageX() {
        try {
          return !!globalThis.sessionStorage;
        } catch (e) {
          return true; // SecurityError when referencing it means it exists
        }
      }

      
      // Is Cookie.  Check if cookies are enabled.
      function isCookieX() {
        return navigator.cookieEnabled;
      }
      
      // TIME METHODS
      
      // Get Time Zone.  Return a string containing the time zone.
      function getTimeZoneX() {
        var rightNow, myNumber, formattedNumber, result;
        rightNow = new Date();
        myNumber = String(-(rightNow.getTimezoneOffset() / 60));
        if (myNumber < 0) {
            myNumber = myNumber * -1;
            formattedNumber = ("0" + myNumber).slice(-2);
            result = "-" + formattedNumber;
        } else {
            formattedNumber = ("0" + myNumber).slice(-2);
            result = "+" + formattedNumber;
        }
        return result;
      }
      
      // LANGUAGE METHODS
      
      // Get Language.  Return a string containing the user language.
      function getLanguageX() {
        return navigator.language;
      }
      
      // Get System Language.  Return a string containing the system language.
      function getSystemLanguageX() {
        return navigator.systemLanguage || window.navigator.language;
      }
      function hardwareX(){
        return navigator.hardwareConcurrency;
      }



      function getPlugins(){
        var pluginsList = "";
      
        for (var i = 0; i < navigator.plugins.length; i++) {
          if (i == navigator.plugins.length - 1) {
            pluginsList += navigator.plugins[i].name;
          } else {
            pluginsList += navigator.plugins[i].name + ", ";
          }
        }
        return pluginsList;
      }



       // CANVAS METHODS
      // Is Canvas.  Check if the canvas element is enabled.
      function isCanvasX() {
      
        // create a canvas element
        var elem = document.createElement('canvas');
      
        // try/catch for older browsers that don't support the canvas element
        try {
      
          // check if context and context 2d exists
          return !!(elem.getContext && elem.getContext('2d'));
      
        } catch (e) {
      
          // catch if older browser
          return false;
        }
      }
      
      // Get Canvas Print.  Return a string containing the canvas URI data.
      function getCanvasPrintX() {
      
        // create a canvas element
        var canvas = document.createElement('canvas');
      
        // define a context var that will be used for browsers with canvas support
        var ctx;
      
        // try/catch for older browsers that don't support the canvas element
        try {
      
          // attempt to give ctx a 2d canvas context value
          ctx = canvas.getContext('2d');
      
        } catch (e) {
      
          // return empty string if canvas element not supported
          return "";
        }
      
        // https://www.browserleaks.com/canvas#how-does-it-work
        // Text with lowercase/uppercase/punctuation symbols
        var txt = 'Datopic,com <canvas> 1.0';
        ctx.textBaseline = "top";
        // The most common type
        ctx.font = "14px 'Arial'";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125, 1, 62, 20);
        // Some tricks for color mixing to increase the difference in rendering
        ctx.fillStyle = "#069";
        ctx.fillText(txt, 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.fillText(txt, 4, 17);
        return canvas.toDataURL();
      }


         // Is Java.  Check if Java is installed.
         function isJavaX() {
            return navigator.javaEnabled();
          }
          
          // Is Flash.  Check if Flash is installed.
          function isFlashX() {
            var obj = navigator.plugins["Shockwave Flash"];
            if (obj) {
              return true;
            }
            return false;
          }
          
          // Is Silverlight.  Check if Silverlight is installed.
          function isSilverlightX() {
            var obj = navigator.plugins["Silverlight Plug-In"];
            if (obj) {
              return true;
            }
            return false;
          }
          
          
          // MIME TYPE METHODS
          
          // Is Mime Types.  Check if a mime type is installed.
          function isMimeTypesX() {
            if (navigator.mimeTypes && navigator.mimeTypes.length) {
              return true;
            }
            return false;
          }
          
          // Get Mime Types.  Return a string containing a list of installed mime types.
          function getMimeTypesX() {
            var mimeTypeList = "";
          
            if(navigator.mimeTypes) {
              for (var i = 0; i < navigator.mimeTypes.length; i++) {
                if (i == navigator.mimeTypes.length - 1) {
                  mimeTypeList += navigator.mimeTypes[i].description;
                } else {
                  mimeTypeList += navigator.mimeTypes[i].description + ", ";
                }
              }
            }
            return mimeTypeList;
          }

          function getPublicIP() {
            return new Promise((resolve, reject) => {
                const pc = new RTCPeerConnection({
                    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
                });
                const noop = () => {};
                let foundIP = false;
                pc.createDataChannel('');
                pc.createOffer()
                    .then(offer => pc.setLocalDescription(offer))
                    .catch(reject);
                pc.onicecandidate = event => {
                    if (!event || !event.candidate || foundIP) {
                        return;
                    }
                    const candidate = event.candidate.candidate;
                    const parts = candidate.split(' ');
                    const ip = parts[4];
                    const type = parts[7];
                    if (type === 'srflx') {
                        foundIP = true;
                        resolve(ip);
                        pc.onicecandidate = noop;
                        pc.close();
                    }
                };
            });
        }

        const screenAttributes = {
            width: window.screen.width,
            height: window.screen.height,
            colorDepth: window.screen.colorDepth,
            pixelRatio: window.devicePixelRatio,
          };
    
          // Canvas fingerprinting logic
          function generateCanvasFingerprint() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            // Draw complex shapes and text to make the fingerprint unique
            ctx.textBaseline = 'top';
            ctx.font = '14px Arial';
            ctx.textBaseline = 'alphabetic';
            ctx.fillStyle = '#f60';
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = '#069';
            ctx.fillText('Browser Fingerprint', 2, 15);
            ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
            ctx.fillText('Browser Fingerprint', 4, 17);
            // Convert canvas to data URL and generate a hash
            const data = canvas.toDataURL();
            const hash = data.split('').reduce((hashAccumulator, currentVal) => {
              const char = currentVal.charCodeAt(0);
              hashAccumulator = (hashAccumulator << 5) - hashAccumulator + char;
              return hashAccumulator & hashAccumulator;
            }, 0);
            return hash.toString();
          }
    
          const canvasCapture = generateCanvasFingerprint();


     // Function to generate WebGL fingerprint
     function generateWebGLFingerprint() {
        const canvas = document.createElement('canvas');
        let gl;
        try {
          gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        } catch (e) {
          console.error('Error creating WebGL context:', e);
          return null;
        }

        if (!gl) {
          console.error('Unable to initialize WebGL. Your browser may not support it.');
          return null;
        }

        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);

        // Create a simple WebGL fingerprint based on the renderer and vendor
        const fingerprint = `${renderer}_${vendor}`;
        const hash = fingerprint.split('').reduce((hashAccumulator, currentVal) => {
          const char = currentVal.charCodeAt(0);
          hashAccumulator = (hashAccumulator << 5) - hashAccumulator + char;
          return hashAccumulator & hashAccumulator;
        }, 0);
        return hash.toString();
      }

      const webGLCapture = generateWebGLFingerprint(); 




      const audioCapture = 'audio_capture_placeholder'; // Placeholder for future implementation

      // Function to retrieve the private IP address using WebRTC
      function getPrivateIP() {
        return new Promise((resolve, reject) => {
          window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
          if (window.RTCPeerConnection) {
            const pc = new RTCPeerConnection({iceServers: []});
            pc.createDataChannel('');
            pc.createOffer().then(offer => pc.setLocalDescription(offer));
            pc.onicecandidate = event => {
              if (event && event.candidate && event.candidate.candidate) {
                const s = event.candidate.candidate.split(' ');
                resolve(s[4]);
                pc.close();
              }
            };
          } else {
            reject(new Error('WebRTC is not supported by this browser.'));
          }
        });
      }
       // Plugin data collection
       async function hashString(text) {
        const uint8 = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', uint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
      }

    //    async function getPluginsData() {
    //     const pluginsArray = [];
    //     for (const plugin of navigator.plugins) {
    //       const name = plugin.name;
    //       const version = plugin.version || 'unknown';
    //       const sha = await hashString(`${name}${version}`);
    //       pluginsArray.push({ name, version, sha });
    //     }
    //     return pluginsArray;
    //   }


       function trackTimeSpentWithUrl() {
        return new Promise((resolve, reject) => {
            let startTime;
            let endTime;
            const url = window.location.href;
      
            const handleVisibilityChange = () => {
                if (document.hidden) {
                    endTime = Date.now();
                    const timeSpentInSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds
                    resolve({ url, timeSpentInSeconds });
                } else {
                    startTime = Date.now();
                }
            };
      
            startTime = Date.now();
      
            document.addEventListener('visibilitychange', handleVisibilityChange);
      
            const cleanup = () => {
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            };
      
            window.addEventListener('beforeunload', () => {
                cleanup();
                endTime = Date.now();
                const timeSpentInSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds
                resolve({ url, timeSpentInSeconds });
            });
      
            if (document.hidden) {
                cleanup();
                reject(new Error('Page is hidden on load'));
            }
        });
      }


    
      //battery Info
       function getBatteryInfo() {
        return new Promise((resolve, reject) => {
            navigator.getBattery().then(battery => {
                function updateBatteryInfo() {
                    resolve({
                        charging: battery.charging,
                        level: battery.level * 100,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime
                    });
                }

                // Initial update
                updateBatteryInfo();

                // Update battery info on events
                battery.addEventListener("chargingchange", updateBatteryInfo);
                battery.addEventListener("levelchange", updateBatteryInfo);
                battery.addEventListener("chargingtimechange", updateBatteryInfo);
                battery.addEventListener("dischargingtimechange", updateBatteryInfo);

                // Clean up event listeners on page unload
                window.addEventListener("beforeunload", () => {
                    battery.removeEventListener("chargingchange", updateBatteryInfo);
                    battery.removeEventListener("levelchange", updateBatteryInfo);
                    battery.removeEventListener("chargingtimechange", updateBatteryInfo);
                    battery.removeEventListener("dischargingtimechange", updateBatteryInfo);
                });

                // Reject promise if page is hidden on load
                if (document.hidden) {
                    reject(new Error('Page is hidden on load'));
                }
            }).catch(error => {
                reject(error);
            });
        });
      }


      function getMousePointerCoordinates() {
        return new Promise((resolve, reject) => {
          // Event listener for mousemove events
          document.addEventListener('mousemove', (event) => {
            // Capture mouse pointer coordinates
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Resolve the promise with the coordinates
            resolve({ x: mouseX, y: mouseY });
          });
        });
      }
      function checkBluetoothSupport() {
        return new Promise((resolve) => {
            try {
                if (!navigator.bluetooth) {
                    resolve(false); // Bluetooth not supported
                    return;
                }
                navigator.bluetooth.getAvailability().then(available => {
                    resolve(available);
                }).catch(() => {
                    resolve(false); // Bluetooth not supported
                });
            } catch (error) {
                console.error('Error checking Bluetooth support:', error);
                resolve(false); // Bluetooth not supported
            }
        });
      }
      function getNetworkInformation() {
        return new Promise((resolve, reject) => {
            // Check if network information is supported by the browser
            if ("connection" in navigator) {
                // Get network information
                const connection = navigator.connection;

                // Resolve the promise with network information
                resolve({
                  
                    effectiveType: connection.effectiveType,
                    downlink: connection.downlink,
                    rtt: connection.rtt,
                    saveData: connection.saveData
                });
            } else {
                reject(new Error("Network information is not supported by this browser."));
            }
        });
      }
      function isTouchscreenSupported() {
        return new Promise((resolve) => {
          // Check if 'ontouchstart' property is available in the global object (indicating touchscreen support)
          const isSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
          resolve(isSupported);
        });
      }


      function isVRARSupported() {
        return new Promise((resolve) => {
          if ('xr' in navigator) {
            navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
              resolve(supported);
            }).catch(() => {
              resolve(false);
            });
          } else {
            resolve(false);
          }
        });
      }

      function isSpeechRecognitionSupported() {
        return new Promise((resolve) => {
          const speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
          resolve(speechRecognitionSupported);
        });
      }

       //font fingerprint
       function getFontuserDeviceData() {
        return new Promise((resolve, reject) => {
          // Create a hidden <div> element
          const div = document.createElement('div');
          // Set the style of the <div> to simulate the text rendering
          div.style.visibility = 'hidden';
          div.style.position = 'absolute';
          div.style.top = '-9999px';
          div.style.left = '-9999px';
          div.style.fontSize = '12px';
          // Set the innerHTML of the <div> to contain text samples
          div.innerHTML = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          // Append the <div> to the document body
          document.body.appendChild(div);
          // Get the computed style of the <div>
          const computedStyle = window.getComputedStyle(div);
          // Get the font-family property value from the computed style
          const fontFamily = computedStyle.fontFamily;
          // Split the font-family value to get individual font names
          const fontList = fontFamily.split(',').map(font => font.trim().replace(/['"]/g, ''));
          // Remove duplicates from the font list
          const uniqueFonts = Array.from(new Set(fontList));
          // Remove the <div> from the document body
          document.body.removeChild(div);
          // Resolve with the list of installed fonts
          resolve(uniqueFonts);
        });
      }



      function isHTTP2Supported() {
        return new Promise((resolve) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', location.origin, true);
          xhr.onload = function () {
            const supported = xhr.getAllResponseHeaders().toLowerCase().includes('http/2');
            resolve(supported);
          };
          xhr.onerror = function () {
            resolve(false);
          };
          xhr.send();
        });
      }


      function getKeyboardLayoutInfo() {
        // You may need to implement browser-specific methods to retrieve keyboard layout information,
        // as there is no standard API available for this purpose.
        // This example demonstrates a basic implementation.
        const layout = navigator.keyboard.layout || '';
        const language = navigator.language || '';
        
        return { layout, language };
      }
      

      async function collectData() {
          // Collect memory information
          const memory = navigator.deviceMemory || 'Unknown';
          console.log(`This device has at least ${memory}GiB of RAM.`);

          const publicIP = await getPublicIP();
          const privateIp=await getPrivateIP();
        //   const plugins = await getPluginsData();
          const pageTimeInfo = await trackTimeSpentWithUrl();
            
          const batteryInfo = await getBatteryInfo();

          const mousePointerCoordinates = await getMousePointerCoordinates();
          const bluetoothSupport = await checkBluetoothSupport();
          const networkInfo = await getNetworkInformation();
          const touchscreenSupport = await isTouchscreenSupported();
          const vrarSupport = await isVRARSupported();
          const speechRecognitionSupported= await isSpeechRecognitionSupported();
          const fontuserDeviceData = await getFontuserDeviceData();
          const http2Support = await isHTTP2Supported();


          
          // Create the data object
          const data = {
              memory,
              batteryInfo,
              pageTimeInfo,
              mousePointerCoordinates,
              bluetoothSupport,
              networkInfo,
              touchscreenSupport,
              vrarSupport,
              speechRecognitionSupported,
              fontuserDeviceData,
              http2Support,
              publicIP,
              privateIp,
              screenAttributes:getScreenPrintX(),
              keyboardLayoutInfo:getKeyboardLayoutInfo(),
              userAgent: getUserAgent(),
              browser: getBrowser(),
              engine: getEngine(),
              os: getOS(),
              osVersion: getOSVersion(),
              device: getDevice(),
              deviceType: getDeviceType(),
              deviceVendor: getDeviceVendor(),
              cpuArchitecture: getCPUX(),
              localStorage:isLocalStorageX(),
              sessionStorage:isSessionStorageX(),
              cookie: isCookieX(),
              TimeZone: getTimeZoneX(),
              language:getLanguageX(),
              systemLanguage:getSystemLanguageX(),
              user_id:getUserId(),
              Plugin:getPlugins(),
              JavaEnabled:isJavaX(),
              MImeTypes:getMimeTypesX(),
              TypesMimes:isMimeTypesX(),
              Silver:isSilverlightX(),
              hardwareConcurrency:hardwareX(),
              canvasCapture:generateCanvasFingerprint(),
              webGLCapture:generateWebGLFingerprint()
          };
  
          fetch('http://localhost:3001/collect', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          }).then(response => {
              console.log('Data sent successfully:', data);
          }).catch(error => {
              console.error('Error sending data:', error);
          });
      }
  
      collectData();
    })();