<template lang="pug">
  div(class="sponsor_page")
    p(class="sponsor_title") 成大單車節贊助商
    router-link(v-show="mode === 0" tag="button" to="/" class="sponsor_exit_button")
    button(v-show="mode === 1" class="sponsor_return_button" v-on:click="mode = 0; currentIndex = -1;")
    div(class="sponsor_layout_1" v-show="mode === 0")
      section(class="sponsor_list")
        label(v-for="(iter, index) of sponsor" v-bind:key="iter.name" v-bind:href="`${iter.link}`" target="_blank" v-bind:data-name="iter.name" v-bind:style="{'background-image': 'url(' + `/static/sponsor_${index + 1}.jpg` + ')'}" v-on:click="currentIndex = index; mode = 1;")
    div(class="sponsor_layout_2" v-if="mode === 1")
      section(class="sponsor_info")
        p {{sponsor[currentIndex].name}}
        label(v-bind:style="{'background-image': 'url(' + `/static/sponsor_${currentIndex + 1}.jpg` + ')'}" v-on:click="openTab(currentIndex)")
      section(class="sponsor_content")
        article(v-html="sponsor[currentIndex].content")
        p NCKU BIKE FESTIVAL

</template>

<script>
export default {
  data: function () {
    return {
      currentIndex: -1,
      mode: 0,
      sponsor: [
        {
          name: '逐鹿',
          link: 'https://www.mydeer.com.tw/',
          content: `<p align="center"><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;"><span style="font-size: x-large;">逐鹿</span></span></span></span></p>
<p><a name="_GoBack"></a> <span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">逐鹿炭火燒肉，以逐鹿中原為故事背景的燒店，在逐鹿不僅可以大口吃肉，大碗飲酒，盡嘗人間美酒佳餚，更希望帶給客人美好的邂逅。</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">除此之外，更標榜最鮮食材，未出面，就令人垂涎三尺長，不怕客人能吃，就怕你吃著會吟詩，</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">說到燒肉，不但牛肉、豬肉、雞肉、羊肉一應俱全，每種肉更是有各自的分類，除了燒肉之外，其他的食材當然也不能少，不僅有魚、蝦等各式海鮮，還有能幫助消化多樣的蔬菜。在享用美食的同時還能配上可口的飲料，燒肉吃飽之後，知名品牌的冰淇淋更能再次引發食慾，讓所有客人帶著滿足的心情結束一餐。</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">「飲酒吟詩，大口吃肉，大碗飲酒，知心齊家，人生大塊也！」</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">官網</span></span></span><span style="font-family: 標楷體, serif;">:</span> <span style="color: #0563c1;"><u><a href="https://www.mydeer.com.tw/"><span style="font-family: 標楷體, serif;">https://www.mydeer.com.tw/</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">粉專</span></span></span><span style="font-family: 標楷體, serif;">:</span> <span style="color: #0563c1;"><u><a href="https://www.facebook.com/pg/mydeerTN/about/?ref=page_internal"><span style="font-family: 標楷體, serif;">https://www.facebook.com/pg/mydeerTN/about/?ref=page_internal</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 標楷體;">地址</span></span></span><span style="font-family: 標楷體, serif;">:</span> <span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #1d2129;"><span style="font-family: 標楷體;"><span style="font-size: medium;">台南市中西區環河街</span></span></span><span style="font-family: 標楷體, serif;"><span style="font-size: medium;">92</span></span><span style="font-family: 標楷體;"><span style="font-size: medium;">號</span></span></span></span></p>`
        },
        {
          name: '果然是你',
          link: 'https://www.facebook.com/especiallyncku/',
          content: `<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: large;"><strong>果然是你</strong></span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">位於成大附近大學路</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">18</span></span></span><span style="font-family: 微軟正黑體;"><span style="font-size: small;">巷中，不管走路或是騎車前來都十分方便。店面以鮮豔明亮的黃色為基底，招牌上面寫著大大的</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">ESPECIALLY FOR YOU</span></span></span><span style="font-family: 微軟正黑體;"><span style="font-size: small;">，給人一種活潑輕鬆的感覺。店內空間寬敞舒適、提供平價、創意的餐點，是一家很適合學生群以及小資族的餐廳。</span></span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">｜主打鍋物以及特色飲品｜</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">果然鍋物除了湯底上的選擇外，還可以單點鍋料，每一口都能吃出店長對新鮮食材的講求。其它主食類還有炒飯、丼飯與定食，單點點心有炸物、滷味及照燒單點，是學生想吃正餐跟點心的最佳選擇。</span></span></span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">飲料品項更是豐富，有果然是茶、果然多多、果然流奶、果然驚奇、果然冰沙、果然鮮凍共</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">6</span></span></span><span style="font-family: 微軟正黑體;"><span style="font-size: small;">類。其中「果然驚奇」一類除了為取名特殊外，天然的顏色，豐富的口感更是讓許多顧客印象深刻、回味無窮。想知道「少女的初夏」看起來、喝起來如何嗎</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">? </span></span></span><span style="font-family: 微軟正黑體;"><span style="font-size: small;">想知道「抱爆」是什麼獨家美味的特殊配料嗎</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">? </span></span></span><span style="font-family: 微軟正黑體;"><span style="font-size: small;">快跟朋友、情人一起來果然是你一探究竟吧</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">!</span></span></span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">粉專連結</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">:</span></span></span></span></span></p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #222222;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">https://www.facebook.com/especiallyncku/</span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">店面住址 </span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">: </span></span></span></span></span></p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #222222;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">701 </span></span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">台南市東區大學路</span></span></span></span><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">18</span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">巷</span></span></span></span><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">19</span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">號</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">與我們聯繫 </span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">: 06-2086366</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #222222;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">營業時段：上午</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">9:00 - </span></span></span><span style="font-family: 微軟正黑體;"><span style="font-size: small;">下午</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">10:00</span></span></span></span></span></p>
<p>&nbsp;</p>`
        },
        {
          name: '手目耳眼鏡',
          link: 'https://www.facebook.com/seemore.tw/',
          content: `<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;"><strong>手目耳眼鏡</strong></span></span></span><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">以新型態旅行式配鏡，價格透明化，獨創五感配鏡，顛覆你對&nbsp;</span></span></span></span></span><span style="font-family: 新細明體, serif;"><span style="color: #666666;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">"</span></span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">配鏡</span></span></span></span><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">"&nbsp;</span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">的刻版印象！</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">「手」</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">-</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">透過專業手感，讓我們清楚每隻眼鏡是否完美。</span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">「目」</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">-</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">我們在乎你的亮麗雙眸，是否可舒適地閱讀世界美景。</span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">「耳」</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">-</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">我們用耳聆聽你的聲音，並用心記住你的需求。&nbsp;</span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">將 手、目、耳 合起來，那就是&nbsp;</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">"</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">看見</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">"&nbsp;</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">。</span></span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">｜手目耳旅行式配鏡｜</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">「起程」 時，挑選眼鏡的期待。</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">「旅程」 中，感受手目耳式人味服務的體驗及互動式驗光。</span></span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">「歸程」 收穫一付專屬於自己的手目耳眼鏡與美好回憶。&nbsp;</span></span></span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">｜手目耳配鏡旅程｜</span></span></span></span></span></p>
<p><span style="color: #666666;">&oplus; <span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">透明價格</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">$1680&nbsp;<br />&oplus; </span></span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">手目耳</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">CSR</span></span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">企業社會責任：低收入戶配鏡免費</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;"><br />&oplus; </span></span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">大學生</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">X</span></span></span><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">青春限定</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">: </span></span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #666666;"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">兩人同行&nbsp;</span></span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;"><a href="https://www.facebook.com/hashtag/%E9%85%8D%E9%8F%A1?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARC8tdltGoIli6DjqPcDcuUAVCFj4j56o3zzF0WWHcDX-pAkcJxceuy_cQF9ZI7m22MgLsIjWpM2rGvRZC-rnJca71EsbtvRIdOzOQJeM4mgZkJShnzpkOqa0AhMy5wR4BVBZ9W7oKzYb50vW6oGRnHg8g8CeEhms8ktRTDX5oHVfrdHD1zcuuQNN4y2CjcZ17I4tzj-7KYJhWqGRA2BwUzALD1ECNauYZHrGBJvBEk0qhvlKQPbyH8Kgw93g2rbkxtl7QtLzYX1HV8h2dM4cw3TQt0-j111JAuG9mhwbc79tb8Rp9QG-FkqfSpgEuU4rg3wEyiE15OnkcFqjUX67OedBw&amp;__tn__=%2ANK-R">#</a></span></span></span><a href="https://www.facebook.com/hashtag/%E9%85%8D%E9%8F%A1?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARC8tdltGoIli6DjqPcDcuUAVCFj4j56o3zzF0WWHcDX-pAkcJxceuy_cQF9ZI7m22MgLsIjWpM2rGvRZC-rnJca71EsbtvRIdOzOQJeM4mgZkJShnzpkOqa0AhMy5wR4BVBZ9W7oKzYb50vW6oGRnHg8g8CeEhms8ktRTDX5oHVfrdHD1zcuuQNN4y2CjcZ17I4tzj-7KYJhWqGRA2BwUzALD1ECNauYZHrGBJvBEk0qhvlKQPbyH8Kgw93g2rbkxtl7QtLzYX1HV8h2dM4cw3TQt0-j111JAuG9mhwbc79tb8Rp9QG-FkqfSpgEuU4rg3wEyiE15OnkcFqjUX67OedBw&amp;__tn__=%2ANK-R"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">配鏡</span></span></span></a><span style="font-family: 微軟正黑體;"><span style="font-size: small;">&nbsp;第</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">2</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">付鏡框</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">+</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">鏡片</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">Free<br /></span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">豐富多樣&nbsp;</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;"><a href="https://www.facebook.com/hashtag/%E6%8B%8B%E6%A3%84%E5%BC%8F?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARC8tdltGoIli6DjqPcDcuUAVCFj4j56o3zzF0WWHcDX-pAkcJxceuy_cQF9ZI7m22MgLsIjWpM2rGvRZC-rnJca71EsbtvRIdOzOQJeM4mgZkJShnzpkOqa0AhMy5wR4BVBZ9W7oKzYb50vW6oGRnHg8g8CeEhms8ktRTDX5oHVfrdHD1zcuuQNN4y2CjcZ17I4tzj-7KYJhWqGRA2BwUzALD1ECNauYZHrGBJvBEk0qhvlKQPbyH8Kgw93g2rbkxtl7QtLzYX1HV8h2dM4cw3TQt0-j111JAuG9mhwbc79tb8Rp9QG-FkqfSpgEuU4rg3wEyiE15OnkcFqjUX67OedBw&amp;__tn__=%2ANK-R">#</a></span></span></span><a href="https://www.facebook.com/hashtag/%E6%8B%8B%E6%A3%84%E5%BC%8F?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARC8tdltGoIli6DjqPcDcuUAVCFj4j56o3zzF0WWHcDX-pAkcJxceuy_cQF9ZI7m22MgLsIjWpM2rGvRZC-rnJca71EsbtvRIdOzOQJeM4mgZkJShnzpkOqa0AhMy5wR4BVBZ9W7oKzYb50vW6oGRnHg8g8CeEhms8ktRTDX5oHVfrdHD1zcuuQNN4y2CjcZ17I4tzj-7KYJhWqGRA2BwUzALD1ECNauYZHrGBJvBEk0qhvlKQPbyH8Kgw93g2rbkxtl7QtLzYX1HV8h2dM4cw3TQt0-j111JAuG9mhwbc79tb8Rp9QG-FkqfSpgEuU4rg3wEyiE15OnkcFqjUX67OedBw&amp;__tn__=%2ANK-R"><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">拋棄式</span></span></span></a><span style="font-family: 微軟正黑體;"><span style="font-size: small;">&nbsp;第</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">2</span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">盒</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">Free<br />&oplus; </span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">一付好眼鏡 </span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">/ </span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">一杯好咖啡 </span></span></span><span style="font-family: 新細明體, serif;"><span style="font-family: 微軟正黑體, serif;"><span style="font-size: small;">/ </span></span></span><span lang="zh-TW"><span style="font-family: 微軟正黑體;"><span style="font-size: small;">源自手目耳</span></span></span></span></p>`
        },
        {
          name: '堯平',
          link: 'https://www.yaopingbrownie.com/',
          content: `<p><span style="font-family: 新細明體;"><span lang="zh-TW">堯平</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #333333;"><span style="font-family: Arial, serif;">Brownie Only , Only Brownie .&nbsp;</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #333333;">布朗尼專賣 </span></span><span style="font-family: 新細明體, serif;"><span style="font-family: Arial, serif;">, </span></span><span lang="zh-TW">專賣布朗尼</span></span></p>
<p><br /><br /></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #333333;">由兩個人共同創立，堯</span><span style="color: #333333;"><strong>、</strong></span><span style="color: #333333;">平。</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #333333;">選擇各自名字中的一個字組合成為品牌，表示對自己的負責，自己未來生活的努力開始</span><span style="color: #393e48;">。</span><span style="color: #333333;">希望透過品牌「堯平」的經營，能夠自然直接呈現我們人的樣貌。</span></span></span></p>
<p><br /><br /></p>
<p><a name="_GoBack"></a> <span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #333333;">隱藏於巷弄間，口感綿密、濃郁可口且甜而不膩的平價小確幸甜點！ </span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #333333;">堯平布朗尼的三種吃法：</span></span></span></p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #333333;">1.</span><span style="font-family: 新細明體;"><span lang="zh-TW">懶人吃法：</span></span></span></p>
<p><span style="color: #333333;"> <span style="font-family: 新細明體;"><span lang="zh-TW">如果你很趕，冷藏取出直接放入嘴中，就可以邊奔跑邊享受口感紮實的布朗尼。</span></span></span></p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #333333;">2.</span><span style="font-family: 新細明體;"><span lang="zh-TW">常人吃法；</span></span></span></p>
<p><span style="color: #333333;"> <span style="font-family: 新細明體;"><span lang="zh-TW">讓布朗尼在室溫伸展休息</span></span><span style="font-family: 新細明體, serif;">5</span><span style="font-family: 新細明體;"><span lang="zh-TW">分鐘，你可以先去洗個手，口感綿密的布朗尼正等著你。</span></span></span></p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #333333;">3.</span><span style="font-family: 新細明體;"><span lang="zh-TW">達人吃法：</span></span></span></p>
<p><span style="color: #333333;"> <span style="font-family: 新細明體;"><span lang="zh-TW">弄個烤箱，讓布朗尼進去</span></span><span style="font-family: 新細明體, serif;">(170</span><span style="font-family: 新細明體;"><span lang="zh-TW">度</span></span><span style="font-family: 新細明體, serif;">/3</span><span style="font-family: 新細明體;"><span lang="zh-TW">分鐘</span></span><span style="font-family: 新細明體, serif;">)</span><span style="font-family: 新細明體;"><span lang="zh-TW">熱情一下，你就可以跟布朗尼一起融化了。</span></span></span></p>
<p><br /><br /></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #333333;">店面地址：</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #393e48;">一店（試吃分享、外帶）：台南市中西區開山路</span></span><span style="font-family: 新細明體, serif;"><span style="font-family: Arial, serif;">122</span></span><span lang="zh-TW">巷</span><span style="font-family: 新細明體, serif;"><span style="font-family: Arial, serif;">10</span></span><span lang="zh-TW">號</span><span style="font-family: 新細明體, serif;"><span style="font-family: Arial, serif;">1</span></span><span lang="zh-TW">樓之</span><span style="font-family: 新細明體, serif;"><span style="font-family: Arial, serif;">2</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #393e48;">二店（</span><span style="color: #393e48;">內用餐點、展覽</span><span style="color: #393e48;">）：</span><span style="color: #393e48;">台南市北區自強街</span></span></span><span style="font-family: 新細明體, serif;"><span style="color: #393e48;"><span style="font-family: Arial, serif;">117</span></span><span style="font-family: 新細明體;"><span lang="zh-TW">號</span></span></span></p>
<p><br /><br /></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #393e48;">網址：</span></span></span></p>
<p><span style="font-family: 新細明體, serif;"><span style="color: #0000ff;"><u><a href="https://www.yaopingbrownie.com/">https://www.yaopingbrownie.com/</a></u></span></span></p>`
        },
        {
          name: '晶碩光學',
          link: 'https://tw.pegavision.com/',
          content: `<p><span style="font-family: 新細明體;"><span lang="zh-TW">晶碩光學</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">由</span></span><span style="font-family: 新細明體, serif;">3C</span><span style="font-family: 新細明體;"><span lang="zh-TW">電子產業跨足醫療器材，跨領域專業的結合，帶給消費者更安心的體驗。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">晶碩擁有優秀之設備開發設計團隊，自行開發新型自動化生產線，及生產流程。從開始原料投入到鏡片成品，完全自動化生產。核心製程擺脫傳統氣壓元件控制，採用伺服控制系統，生產穩定性高、品質優。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">為什麼要選擇晶碩？晶碩光學的六大品質保證：</span></span></p>
<p>&nbsp;</p>
<p>★<span style="font-family: 新細明體;"><span lang="zh-TW">均一價：全台直營門市價格統一，全年均一不二價，不用再四處比價擔心買貴。</span></span></p>
<p>★<span style="font-family: 新細明體;"><span lang="zh-TW">省更多：直接從晶碩廠房出貨到全台直營門市。省去中間經銷通路的費用，在售價上回饋給您。</span></span></p>
<p>★<span style="font-family: 新細明體;"><span lang="zh-TW">快時尚：每年少量多樣的推出各項彩片產品，加上各種創新及聯名商品，快速反映時尚流行趨勢。</span></span></p>
<p>★<span style="font-family: 新細明體;"><span lang="zh-TW">高品質：自動化生產及檢測流程，不只符合台灣</span></span><span style="font-family: 新細明體, serif;">GMP</span><span style="font-family: 新細明體;"><span lang="zh-TW">及</span></span><span style="font-family: 新細明體, serif;">ISO</span><span style="font-family: 新細明體;"><span lang="zh-TW">檢驗，更通過日本</span></span><span style="font-family: 新細明體, serif;">PMDA</span><span style="font-family: 新細明體;"><span lang="zh-TW">，美國</span></span><span style="font-family: 新細明體, serif;">FDA</span><span style="font-family: 新細明體;"><span lang="zh-TW">，以及歐盟</span></span><span style="font-family: 新細明體, serif;">CE</span><span style="font-family: 新細明體;"><span lang="zh-TW">安全標準。</span></span></p>
<p>★<span style="font-family: 新細明體;"><span lang="zh-TW">安心買：門市皆歡迎試戴，並提供不滿意退換貨服務及鑑賞期制度，讓您可以更放心找到適合自己的鏡片。</span></span></p>
<p>★<span style="font-family: 新細明體;"><span lang="zh-TW">晶友制：晶碩之友制度讓我們可以完整記錄您的消費經驗，對於您的回饋，品牌端可快速提供一對一的直接關懷。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #1d2129;"><span style="font-size: large;">晶碩光學除了擴及全台的實體店面，還有方便的</span></span></span><span style="font-family: 新細明體, serif;"><span style="font-size: large;">APP</span></span><span lang="zh-TW"><span style="font-size: large;">配送服務。近幾年，為服務其他購物習慣之消費者，在屈臣氏以及眼鏡行皆可買到晶碩產品。獨家創新晶友制度、統一價格及安心購買服務，讓愛用者兼顧自信與荷包。</span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #1d2129;"><span style="font-size: large;">在創新力、設計力、品質力、服務力等四個品牌力上，秉持著特有的堅持與態度，努力成為持續提供最佳解決方案的隱形眼鏡品牌。</span></span></span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #1d2129;"><span style="font-size: large;">晶碩光學，看見與眾不同。 </span></span></span></span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">【粉專】</span></span></p>
<p><span style="color: #0000ff;"><u><a href="https://www.facebook.com/pegavision/"><span style="font-family: 新細明體, serif;">https://www.facebook.com/pegavision/</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">【官網】</span></span></p>
<p><span style="color: #0000ff;"><u><a href="https://tw.pegavision.com/news"><span style="font-family: 新細明體, serif;">https://tw.pegavision.com/news</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">【直營門市產品資訊】</span></span></p>
<p><span style="color: #0000ff;"><u><a href="http://tw.pegavision.com/store"><span style="font-family: 新細明體, serif;">http://tw.pegavision.com/store</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">【屈臣氏開架產品資訊】</span></span></p>
<p><span style="color: #0000ff;"><u><a href="http://tw.pegavision.com/LimitedEdition/TravelLight/"><span style="font-family: 新細明體, serif;">http://tw.pegavision.com/LimitedEdition/TravelLight/</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">【眼鏡行產品資訊】</span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">美麗海洋系列 </span></span><span style="color: #0000ff;"><u><a href="http://collection.pegavision.com/murieleye.php"><span style="font-family: 新細明體, serif;">http://collection.pegavision.com/murieleye.php</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">香水系列 </span></span><span style="color: #0000ff;"><u><a href="http://tw.pegavision.com/KAORI/"><span style="font-family: 新細明體, serif;">http://tw.pegavision.com/KAORI/</span></a></u></span></p>`
        },
        {
          name: '南方家屋',
          link: 'https://www.booking-wise2.com.tw/talmud/hotel/reservation/index.php',
          content: `<p align="center"><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="font-size: x-large;">關於南方家屋</span></span></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">南方家屋，於民國</span></span>106<span style="font-family: 新細明體;"><span lang="zh-TW">年</span></span>7<span style="font-family: 新細明體;"><span lang="zh-TW">月成立，一間嶄新的旅店，卻也是一個蘊含</span></span>Old School<span style="font-family: 新細明體;"><span lang="zh-TW">的記憶歸宿。鐵窗花、古欄杆、水泥牆、舊紅磚優雅的譜出時間的記憶。如果妳想踏尋台南的美好回憶，歡迎踏入南方家屋的懷抱。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">因為是建築的旅行，因為食物的旅行，因為作息的旅行，因為是故事的旅行，傳統美好老派價值，古典優雅新演譯，造就了南方家屋的浪漫氣息。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">最為驚艷的是，與日光徐徐合作的早餐，有十五種餐點可以選擇。其中的府城什麼粥及府城擔擔麵是代表台南且不容錯過的當地美食。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">我們的</span></span>Old School <span style="font-family: 新細明體;"><span lang="zh-TW">專屬高級床墊，可促進血液循環，兼具減壓功效，超過台灣</span></span>90%<span style="font-family: 新細明體;"><span lang="zh-TW">床品品質，典雅床墊，讓您一天疲勞的身心舒展開來。</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #000000;">我們的</span></span><span style="font-family: 新細明體, serif;">E+1</span><span lang="zh-TW">服務，在給予客人更多的貼心的關懷的同時，更給予客人更多意想不到的服務與驚喜，解決客人的燃眉之急。&nbsp;</span></span></p>
<p>&nbsp;</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW"><span style="color: #000000;">我們的網站</span></span><span style="font-family: 新細明體, serif;">: </span></span><span style="color: #0563c1;"><u><a href="https://www.booking-wise2.com.tw/talmud/hotel/reservation/index.php"><span style="font-family: 新細明體, serif;">https://www.booking-wise2.com.tw/talmud/hotel/reservation/index.php</span></a></u></span></p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">與我們聯繫</span></span>: 06-2096988</p>
<p><span style="font-family: 新細明體;"><span lang="zh-TW">店面地址</span></span>: <span style="font-family: 新細明體;"><span lang="zh-TW">台南市北區前鋒路</span></span>318<span style="font-family: 新細明體;"><span lang="zh-TW">號</span></span></p>`
        }
      ]
    }
  },
  methods: {
    openTab: function (index) {
      window.open(this.sponsor[index].link)
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes mouse {
    from {
      transform: translateX(2vw) translateY(2vw);
    }
    to {
      transform: translateX(0vw) translateY(0vw);
    }
  }
  /*
    mobile layout css
  */
  @media only screen and (max-width: 551px) {
    .sponsor_page {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      margin: 0;
      padding: 0;
      background: white;
      overflow-y: scroll;
    }

    .sponsor_title {
      position: absolute;
      z-index: 20;
      left: 10vw;
      top: 4vh;
      display: inline-block;
      text-align: center;
      color: #942323;
      font-size: 8vw;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 8vw;
    }

    .sponsor_exit_button {
      position: absolute;
      right: 7vw;
      top: 7vw;

      width: 7.5vw;
      height: 7.5vw;
      background-color: transparent;
      background-image: url("../assets/exit.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;

      outline: none;
      border: none;
      filter: brightness(120%);

      cursor: pointer;

      transition: filter .3s ease;

      &:hover {
        filter: brightness(130%);
      }
      &:active {
        filter: brightness(80%);
      }
    }

    .sponsor_return_button {
      position: absolute;
      right: 7vw;
      top: 7vw;

      width: 7.5vw;
      height: 7.5vw;
      background-color: transparent;
      background-image: url("../assets/return.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;

      outline: none;
      border: none;
      filter: brightness(120%);

      cursor: pointer;

      transition: filter .3s ease;

      &:hover {
        filter: brightness(130%);
      }
      &:active {
        filter: brightness(80%);
      }
    }

    .sponsor_layout_1 {
      display: grid;
      grid-template-rows: 13vh 1fr;
      grid-template-areas: "top"
        "bottom";
      justify-content: center;
      align-content: center;
      align-items: center;

      background-color: #dad6b2;
      width: 100%;
      min-height: 100vh;
      overflow-y: scroll;
    }

    .sponsor_layout_2 {
      display: grid;
      grid-template-rows: 1fr 1.5fr;
      grid-template-areas: "top bottom";
      justify-content: center;
      align-content: center;
      align-items: center;

      background-color: #dad6b2;
      width: 100%;
      min-height: 100vh;
      overflow-y: scroll;
    }

    .sponsor_list {
      grid-area: bottom;

      display: grid;
      grid-template-rows: 60vw 60vw;
      grid-gap: 10vw;
      justify-content: center;

      width: 100vw;
      height: 85vh;
      overflow-y: scroll;

      label {
        width: 60vw;
        height: 60vw;
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;

        transition: .2s transform ease-in-out;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          &:before {
            position: absolute;
            display: block;
            content: '';
            width: 60vw;
            height: 60vw;
            background-color: rgba(0, 0, 0, 0.66);
            z-index: 20;
          }
          &:after {
            position: absolute;
            content: attr(data-name);
            color: white;
            margin-top: 30vw;
            margin-left: -30vw;
            width: 60vw;
            z-index: 21;
          }
        }
      }
    }
    .sponsor_info {
      display: none;
    }
    .sponsor_content {
      grid-area: bottom;

      display: grid;
      grid-template-rows: 1fr 70vh 1fr;
      grid-template-areas: "."
        "content"
        "ncku";
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;

      width: 100%;
      min-height: 100vh;
      height: 100%;

      p {
        grid-area: ncku;
        color: #942323;
        font-size: 3.6vw;
      }

      article {
        text-align: left;
        grid-area: content;

        width: 90%;
        height: 70vh;
        overflow: scroll;
      }
    }

  }

  /*
    computer layout css
  */
  @media only screen and (min-width: 552px) {
    .sponsor_page {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      background: white;
      overflow: hidden;
    }

    .sponsor_title {
      position: absolute;
      z-index: 20;
      left: 12vw;
      top: 12vh;
      display: inline-block;
      text-align: center;
      color: #942323;
      font-size: 2vw;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 2vw;
    }

    .sponsor_exit_button {
      position: absolute;
      right: 4.2vw;
      top: 3.7vw;

      width: 2.5vw;
      height: 2.5vw;
      background-color: transparent;
      background-image: url("../assets/exit.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;

      outline: none;
      border: none;
      filter: brightness(120%);

      cursor: pointer;

      transition: filter .3s ease;

      &:hover {
        filter: brightness(130%);
      }
      &:active {
        filter: brightness(80%);
      }
    }

    .sponsor_return_button {
      position: absolute;
      right: 4.2vw;
      top: 3.7vw;

      width: 2.5vw;
      height: 2.5vw;
      background-color: transparent;
      background-image: url("../assets/return.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;

      outline: none;
      border: none;

      cursor: pointer;

      transition: filter .3s ease;

      &:hover {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(80%);
      }
    }

    .sponsor_layout_1 {
      display: grid;
      grid-template-columns: 1fr 5fr 1fr;
      grid-template-rows: 1fr 1.8fr 0.8fr;
      grid-template-areas: ". . ."
        ". list ."
        ". . .";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100vw;
      height: 100vh;

      background-color: #dad6b2;
    }

    .sponsor_layout_2 {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-template-areas: "left right";
      width: 100vw;
      height: 100vh;
    }

    .sponsor_list {
      grid-area: list;

      display: grid;
      grid-template-columns: repeat(8, 7vw);
      grid-template-rows: repeat(3, 7vw);
      grid-gap: 3vw;

      width: 100%;
      label {
        width: 7vw;
        height: 7vw;
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;

        transition: .2s transform ease-in-out;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          &:before {
            position: absolute;
            display: block;
            content: '';
            width: 7vw;
            height: 7vw;
            background-color: rgba(0, 0, 0, 0.66);
            z-index: 20;
          }
          &:after {
            position: absolute;
            content: attr(data-name);
            color: white;
            margin-top: 3.5vw;
            margin-left: -3.5vw;
            width: 7vw;
            z-index: 21;
          }
        }
      }
    }

    .sponsor_info {
      grid-area: left;

      display: grid;
      grid-template-rows: 1fr 1fr 2fr 1fr;
      grid-template-areas: "."
        "title"
        "icon"
        ".";
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      background-color: #dad6b2;

      p {
        grid-area: title;
        color: #942323;
        font-size: 3.6vw;
      }

      label {
        grid-area: icon;

        width: 15vw;
        height: 15vw;
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;

        transition: .2s transform ease-in-out;

        &:hover {
          transform: scale(1.05);
        }

        &:after {
          position: absolute;
          display: inline-block;
          content: '';
          width: 3vw;
          height: 3vw;
          background-image: url("../assets/mouse.svg");
          background-position: 50% 50%;
          background-size: contain;

          margin-left: 7.5vw;
          margin-top: 15vw;
          animation: mouse .5s ease-in-out infinite alternate;
        }
      }
    }

    .sponsor_content {
      grid-area: right;

      display: grid;
      grid-template-rows: 5fr 1fr;
      grid-template-areas: "content"
        "ncku";
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      p {
        grid-area: ncku;
        color: #942323;
        font-size: 3.6vw;
      }

      article {
        text-align: left;
        grid-area: content;

        width: 90%;
      }
    }
  }
</style>
