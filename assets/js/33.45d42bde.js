(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{405:function(v,_,e){"use strict";e.r(_);var s=e(0),i=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"实战经验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战经验"}},[v._v("#")]),v._v(" 实战经验")]),v._v(" "),_("p",[v._v("这里主要是记录前端方面，在实现各类需求时，一些经典问题的解决办法，以及遇到过的一些有价值的bug、踩过的一些坑，分享一下我使用这些技术的经验。")]),v._v(" "),_("h2",{attrs:{id:"前端通用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端通用"}},[v._v("#")]),v._v(" 前端通用")]),v._v(" "),_("h3",{attrs:{id:"如何设计接口节流-防止接口被重复请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何设计接口节流-防止接口被重复请求"}},[v._v("#")]),v._v(" 如何设计接口节流，防止接口被重复请求？")]),v._v(" "),_("p",[v._v("以最普遍的JS库Axios为例，通过对http方法进行封装，在拦截器上实现这件事。")]),v._v(" "),_("p",[v._v("最简单的就是直接在请求拦截器上设置一个计时器，时间走完清掉计时器，但只要时间没走完，计时器还在，就说明是重复请求，拒绝请求并返回错误。")]),v._v(" "),_("p",[v._v("可这样处理太粗糙了，存在一系列不合理之处：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("计时器的这个时间怎么定都不对，因为一个请求得到相应的时间时不确定的。比如你设置的delay时500ms，但因为某些意外，服务端那边的相应都是2s后的事儿了，然后你在1.6s内连点了三下，三下间隔都大于500ms，这显然都通过了校验，但制造了两个重复的无效请求。")]),v._v(" "),_("p",[v._v("所以对重复请求的拦截，是要看之前的请求什么时候得到了响应，而不是看延时。维护一个标志位，在请求拦截器中置为true，响应拦截器中置为false。收到请求时，在请求拦截器里判断，要是标志位为true说明还正在请求呢，拒绝到当前的重复请求。")])]),v._v(" "),_("li",[_("p",[v._v("同一时间会有很多不通的接口被调用，例如在页面刚加载时，这显然不算重复请求。")]),v._v(" "),_("p",[v._v("所以我们需要区分不通的请求，通过请求url+请求方法+请求参数，组成一个key从而唯一标识一个请求。")]),v._v(" "),_("p",[v._v("维护一个正在等待响应的请求列表，在请求拦截器中创建key并加入列表，在响应拦截器中删除key。每次请求时在请求拦截器中找，如果这个key已经存在，就说明是重复请求。")]),v._v(" "),_("p",[v._v("这个请求列表用一个字符串数组即可实现。")])]),v._v(" "),_("li",[_("p",[v._v("此时依旧存在问题，同样的接口、同样的请求内容，就不会被重复请求吗？显然，短时间内的不通页面，是有可能做出同样请求的（例如数据字典），这不算重复。")]),v._v(" "),_("p",[v._v("所以上面的key还要再加上当前的路由位置，相对路径或者hash都可以。")])]),v._v(" "),_("li",[_("p",[v._v("同一页面内依旧会有同样的请求，例如不通的组件初始化时，做出了同样的接口调用。")]),v._v(" "),_("p",[v._v("这种情形不该被拒绝，但像服务器发出重复请求也不好，将这一类相同请求合并，只请求一次，第一次请求时记录下来，短期内后面再有一样的请求，直接去找第一次请求的结果，就同时解决了这两个问题。这也是本问题的最优解。")]),v._v(" "),_("p",[v._v("这一方法还同时解决了，多个重复请求发生时，重复请求被拒绝且需要做额外异常处理的不足。这样的思路使得任何接口的调用都不会因过于频繁而被拒绝，任何接口的调用都能得到响应，且服务端没收到冗余的重复请求。")])])]),v._v(" "),_("p",[v._v("最佳实践：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("在请求拦截器中生成key，将key加入等待列表；在响应拦截器中移除key。")])]),v._v(" "),_("li",[_("p",[v._v("在请求拦截器中生成key之后，先去等待列表查找是否存在相同的正在等待的请求。如果存在，就将当前请求挂起，等之前的相同请求有结果了通知它，直接拿来用。这一设计的实现依赖两部分：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Axios中，对于请求拦截器，接收了两个方法，一个是用来处理拦截逻辑的方法，这个方法一般将方法参数config返回，然后执行真正的请求；第二个方法是拦截控制流到请求拦截器之前，请求所发生错误抛出的异常，这个方法通常返回一个已拒绝状态的Promise对象，此时请求就被彻底拦截，不会发出，这个已拒绝的Promise的结果内容会被作为请求的失败的结果，直接发送给响应拦截器，由响应拦截器中处理失败情形的函数处理。")]),v._v(" "),_("p",[v._v("但我们在请求拦截器的第一个处理拦截逻辑的方法中，也能直接通过Promise.reject()返回一个失败结果，起到相同的作用。")]),v._v(" "),_("p",[v._v("由此一来当识别到这个请求重复的时候，就能直接将这个请求挂起，把挂起结果直接以抛出错误的形式传递给响应拦截器的异常处理函数，在响应拦截器处理异常的函数里，通过标识识别出这种异常，最后通过return Promise.resolve(挂起处理结果)将请求结果以正常得到响应的形式，返回给调用处。")]),v._v(" "),_("p",[v._v("一句话就是：对于重复的请求挂起，等待处理结果，将得到的处理结果直接以异常的形式传递给响应拦截器，最后由响应拦截器将结果以成功状态的Promise对象返回。")])]),v._v(" "),_("li",[_("p",[v._v("发布订阅模式：这是解决将重复请求挂起并拿到其所等待的响应结果的核心。")]),v._v(" "),_("p",[v._v("发布订阅模式在处理当前问题时，可以通过一个简易对象实现：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("维护一个事件列表，列表是一个对象，事件就是这些请求，请求的key就是事件名，直接作为键插入对象。")])]),v._v(" "),_("li",[_("p",[v._v("拥有一个on方法，用于订阅一个事件，方法接受三个参数，事件名/请求key，事件/请求成功的处理方法——挂起时的resolve函数，事件/请求失败的处理方法——挂起时的reject函数。")]),v._v(" "),_("p",[v._v("一个事件可能被订阅多次，所以事件列表内的key对应的值是一个数组。")]),v._v(" "),_("p",[v._v("当on方法被调用时，先去看事件列表里有没有，有就直接在对应事件的数组下，添加这对成功与失败时的处理方法/回调；没有就是构建一个新数组。")])]),v._v(" "),_("li",[_("p",[v._v("拥有一个emit方法，用于发布一个事件，当某个事件/请求完成时，调用这个方法，方法会在事件列表里寻找有没有这一事件的订阅，要是有，就依次执行key对应数组中各元素的事件处理函数。")])])]),v._v(" "),_("p",[v._v("这样一来，对于重复的请求，该请求的结果，就可以通过await一个new Promise实现，Promise的内容就是对key的订阅，把Promise的resolve和reject方法传入订阅函数即可。这样一来挂起就实现了，因为请求的结果是await拿到的，所以不是异步Promise对象，而是结果本身，从而可以直接传递给响应拦截器，将请求结果返回。")])])])]),v._v(" "),_("li",[_("p",[v._v("在响应拦截器中，")]),v._v(" "),_("p",[v._v("对于因重复被挂起的请求，会直接请求错误进入异常处理函数，处理逻辑上面已经讲过；")]),v._v(" "),_("p",[v._v("对于非重复、发送给服务器的请求，则通过响应结果response的config拿到key，然后利用emit函数触发事件，并且在等待队列中删除这个key。")]),v._v(" "),_("p",[v._v("需要注意的是这类请求不管成功还是失败，都要做这个处理，请求失败也得把结果通知给那些正等待结果的重复请求、把该请求从等待中队列里清除掉。即这个逻辑要在响应拦截器处理成功情形与失败情形的两个函数里都写一遍。")])])]),v._v(" "),_("p",[v._v("总结——串一遍处理重复请求的流程：")]),v._v(" "),_("ol",[_("li",[v._v("重复请求在请求拦截器中通过key被识别出来→")]),v._v(" "),_("li",[v._v("然后通过await一个Promise、在Promise内订阅事件成功被挂起，在拦截器中的该位置将线程阻塞→")]),v._v(" "),_("li",[v._v("这一系列重复请求的第一个请求得到了响应，在响应拦截器内发布了该事件，于是该事件对应数组内的一系列重复请求拿到了处理结果，通过相应的resolve或reject结束了前面的那个挂起。")]),v._v(" "),_("li",[v._v("重复请求对应的请求拦截器此时拿到了处理结果，通过Promise.reject将处理结果作为拒绝原因返回。")]),v._v(" "),_("li",[v._v("由于请求拦截器返回了一个已拒绝的Promise，所以请求没有被执行/发送，拒绝的原因直接作为请求失败的结果。")]),v._v(" "),_("li",[v._v("响应拦截器拿到了请求失败的结果，将结果交给处理失败请求的函数，该函数识别出这是由于重复请求导致的失败，遂通过Promise.response()将结果以响应成功的形式返回。在外部接口调用处看来，和请求成功得到了服务端响应一样，一切处理都被封装在了Axios内。")])]),v._v(" "),_("p",[v._v("除此之外：有一种上面逻辑无法处理的边界情况——文件上传，因为文件上传的请求参数/内容是FormData类型的，JSON.stringfy只能拿到空对象，故而所有文件上传的key都是一样的。所以要单独通过判断请求数据类型，把文件上传请求抽出来，按照上面的思路单独作退化处理即可。")]),v._v(" "),_("h2",{attrs:{id:"微信小程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[v._v("#")]),v._v(" 微信小程序")]),v._v(" "),_("h3",{attrs:{id:"sticky定位的元素在页面滚动时-依旧跟随页面一起滚动-scroll-view导致sticky定位失效"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sticky定位的元素在页面滚动时-依旧跟随页面一起滚动-scroll-view导致sticky定位失效"}},[v._v("#")]),v._v(" sticky定位的元素在页面滚动时，依旧跟随页面一起滚动 | scroll-view导致sticky定位失效")]),v._v(" "),_("p",[v._v("这是由于小程序平台bug导致的，如果sticky定位的元素的父容器是scroll-view，以向上滚动吸顶为例，当滚动出去的距离超出自身高度之后，小程序的渲染机制就无法识别到该元素距离顶部的距离了，因此sticky失效，该元素没吸住。")]),v._v(" "),_("p",[v._v("解决办法就是在sticky定位的元素外面，即他与scroll-view元素之间，套一个普通的view，把滚动内容全部塞到这个view里就好了。")]),v._v(" "),_("p",[v._v("除此之外，纯css方面，sticky元素相对定位的父元素的overflow如果被设置为auto或者hidden，也会导致sticky定位无效，这一点和小程序无关。")])])}),[],!1,null,null,null);_.default=i.exports}}]);