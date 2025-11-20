<template>
  <div class="megumi-page" aria-live="polite">
    <main class="container" ref="mainContainer">
      <!-- HERO 区域 -->
      <header class="hero" role="banner">
        <div class="left-col">
          <button class="avatar-card">
            <picture class="avatar-wrap">
              <img
                src="@/assets/images1/slty (13).webp"
                class="avatar"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div class="avatar-meta">
              <span class="avatar-badge">共鸣能力：光耀灼痕</span>
            </div>
          </button>
        </div>
        <div class="right-col" ref="metaCard">
          <div class="hero-panel">
            <h1 class="name">
              赞妮 <span class="jp">（埃弗拉德金库防卫科雇员）</span>
            </h1>
            <p class="subtitle">白天是普通的上班族，夜晚则是维持正义的巡逻人</p>
            <p class="lead">
              最佳员工称号的常年保持者。
              她为自己的业余时间做了无数种计划和安排，但事到如今，还是先想办法准时下班吧。
            </p>
          </div>
        </div>
      </header>

      <!-- 内容卡片区 -->
      <section id="personality" class="card personality">
        <div class="card-head">
          <h2>核心机制</h2>
        </div>
        <ul class="traits">
          <li>
            【冗余动能】：血条最上方的特殊能量条，攒满可以施放强化E-A，获得buff【自身直接造成的【光噪效应】伤害加深20%】。
          </li>
          <li>【冗余动能】获取规则：常态A命中，变奏技能命中，E。</li>
          <li>
            【焰光】：普通状态下中间的特殊能量条，R状态下上方的特殊能量条。当能量充足大于30点时，可以施放重斩系列，该伤害是赞妮的主要伤害来源。当能量不足时，可以施放二段R。
          </li>
          <li>【焰光】获取规则：强化EA，【光噪效应】，一段R。</li>
          <li>
            共鸣技能：赞妮可以使用E来格挡敌人伤害，并且回击。记得衍生A来回复【冗余动能】。
          </li>
          <li style="font-weight: bold">输出流程：</li>
          <li>E-AA-变奏-E【危机处理预案】-R-AAA*n-R</li>
          <li>
            技能缩写：普攻 = A，重击 = Z，共鸣技能 = E，共鸣解放 = R，声骸 = Q
          </li>
        </ul>
      </section>

      <section id="resonance-status" class="card overview">
        <div class="card-head">
          <h2>共鸣状况</h2>
        </div>
        <div class="two-col">
          <div class="text-block">
            <p>
              赞妮共鸣史不详，能力开发度高、使用度高。
              该员工的声痕斜贯背部，共鸣后其体征出现明显变化，具体为头部生长出类似偶蹄类动物的角，以及由尾椎延伸而成的细长尾部。在使用共鸣能力时，该员工能够将自身产生的冗余动能暂时储存于体内，以强化自身的体能。此时她体内的冗余动能将会被转化为明亮的能量流，并从角、尾部及头发等部位溢出，且其上半身会浮
              出类似伤疤的发光纹路。该员工自述这些创伤早已愈合为肉眼难以分辨的浅痕，推定由于皮肤愈合后形成的薄弱结构，使得能量更易集中于创痕区域。
            </p>
          </div>
        </div>
      </section>

      <!-- 新增三大主题区域 -->
      <section id="food" class="card special-section">
        <div class="card-head">
          <h2>个人备忘录</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item1.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              赞妮随身携带的记事本，除了记录她平时的日程安排和重要事项外，还摘抄了许多她收集的生活小诀窍。
            </p>
            <p>
              例如偶然从论坛里看到的菜谱，从某本畅销书中发现的成功学指南，五分钟内修好故障洗衣机的教程……赞妮在备忘录中记录了许多乍看上去没什么用，其实也根本用不到的东西。
            </p>
            <p>
              对于赞妮而言，这些看似不起眼的小诀窍也是组成她珍贵日常的一部分，也许她总有一天会用到它们——说不定是今天下班之后，或者等到下一个遥遥无期的假期，又或者……
            </p>
          </div>
        </div>
      </section>
      <section id="shattered-crystal" class="card special-section">
        <div class="card-head">
          <h2>“时间管理大师”</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item2.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              赞妮随身携带的闹钟，虽然款式和外壳材质类似怀表，但比普通的怀表要大得多。它的铃声在每个工作日的清晨都会准时将赞妮唤醒，让她开始一天的工作。
            </p>
            <p>
              对于时刻都会和无可计数的财富与秘密打交道的莫塔里雇员而言，即使是再轻微的迟到或是延误都有可能造成预期之外的严重损失。因此，拥有良好的时间观念尤为重要。
            </p>
            <p>
              赞妮总是会将一天精确分割成许多恰到好处的部分，如同发条般在限期之内将所有事务精确地处理完毕。有些人将赞妮的时间管理能力视为一种天赋，但只有那些很早以前就和赞妮打过交道的老员工才知道，她为此到底付出过什么样的努力。
            </p>
          </div>
        </div>
      </section>

      <section id="cyclic-clock" class="card special-section">
        <div class="card-head">
          <h2>一份谢礼</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item3.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              对于赞妮而言，帮助别人只是顺手而为，并不是什么值得宣扬或夸耀的事。她曾渴望有人在自己陷入困境时伸出援手，而当自己获得足以阻止暴行的力量后，她成为了向别人伸出援手的那个人，仅此而已。她只是将此视为自己日常生活的一部分，她并不在乎感谢，更不在乎报酬。
            </p>
            <p>
              赞妮身上的某几处伤疤源自一起早已被拉古那人遗忘的绑架案。所幸，虽然经历了一番波折，她最终还是救下了那个被绑架的小女孩。而这就是她在女孩的父母赶到前，从她那里得到的“谢礼”。
            </p>
            <p>
              也许，被赞妮视为普通日常的行为，对其他人而言却是能够改变其命运的雪中送炭？赞妮似乎从没考虑过这个，即使如此，她还是将这个玩偶妥善地保留至今。
            </p>
          </div>
        </div>
      </section>

      <section id="collective-album" class="card special-section">
        <div class="card-head">
          <h2>什锦肉酱焗面</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/food.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              赞妮在肉酱烩面表面加入奶酪、香肠和香草等食材焗烤而成的面食。味道香醇浓郁。
            </p>
            <p>
              据赞妮所言，她最开始只是在加热因为忙于工作而冷掉的外卖时偶然加入了手边的即食材料，但味道意外地还不错。之后经过不断尝试，才形成了现在的固定配方。
            </p>
          </div>
        </div>
      </section>

      <section
        id="timeline"
        class="card timeline"
        aria-labelledby="timeline-heading"
      >
        <div class="card-head">
          <h2 id="timeline-heading">共鸣链详解</h2>
        </div>
        <div class="tl-wrap" role="list">
          <div class="vl" aria-hidden="true"></div>
          <ol class="tl-list">
            <li
              v-for="(ev, i) in timeline"
              :key="i"
              class="tl-item"
              role="listitem"
              tabindex="0"
              :aria-label="``"
            >
              <div class="tl-card">
                <h3 class="tl-title">第 {{ i + 1 }} 链 · {{ ev.title }}</h3>
                <p class="tl-desc">{{ ev.desc }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="ll-stories" ref="storyRef">
        <div class="card" role="region" aria-labelledby="stories-title">
          <header class="card-head">
            <h2 id="stories-title" class="card-title">赞妮纪事</h2>
          </header>

          <main class="card-body">
            <transition name="fade-slide" mode="out-in">
              <article
                :key="items[current].id"
                :id="`panel-${items[current].id}`"
                class="story"
                role="tabpanel"
                :aria-labelledby="`tab-${items[current].id}`"
              >
                <h3 class="story-head">{{ items[current].title }}</h3>
                <div
                  class="story-content"
                  v-html="items[current].content"
                ></div>
              </article>
            </transition>
          </main>

          <footer class="card-foot">
            <button class="nav-btn" @click="prev" aria-label="上一则故事">
              ‹
            </button>
            <div class="pager">{{ current + 1 }} / {{ items.length }}</div>
            <button class="nav-btn" @click="next" aria-label="下一则故事">
              ›
            </button>
          </footer>
        </div>
      </section>
    </main>
    <div class="floating-chibis">
      <img
        v-for="(pet, i) in chibiList"
        :key="i"
        :src="pet.src"
        :style="{ top: pet.top + 'px', left: pet.left + 'px' }"
        class="chibi-img"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const timeline = ref([
  {
    title: " 当清晨闹钟响起时",
    desc: `施放集中压制或破袭反击时，衍射伤害加成提升50%，持续14秒。
重斩·终夜免疫打断。`,
  },
  {
    title: "冷面包配饮料",
    desc: `暴击提升20%。
集中压制、破袭反击倍率提升80%。`,
  },
  {
    title: "日复一日的通勤",
    desc: `处于灼焰形态时每消耗1点【焰光】，使本次共鸣解放终绝将至之刻最后一段的倍率增加8%，最多增加1200%。`,
  },
  {
    title: "高效节能主义者",
    desc: `施放变奏技能即刻执行时，队伍中的角色攻击提升20%，持续30秒。`,
  },
  {
    title: "一切需求按时完成",
    desc: `共鸣解放重燃倍率提升120%。`,
  },
  {
    title: "当务之急？下班！",
    desc: `重斩·破晓、重斩·将明、重斩·终夜、重斩·闪裂倍率提升40%。重斩·终夜命中时消耗的每点【焰光】额外增加倍率提升40%。
处于灼焰形态时获得以下效果：
【焰光】低于70点时立即回复70点，灼焰形态期间可触发1次。
进入灼焰形态后8秒内受到致死伤害时不会倒下，最少保留1点生命值。`,
  },
]);

const reducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const items = [
  {
    id: "1",
    title: "“常客”",
    content: `
时间已过午夜，橱窗里的灯火已然熄灭，在白昼里无比热闹的拉古那城淹没在静谧而庄严的夜幕中。就连在钟塔之上守夜的章鱼先生似乎都早已沉入了梦境之中——如果声骸也会做梦的话。

今天应该不会再有客人来了。玛格烈特打了个哈欠，那就早点收拾完，然后回去休息吧。

“老样子，一杯蜜露，一碟脆薯角，麻烦多加点龙衔果酱，再多撒点胡椒。”

她听到背后传来一个熟悉的声音，那声音中满是无法掩藏的浓浓疲惫和倦意，就像是它主人的灵魂已经被英白拉多带往高天，只剩下毫无生气的躯壳还残留在尘世之中。要是换个对拉古那不那么熟悉的游客，恐怕会被这声音吓一跳吧。

“你已经好长时间没来了啾，赞妮小姐。”玛格烈特并没有转身，而是继续清理着炉膛里的披萨渣，“刚下班？最近很忙啾？”

“算是吧。你知道的，狂欢节将至，银行巴不得一个人当成三个人来用。”赞妮眼神木然地盯着柜台，就像那里有一摞新鲜出炉的报表，而不是新鲜出炉的披萨，“再说了，就算没有狂欢节，活儿也是永远都干不完的。”

对于莫塔里家族来说，狂欢节是一个机遇，也是一个挑战。赞妮想到阿尔伯特把那个委托交给她时所说的话。为了拉古那的未来，我们每个人都必须扮演好自己的角色。

赞妮觉得这就是在画大饼，银行给她发工资，她就为银行工作。她来这可不是为了当演员的。但她对那个委托——准确来说，对那个家族委托她保护的贵客还是挺有兴趣的。被扔进炸锅的薯角发出响亮的噼啪声，诱人的香气从柜台飘来。赞妮感觉到自己空荡荡的肚子在抗议。

所以明天早餐吃点什么好呢？今天早上吃的煎饼有点凉了，吃完胃略微有点痛。干脆明天吃麦片粥配烘蛋得了,对，还要往粥里加满满两大勺糖……

就在她胡思乱想的时候，一声微弱的破碎声打破了午夜的寂静。正在炸锅前忙活的玛格烈特并没有在意，或许整个陷入沉睡之中的拉古那都没有在意。但赞妮听到了。她抬起头，看到一个黑影从屋顶上疾驰而过，而赞妮所听到的，正是他不小心踢下来的瓦片坠地的声音。

被狂欢节吸引而来的，可不止是遵纪守法的游客而已。赞妮叹了口气，她掏出钱包，把里面的贝币放在桌子上。好吧，看来夜宵是吃不上了。

“你的薯角好了啾，赞妮小姐——”玛格烈特端着薯角转过身，却发现赞妮的座位早已空空如也。`,
  },
  {
    id: "2",
    title: "焰光之影",
    content: `
以下采访内容摘自先行快报专刊《夜幕中的守护者：是正义的化身，还是别有用心的危险人物？》

“就在我的尖叫声还卡在嗓子眼里的时候，那个人嗖的一下就从我脑袋上面飞过去了！他，不对，应该是她，实在跑得太快了，夜色又黑，我只看到她的脑袋上好像有什么东西……也许是样子很奇怪的发夹？或者被风吹起来的头发？我不知道那是什么……”

——塞布丽娜（女，36岁），已知目击者之一。

“诫令院的兄弟最终达成了共识，认为那个暴徒是‘义士’。我那时候就强烈反对他们的决议，现在亦然！那个暴徒要对数十起发生于拉古那的袭击事件负责——我当然知道她殴打的那些都是罪犯，但那些罪犯应该以英白拉多之名由诫令院逮捕，并在岁主面前接受公正而严明的审判，而不是被一个藏头露尾的家伙随意施以私刑。她的行为无疑是对岁主权柄的僭越和蔑视。听好了，在拉古那，只有岁主有权审判罪人！”

——不愿透露姓名的诫令院修士

“是的，我好几个邻居都见过这家伙，她最近越来越极端了。他们都叫她罪犯杀戮机……她从不杀人？我可不信。这家伙对付的可都是那些穷凶极恶的歹徒，我不觉得任何人在生死关头的关键时刻还能有意识地留手。除非她远比那些罪犯强得多，但这真的有可能吗？”

——埃尔·劳森（男，42岁），埃格拉小镇。臭名昭著的“布偶屠戮者”在试图对小镇中的布偶声骸进行袭击时被该神秘人物制止。由于埃格拉小镇的居民一直有着在天黑后待在家中的习俗，他们并没能见到她的真容。

“我一直在追踪那位岁主派来的复仇使者的踪迹。什么？我为什么会觉得她和岁主有关？你没听说过她身上那满溢而出，光耀夺目的惩戒之火吗？那正义而神圣的光焰定是出自岁主的恩赐。她所面对的邪恶越强，这光辉就越加炽烈。有些人指控她为恶魔？我认为这根本站不住脚……恶魔又怎么会行正义之事？”

——蕾娅（女，33岁），诫令院教士。她曾在多年前参与过与对该神秘人物相关的调查。

“我那天晚上加班到凌晨，路过诫令院门口的时候看到那个黑街的塔洛斯和其他人被绑在一起，好像都失去了意识。呃，虽然可能是错觉吧……我那天借着微弱的晨光，看到有个人蹲在诫令院对面的屋顶，但一转眼就不见了……我还记得她身上满是伤痕，像是经历了一场恶战。什么？你是说……塔洛斯和那些黑街的家伙都是她一个人解决掉的？”

——数年前的音频记录，记录中的讲述者不详。

 

由于大多数案件发生在数年前，如今收集到的目击报告大多都细节模糊且相互矛盾。唯一可以确定的是，在第二次黑潮和十年前的狂欢节事件对拉古那造成的一系列破坏后，拉古那曾在相当长的一段时间中陷入混乱。而那位神秘的义士正是在这期间出现，并在夜幕的掩护下惩戒罪恶。在那段疯狂而黑暗的日子里，许多因灾难而失去信仰的暴徒组成了帮派，将犯罪视为狂欢。直到这位神秘人物将他们逐一击败，并送进监狱，拉古那的秩序才得以恢复。

毋庸置疑的是，拉古那的人们很少主动提起这段让他们感到痛苦的岁月——他们认为，正如狂欢节的传统一般，英白拉多希望他们拥抱欢悦，而非沉溺于过去留下的伤痛中。对这位神秘人物——也就是坊间所称的「焰光的夜行者」的记录，也因此成为了模糊不清的传说。但在最近一次狂欢节前后，似乎又有人目击到了和传说中类似的人，出现在拉古那的街头。

对于拉古那而言，这究竟是另一场危机的先兆，还是某位狂热的粉丝在模仿过去的英雄？也许只有时间才能揭示这个问题的答案。 `,
  },

  {
    id: "3",
    title: "最佳员工",
    content: `
“是的，费加罗家族声称他们三天前就付清尾款了。他们找的那个‘德高望重’的担保人？那当然是早就人间蒸发了。现在他们靠那些站不住脚的所谓证据，一口咬定是银行的账目出现了问题。”赞妮耸耸肩，语气平静得像是在和花坛里的剑菖蒲闲聊，“是的，这明显是想黑我们一笔，打黎那汐塔人开始划着贡多拉捕鱼那年就有的老伎俩了……没关系，我去跟他们‘交涉’。好的，那就这样，再见。”

赞妮挂断通讯，抱着账本向着办公室外走去。她身后的工位上传来窃窃私语。倒不是有人怀疑她能不能搞定这事儿，大家都知道事情会怎么收场。这种小事当然不会登上报纸头版，最多也只是和一些失物招领或者广告之类的小豆腐块一起瑟缩在专栏下面不值一提的角落里。报上也绝不会提到赞妮和莫塔里家族，最多只是会提到几个不走运的费加罗成员莫名其妙地被钟楼上倒下来的脚手架砸得鼻青脸肿，又或者费加罗家主为他们忠实的合作伙伴——莫塔里家族慷慨解囊，赞助了一大笔资金用于发展艺术创作。

她是银行最优秀的员工吗？当然。

几乎每个月都会有几个新来的雇员感到好奇：赞妮总是天天加班到深夜，然后带着黑眼圈和一脸疲倦的表情来上班，甚至还同时负责最危险的外勤工作，但他们从来没听说过赞妮搞砸过什么任务。在那些前辈的描述中，赞妮简直无所不能。就算给赞妮一根煮到七成熟的面条让她把溯海之鲸钓上来，她也会在第二天上班时准时抱着鲸鱼出现在银行门口，就像那是她顺路买的披萨一样。

她到底是怎么做到的？没人知道。

因此，有些新人热衷于模仿赞妮的每一个举止和生活习惯，他们自认为从中找到了真相：赞妮总是不离手的能量饮料正是赞妮那无穷精力的源泉，就像某个老漫画里黎乔利水手吃的毒莴裙藻罐头一样。他们学着赞妮那样把能量饮料一饮而尽，满心期待着这能支撑他们像赞妮一样熬个通宵，做出惊世骇俗且名利双收的完美项目，但结局往往是他们第二天早上因为趴在桌子上睡了一宿而浑身酸痛，同时因为不在状态而被上司毫不留情地训斥一番。

她到底在想什么？没人知道。

一些老员工还依稀对刚入职时候的赞妮有点印象：一个沉默寡言的冷淡年轻人，有着和年龄相符的冒失，也缺乏经验，可能多少还有那么一点儿，只是一点儿暴力倾向。但她仅仅用了两个月就熟悉了银行的全套工作流程，又花了两个月，她的业务水平已经可以和最优秀的雇员相提并论。在工作三年后，最佳员工的奖章对她来说就只是发工资条的时候顺带附送的小玩意儿罢了。

但究竟是什么支撑她做到这一步呢？有些人觉得她热爱拉古那，将守护这座城市的命运视为自己的责任；有人觉得她有野心，想要获得莫塔里的姓氏，甚至觊觎未来的家主之位；也有人觉得只是莫塔里在表面给她开的工资之外，还额外付了一笔秘密的丰厚报酬，用利益来将她和莫塔里死死地绑在一起。

但如果真有人这么问赞妮，她只会平静地眨眨眼。

“啊？我只是个普通的打工人而已。不过我倒有一个主意：既然你觉得我的部门会给我开这么多工资的话，不如也跳槽来这边试试？这样我就能轻松点了。嗯，这只是家族内部的工作变动，应该不会涉及到什么竞业协议吧？”`,
  },

  {
    id: "4",
    title: "暗夜独行",
    content: `
……应该还来得及。

赞妮沿着小巷疾行，她感觉自己的肩膀还在刺痛。那个手腕几乎和她脖子一样粗的壮汉和外表一样皮糙肉厚，但却比看起来灵活得多。她原本以为自己能在对方反应过来前就把他打晕的，还好她闪得快，那把短刀只在她肩膀上留了一道挺深的口子，而不是直直插入她的心脏。

这并不是她第一次受伤了，赞妮懒得数自己在这几个月的“行侠仗义”里身上到底多出来了多少道伤口，还好它们最终都会愈合。而且，她敢肯定那些伤口的制造者远比自己要惨得多。

她的策略很简单：在保证那些罪犯认不出自己的情况下狠狠揍他们，然后在姗姗来迟的诫令使们赶到之前离开，把残局留给他们收拾。这倒不是她有多高尚，她可不想被报复的人盯上，被迫离开拉古那，搬到一个连披萨和蜜露果酒都没有的地方隐姓埋名地度过余生。

做一个不引人注意，看起来也毫无威胁的小角色，总比变成报复的对象好一些。

这次她要对付几个绑架犯。她已经盯了这几个人一段日子了，那个壮汉是他们的头儿，共鸣者，有两把刷子。而今天他恰好落单，这是个动手的好机会。接下来，她只要在对方起疑之前尽快收拾掉剩下的几个家伙就好。

她握紧指虎，略微活动了下手腕。

 

“头儿也该回来了吧？那孩子的家离这儿又不远。”瘦高个的男人打了个哈欠，抱着布娃娃的女孩瑟缩在木笼子的角落里，他随意地朝她瞟了一眼，扬扬下巴，“拿到钱以后该怎么办？我觉得还是应该把她放回去。”

“可她看到我们的脸了。”矮个子的男人叹了口气，“如果放她回去，我们很可能会被那个什么夜光盯上……”

“焰光的夜行者。”瘦高个补充了一句，“我理解头儿的担心，但收了钱就该放人，这是规矩。撕票是不是有点过分了？”

“英白拉多在上，拉古那早就没什么规矩了。”矮个子闷闷地说。瘦高个沉默了一会，他转头看向木笼里的女孩，随后就像被烫到了一样转开了视线。

“……我出去透透气。”

瘦高个烦躁地站起来，打开了藏身处的门。外面传来的冷风让他的心不自觉地一颤——

——然后，更为冰冷的金属块和他的额头进行了结结实实的亲密接触。他的后脑勺砰地一声敲在底板上，然后就什么都不知道了。

“——你、你是？”

矮个子慌忙站起来，以一种滑稽的动作去够放在桌子另一头的枪，但来人比他更快。他在失去意识前，觉得自己的手指短暂碰到了枪柄，但也仅此而已了。

赶上了。赞妮轻轻吐了口气，肩上的伤口好像又被撕开了，不过显然是值得的。

她一拳打碎了木头笼子的锁，又脱下瘦高个的外套，给冻得瑟瑟发抖的女孩披好。她来的路上给诫令院扔了封匿名信，不出意外的话，那些诫令使应该很快就会赶到。她觉得自己也该走了。

“那个……”

赞妮回过头，看到小女孩畏畏缩缩地站在她身后，她鼓起勇气，把手中的玩偶递给赞妮。

“这、这个送给你，大姐姐！谢谢你救了我！”

没必要，我可不是冲着你的感谢才这么做的。

赞妮把溜到嘴边的话咽下去。她蹲下来，看着小女孩的眼睛。她看起来很害怕，但仍然倔强地举着玩偶。她的瞳孔中反射出了赞妮的影子。那是曾经的赞妮，是形单影只的她，缺乏力量，什么都做不到的她。

赞妮笑了笑，伸手摸了摸女孩的头发，接过她手里的玩偶。

“谢谢，那我就不客气了。”`,
  },

  {
    id: "5",
    title: "狂欢前夕",
    content: `
赞妮好像做了一个梦，又好像什么都没做。那个梦用她的话来说，非常光滑地从她的大脑上溜了过去。她睁开眼，把还在叮当乱响的闹钟按停。

清晨的阳光顺着窗户钻进来，给地毯镀了一层金色的边缘。赞妮花了一分钟强迫自己清醒过来，而梦境最后的脆弱碎片也随之消弭无踪。

无所谓，反正又不是什么好梦。

以最近的加班强度，就算做梦也只会是一些支离破碎，毫无意义的断片，或者是在梦里整夜整夜地处理那些白天没做完的报表。在现实中并没有能够躲避压力的避风港，那她怎么会觉得在梦里就找得到呢？

别去想这些了，今天还有个重要的活要干呢。她拍了拍自己的脸，让自己更清醒一点。为了上头承诺的带薪假期，她决心一定要把这个委托处理好。

赞妮对着镜子把衬衣整理得一丝不苟，又反复调整了领带的位置。她对那名神秘的贵客所知不多，只知道{TA}带着一个相当特殊的声骸，并且家族为{TA}提供了一笔相当可观的资金。

但她觉得这事没这么简单。可能是因为那个怪梦的影响，她总觉得她和那位贵客未来几天所做的一切，将决定很多人的命运。

得了吧。我只是个普通的雇员罢了。莫塔里区掉下一块招牌，都会砸中好几个的那种。赞妮拿起挂在衣架上的披风，就像之前的每个清晨一样，把它披在身上。

 

赞妮打了个哈欠，好在没被同事看到。

她今天的工作倒是不多，阿尔伯特先生说她只要帮那个穿着黑衣服的贵客处理完业务之后就可以离开银行了，之后的工作就是负责担任【TA】的护卫和向导，直到狂欢节结束。听起来不怎么复杂。

那么，只要做好职责之内的事就行了，就像以前一样。赞妮深吸了一口气，不知为什么，她觉得自己有点紧张，尾巴不由自主地在身后甩来甩去。

如果对方在午餐时分抵达的话，先提议去玛格烈特餐厅体验拉古那美食。如果对方拒绝的话，使用备选方案：去布拉塔烘培坊吃披萨，顺便在拂风水畔度过一段悠闲而愉快的时光……赞妮快速在心里盘了一遍自己预先准备的招待计划，在反复确认没有漏洞后，她才觉得稍微放松了一点。

赞妮的嘴角微微扬起。她看到那位身穿黑衣，有着璀璨的金色眼瞳的贵客向着银行大门走来，和预料中半分不差。

没问题，接下来，只要像往常那么做就行了。

“欢迎您来到「埃弗拉德银行」，【玩家名】【先生/女士】。”
    `,
  },
];
const current = ref(0);

function select(index) {
  current.value = index;
  // 将焦点移回当前 tab（便于无障碍与键盘导航）
  const id = `tab-${items[index].id}`;
  const el = document.getElementById(id);
  if (el) el.focus();
}
const storyRef = ref<HTMLElement | null>(null);

function prev() {
  current.value = (current.value - 1 + items.length) % items.length;
  select(current.value);
  storyRef.value.scrollIntoView({ behavior: "smooth", block: "start" });
}

function next() {
  current.value = (current.value + 1) % items.length;
  select(current.value);
  storyRef.value.scrollIntoView({ behavior: "smooth", block: "start" });
}
interface Chibi {
  src: string;
  top: number;
  left: number;
}
const chibiList = ref<Chibi[]>([]);
onMounted(async () => {
  if (!reducedMotion) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".avatar-card", {
      duration: 0.8,
      y: 18,
      opacity: 0,
      scale: 0.99,
    }).from(
      ".right-col > .hero-panel .name",
      { duration: 0.9, x: 24, opacity: 0 },
      "-=0.45"
    );

    gsap.utils.toArray(".tl-item").forEach((it: any, idx: number) => {
      gsap.from(it.querySelector(".tl-card"), {
        scrollTrigger: {
          trigger: it,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 22,
        duration: 0.7,
        delay: idx * 0.06,
      });
    });

    gsap.to(".avatar-card", {
      scale: 1.007,
      duration: 2.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  } else {
    document.documentElement.classList.add("reduced-motion");
  }

  // 1. 基础配置信息
  const total = 8;
  let pickCount = 3; // 每次抽取 3 张
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = window.innerWidth <= 768;
  // 如果已知单张小人图片的宽高，可避免超出边界；
  // 假设小人图片宽 100px、高 100px，按需替换：
  const imgWidth = 100;
  const imgHeight = 100;

  // 2. Fisher–Yates 洗牌函数
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 3. 随机选出 3 个编号
  if (isMobile) {
    pickCount = 1;
  }
  const nums = shuffle(Array.from({ length: total }, (_, k) => k + 1));
  const picks = nums.slice(0, pickCount);

  // 4. 生成随机位置并填充 chibiList
  chibiList.value = []; // 先清空
  picks.forEach((i) => {
    chibiList.value.push({
      src: `/QImages/1 (${i}).png`,
      left: Math.random() * (vw - imgWidth), // 保证不超出左右边界
      top: Math.random() * (vh - imgHeight), // 保证不超出上下边界
    });
  });

  // 2. 等 img 渲染到 DOM
  await nextTick();

  // 3. 给每个小人绑定 GSAP 动画
  const imgs = document.querySelectorAll<HTMLImageElement>(".chibi-img");
  imgs.forEach((img, index) => {
    const padding = 200; // 边缘预留空间
    // ✅ 初始出场动画（闪现）
    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(2)",
        delay: 0.2 * index,
      }
    );

    // ✅ 鼠标靠近闪避
    img.addEventListener("mouseenter", () => {
      gsap.killTweensOf(img);

      gsap.to(img, {
        x: "+=" + ((Math.random() - 0.5) * 400).toFixed(0),
        y: "+=" + ((Math.random() - 0.5) * 400).toFixed(0),
        duration: 1.2,
        ease: "back.out(2)",
        onComplete: () => {
          // 闪避完成后，再重新启用动画
          animate(img);
        },
      });
    });

    const animate = (img: HTMLImageElement) => {
      let { x, y } = img.getBoundingClientRect();
      let deltaX = (Math.random() - 0.5) * 200;
      let deltaY = (Math.random() - 0.5) * 200;

      // 预测一下偏移后的位置
      let nextX = x + deltaX;
      let nextY = y + deltaY;

      // 校正：防漂出左、右、上、下边界
      if (nextX < padding) deltaX = padding - x;
      if (nextX + img.width > window.innerWidth - padding)
        deltaX = window.innerWidth - padding - (x + img.width);
      if (nextY < padding) deltaY = padding - y;
      if (nextY + img.height > window.innerHeight - padding)
        deltaY = window.innerHeight - padding - (y + img.height);

      gsap.to(img, {
        x: `+=${deltaX.toFixed(0)}`,
        y: `+=${deltaY.toFixed(0)}`,
        rotation: `+=${((Math.random() - 0.5) * 60).toFixed(0)}`,
        duration: 2 + Math.random() * 2,
        ease: "power1.inOut",
        onComplete: () => animate(img),
      });
    };
    animate(img);
  });
});
</script>

