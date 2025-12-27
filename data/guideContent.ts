import { GuideSection } from '../types';

export const INTRO_TEXT = `
  Dear little sweethearts and parents! Welcome to Melody's Magical Chinese Garden! 🎀
  亲爱的小甜心和家长朋友们！欢迎来到美乐蒂的语文魔法花园！

  Learning Chinese is like baking a delicious strawberry cake or singing a happy song! 
  学习语文就像烤一个美味的草莓蛋糕，或者唱一首快乐的歌！
  
  Grade 6 is a wonderful time to gather sweet nectar. Don't worry, let's hold hands and hop forward together!
  六年级是采集甜蜜花蜜的美好时光。别担心，让我们手拉手一起蹦蹦跳跳地前进吧！
`;

export const OUTRO_TEXT = `
  See? Learning Yuwen is as sweet as candy! 🍬
  看吧？学习语文就像糖果一样甜！
  
  Keep singing your own song at your own pace. You are doing amazing!
  按自己的节奏唱出属于你的歌。你做得太棒了！
  
  Let's fill our baskets with knowledge and smiles! Love you! 
  让我们把知识和微笑装满篮子！爱你哟！🐰💕
`;

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: 'reading',
    title: 'Tip #1: Happy Reading – Picking Strawberries 🍓',
    emoji: '🍓📚',
    content: `Reading is like picking the reddest, sweetest strawberries in the garden. You don't need to eat the leaves, just enjoy the fruit!
    阅读就像在花园里摘最红最甜的草莓。不需要吃叶子，只要享受果实就好啦！`,
    steps: [
      { text: "Read a story you love for 30 mins. It's storytime, not study time! \n每天读30分钟你喜欢的书。这是故事时间，不是学习时间！" },
      { text: "Try different flavors: Fairy tales, science, history... yum! \n尝试不同的口味：童话、科学、历史……真香！" },
      { text: "Mom & Dad: Read together like two bunnies sharing a carrot. \n爸爸妈妈：像两只小兔子分享胡萝卜一样一起阅读。" }
    ],
    links: [
      { url: "https://book.douban.com/tag/%E5%84%BF%E7%AB%A5", text: "Douban Book Garden (豆瓣童书)" },
      { url: "http://baby.dangdang.com/", text: "Dangdang Kids (当当童书)" }
    ]
  },
  {
    id: 'poetry',
    title: 'Tip #2: Classical Poetry – Magic Spells 🎶',
    emoji: '🎋✨',
    content: `Ancient poems are magic spells from the past. When you recite them, you travel through time!
    古诗是来自过去的魔法咒语。当你朗诵它们时，你就穿越了时空！`,
    steps: [
      { text: "Sing the poems! Make up a melody for 'Silent Night Thoughts'. \n把诗唱出来！给《静夜思》编个曲调。" },
      { text: "Draw the scene. If the poem says 'mountains', draw a cute mountain! \n画出画面。如果诗里说“山”，就画一座可爱的山！" },
      { text: "Poetry battle at dinner! Winner gets an extra dessert. \n晚餐时的飞花令！赢家多吃一份甜点。" }
    ],
    links: [
      { url: "https://www.ximalaya.com/channel/4/", text: "Ximalaya Audio (喜马拉雅)" },
      { url: "https://www.gushiwen.org/", text: "Poetry Treasure (古诗文网)" }
    ]
  },
  {
    id: 'vocab',
    title: 'Tip #3: Vocabulary – Collecting Shiny Gems 💎',
    emoji: '👜🎀',
    content: `New words are shiny gems for your jewelry box. The more you have, the sparklier your writing becomes!
    生字新词是首饰盒里的闪亮宝石。积攒得越多，你的文章就越闪耀！`,
    steps: [
      { text: "Keep a 'Sparkle Notebook' for pretty words. Decorate it with stickers! \n准备一个“闪光笔记本”记录好词。用贴纸装饰它！" },
      { text: "Use a new word to compliment your mom. 'Mother, you look radiant today!' \n用新词赞美妈妈。“妈妈，您今天容光焕发！”" },
      { text: "Don't just copy. Use the gems to make a necklace (sentences). \n不要只是抄写。用宝石串成项链（造句）。" }
    ],
    links: [
      { url: "https://www.zdic.net/", text: "Word Dictionary (汉典)" }
    ]
  },
  {
    id: 'textbook',
    title: 'Tip #4: Textbook – The Main Melody 🎹',
    emoji: '🎼📖',
    content: `The textbook is the sheet music for our concert. Master the basic notes before improvising!
    课本是我们音乐会的乐谱。在即兴发挥前，先掌握基本音符！`,
    steps: [
      { text: "Read aloud with deep emotion, like a superstar on stage! \n深情朗读，就像舞台上的超级巨星！" },
      { text: "Look at the footnotes. They are little whispers from the author. \n看注释。那是作者悄悄对你说的悄悄话。" },
      { text: "Teach your plushies what you learned. If Mr. Bear understands, you pass! \n教你的毛绒玩具。如果熊先生听懂了，你就过关啦！" }
    ],
    links: [
      { url: "http://www.pep.com.cn/", text: "PEP Official (人教社)" }
    ]
  },
  {
    id: 'comprehension',
    title: 'Tip #5: Reading Tests – Treasure Hunt 🗺️',
    emoji: '🔍🧁',
    content: `Reading comprehension is just a treasure hunt map. The chest of gold (answers) is hidden right in the paragraphs!
    阅读理解就是一张藏宝图。金币宝箱（答案）就藏在段落里！`,
    steps: [
      { text: "Read the questions first. They are your compass. \n先读问题。它们是你的指南针。" },
      { text: "Circle key words with a pink pen. Mark the spot! \n用粉色笔圈出关键词。标记地点！" },
      { text: "Keep answers simple and sweet, like a cupcake. \n答案要简单甜美，就像纸杯蛋糕。" }
    ],
    links: [
      { url: "https://www.zxxk.com/", text: "Exam Network (学科网)" }
    ]
  },
  {
    id: 'writing',
    title: 'Tip #6: Writing – Baking a Story Cake 🎂',
    emoji: '🍰✍️',
    content: `Writing is baking! Ingredients are words, emotions are the sugar. Mix them up for a delicious treat.
    写作就是烘焙！材料是文字，情感是糖。混合起来就是美味的点心。`,
    steps: [
      { text: "Write 3 lines of 'Happy Diary' daily. Small joys matter. \n每天写三行“快乐日记”。小确幸很重要。" },
      { text: "Use your 5 senses: What did the rain smell like? How did the kitty feel? \n五感全开：雨水闻起来怎么样？小猫摸起来什么感觉？" },
      { text: "Read it to yourself. Does it flow like chocolate sauce? \n读给自己听。读起来像巧克力酱一样顺滑吗？" }
    ],
    links: [
      { url: "http://www.zuowen.com/", text: "Composition Net (作文网)" }
    ]
  },
  {
    id: 'handwriting',
    title: 'Tip #7: Handwriting – Drawing Ribbons 🎀',
    emoji: '🖌️💮',
    content: `Writing characters is like drawing ribbons. Keep them balanced and graceful. Beautiful writing makes everyone smile!
    写字就像画丝带。保持平衡优雅。漂亮的字让每个人都微笑！`,
    steps: [
      { text: "Slow down. It's a waltz, not a race. \n慢下来。这是华尔兹，不是赛跑。" },
      { text: "Hold the pen gently, like holding a baby chick. \n轻轻握笔，就像握着一只小鸡。" },
      { text: "Practice 10 mins a day with relaxing music. \n每天伴着轻松的音乐练习10分钟。" }
    ],
    links: []
  },
  {
    id: 'mindset',
    title: "Tip #8: Mindset – Melody's Smile 😌",
    emoji: '😊☁️',
    content: `Most important: Keep smiling! A happy heart learns faster. Stress is a stormy cloud, blow it away!
    最重要的一点：保持微笑！快乐的心学得更快。压力是乌云，把它吹走！`,
    steps: [
      { text: "Mistakes are just stepping stones. Hop over them! \n错误只是垫脚石。跳过去！" },
      { text: "Sleep well to let your brain grow. Dream of candy land. \n睡个好觉让大脑生长。梦见糖果乐园。" },
      { text: "You are wonderful. Believe in your magic! \n你是最棒的。相信你的魔法！" }
    ],
    links: []
  }
];