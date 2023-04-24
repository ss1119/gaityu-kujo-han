import { DescriptionEntity } from "../types";

export const descriptionContents: DescriptionEntity[] = [
  {
    name: "ハチ",
    lowestPrice: 3000,
    highestPrice: 15000,
    risk: 4,
    discription: (
      <p className="text-sm text-left p-2">
        アシナガバチは人間が先に攻撃しない限り、基本的に攻撃性は低いとされていますが、危険な事に変わりはありません。
        <br />
        しかし、スズメバチやオオスズメバチは人間が近づくだけでも驚異的な攻撃性を見せ、刺されてしまうとアナフィラキシーショックを引き起こし、最悪の場合死に至ってしまう、非常に危険な害虫です。
        <br />
        絶対に自分では駆除しようとしたりしないで下さい。
      </p>
    ),
    animalImage: "/assets/animals/animal7.png",
    damageImages: [
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
    ],
  },
  {
    name: "ムカデ",
    lowestPrice: 3000,
    highestPrice: 10000,
    risk: 5,
    discription: (
      <p className="text-sm text-left p-2">
        ムカデは凶暴で攻撃性が強い害虫です。
        <br />
        獰猛で、人間に接触した瞬間に牙で咬みつき、咬まれると毒が出て咬まれた箇所が炎症を起こします。
        <br />
        虫が苦手な方、ご心配な方は駆除の依頼を推奨致します。
      </p>
    ),
    animalImage: "/assets/animals/animal7.png",
    damageImages: [
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
    ],
  },
  {
    name: "ゴキブリ",
    lowestPrice: 3000,
    highestPrice: 10000,
    risk: 2,
    discription: (
      <p className="text-sm text-left p-2">
        ゴキブリは非常に繁殖性の強い害虫です。
        <br />
        集団で生活しているケースが一般的で、1匹家の中で見つかった場合、他に無数のゴキブリが家の中で生息していると考えてよいです。
        <br />
        愛する我が家がゴキブリの温床にされてしまう前に、お早めの駆除依頼をおすすめ致します。
      </p>
    ),
    animalImage: "/assets/animals/animal7.png",
    damageImages: [
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
    ],
  },
  {
    name: "ケムシ",
    lowestPrice: 7000,
    highestPrice: 15000,
    risk: 3,
    discription: (
      <p className="text-sm text-left p-2">
        ケムシは樹木の葉っぱを食べ、成長していきます。
        <br />
        集団で１箇所の葉っぱに集中している場合が多く、刺されれば強いかゆみを伴う毛虫皮膚炎を引き起こすだけではなく、葉っぱを食い荒らす事により、樹木にも食害を及ぼします。
        <br />
        ケムシが見つかった場合、駆除すると共に予防剤の散布を推奨致します。
      </p>
    ),
    animalImage: "/assets/animals/animal7.png",
    damageImages: [
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
      "/assets/animals/animal7.png",
    ],
  },
];