<style scoped lang="scss">
/* 赞妮风格 —— 紫蓝海感（水母/幻海） + 毒药/治愈双重高光 */
$bg-deep: #0f1113; // 极深墨灰（职业底）
$deep-2: #17181a; // 次深（渐变用）
$accent-1: #d9dfe6; // 主亮（白银/发色高光）
$accent-2: #fefffa; // 次亮（灼痕暖光点缀）
$text-main: #eae9ee;

$card-bg: rgba(6, 8, 12, 0.46);
$card-border: rgba(184, 107, 224, 0.06);
$soft-shadow: rgba(0, 0, 0, 0.6);
$inner-glow: rgba(184, 107, 224, 0.03);
/* 固定浮动小 chibi 层（保留） */
.floating-chibis {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  .chibi-img {
    position: absolute;
    width: 80px;
    user-select: none;
    transform-origin: center center;
    pointer-events: auto;
    z-index: 10;
  }
}

.megumi-page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, $bg-deep 0%, $deep-2 72%);
  font-family: "Noto Sans SC", system-ui, -apple-system, "Segoe UI", Roboto,
    Arial;
  color: $text-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: clamp(20px, 4vw, 80px);
  box-sizing: border-box;
  padding-top: 60px;

  &.reduced-motion * {
    transition: none !important;
    animation: none !important;
  }

  .container {
    position: relative;
    z-index: 10;
    max-width: 1100px;
    margin: 0 auto;
    padding: clamp(12px, 2vw, 40px);
  }
}

