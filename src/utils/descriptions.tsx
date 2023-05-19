import { DescriptionEntity } from "../types";

export const descriptionContents: DescriptionEntity[] = [
  {
    name: "ハチ",
    lowestPrice: 2000,
    highestPrice: 15000,
    risk: 4,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~11月によく被害が発生！
        <br />
        &#9745;&#65039; アシナガバチは沢山巣を作る！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">スズメバチは攻撃性が高く危険！</span>
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          刺されてしまうと死に至るケースもある！
        </span>
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
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~10月によく被害が発生！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">性格は凶暴で攻撃性が強い！</span>
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">咬まれると炎症を起こしてしまう！</span>
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
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 4月~11月によく被害が発生！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">ゴキブリは繁殖性が強い害虫！</span>
        <br />
        &#9745;&#65039; 集団で生活している！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          1匹見つかると他にも沢山いるかも&#128166;
        </span>
        <br />
        &#9745;&#65039; 驚異的な生命力の持ち主&#128555;
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
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 3月~11月によく被害が発生！
        <br />
        &#9745;&#65039; ケムシは蛾の幼虫！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">毒のある毛を持っている！</span>
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          刺されると炎症を起こし強い痒みが&#128166;
        </span>
      </p>
    ),
    animalImage: "/assets/animals/animal4.png",
    damageImages: [
      "/assets/animals/animal4-1.png",
      "/assets/animals/animal4-2.png",
      "/assets/animals/animal4-3.png",
    ],
  },
  {
    name: "シロアリ",
    lowestPrice: 20000,
    highestPrice: 45000,
    risk: 3,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 羽アリが発生したら危険信号&#9888;&#65039;
        <br />
        &#9745;&#65039; 床下が食われて 踏むときしむ！
        <br />
        &#9745;&#65039; ドアの建付けが悪くなる！
        <br />
        &#9745;&#65039; 壁や柱を叩くと空洞音が鳴る！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          放置すると不動産価値が落ちるケースも&#128166;
        </span>
      </p>
    ),
    animalImage: "/assets/animals/animal5.png",
    damageImages: [
      "/assets/animals/animal5-1.png",
      "/assets/animals/animal5-2.png",
      "/assets/animals/animal5-3.png",
    ],
  },
  {
    name: "アライグマ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 6月~9月によく被害が発生！
        <br />
        &#9745;&#65039; 可愛い見た目とは裏腹に凶暴！
        <br />
        &#9745;&#65039; 雑食で繁殖性が強い！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          実際に触ろうとして噛まれた事例も&#128166;
        </span>
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">ダニやノミ被害の原因にも&#128555;</span>
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
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 6月~9月によく被害が発生！
        <br />
        &#9745;&#65039; 細い胴体を活かし 小さな穴からも侵入&#128166;
        <br />
        &#9745;&#65039; 屋根裏や床下に住み着くケースが多い&#127968;
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">騒音や糞害による悪臭被害が多い！</span>
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">ダニやノミ被害の原因にも&#128555;</span>
      </p>
    ),
    animalImage: "/assets/animals/animal7.png",
    damageImages: [
      "/assets/animals/animal7-1.png",
      "/assets/animals/animal7-2.png",
      "/assets/animals/animal7-3.png",
    ],
  },
  {
    name: "タヌキ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~9月によく被害が発生！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">感染症を持っている&#129440;</span>
        <br />
        &#9745;&#65039; 住宅に住み着き繁殖するケースが多い！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          ご家庭に出没すると大変危険&#9888;&#65039;
        </span>
      </p>
    ),
    animalImage: "/assets/animals/animal8.png",
    damageImages: [
      "/assets/animals/animal8-1.png",
      "/assets/animals/animal8-2.png",
      "/assets/animals/animal8-3.png",
    ],
  },
  {
    name: "ハクビシン",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~9月によく被害が発生！
        <br />
        &#9745;&#65039; 運動神経抜群で壁を垂直に登り侵入&#128166;
        <br />
        &#9745;&#65039; 鼻から額にかけて白いスジがある！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">感染症や寄生虫を持っている&#129440;</span>
        <br />
        &#9745;&#65039; 屋根裏で繁殖するケースも&#128555;
      </p>
    ),
    animalImage: "/assets/animals/animal9.png",
    damageImages: [
      "/assets/animals/animal9-1.png",
      "/assets/animals/animal9-2.png",
      "/assets/animals/animal9-3.png",
    ],
  },
  {
    name: "ネズミ",
    lowestPrice: 15000,
    highestPrice: 85000,
    risk: 4,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~10月によく被害が発生！
        <br />
        &#9745;&#65039; 衛生被害を及ぼす 害獣の代表格！
        <br />
        &#9745;&#65039; 親指程の穴なら容易く侵入！
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          複数の雑菌や感染症を持っている&#129440;
        </span>
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          被害を放置すると皮膚炎になるリスクも&#128166;
        </span>
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
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~9月によく被害が発生！
        <br />
        &#9745;&#65039; 飛ぶ時にダニや寄生虫の死骸が飛び散る！
        <br />
        &#9745;&#65039; 人が通る場所に巣を作った時は要注意！
        <br />
        &#9745;&#65039; <span className="highlight">早期駆除が大切！</span>
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
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 5月~11月によく被害が発生！
        <br />
        &#9745;&#65039; エボラ出血熱や狂犬病を持っている&#129440;
        <br />
        &#9745;&#65039; 集団で住み着くケースも&#128166;
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          糞尿による悪臭被害や深刻な健康被害も！
        </span>
        <br />
        &#9745;&#65039;
        <span className="highlight">
          {" "}
          絶対に自分では駆除しない&#9888;&#65039;
        </span>
      </p>
    ),
    animalImage: "/assets/animals/animal12.png",
    damageImages: [
      "/assets/animals/animal12-1.png",
      "/assets/animals/animal12-2.png",
      "/assets/animals/animal12-3.png",
    ],
  },
];
