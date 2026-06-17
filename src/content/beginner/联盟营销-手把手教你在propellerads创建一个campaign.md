---
pinned: false
title: 联盟营销：手把手教你在Propellerads创建一个Campaign
pubDate: 2026-06-17
author: AFF超人不会飞
---
我们知道联盟营销有很多流量源，push、pop、ppc、native等等，流量源质量参差不齐，好的流量源直接能让ROI为负数的Campaign直接盈利。今天我们来使用一个现在公认的质量相对较好的流量源：Propellerads，并从头开始建一个Campaign。

投放之前，我们要提前准备好的是offer、Landing page（直链的话不需要）和Tracking软件。Offer需要从你推广的联盟后台取，Landing page需要自己做。Tracking软件有很多付费的，像Maxconv,Bemob,binom等，都是当前主流的跟踪工具。我们以Maxconv为例，开始我们的操作。

我们首先在Maxconv里创建Traffic source，直接点击Create，



![](/images/1.png)

模版里已经集成好了常用流量源，我们直接选择Propellerads



![](/images/2.png)

其余内容直接默认，保存即可。



![](/images/3.png)

这样，我们的流量源就在Tracking软件里增加好了。



![](/images/4.png)

我们以CD联盟为例，取一下offer，例如我要推广它的smartlink



![](/images/5.png)



![](/images/6.png)

我们现在需要把offer添加到Maxconv里去，我们需要先新增Network,把Clickdeler添加进去。同样，Maxconv里Clickdeler也已经集成好了，我们只需要点击下一步并保存即可。



![](/images/7.png)



![](/images/8.png)

现在，我们需要把offer添加进去，点击新增offer



![](/images/9.png)

Affiliate Network里我们选Clickdealer。同时，在URL文本框里，添加我们的offer链接，并把s2的值替换成{mc_click_id}



![](/images/10.png)

由于我这里仅用于测试，所以我直接使用直链，暂不使用LP。

我开始建campaign，点击create。



![](/images/11.png)



![](/images/12.png)

其他的都默认，在Destinations里，把Landers关掉，下面直接选刚才添加的offer。



![](/images/13.png)



![](/images/14.png)

保存后，我们看到已经生成Campaign url了。由于我这里测试的是直链，等下后面的操作，直接把这个链接放到流量源里。

上述工作准备好后，我们就去Propellerads里，开始新建campaign。



![](/images/15.png)

点击Create campaign，我选择pop流量，并使用它的cpa goal 模式，这样系统会根据转化来进行自动优化。



![](/images/16.png)

把我们刚才建好的campaign url复制到Target URL里去，同时，为了减少垃圾流量，Traffic source里不要勾选Partner traffic。



![](/images/17.png)

国家这里选择你要推广的国家即可



![](/images/18.png)

剩下的Targeting里，支持OS、ISP、Browser、Device等，还是比较详细的，Proxy这里我们选择No Proxy，可以过滤掉一部分垃圾流量。



![](/images/19.png)

Zone这里，可以用来添加黑名单和白名单，需要跑一段时间后，优化的时候进行增删。



![](/images/20.png)

剩下我们保存即可。



![](/images/21.png)

由于是测试，这个直链很快就会被拒掉，因为Propeller ads不允许此类直链，需要自己加上LP。

Campaign完全建好了，那么我们还有一步操作，我们需要把转化回传到流量源，那么，需要在Tracking这里进行操作。这里默认的没有Maxconv，需要我们选择“other track or cpa network”，进行新建。



![](/images/22.png)

下一步会提示把propellerads的post back url复制并放置到你的tracker里去。



![](/images/23.png)

这个链接，我们复制好后。打开Maxconv，在刚刚新建好的流量源里，我看到刚才复制的post back url跟这里面默认的是一样的，说明Maxconv已经帮我们做好这一步了。我们就不需要重复做了，有转化的话，就会回传给Propellerads了。



![](/images/24.png)

当然，我们还有一步操作没有做，我们需要把Maxconv的post back url放到CD的offer里去。我们重新打开offer界面，复制右下角的Postback URL。



![](/images/25.png)

在offer详情页面，把Postback URL粘贴进去，保存。



![](/images/26.png)

这样就大功告成了。有转化的话，Maxconv和Propellerads里都会显示出来了，剩下的就是自己根据数据进行优化了。