/* ========== HERO 区域（整体暗化 + 血玫点光） ========== */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 28px;
  align-items: start;
  padding: 12px;
  margin-bottom: 12px;

  /* 乐谱画布 —— 在 hero 背后增加五线谱移动感 */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 16px
    );
    opacity: 0.06;
    mix-blend-mode: overlay;
    transform: translateY(-4%);
    animation: staff-drift 16s linear infinite;
  }

  .left-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
  }

  .avatar-card {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.01),
      rgba(184, 107, 224, 0.01)
    );
    border-radius: 16px;
    padding: 12px;
    display: grid;
    justify-items: center;
    gap: 8px;
    border: 1px solid $card-border;
    box-shadow: 0 14px 44px $soft-shadow, inset 0 1px 0 $inner-glow;
    cursor: pointer;
    transition: transform 0.28s ease, box-shadow 0.28s ease;
    width: 100%;
  }

  .avatar-wrap {
    width: 100%;
    display: block;
  }

  .avatar {
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: block;
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.5), 0 0 18px rgba($accent-1, 0.03);
    transition: transform 0.5s ease, filter 0.5s ease;
    background-color: rgba(0, 0, 0, 0.04);
    filter: saturate(0.8) contrast(0.95) brightness(0.92);
  }

  .avatar-card:hover .avatar {
    transform: translateY(-4px) scale(1.02);
    filter: saturate(0.7) contrast(0.9) brightness(0.9);
  }

  .avatar-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .avatar-badge {
    font-size: 0.9rem;
    color: $text-main;
    background: rgba(0, 0, 0, 0.18);
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba($accent-2, 0.05);
    font-weight: 600;
  }

  .right-col {
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 6;
  }

  .hero-panel {
    position: relative;
    z-index: 6;
    padding: 20px;
    border-radius: 14px;
    background: $card-bg;
    backdrop-filter: blur(8px) saturate(0.9);
    border: 1px solid $card-border;
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 $inner-glow;
  }

  .name {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    margin: 0;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1;
    display: inline-block;
    /* 标题改为 暗紫 → 血玫 渐变 */
    background: linear-gradient(90deg, $accent-1 0%, $accent-2 70%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.22);
    text-shadow: 0 10px 36px rgba(0, 0, 0, 0.65);
    position: relative;
  }

  .jp {
    font-size: 0.95rem;
    color: $accent-1;
    margin-left: 8px;
    font-weight: 400;
  }

  .subtitle {
    margin: 6px 0 0;
    font-size: 1.1rem;
    color: $accent-1;
    font-weight: 600;
    line-height: 1.4;
  }

  .lead {
    margin: 10px 0 0;
    color: $text-main;
    opacity: 0.96;
    line-height: 1.7;
    max-width: 72ch;
  }
}

