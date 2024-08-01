(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{404:function(v,_,t){"use strict";t.r(_);var a=t(0),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"nas"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nas"}},[v._v("#")]),v._v(" NAS")]),v._v(" "),_("blockquote",[_("p",[v._v("这里记录我折腾NAS的一些东西、踩过的坑。")])]),v._v(" "),_("blockquote",[_("p",[v._v("阅读指南：你需要有最基本的网络、电脑知识，最起码知道NAS大概是做什么的。")]),v._v(" "),_("p",[v._v("本文只是提供一个整体上的解决方案，像是对资料的整合，也是我自己折腾过程的记录。所以不会事无巨细，隐去的那些细节在网上一搜一大堆，当你操作时卡住了，再去搜索关键词也不迟。")])]),v._v(" "),_("p",[v._v("我搭的NAS基本是all in one，如侧边索引所见，除了软路由没做，其他的都差不多了。")]),v._v(" "),_("p",[_("strong",[v._v("参考:")]),v._v(" 下面是几个我在折腾的过程中参考过且推荐的网站、博主。")]),v._v(" "),_("ul",[_("li",[v._v("【一起玩NAS】https://wiki.slarker.me/")]),v._v(" "),_("li",[v._v("【b站up主钱韦德】https://space.bilibili.com/20274090")])]),v._v(" "),_("h2",{attrs:{id:"网络环境准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络环境准备"}},[v._v("#")]),v._v(" 网络环境准备")]),v._v(" "),_("p",[v._v("在一切开始之前，要确保你的网络环境支持访问NAS。")]),v._v(" "),_("p",[v._v("在选择硬件、组装、购买机器之前，先使用一些简单的方法验证的你网络足以使用NAS，别买了机器才发现组了也用不了，那就白买了。")]),v._v(" "),_("p",[v._v("完成这一章的一系列工作，你将：能够安全、便捷地，通过域名访问每一项NAS服务。")]),v._v(" "),_("h3",{attrs:{id:"内网访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内网访问"}},[v._v("#")]),v._v(" 内网访问")]),v._v(" "),_("p",[v._v("如果你只是在局域网内用，那你几乎什么都不需要做，直接用ipconfig等指令查出局域网IP，拿IP访问即可。")]),v._v(" "),_("h3",{attrs:{id:"外网访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#外网访问"}},[v._v("#")]),v._v(" 外网访问")]),v._v(" "),_("p",[v._v("从外网访问，要做的事情就多了，首先要确保你能有一个公网IP，能在你机器所处的运营商的局域网——例如小区以外，触达你的NAS。")]),v._v(" "),_("h4",{attrs:{id:"公网ipv6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#公网ipv6"}},[v._v("#")]),v._v(" 公网IPv6")]),v._v(" "),_("p",[v._v("IPv4基本不可能了，2024年的今天，几乎以个人的力量不可能拿到任何静态IP，联通移动自己也没多少，电信有也不给，我试过很多话术，人家就是不给，人家等着卖企业专线呢。如果你已经能拿到或者你家的网本身就是IPv4，那恭喜你，你可以直接跳过这一步了。")]),v._v(" "),_("p",[v._v("但IPv6就不一样了，这玩意给地球每一粒沙子发，都发不完，运营商没有理由限制，普通人可以轻易获得。")]),v._v(" "),_("p",[v._v("这东西唯一的局限就是，访问者的机器支持IPv6，不过已经24年了，这几年的新设备几乎没有不支持的，但在某些公共场所的网络，他们所提供接入网络的设备或许较老、还不支持。")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("调制解调器拨号改桥接")])]),v._v(" "),_("p",[v._v("你家的光猫有两种工作模式，一种是路由模式，即现在的猫都集成了路由器的功能，并且默认以这种模式工作，把路由器的活也干了，主要目的是方便运营商控制网络接入，让用户尽可能少的参与网络配置，省的出问题麻烦。【当然，也方便运营商埋点，做数据检测，有没有监控你，那就不得而知了......第二种是桥接模式，这种模式下，调制解调器只完成他的本质工作——光电信号的转换。由路由器来进行拨号、路由/为局域网内设备分配IP。")]),v._v(" "),_("p",[v._v("这里有一个细节我依旧太明白：按理说光猫承担路由功能，与让路由器自己做相比，这只是改变了我家中局域网接入外部的位置，但本质上他们完成的工作都是一样的。为什么让路由器来拨号，就能把运营商分配给他的IPv6再分配给局域网内的其他设备，而光猫拨号，公网IPv6的分配就到此为止了，光猫就不能也分配吗？我在网上搜索了很多，没得到答案，我推测可能是运营商处于安全或者什么因素的考虑，光猫一开始就被有意设置成这样——以路由模式工作时，只会对内部设备分配静态的内部IPv6地址，不分配外网地址。")]),v._v(" "),_("p",[v._v("总之就是要将光猫改桥接，让路由器来拨号，这样做还有个好处就是，光猫的硬件性能普遍不怎么样，让他充当路由，性能肯定不如你自己的路由器，能更好的发挥宽带性能。")]),v._v(" "),_("p",[v._v("需要注意如下几个问题：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如何登陆网关/光猫管理页面？")]),v._v(" "),_("p",[v._v("按照网关IP进去之后，提示管理页面需要登陆，网上的那些默认账号密码早就过时了，现在的账密都是动态生成的，通过他们运营商的终端输入猫的mac地址，动态生成的。这个东西你直接问给你装宽带的人要，或者打客服，问官方要。他们不给也没关系，一堆运营商的员工那这东西搞副业，去咸鱼搜，关键词为省名+运营商+管理员账号，把mac地址发给他们，几块钱就能给你生成一个。")])]),v._v(" "),_("li",[_("p",[v._v("进光猫管理页面要怎么改？")]),v._v(" "),_("p",[v._v("选择网络这一大类，在里面找到连接选项，有多个连接名称，选择INTERNET_B_VID这一项，这个是你互联网的设置，其他是管IPTV的、电话之类的。连接模式改成桥接，把管理页面的各个项都扫一遍，如果有IPv6选项则打开、有DHCP选项则关闭(选择桥接之后应该就没这一项了)、有防火墙就关闭。")])]),v._v(" "),_("li",[_("p",[v._v("光猫的DHCP关了之后无法再通过局域网IP进入光猫管理界面怎么办？")]),v._v(" "),_("p",[v._v("网上有很多方案，比如SSH连接啥的，但这都很麻烦，我用的是最简单的，0学习的，直接用自己的设备网线直连光猫，然后ipconfig查看光猫的局域网IP，接着用局域网访问即可。")])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("路由器开启拨号上网")])]),v._v(" "),_("p",[v._v("上网方式从自动获取，改为宽带账号上网。宽带账号和密码找你的安装员要，或者打官方电话转人工问他们要。宽带本来就是你自己的，你要你自己的账号密码，他们必须得给。")]),v._v(" "),_("p",[v._v("完成设置后重启设备，稍待片刻，通过任意设备测试网络、确认连同。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("开启所有设备的IPv6、放行所有涉及到的网络设备的防火墙")])])])]),v._v(" "),_("h4",{attrs:{id:"验证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[v._v("#")]),v._v(" 验证")]),v._v(" "),_("p",[v._v("完成以上操作后，通过任意设备验证。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("验证IPv6：")]),v._v(" "),_("ul",[_("li",[v._v("通过任意工具网站在线验证IPv6。")]),v._v(" "),_("li",[v._v("通过命令行或某种方式查询本机IP，通过IP特征确认这个IP是个公共IPv6地址，而非局域网地址。")])])]),v._v(" "),_("li",[_("p",[v._v("验证端口 & 从外网访问，进行综合验证：")]),v._v(" "),_("p",[v._v("端口的验证我当时遇到了个坑，当时以为放行了对应防火墙，telnet就能连同，但后来发现，端口如果希望被连通，你的这台机器必须先有服务正在监听这个端口。所以先在本地用nodejs或者spring随便什么东西，起一个简易helloworld网络服务，监听任意端口。")]),v._v(" "),_("p",[v._v("通过公网IP测试这个端口：")]),v._v(" "),_("ul",[_("li",[v._v("可以用telnet，")]),v._v(" "),_("li",[v._v("也可以通过浏览器输入网址加端口用http访问，")]),v._v(" "),_("li",[v._v("也可以在网上找那些测试端口连通的在线工具，")]),v._v(" "),_("li",[v._v("用Nmap扫端口。")])])])]),v._v(" "),_("h4",{attrs:{id:"通过ddns将nas映射到固定地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通过ddns将nas映射到固定地址"}},[v._v("#")]),v._v(" 通过DDNS将NAS映射到固定地址")]),v._v(" "),_("p",[v._v("通过上面的方式只是拿到了公网IP，但这个IP仍然不是静态的，他会根据运营商的某种规则不定时地动态改变。这样一来，在某个未知的时间IP变化，又无从得知这个新地址，导致无法在局域网外访问。并且，IPv6过于复杂的地址，根本无法记忆，输入起来也不方便，不利于使用。所以需要通过DDNS将动态变化的IP地址实时绑定到域名。")]),v._v(" "),_("p",[v._v("DDNS的作用简单来说，就是一个跑在你主机的程序，它会根据设定好的时间，检测本机的IP，如果IP变化，它就会通过你所持有域名的DNS解析服务商提供的API，把新地址报告给域名服务器，这样一来，你购买的域名将始终指向新的、正确的地址。")]),v._v(" "),_("p",[v._v("具体过程为：")]),v._v(" "),_("ul",[_("li",[v._v("购买域名→")]),v._v(" "),_("li",[v._v("在域名解析中添加一条AAAA记录，地址为你当前的IPv6地址（这部没用也行）→")]),v._v(" "),_("li",[v._v("安装适用于你软硬件环境的DDNS-GO版本（直接搜，有很多可用的教程，群晖的话就是那个“我不是矿神”提供的）→")]),v._v(" "),_("li",[v._v("进入你DNS供应商的控制台，生成并下载access-key→")]),v._v(" "),_("li",[v._v("在DDNS-GO中选择对应的服务商，把key中对应的调用API的密钥填入，填入域名等其他信息，创建并保存配置")])]),v._v(" "),_("p",[v._v("遵循和上面一样的验证方法，测试能否通过域名访达。")]),v._v(" "),_("blockquote",[_("p",[v._v("需要注意，群晖似乎本来就不支持在局域网内通过外部网络访问（至少我的是这样，也没找到更改这种规则的配置入口）。所以你在局域网内通过域名或者IPv6去访问管理页面访问不到是正常的，只能拿局域网IP。所以你可以通过手机的移动数据来完成测试。")])]),v._v(" "),_("h4",{attrs:{id:"路由环路-nat回流-无法在局域网通过域名访问nas"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由环路-nat回流-无法在局域网通过域名访问nas"}},[v._v("#")]),v._v(" 路由环路/NAT回流：无法在局域网通过域名访问NAS？")]),v._v(" "),_("p",[v._v("按照上面完成配置后，（大概率你是在家配置的，和你的NAS处在同一局域网，）发现还是无法通过域名访问，但用移动数据就可以访问、不在这个局域网内（例如用你办公室的网络）就可以访问。")]),v._v(" "),_("p",[v._v("事实上这是一类普遍的网络问题，不只限于群晖，这类问题人们一般称为路由环路/NAT回流。大三学的计算机网络在我记忆中留下的已经不多了，用我有限的记忆，我是这么理解的：")]),v._v(" "),_("ol",[_("li",[v._v("在局域网里你访问这个域名，DNS服务器把解析到的IP发给你，你的设备访问这个IP时发出一个请求建立连接的数据包；")]),v._v(" "),_("li",[v._v("你家的路由器拿到这个数据包，发现目标IP是一个外网地址，于是把这个数据包传给下一级，数据包经过猫传入了ISP的网络；")]),v._v(" "),_("li",[v._v("运营商网络里的路由器根据路由表等一系列规则判断，发现目的地其实是要送到你家的那个路由器，所以这个数据包经过若干个路由器传输后，又回到了你家的路由器；")]),v._v(" "),_("li",[v._v("此时这个数据包的目的地仍然是原来那个，于是你家的路由器就又把这个包发出去了，继续进入步骤2，")]),v._v(" "),_("li",[v._v("这样一来，数据的传输就行程了一个环，数据包在那几个路由器之间循环传输，重复2➡️3➡️4的步骤。在这个循环的过程中，每一跳，TTL值减一。最终TTL值在某个路由器上减为0，数据包被路由器丢弃，返回告知无法触达、连接失败。")])]),v._v(" "),_("p",[v._v("所以默认状态下，是无法在局域网内通过公网地址访问另一台局域网内的设备的。")]),v._v(" "),_("p",[v._v("为了解决这个问题，我参照了下面这篇文章，总结得出了如下几种解决方案：")]),v._v(" "),_("blockquote",[_("p",[v._v("【在内网和外网使用域名无端口访问群晖及内网其他设备/服务】https://ikendoit.com/zh-cn/setup-synology-domain/")])]),v._v(" "),_("ol",[_("li",[v._v("修改你本机的host文件，相当于直接告诉你的电脑，你要找这个域名，就去这个局域网ip找。Windows系统可以通过图形化工具Hosts File Editor快速编辑。")]),v._v(" "),_("li",[v._v("在群晖中配置DNS服务器：NAS的域名就直接去NAS这台机器本身，其他域名去找原本的DNS服务器。然后把你电脑的DNS服务器设置成群晖。")]),v._v(" "),_("li",[v._v("如果你路由器刷了OpenWrt，在DHCP/DNS下的自定义域名劫持，添加规则，让域名指向你的NAS。")]),v._v(" "),_("li",[v._v("在域名解析服务商的域名解析里，添加一条A类型记录，其IPv4地址为你这台NAS的局域网地址，专门用于局域网内访问。")])]),v._v(" "),_("blockquote",[_("p",[v._v("我最终采纳了第一种方法，然后有些设备上依旧是局域网IP+端口号。")])]),v._v(" "),_("h4",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),_("p",[v._v("外网访问实现了，网络安全也马虎不得。我是直接用了腾讯云提供的免费ssl证书，可以申请很多张，就是三个月就失效了，要每90天重新配置。")]),v._v(" "),_("p",[v._v("Step1：完成腾讯云一系列的手续之后，创建免费证书，按照提示填入你要加密的域名以及其他信息，按照指引在你的域名解析里添加正确的CNAME记录，完成对域名所属的验证，就可以生成证书了。")]),v._v(" "),_("p",[v._v("（这一步腾讯云自己有文档，网上的图文教程也很多，不展开，其实你按我说的这个去一步步点，猜都猜得出该怎么往下进行）。")]),v._v(" "),_("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/oxgpnk.png",alt:"image"}}),v._v(" "),_("p",[v._v("填写好信息之后提交进入第二步，")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/oy69zv.png",alt:"image"}}),v._v(" "),_("p",[v._v("把主机记录、记录值在你域名解析服务商的解析里配置好后，点击上图里那个验证域名，像这样：")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/ozazdf.png",alt:"image"}}),v._v(" "),_("p",[v._v("验证成功之后：")]),v._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://img.wml107.top/i/2024/07/23/ozr21w.png",loading:"lazy"}})]),v._v(" "),_("p",[v._v("等一会审核通过，就可以下载证书进入下一步了。")]),v._v(" "),_("p",[v._v("Step2：之后根据你部署HTTPS证书的环境，下载对应类型的证书（到底下哪个，你直接去搜你的环境+HTTPS就好了，一堆教程，我我是群晖，下载的nginx的那个。）。")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/p095be.png",alt:"image"}}),v._v(" "),_("p",[v._v("Step3：按照适用于你NAS系统的方式将证书导入。我用的是群晖，位置为：控制面板→连接性-安全性→证书→新增，导入之后，再去设置，把每个服务啥的都选成你自己导入的那张证书。")]),v._v(" "),_("img",{staticStyle:{zoom:"28%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/p0hog9.png",alt:"image"}}),v._v(" "),_("img",{staticStyle:{zoom:"44%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/p0v26w.png",alt:"image"}}),v._v(" "),_("h4",{attrs:{id:"反向代理-https只能加密登陆门户or每次带端口都太麻烦"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反向代理-https只能加密登陆门户or每次带端口都太麻烦"}},[v._v("#")]),v._v(" 反向代理：HTTPS只能加密登陆门户or每次带端口都太麻烦？")]),v._v(" "),_("blockquote",[_("p",[v._v("这是一种针对群晖的解决办法，我自己用的是这个，别的我也不了解，但道理是相似的。")])]),v._v(" "),_("p",[v._v("配置完HTTPS你会发现，只有门户起作用了，你访问个别的服务，比如照片，文件管理，或者你自己部署的某些服务，浏览器左上角又会提示你不安全，你的HTTPS似乎只对门户的端口生效。")]),v._v(" "),_("p",[v._v("这里我必须要提一句，很多文章对这种现象的分析都是，HTTPS只能用在443端口，这是错误的，HTTPS本身只是一种协议，它只是默认用443，并不是只能443。这就像HTTP默认是80，但你在后面加端口后缀，一样能访问网页一样。")]),v._v(" "),_("p",[v._v("但为什么你用HTTPS前缀做协议，后面加上端口号，依旧不起作用呢？这是因为群晖的默认行为，只会在访问门户的那个端口才应用ssl证书（443我没试过，暂暂不清楚）。")]),v._v(" "),_("p",[v._v("改变这种行为有两个途径：1.配置nginx，这个太麻烦了，要可劲儿的折腾命令行，我懒得弄，感兴趣的可以去搜索。2.反向代理，简单粗暴，我喜欢这个。")]),v._v(" "),_("p",[v._v("而且这能解决另一个问题——每次访问NAS不同服务都要加端口号，太麻烦了。")]),v._v(" "),_("p",[v._v("结论：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("在你的域名下创建对应各种服务的子域名，比如photos.wml107.top, web.wml107.top, mcserver.wml107.top，")])]),v._v(" "),_("li",[_("p",[v._v("然后通过群晖的反向代理，把这个域名的HTTPS/443端口访问，映射到localhost对应服务端口的访问，")]),v._v(" "),_("blockquote",[_("p",[v._v("位置在：控制面板→系统/登陆门户→高级→反向代理服务器/新增")])]),v._v(" "),_("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/otzugv.png",alt:"image"}}),v._v(" "),_("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/oug0un.png",alt:"image"}})]),v._v(" "),_("li",[_("p",[v._v("为这些子域名分别生成相应的ssl证书（因为我用的是免费ssl，要给每个子域名单独生成，如果你用的是花钱的大概率没这步），")])]),v._v(" "),_("li",[_("p",[v._v("按照前面配置HTTPS的流程，生成证书、导入证书，最后把你上面为你某个服务创建的那个反向代理，选择刚才导入的那个证书。")]),v._v(" "),_("blockquote",[_("p",[v._v("位置在：控制面板→连接性/安全性→证书→设置，在这个弹窗的配置列表里，就可以看到你为反向代理添加的新域名了，为它选择与他对应的证书。")])])])]),v._v(" "),_("p",[v._v("至此，你就完成了所有网络环境上的基本工作，能够安全、便捷地，通过域名访问每一项NAS服务了。")]),v._v(" "),_("h4",{attrs:{id:"内网穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内网穿透"}},[v._v("#")]),v._v(" 内网穿透")]),v._v(" "),_("p",[v._v("除非是你实在懒得研究/学不会以上操作，或者经过这些操作之后发现你家网络上传的端口让运营商封了个干净，除了80、443、8888、8080这些，连那些生僻的都给你封完了，没法通过外网IP实现外网访问。不然真的不建议用内网穿透，真的是又贵又慢、带宽感人。")]),v._v(" "),_("p",[v._v("用的比较多的就是花生壳或者SAKURA FRP吧，去网上搜索推荐，有挺多可选的。")]),v._v(" "),_("h2",{attrs:{id:"系统选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统选择"}},[v._v("#")]),v._v(" 系统选择")]),v._v(" "),_("p",[v._v("选择了系统，才能选择硬件，因为某些系统对应的是成品方案，如果是直接买成品，也就不存在什么硬件选择了。")]),v._v(" "),_("p",[v._v("目前有非常多的NAS系统：FreeNAS&NAS4Free、TrueNAS、OpenMediaVault、unRAID、群晖、威联通、极空间、绿联等，")]),v._v(" "),_("p",[v._v("前四个是比较老牌、使用广泛的系统，可以看B站up主钱韦德的这个视频扫个盲：")]),v._v(" "),_("blockquote",[_("p",[v._v("【4大NAS系统介绍（二）：文件存储】 https://www.bilibili.com/video/BV1Ao4y1o7dN/?share_source=copy_web&vd_source=a3f867b43d32c007bbc9e1394816888f")])]),v._v(" "),_("p",[v._v("后面那些都是这两年新出的一些品牌成品NAS的系统，这方面，也可以参照这位up主的成品NAS推荐系列视频。")]),v._v(" "),_("p",[v._v("前人已经做过足以供人做出判断的对比了，我自己也没有都买来试一遍，就不拾人牙慧了，主要就是考察功能性、数据迁出难易、备份难易、安全性与稳定性。")]),v._v(" "),_("p",[v._v("我自己得出的结论：这些系统里除了群晖之外，要么是功能不全，连基本的完成度都存在问题；要么就是操作逻辑过于复杂、提供的功能过于强大，上手的学习路线陡峭，我不太愿意花那么大的时间精力折腾。最终我选择了在功能性与易用性之间取得较好平衡的群晖，最后上手的体验也确实印证了这一选择——要用的功能它都有、操作简单、稳定、界面美观。")]),v._v(" "),_("p",[v._v("不过我没有买正版群晖，而是使用了黑群晖——即自己选择硬件组装机器，然后通过网络社区上大佬们提供的一些工具将群晖系统安装到我自己的组装的电脑上，然后把系统洗白，以解锁群晖的全部功能。")]),v._v(" "),_("p",[v._v("主要群晖的这个成品真的是买软件送硬件，强行为对比分出的几个SKU里，低档的几个型号给的实在是太少了，几乎完全不可用，高端的几个版本里，给的硬件也没好到哪去，实在是很不划算，且不够用。让人有心无力，想支持也没法儿。非常期待群晖以后像微软那样，提供单卖的纯系统。")]),v._v(" "),_("blockquote",[_("p",[v._v("说到这个，最近在微博看到小米的官方人员透露小米有做NAS的打算，不知道会不会推出一个好用的纯NAS系统，挺期待。")])]),v._v(" "),_("p",[v._v("如果你也想使用黑群晖，这里有几个概念需要你先借助搜索引擎了解：什么是引导；什么是洗半白、洗全白；以及如何洗白。")]),v._v(" "),_("h2",{attrs:{id:"硬件选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#硬件选择"}},[v._v("#")]),v._v(" 硬件选择")]),v._v(" "),_("p",[v._v("主要的硬件就是下面这四个，其他的东西，要么是能亮就行，要么则是某个特定的玩法、NAS功能涉及到时再单独提及。")]),v._v(" "),_("h3",{attrs:{id:"cpu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[v._v("#")]),v._v(" CPU")]),v._v(" "),_("p",[v._v("因为用的是黑群晖，群晖的各个版本系统，都是针对某些特定硬件的，所以装黑群晖，就要让硬件与你选系统对应的白裙晖成品里的硬件接近，来避免出现兼容性问题。在所有硬件里，最要紧的就是CPU，对不上的话会导致系统装了用不了。")]),v._v(" "),_("p",[v._v("到底要选择哪个系统，系统对应的硬件支持情况，推荐看这篇文章，写的简洁明了，各位可以根据自己的需要选择：")]),v._v(" "),_("blockquote",[_("p",[v._v("https://nga.178.com/read.php?tid=38650456&rand=91")])]),v._v(" "),_("p",[v._v("我的系统装的是DS918，最终CPU选了8100，其实是选择有点老。我主要是基于这几点考虑的：群晖的机器用的硬件普遍都比较老旧，即便是2024年的今天，黑裙已经能支持11代以上的CPU了，我仍然不敢选，怕出现什么兼容性上的小毛病，毕竟目前用的人还太少了，我自己的不太愿意去主动排查解决问题，用一个市场保有较多的版本，出了问题也要找解决方案，所以最终还是把目光落在了Intel8代上面。")]),v._v(" "),_("p",[v._v("确定了CPU系列之后，看了一些评测，觉得八代的奔腾赛扬，硬解性能不行。太好的CPU功耗太高，NAS也用不到。折衷一下，就选了8100。至于8100和8100T的区别，你完全无须纠结，标称确实是带T的功耗低一些，但实测他俩待机功耗基本上一摸一样，完全不用为了那点功耗多花钱还牺牲性能，选8100就完事儿了。")]),v._v(" "),_("blockquote",[_("p",[v._v("其实事后证明，完全多虑了，因为我当时根本就不清楚什么是硬解，所以这里也必须向读文章的你提一嘴，省的去追求一些用不着的需求：")]),v._v(" "),_("p",[v._v("视频硬解在绝大时候是用不到的，并且他不是提升画质的，是用来降低画质的。")]),v._v(" "),_("p",[v._v("具体讲就是，如果你在家中的局域网，用各种终端播放时NAS上的视频，你那些终端上的硬件与播放器都具备解码功能，不是由NAS来完成解码的;")]),v._v(" "),_("p",[v._v("只有你在外网访问NAS中视频的时候，因为家庭宽带的带宽太低，只有30-50M，需要把你的那些电影啥的降画质传输，以免卡顿，这才需要你NAS的CPU的硬解功能完成视频质量的转换。")])]),v._v(" "),_("h3",{attrs:{id:"主板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主板"}},[v._v("#")]),v._v(" 主板")]),v._v(" "),_("p",[v._v("主板不存在什么对群晖系统的兼容性，保证能兼容你CPU、塞进机箱这两个最基本的之后，主要的考虑都集中在扩展性：")]),v._v(" "),_("ul",[_("li",[v._v("内存扩展性，几个插槽、最大容量。")]),v._v(" "),_("li",[v._v("PCIe扩展性，给了几条、通道数都是多少、什么版本的、支不支持PCIe拆分。")]),v._v(" "),_("li",[v._v("M2，又几个M.2插槽，在什么位置、什么尺寸、支持的速度。")]),v._v(" "),_("li",[v._v("SATA接口个数。")]),v._v(" "),_("li",[v._v("背部I/O数量。")]),v._v(" "),_("li",[v._v("网卡，网卡数目、带宽、品牌型号（这个要在网上搜搜，有的型号和群晖配合的不太好，有的型号本身不太靠谱）")]),v._v(" "),_("li",[v._v("方便NAS的各种特色功能：\n"),_("ul",[_("li",[v._v("来电自启")]),v._v(" "),_("li",[v._v("唤醒时间与自动关机")]),v._v(" "),_("li",[v._v("网络远程唤醒")]),v._v(" "),_("li",[v._v("RAID支持情况")]),v._v(" "),_("li",[v._v("插在机箱内部主板上的直插式USB")]),v._v(" "),_("li",[v._v("......")])])])]),v._v(" "),_("p",[v._v("这时候，选8代CPU的麻烦就凸显了，这东西太老了，新主板没有，咸鱼的话，这两年NAS这个小众爱好太🔥了，8100这颗U也太热门了，导致稍微各方面说的过去的主板，其实各方面也就那样，但价格却很贵；便宜点的，要么就是扩展性奇差丐中丐，要么就是成色极差，很难怀疑回来能稳定用不能；再加上我现有准备用的机箱是ITX的，我还主打的是一个捡垃圾，走性价比路线，主板就更难买了。")]),v._v(" "),_("p",[v._v("按照上面的标准筛一波，几乎没啥可用的，如果你不追求CPU性能，妖板厂商华擎的j3455、j4105，都是可以考虑的，市场保有量很高，咸鱼一搜一大堆，非常便宜，都是全新/成色很好。这东西是那种CPU集成在主板上的，还省的你买CPU、硅脂、散热器了(被动式散热)，要是你用不着硬解，也没有拿NAS做游戏服务器的打算，够用了。")]),v._v(" "),_("p",[v._v("因为我当时的需求是要上8100，最终找到了一家很神奇的淘宝店：深圳雲星。这个雲星主板是专门做NAS的，所以主板提供的很多东西，非常切中痛点，然后这个牌子的产品也做了一段时间了，我看买他的NAS玩家挺多的，没发现有什么问题，挺稳的。")]),v._v(" "),_("p",[v._v("最后选的是雲星ITX- CS2，")]),v._v(" "),_("ul",[_("li",[v._v("ITX版型，")]),v._v(" "),_("li",[v._v("B250芯片组，支持6～9代Intel处理器，不需要你自己刷BIOS，")]),v._v(" "),_("li",[v._v("6个原生SATA3.0、2个PCIe3.0 X4，长度支持到22110的M.2、1个PCIe3.0 X16支持拆分，")]),v._v(" "),_("li",[v._v("双RTL8125B 2.5G网卡，")]),v._v(" "),_("li",[v._v("I/O方面，2个USB3.0、2个USB2.0、HDMI1.4、DP1.2、音频接口，除此之外内置接口还提供了USB3.0、USB2.0排针，和一个主板内部直插USB2.0")]),v._v(" "),_("li",[v._v("BIOS方面，我上面提到的那些方便NAS使用的小功能都有")])]),v._v(" "),_("p",[v._v("考虑到支持着么多东西，花450就450吧。")]),v._v(" "),_("h3",{attrs:{id:"内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[v._v("#")]),v._v(" 内存")]),v._v(" "),_("p",[v._v("内存这块，不是打游戏，对于服务器的工作，频率意义不大，然后8100和那张主板支持的频率、DDR4本来的频率都不高，频率这块就无所谓了，2133、2400、2666都行。")]),v._v(" "),_("p",[v._v("容量肯定是越大越好，但存在一个问题就是，群晖的系统能识别到吗？因为群晖的系统都是针对于特定型号硬件的，就怕人家做系统的时候，某些原始设定就是内存不大于多少，然后系统永远不会去超出这个容量的内存位置去寻址。")]),v._v(" "),_("p",[v._v("DS918这个系统对应的成品官网描述最大只能加到8G，然后我看网上有人装这个版本系统加到32也能用，更多就不得而知了。")]),v._v(" "),_("p",[v._v("但我目前没遇到什么吃内存容量的场景，已知的三种情形：游戏服务器，比如帕鲁这种，很吃内存；你以后可能在你NAS上跑的某个Web服务；使用Unraid 或者 TrueNAS作为系统时，用ZFS这个文件系统组RAID，ZFS 会使用内存来作为缓存，比较吃内存。一般而言，8G就够了。")]),v._v(" "),_("h3",{attrs:{id:"硬盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#硬盘"}},[v._v("#")]),v._v(" 硬盘")]),v._v(" "),_("h4",{attrs:{id:"固态还是机械"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#固态还是机械"}},[v._v("#")]),v._v(" 固态还是机械？")]),v._v(" "),_("p",[v._v("群晖系统不支持NVMe固态用于存储，只能用作缓存，因为目前还没有任何一台正版群晖的成品机拿这个当存储盘。你买来只能拿他当缓存盘，加速读写。"),_("br"),v._v("我就买了一根Intel的16g傲腾，才十几块钱，很好玩。然后如果你也想买这个作缓存，还有一点需要注意，群晖系统只有插入两根NVMe固态，才能用于同时加速读写，单插一根只能用作读缓存，不能用于写。不过我刚好没这个需求，不打算加速写：写的话，如果是小文件，感知不明，如果是大文件，除非你容量买的够大，不然写一会就出缓了，速度像过山车，绝大多数时间都出缓了。只用来做读缓存，加速平常那些小文件访问，优化4k性能，挺不错的。")]),v._v(" "),_("p",[v._v("SATA固态依旧不是一个好选择，因为NVMe出来太久了，市面上现在几乎已经没有什么SATA产品了，你去收寿命未知的二手SATA来组NAS显然也不是一个好选择。这些产品性能极其落后，几乎就是大号U盘，像凯侠、闪迪、英睿达的那些产品，没了当年SATA时代的mlc颗粒，但现在主流tlc产品上的固件调教、读写策略、缓存策略这些大概率在这种小众产品上也不存在，寿命和性能都不容乐观，价格又出奇的贵。咸鱼的二手SATA大概率都是清零盘、翻新盘，盘里的闪存颗粒大概率是卖家不知道从哪儿弄来焊上去的。")]),v._v(" "),_("p",[v._v("其实用机械也没什么不好的，相比于上面那些东西给你可能带来的提升，影响速度的瓶颈其实可能在你的网卡带宽和你家宽带的速度【我家的千兆实际多数时间测只有六百多)。")]),v._v(" "),_("h4",{attrs:{id:"要不要组raid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#要不要组raid"}},[v._v("#")]),v._v(" 要不要组RAID？")]),v._v(" "),_("p",[v._v("没必要，RAID就是两方面，一个是加速读写，这个东西能提供的速度提升，实在是很小，没什么实际收益。理论上组RAID0能提升你额外添加盘数的倍数，但实际测下来，根本没那么多。并且还提升了故障率，你可能说组RAID10这种，把提速方案和冗余方案结合，但这个冗余方案也没看起来那么好，这一点下面再展开。就提速而言，与其折腾这个，还不如去研究操作下，通过命令行变更默认行为，将NVMe固态作为存储盘。")]),v._v(" "),_("p",[v._v("二呢是提升系统可靠性，注意这里说的是可靠性，而不是备份。这是一个很大的误区，很多地方都说RAID是用来备份的，但事实上由于物理破坏导致冗余盘都挂了的概率还挺大的。为什么说他是用来提高可靠性，而不是用来备份的呢？是因为RAID的目的，是为了在系统运行中某一块盘坏掉的时候，另一块盘能立刻顶上，让服务快速恢复。说白了这个东西的用途是用来提用7*24服务的，你一个个人用途的NAS，要24小时不间断服务干嘛呢？挂了就挂了呗。实际上你NAS硬盘在他运行过程中出问题的概率，比你某天不小心把水撒上面，或者搬运过程中由于震动导致所有硬盘都损坏的概率，小多了。")]),v._v(" "),_("p",[v._v("当然也不是说RAID就完全不能起备份的作用，比如运行过程中由于电源质量等原因，损坏硬盘，第一块硬盘坏了之后整个机器就停了；再比如运行中突然断电导致某块硬盘的损坏，的确存在这些可能。但我仍认为一堆盘一起挂的概率远大于坏的盘恰好满足能通过RAID恢复数据的条件的概率。")]),v._v(" "),_("p",[v._v("总之我觉得，要提速，就去上NVMe固态；要数据安全，就上正经的备份手段，按321原则备份。")]),v._v(" "),_("blockquote",[_("p",[v._v("321备份原则：至少保留3个副本，存储在至少2个不同的介质上，至少有1个副本是异地备份。")])]),v._v(" "),_("h4",{attrs:{id:"机械怎么选"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#机械怎么选"}},[v._v("#")]),v._v(" 机械怎么选？")]),v._v(" "),_("p",[v._v("除了不必提的那些基本参数，还需要了解下磁记录方式，区分CMR和SMR，避雷叠瓦盘。具体请看下面科普：")]),v._v(" "),_("blockquote",[_("p",[v._v("【选购机械硬盘的大坑，不看你就上当，详解SMR瓦楞式堆叠硬盘】 https://www.bilibili.com/video/BV1rE411Q71m/?share_source=copy_web&vd_source=a3f867b43d32c007bbc9e1394816888f")])]),v._v(" "),_("p",[v._v("具体选购推荐看看b站up钱韦德的视频合集：机械硬盘选购和避坑")]),v._v(" "),_("blockquote",[_("p",[v._v("https://space.bilibili.com/20274090/channel/collectiondetail?sid=208558")]),v._v(" "),_("p",[v._v("最新的选购视频：【2024年618机械硬盘选购指南】 https://www.bilibili.com/video/BV1NE421F7bR/?share_source=copy_web&vd_source=a3f867b43d32c007bbc9e1394816888f")])]),v._v(" "),_("p",[v._v("机械硬盘的命名规则杂乱无章，型号名又长又乱，不易区分。选择时注意翻一翻商品详情，找到商家标注的型号比对一下；"),_("br"),v._v("且时效性很强，很可能当你看到这里时，视频里提到的型号都不存在了。选购的时候还是要多对比，找找有没有更便宜的同方案型号。")]),v._v(" "),_("h4",{attrs:{id:"使用nvme固态作为缓存盘时-无法被群晖识别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用nvme固态作为缓存盘时-无法被群晖识别"}},[v._v("#")]),v._v(" 使用NVMe固态作为缓存盘时，无法被群晖识别？")]),v._v(" "),_("p",[v._v("群晖系统提前设置了各个机型NVMe硬盘在机器中的PCI位置，然后直接写死进了操作系统，所以你自己主板上插盘的位置和你这个系统对应成品机器的位置不一样，就识别不了。把这个系统文件找出来，改一下这个位置之后，就能识别到了。")]),v._v(" "),_("p",[v._v("具体操作可参考：")]),v._v(" "),_("blockquote",[_("p",[v._v("【群晖918+ DSM7.X系统开启并使用NVME（M2）硬盘做缓存或存储硬盘教程】https://xywnas.com/?p=2567")])]),v._v(" "),_("h4",{attrs:{id:"在群晖上使用nvme固态作存储盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在群晖上使用nvme固态作存储盘"}},[v._v("#")]),v._v(" 在群晖上使用NVMe固态作存储盘")]),v._v(" "),_("p",[v._v("上面说不支持，只是群晖默认将NVMe固态视作缓存盘，在解决固态的识别问题后，进行一系列修改，NVMe固态也是能用于创建存储池的。具体操作上面那个链接里也有，不过我还没试过。")]),v._v(" "),_("h2",{attrs:{id:"图床"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图床"}},[v._v("#")]),v._v(" 图床")]),v._v(" "),_("h3",{attrs:{id:"图床的选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图床的选择"}},[v._v("#")]),v._v(" 图床的选择")]),v._v(" "),_("p",[v._v("这一需求是我折腾NAS的开始：")]),v._v(" "),_("p",[v._v("​\t平时写博客，需要一套用于管理+提供对外访问文章的工具，这个需求通过vuepress解决了，vuepress生成的静态站通过github pages部署，相比那些云服务，性能好又不要钱(那些入门云主机的内存和带宽真的是感人，卡死了)。而且github有现成的DevOps工具链，只需要写个配置文件，每次写好了直接推送代码，github检测到push之后会自动在nodejs环境里执行构建，并把结果推送到用于展示github pages的分支上，很省事。")]),v._v(" "),_("p",[v._v("​\t唯一不足就是，github pages你要想部署，那么你的仓库必须得是公开的，这样别人就能看到我全部的提交记录，看到我每次写了什么，是怎么一步步写、改的，这让我很别扭。早期的github是支持按分支管理权限的，这样还能把主分支设置为private，然后用于github pages的分支设置为公共，但现在这项功能要收费了，买不起会员，只能作罢。但这也不算大问题，先凑活着用，后期准备把博客部署在这台NAS上。")]),v._v(" "),_("p",[v._v("​\t伴随着在线博客的共生问题就是博客里怎么插入图片，现在普遍采用的Markdown不像微软的Word，能把图片作为文档数据的一部分，md插图只能是图片链接，可以说本地链接，也可以是在线的网络图片。在每个文章的子目录或者什么位置伴随地塞一大堆图片，用本地相对链接肯定是不现实的，而且用vueprees的话，好像也不支持这么用，最后生成出来的静态页面里对图片的引用大概率就失效了。")]),v._v(" "),_("p",[v._v("​\t这样一来就只能用在线链接，需要一个在线的Web服务托管文章中的所有图片，提供图片的上传、访问服务。图床按照提供服务的来源，可以分这几种：现成的图床厂商、在云平台自己搭、自己买实体服务器自己搭。")]),v._v(" "),_("ul",[_("li",[v._v("现成的厂商存在两个问题：1.不知道什么时候会跑路，他的服务哪天挂了我怎么办？经营多年的大厂突然不提供服务的又不是没有。2.一般有大小限制、数量限制、格式限制(不能GIF或者小视频)；")]),v._v(" "),_("li",[v._v("在云平台搭就是选择那些云厂商的对象存储，依旧毛病不少：1.烦人的内容审查、备案，不知道各位听没听说过tx云识别出来你某个图有问题把你整个桶删掉还让你写保证书的操作？且不说它们的算法误伤，假如我真的需要表达一些我认为没什么、政策上也没什么，而他就是认为敏感的东西呢？2.这些对象存储基本都是按量、调用计费的，我没有找到按使用时间计费的，我怕被人刷接口。")]),v._v(" "),_("li",[v._v("自己搞实体服务器：最喜欢的方式，百利而只有一害，除了多花几个钱买了台实体机以外，部署流程、使用体验是最丝滑的。给你带来的不只有图床，还能解锁一系列的NAS玩法。在这个过程中，你还能接触、了解一系列与计算机网络、Linux有关的知识。"),_("br"),v._v("最重要的是，它能让你把数据资产完整地牢牢握在手里，并且不用烦心与各种审查、备案。这是我选择组实体机部署服务，而不使用那些现成的软件、应用的核心原因。图床是这样、个人网站也是这样。")])]),v._v(" "),_("p",[v._v("确定了要在NAS上集成图床之后，就是考虑群晖上面有哪些可用的开源图床了。")]),v._v(" "),_("p",[v._v("很可惜的是，市面上没有任何一个满足我的需求（所以我准备以后有机会自己写一个）：1.操作极其简单，不要弄哪些乱七八糟的额外功能，就是图片上传、管理、访问。2.最好支持多设备、平台，支持各种快捷键、截图上传。3.以目录的方式管理、存储图片。这是最核心的！为什么说这是最核心的，因为：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("对于很多场景，你没办法在图床跟相册之间划出明显界限，当你某一类图片积攒到一定程度时，你发现这些图片你自己也要在本地存一份，要作为照片保存在相册。如果图床图片是按照文件系统的树形目录形式分类保存的，那你就能直接复制粘贴然后筛选了。")]),v._v(" "),_("p",[v._v("而现在所有的图床，要么就是把照片全混在一起；要么就是弄一个该死的逻辑相册，在数据库里保存每张图归属的相册；要么就是按照年月日创建文件夹保存。")])]),v._v(" "),_("li",[_("p",[v._v("很多时候你需要分类管理各种图片。比如你想看看某一类别上传了哪些图片，由于某种问题你某些图片丢失了，需要按照类比缩小检查的范围看看哪些图片丢失了。")])]),v._v(" "),_("li",[_("p",[v._v("迁移，还是第一点提到的，我不见得永远使用某一款图床产品，我总有需要迁出，或者归档保存的时候，这也是为什么即便标签是一种更好的归类方式，但像照片这类与存储强相关的场景，他的分类、存储方式依旧最好与文件系统的目录结构保持一致。而总有些讨厌的图床做成逻辑相册，不光让你绑死在这个图床上，还要绑死到他用的数据库上。迁移只能平行迁移到另一设备的该图床系统就算了，还得跟着迁移数据库。不光让你丧失了对你自己数据的掌握，还搞的十分的麻烦。")])])]),v._v(" "),_("p",[v._v("所以总结一下，我心目中最理想的图床管理照片的方式就是：")]),v._v(" "),_("ul",[_("li",[v._v("上传的图片按照相册保存，相册与文件系统的目录结构完美对应（直接用目录就完事儿了）。")]),v._v(" "),_("li",[v._v("图片不方便加标签，那就给相册加标签，但不通过数据库实现，而是在每个目录下存放一个json文件记录标签。")]),v._v(" "),_("li",[v._v("能设置额外的数据源，通过指定路径，将任意文件夹作为图床数据的存放位置，从而使图床可以在任意时间节点，直接使用某个目录先的图片数据、在某个指定目录存放时距。")])]),v._v(" "),_("p",[v._v("既然没有一个图床符合我的需求，那么我就只能退而求其次，牺牲除基本功能以外的全部功能，换取一个极其简单的使用、维护逻辑：只提供图片的上传、访问，其他的能砍多少砍多少，并且我也不关心图片上怎么存储的，以此保证我能以最简单最快的方式部署、备份、设备间迁移、使用。")]),v._v(" "),_("p",[v._v("按照这个标准考察市面上的图床：")]),v._v(" "),_("ul",[_("li",[v._v("兰空：不考虑，在我的需求下，它就是整了一大堆华丽花哨的复杂功能，有用的功能一个没有的典型。用逻辑相册、用数据库、不支持GIF，还搞出了一堆角色/用户的权限控制，你就一图床整这么多花里胡哨用不上的功能。")]),v._v(" "),_("li",[v._v("PicGo，足够简单、方便，但在群晖上安装非常麻烦，尝试配了两次，每次卡在不通的地方上，走不通，放弃。")]),v._v(" "),_("li",[v._v("chevereto、轻快图床、各种在PicGo基础上的二开：都是和兰空一样的问题，华丽花哨的一大堆，有用的没几个。")])]),v._v(" "),_("p",[v._v("最终在我尝试过后，选择了easyimage，完美符合我的需求：")]),v._v(" "),_("ul",[_("li",[v._v("满足了最基本的功能之外多余的功能一个没有；支持多用户；部署简单，群晖上5-10分钟就完事儿了。")]),v._v(" "),_("li",[v._v("还有一个很加分的地方是，它虽然也没做出我预期的存储方式，但它的照片是按照用户➡️年月日存储的，并且生成的访问图片的链接也是按照user/year/month/day/的路径格式，这很有利于我的迁出。以后我如果自己写一个图床，把之前的easyimage里的图片可以很容易的迁入且不影响之前文章中图片的访问——自己实现图床时，按我前面预想的图片组织方式的基础上，额外开一个按时间存储的相册&目录，作为不将图片上传到任何相册的默认行为，依旧按照用户、年月日管理，这样就能直接把图片复制粘贴过来，按照原链接里的相对路径依然能访问。")])]),v._v(" "),_("h3",{attrs:{id:"在群晖中部署easyimage"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在群晖中部署easyimage"}},[v._v("#")]),v._v(" 在群晖中部署easyimage")]),v._v(" "),_("p",[v._v("Step1：docker目录下创建名为easyimage的目录，以及其子目录web和config。")]),v._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/rd19xq.png",alt:"image"}}),v._v(" "),_("p",[v._v("Step2：在群晖的容器管理器套件的注册表里搜索并下载"),_("code",[v._v("ddsderek/easyimage")]),v._v("，然后安装，安装时设置将config路径映射到/app/web/config、web映射到/app/web/i，其他项看着填。")]),v._v(" "),_("img",{staticStyle:{zoom:"35%"},attrs:{src:"https://img.wml107.top/i/2024/07/23/s47mgt.png",alt:"image"}}),v._v(" "),_("p",[v._v("Step3：运行映像，至此大功告成。在对应端口访问，跟随指引完成easyimage的一些初始设置即可使用。")]),v._v(" "),_("h2",{attrs:{id:"相册"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相册"}},[v._v("#")]),v._v(" 相册")]),v._v(" "),_("h3",{attrs:{id:"群晖自带相册-photos、moments、photo-station"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群晖自带相册-photos、moments、photo-station"}},[v._v("#")]),v._v(" 群晖自带相册：Photos、Moments、Photo Station")]),v._v(" "),_("p",[v._v("Photo Station和Moments是群晖6.x版本的相册，现在的7.x版本已经没有了，取而代之的是Synology Photos，新版的相册合并了之前各照片管理应用的特性。")]),v._v(" "),_("p",[v._v("它们的区别可参照官方文档：https://kb.synology.cn/zh-cn/DSM/tutorial/What_are_the_differences_between_Photos_Photo_Station_Moments")]),v._v(" "),_("h4",{attrs:{id:"按文件夹组织相册"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#按文件夹组织相册"}},[v._v("#")]),v._v(" 按文件夹组织相册")]),v._v(" "),_("p",[v._v("群晖的这个相册，和我讨厌的那些图床一样，也是逻辑相册。你直接上传的图片，他按照时间线归类；你按照相册上传的照片视频，他依旧是按照年月是保存在文件系统中的，这非常不利于你图片的整理、迁移。")]),v._v(" "),_("p",[v._v("所以我没有使用群晖的逻辑相册，而是以直接以文件夹的方式浏览照片，这个切换的入口比较隐蔽，移动端和Web端分别在下图位置。")]),v._v(" "),_("p",[v._v("将浏览方式切换为文件夹后，就可以创建文件夹，以文件夹为相册上传管理图片了。不同于手机相册，群晖的文件夹可以无限嵌套。")]),v._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://img.wml107.top/i/2024/07/25/stwacc.png",loading:"lazy"}})]),v._v(" "),_("p",[v._v("群晖Photos应用的移动端界面风格和操作逻辑基本和IOS的相册是一样的。")]),v._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://img.wml107.top/i/2024/07/25/sroiqd.png",loading:"lazy"}})]),v._v(" "),_("p",[v._v("除了这两个地方，在群晖管理界面的文件管理器中，也可以直接通过管理文件管理相册。")]),v._v(" "),_("h4",{attrs:{id:"视频有时没缩略图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#视频有时没缩略图"}},[v._v("#")]),v._v(" 视频有时没缩略图")]),v._v(" "),_("p",[v._v("我暂时没遇到这个问题，可参考：https://wiki.slarker.me/synology/photos.html")]),v._v(" "),_("h3",{attrs:{id:"其他相册方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他相册方案"}},[v._v("#")]),v._v(" 其他相册方案")]),v._v(" "),_("p",[v._v("除了群晖自带的，还有一些其他可用的相册，比较普遍、完成度高的是immich和MT-photos，前者是一个开源相册应用，目前社区活跃度很高，更新很频繁；后者是一家国内公司开发的付费相册，99元终身。")]),v._v(" "),_("p",[v._v("但这些相册我看了看，虽说本身做的也很不错，但相比群晖自带的这个而言，并没有什么过人之处。我没有发现有什么群晖没有但他们有的一些比较特别的功能，找不到用他们的理由，于是就一直在用群晖。")]),v._v(" "),_("h2",{attrs:{id:"影音中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#影音中心"}},[v._v("#")]),v._v(" 影音中心")]),v._v(" "),_("h2",{attrs:{id:"文件管理-私有云"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件管理-私有云"}},[v._v("#")]),v._v(" 文件管理/私有云")]),v._v(" "),_("h2",{attrs:{id:"权限控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[v._v("#")]),v._v(" 权限控制")]),v._v(" "),_("h2",{attrs:{id:"备份-迁出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备份-迁出"}},[v._v("#")]),v._v(" 备份&迁出")]),v._v(" "),_("h2",{attrs:{id:"游戏服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#游戏服务器"}},[v._v("#")]),v._v(" 游戏服务器")]),v._v(" "),_("h2",{attrs:{id:"web应用服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web应用服务器"}},[v._v("#")]),v._v(" Web应用服务器")]),v._v(" "),_("h2",{attrs:{id:"下载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[v._v("#")]),v._v(" 下载")]),v._v(" "),_("h2",{attrs:{id:"套件中心与docker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#套件中心与docker"}},[v._v("#")]),v._v(" 套件中心与Docker")])])}),[],!1,null,null,null);_.default=s.exports}}]);