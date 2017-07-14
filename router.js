router.get('/getMore', function(req, res) {
  var curIdx = req.query.index
  var len = req.query.length
  var data =[]
  for(var i=0;i<len;i++){
    data.push('内容'+(parseInt(curIdx)+i))
  }
 res.send(data)
})










// router.get('/getNews', function(req, res) {
//  var news=[
//      {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      },
//       {
//          link:'http://sports.qq.com/a/20170708/025575.htm',
//          img:'https://ooo.0o0.ooo/2017/07/08/5960deb85c155.jpg',
//          title:'曼联宣布签卢卡库达协议 曝转会费最高9000万镑',
//          brif:'英超豪门曼联在官方网站上宣布，同埃弗顿就卢卡库的转会达成了协议，接下来，只需球员达成个人协议并且体检'
//      }
//  ]
//  var pageIndex = req.query.page
//  var len = 3
//  var retNews = news.slice(pageIndex*len,pageIndex*len+len)
//  res.send({
//      status:0,
//      data:retNews
//  })  
// })