/* ========== 通用卡片（更暗、更锐利的边与血色提示） ========== */
.card {
  margin-top: 24px;
  background: rgba(6, 6, 8, 0.5);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  color: $text-main;
  border: 1px solid $card-border;
  transition: transform 0.28s ease, box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.7);
  }

  h2 {
    margin: 0 0 12px 0;
    font-size: 1.3rem;
    color: $accent-2;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
}

/* personality 列表样式（暗紫细线） */
.personality .traits li {
  padding: 12px 0;
  border-bottom: 1px dashed rgba($accent-1, 0.06);
  font-size: 1rem;
  color: rgba($text-main, 0.92);
}

/* overview 双栏布局（保持） */
.overview .two-col {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.overview .text-block {
  flex: 1 1 40%;
  min-width: 240px;
  line-height: 1.6;
  color: rgba($text-main, 0.96);
}

/* special-section：加入音符漂浮和暗紫边框 */
.special-section {
  position: relative;
  overflow: hidden;

  .content {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 16px;
  }

  .img-area {
    flex: 0 0 200px;

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 14px 44px rgba(0, 0, 0, 0.6), 0 0 12px rgba($accent-1, 0.02);
      border: 1px solid rgba($accent-1, 0.03);
    }
  }

  .text-block {
    flex: 1;
    line-height: 1.6;
    color: rgba($text-main, 0.95);
  }
}

