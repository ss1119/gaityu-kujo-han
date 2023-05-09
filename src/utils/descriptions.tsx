import { DescriptionEntity } from "../types";

export const descriptionContents: DescriptionEntity[] = [
  {
    name: "ハチ",
    lowestPrice: 2000,
    highestPrice: 15000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        アシナガバチは人間が先に攻撃しない限り、基本的に攻撃性は低いとされていますが、危険な事に変わりはありません。
        <br />
        しかし、スズメバチやオオスズメバチは人間が近づくだけでも驚異的な攻撃性を見せ、刺されてしまうとアナフィラキシーショックを引き起こし、最悪の場合死に至ってしまう、非常に危険な害虫です。
        <br />
        絶対に自分では駆除しようとしたりしないで下さい。
      </p>
    ),
    animalImage: "/assets/animals/animal1.png",
    damageImages: [
      "/assets/animals/animal1-1.png",
      "/assets/animals/animal1-2.png",
      "/assets/animals/animal1-3.png",
    ],
  },
  {
    name: "ムカデ",
    lowestPrice: 2000,
    highestPrice: 15000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        ムカデは凶暴で攻撃性が強い害虫です。
        <br />
        獰猛で、人間に接触した瞬間に牙で咬みつき、咬まれると毒が出て咬まれた箇所が炎症を起こします。
        <br />
        虫が苦手な方、ご心配な方は駆除の依頼を推奨致します。
      </p>
    ),
    animalImage: "/assets/animals/animal2.png",
    damageImages: [
      "/assets/animals/animal2-1.png",
      "/assets/animals/animal2-2.png",
      "/assets/animals/animal2-3.png",
    ],
  },
  {
    name: "ゴキブリ",
    lowestPrice: 2000,
    highestPrice: 15000,
    risk: 3,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        ゴキブリは非常に繁殖性の強い害虫です。
        <br />
        集団で生活しているケースが一般的で、1匹家の中で見つかった場合、他に無数のゴキブリが家の中で生息していると考えてよいです。
        <br />
        愛する我が家がゴキブリの温床にされてしまう前に、お早めの駆除依頼をおすすめ致します。
      </p>
    ),
    animalImage: "/assets/animals/animal3.png",
    damageImages: [
      "/assets/animals/animal3-1.png",
      "/assets/animals/animal3-2.png",
      "/assets/animals/animal3-3.png",
    ],
  },
  {
    name: "ケムシ",
    lowestPrice: 2000,
    highestPrice: 15000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        ケムシは樹木の葉っぱを食べ、成長していきます。
        <br />
        集団で１箇所の葉っぱに集中している場合が多く、刺されれば強いかゆみを伴う毛虫皮膚炎を引き起こすだけではなく、葉っぱを食い荒らす事により、樹木にも食害を及ぼします。
        <br />
        ケムシが見つかった場合、駆除すると共に予防剤の散布を推奨致します。
      </p>
    ),
    animalImage: "/assets/animals/animal4.png",
    damageImages: [
      "/assets/animals/animal4-1.png",
      "/assets/no-image.png",
      "/assets/no-image.png",
    ],
  },
  {
    name: "シロアリ",
    lowestPrice: 20000,
    highestPrice: 45000,
    risk: 3,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        最近我が家で妙によく羽アリを見かける。何て事はありませんか？
        <br />
        実は数々の住宅被害を引き起こしてきた歴史のあるシロアリの成虫こそが羽アリなんです。
        <br />
        「床がきしむ」「ドアの建付けが悪くなる」「壁や柱を叩くと空洞音がする」などの症状が出ている場合は手遅れになる前にお早めのご相談を。
      </p>
    ),
    animalImage: "/assets/animals/animal5.png",
    damageImages: [
      "/assets/no-image.png",
      "/assets/no-image.png",
      "/assets/no-image.png",
    ],
  },
  {
    name: "アライグマ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        アライグマは可愛い見た目とは裏腹に、雑食で非常に繁殖性が強く、性格も獰猛で気性が荒いのが特徴です。
        <br />
        実際にアライグマを触ろうとして噛まれた実例も多数存在し、大変危険な害獣と言えるでしょう。
        <br />
        屋根裏でアライグマが生活する事による糞害や、ダニの繁殖も問題の1つと言えるでしょう。
      </p>
    ),
    animalImage: "/assets/animals/animal6.png",
    damageImages: [
      "/assets/animals/animal6-1.png",
      "/assets/animals/animal6-2.png",
      "/assets/animals/animal6-3.png",
    ],
  },
  {
    name: "イタチ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        イタチは胴体が非常に細い事から、小さな穴からでも住宅内に侵入出来る為、屋根裏や床下に住み着き、糞害や悪臭、ダニ被害を及ぼします。
        <br />
        イタチが屋根裏で走り回る音により、睡眠不足やストレスの原因にも。
      </p>
    ),
    animalImage: "/assets/animals/animal7.png",
    damageImages: [
      "/assets/no-image.png",
      "/assets/no-image.png",
      "/assets/no-image.png",
    ],
  },
  {
    name: "タヌキ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        タヌキは犬と同じ感染症を持ち、家庭に出没すると大変危険な存在です。
        <br />
        住宅内に侵入すると、生活環境が整った事から、繁殖活動を行ってしまうケースも少なくなく、いつの間にかタヌキファミリーと同じ屋根の下で生活していた。。。なんて事も。
      </p>
    ),
    animalImage: "/assets/animals/animal8.png",
    damageImages: [
      "/assets/animals/animal8-1.png",
      "/assets/no-image.png",
      "/assets/no-image.png",
    ],
  },
  {
    name: "ハクビシン",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        ハクビシンはジャコウネコ科の動物で、鼻から額にかけて白いスジがあります。
        <br />
        夜行性で大変運動神経がよく、柱や外壁だけでは無く、電線の上も器用に移動する事が出来る為、え？こんな場所から侵入？何てケースも珍しくありません。
        <br />
        感染症や寄生虫を持っている可能性がある為、危険です。
      </p>
    ),
    animalImage: "/assets/animals/animal9.png",
    damageImages: [
      "/assets/no-image.png",
      "/assets/no-image.png",
      "/assets/no-image.png",
    ],
  },
  {
    name: "ネズミ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        ネズミは衛生的被害を及ぼす、代表的な害獣と言えるでしょう。
        <br />
        複数の雑菌を持ち、感染症や皮膚炎などを引き起こす原因となります。
        <br />
        特に人間の目に見える範囲にネズミが出てきている場合は、大変注意が必要です。
        <br />
        最悪のケースになる前に、ご早めのご依頼を推奨致します。
      </p>
    ),
    animalImage: "/assets/animals/animal10.png",
    damageImages: [
      "/assets/animals/animal10-1.png",
      "/assets/animals/animal10-2.png",
      "/assets/animals/animal10-3.png",
    ],
  },
  {
    name: "害鳥",
    lowestPrice: 15000,
    highestPrice: 75000,
    risk: 3,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        ハトなどの害鳥の体には、ダニや寄生虫などが無数に付着しています。
        <br />
        害鳥が飛び立つ時には、ダニや寄生虫の死骸が周辺に飛び散る為、健康への被害が危惧されています。
        <br />
        たまたまご家庭に侵入してしまった場合、巣を作られてしまった場合などは、お早めにご依頼下さい。
      </p>
    ),
    animalImage: "/assets/animals/animal11.png",
    damageImages: [
      "/assets/animals/animal11-1.png",
      "/assets/animals/animal11-2.png",
      "/assets/animals/animal11-3.png",
    ],
  },
  {
    name: "コウモリ",
    lowestPrice: 50000,
    highestPrice: 90000,
    risk: 5,
    discription: (
      <p className="text-sm text-left p-2 xs:text-xs md:text-lg xl:text-sm">
        コウモリの被害は例年春頃〜秋にかけて多く見られます。
        <br />
        一見温厚そうで無害に思えるコウモリですが、実はエボラ出血熱や狂犬病などの超危険ウイルスの病原体の持ち主です。
        <br />
        駆除を行う場合、それらの超危険ウイルスを体内に吸い込んでしまう可能性がある為、コウモリ被害と思われる被害をご確認された時は絶対に自分で駆除せず、すぐにホームプロテクターへご相談下さい。
      </p>
    ),
    animalImage: "/assets/animals/animal12.png",
    damageImages: [
      "/assets/no-image.png",
      "/assets/no-image.png",
      "/assets/no-image.png",
    ],
  },
];
