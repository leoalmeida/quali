Draw.loadPlugin(function(ui){var basicAds=['<a title="'+ mxResources.get('loveIt',['draw.io'])+'" target="_blank" href="https://twitter.com/intent/tweet?text='+
encodeURIComponent(mxResources.get('loveIt',['www.draw.io']))+'" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,'+'left=\'+((screen.width-640)/2)+\',top=\'+((screen.height-280)/3)+\',height=280,width=640\');return false;"\'>'+'<img border="0" align="absmiddle" width="18" height="18" style="margin-top:-2px;padding-right:8px;" src="'+
Editor.tweetImage+'"/>'+ mxResources.get('loveIt',['draw.io'])+'</a>','<a title="Share on Facebook" target="_blank" href="https://www.facebook.com/sharer.php?u='+
encodeURIComponent('https://www.draw.io')+'" onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,'+'left=\'+((screen.width-640)/2)+\',top=\'+((screen.height-520)/3)+\',height=520,width=640\');return false;"\'>'+'<img border="0" align="absmiddle" width="18" height="18" style="margin-top:-2px;padding-right:8px;" src="'+
Editor.facebookImage+'"/>Share on Facebook</a>','<a title="draw.io Offline" href="https://www.draw.io/app" target="_blank">'+'<img border="0" align="absmiddle" style="margin-top:-1px;padding-right:8px;" src="images/download.png"/>'+'draw.io Offline</a>'];var rotate=mxUtils.bind(this,function(elt,html,delay,fn)
{delay=(delay!=null)?delay:1000;mxUtils.setPrefixedStyle(elt.style,'transition','all '+(delay/1000)+'s ease');mxUtils.setPrefixedStyle(elt.style,'transform','scale(0)');elt.style.visibility='visible';elt.style.opacity='0';window.setTimeout(function()
{elt.innerHTML=html;mxUtils.setPrefixedStyle(elt.style,'transform','scale(1)');elt.style.opacity='1';if(fn!=null)
{fn();}},delay);});var td2=document.getElementById('geFooterItem1');if(td2!=null)
{if(true)
{mxEvent.addListener(td2,'click',mxUtils.bind(this,function()
{if(typeof window.ga==='function'&&!ui.isOffline())
{ga('send','event','Footer','click','Confluence');}}));}
else
{var link='https://download.draw.io/';var lastHtml=td2.innerHTML;var os='draw.io';if(['Macintosh','MacIntel','MacPPC','Mac68K'].indexOf(navigator.platform)>=0)
{os+=' for macOS';}
else if(['Win32','Win64','Windows','WinCE'].indexOf(navigator.platform)>=0)
{os+=' for Windows';}
else if(/\bCrOS\b/.test(navigator.userAgent))
{os+=' for Chrome OS';}
else if(/Linux/.test(navigator.platform))
{os+=' for Linux';}
else
{os+=' Desktop';}
td2.innerHTML='<a title="'+ os+'" href="'+ link+'" target="_blank">'+'<img border="0" align="absmiddle" style="margin-top:-4px;" width="24" height="24" '+'src="images/drawlogo48.png"/>&nbsp;&nbsp;'+ os+'</a>';}}
var td=document.getElementById('geFooterItem2');if(td!=null&&mxClient.IS_SVG)
{td.innerHTML='<a title="Vote" target="_blank" href="https://devpost.com/software/planning-poker-for-trello-zp8t3l"/>Pretty please Vote and Like this Project</a>';}});