/* ll-stories — 暗底 + 微血色分割线 */
.ll-stories {
  .card {
    width: min(1200px, 100%);
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba($accent-1, 0.02);
    color: $text-main;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(8, 10, 12, 0.12),
      rgba(8, 6, 10, 0.06)
    );
  }

  .card-head {
    padding: 14px 16px;
    border-bottom: 1px solid rgba($accent-2, 0.03);
    display: flex;
    flex-direction: column;
    gap: 12px;

    .card-title {
      font-size: 24px;
      font-weight: 700;
      color: $accent-1;
      letter-spacing: 0.6px;
    }
  }

  .card-body {
    padding: 18px 16px;
    min-height: 160px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(8, 8, 10, 0.02));
  }

  .story {
    color: rgba($text-main, 0.96);

    .story-head {
      font-size: 18px;
      color: $accent-2;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .story-content {
      line-height: 1.7;
      color: rgba($text-main, 0.92);
      white-space: pre-wrap;
    }
  }

  .card-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid rgba($accent-1, 0.02);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.04)
    );

    .nav-btn {
      background: transparent;
      border: 1px solid rgba($accent-1, 0.06);
      color: $accent-2;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      transition: background 180ms ease;
      &:hover {
        background: rgba($accent-2, 0.04);
      }
    }

    .pager {
      color: rgba($text-main, 0.72);
      font-size: 13px;
      font-weight: 600;
    }
  }

  /* 切换动画保留，但更暗 */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 320ms cubic-bezier(0.2, 0.9, 0.2, 1);
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(6px);
  }

  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-6px);
  }
}

