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
    animalImage: "/assets/animals/animal1.jpg",
    damageImages: [
      "/assets/animals/animal1-1.jpg",
      "/assets/animals/animal1-2.jpg",
      "/assets/animals/animal1-3.jpg",
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
    animalImage: "/assets/animals/animal2.jpg",
    damageImages: [
      "/assets/animals/animal2-1.jpg",
      "/assets/animals/animal2-2.jpg",
      "/assets/animals/animal2-3.jpg",
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
        <span className="highlight">1匹見つかると他にも沢山いるかも</span>
        &#128166;
        <br />
        &#9745;&#65039; 驚異的な生命力の持ち主&#128555;
      </p>
    ),
    animalImage: "/assets/animals/animal3.jpg",
    damageImages: [
      "/assets/animals/animal3-1.jpg",
      "/assets/animals/animal3-2.jpg",
      "/assets/animals/animal3-3.jpg",
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
        <span className="highlight">刺されると炎症を起こし強い痒みが</span>
        &#128166;
      </p>
    ),
    animalImage: "/assets/animals/animal4.jpg",
    damageImages: [
      "/assets/animals/animal4-1.jpg",
      "/assets/animals/animal4-2.jpg",
      "/assets/animals/animal4-3.jpg",
    ],
  },
  {
    name: "シロアリ",
    lowestPrice: 2000,
    highestPrice: 0,
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
        <span className="highlight">放置すると不動産価値が落ちるケースも</span>
        &#128166;
      </p>
    ),
    animalImage: "/assets/animals/animal5.jpg",
    damageImages: [
      "/assets/animals/animal5-1.jpg",
      "/assets/animals/animal5-2.jpg",
      "/assets/animals/animal5-3.jpg",
    ],
  },
  {
    name: "トコジラミ",
    lowestPrice: 1000,
    highestPrice: 0,
    risk: 4,
    discription: (
      <p className="font-semibold text-sm text-left p-2 xs:text-xs md:text-2xl xl:text-sm">
        &#9745;&#65039; 人や動物の血液をエサとする&#128561;
        <br />
        &#9745;&#65039;{" "}
        <span className="highlight">
          刺されると赤く腫れ上がり強烈に痒くなる
        </span>
        &#128166;
        <br />
        &#9745;&#65039; 爆発的な繁殖力を持つ害虫！
        <br />
        &#9745;&#65039; 駆除するのが非常に困難な害虫！
        <br />
      </p>
    ),
    animalImage: "/assets/animals/animal6.webp",
    damageImages: [
      "/assets/animals/animal6-1.webp",
      "/assets/animals/animal6-2.webp",
      "/assets/animals/animal6-3.webp",
    ],
  },
];