/* timeline（暗紫竖线 + 微光） */
.timeline {
  position: relative;

  .tl-wrap {
    position: relative;
    padding: 24px 12px 12px 96px;
  }

  .vl {
    position: absolute;
    left: 80px;
    top: 32px;
    bottom: 20px;
    width: 4px;
    border-radius: 6px;
    background: linear-gradient(
      180deg,
      rgba($accent-2, 0.12),
      rgba($accent-1, 0.1)
    );
    box-shadow: 0 6px 18px rgba($accent-1, 0.06),
      inset 0 0 10px rgba($accent-1, 0.02);
    opacity: 0.95;
  }

  .tl-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tl-item {
    position: relative;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    margin: 20px 0;
    transition: transform 0.28s ease, box-shadow 0.28s ease;
  }

  .tl-card {
    background: rgba(8, 6, 10, 0.36);
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
    width: calc(100% - 130px);
    border-left: 4px solid transparent;
    transition: transform 0.28s ease, box-shadow 0.28s ease,
      border-color 0.28s ease;
    position: relative;
    z-index: 2;
  }

  .tl-item:hover .tl-card,
  .tl-item:focus-within .tl-card {
    transform: translateY(-8px);
    box-shadow: 0 24px 72px rgba(0, 0, 0, 0.6);
    border-left-color: rgba($accent-2, 0.18);
  }

  .tl-title {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
    color: $accent-1;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .tl-desc {
    margin: 0;
    color: rgba($text-main, 0.92);
    white-space: pre-wrap;
  }
}

/* 浮动音符（可在模板中渲染若干 .floating-note） */
.floating-note {
  position: absolute;
  font-size: 14px;
  color: $accent-2;
  opacity: 0.95;
  transform-origin: center;
  animation: note-float 4.6s ease-in-out infinite;
  filter: drop-shadow(0 6px 18px rgba($accent-2, 0.06));
}

/* 动画关键帧 */
@keyframes staff-drift {
  0% {
    transform: translateY(-4%);
    opacity: 0.9;
  }
  50% {
    transform: translateY(6%);
    opacity: 0.95;
  }
  100% {
    transform: translateY(-4%);
    opacity: 0.9;
  }
}

@keyframes note-float {
  0% {
    transform: translateY(0) rotate(-6deg) scale(0.95);
    opacity: 0.85;
  }
  50% {
    transform: translateY(-12px) rotate(3deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(-6deg) scale(0.95);
    opacity: 0.85;
  }
}

/* 响应式：小屏适配（保留原逻辑，仅小幅调整文字色调与阴影） */
@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 8px;
  }

  .avatar-card {
    width: 140px;
    padding: 8px;
  }

  .hero-panel {
    padding: 14px;
  }

  .name {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .lead {
    font-size: 0.95rem;
  }

  .card {
    padding: 18px;
    border-radius: 12px;
  }

  .overview .two-col {
    flex-direction: column;
  }

  .special-section .content {
    flex-direction: column;
  }

  .ll-stories {
    .card {
      border-radius: 10px;
    }

    .card-head {
      padding: 12px 12px;
    }

    .card-body {
      padding: 14px 12px;
      min-height: 180px;
    }

    .card-foot {
      padding: 8px 12px;
    }
  }

  .timeline {
    overflow: visible;
  }

  .timeline .tl-wrap {
    padding-left: 14px !important;
    padding-right: 14px;
    min-height: 0;
  }

  .timeline .vl {
    display: none !important;
  }

  .timeline .tl-list {
    overflow: visible;
  }

  .timeline .tl-item {
    display: block !important;
    margin: 14px 0 !important;
    width: 100%;
  }

  .timeline .tl-card {
    width: 100% !important;
    padding: 14px !important;
    border-left: 0 !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    transform: none !important;
  }
}
</style>
