import { Description } from "../parts/Description";

export const Descriptions = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 md:mt-24 md:pt-24">
      <div className="text-center pt-3 font-bold tex-red-600 bg-yellow-300 text-2xl md:w-56 md:h-16 md:mt-20 md:text-4xl">
        対象の害虫
      </div>
      <div className="md:grid md:grid-cols-2 md:pt-8 md:px-">
        <Description
          name="ハチ"
          lowestPrice={3000}
          highestPrice={15000}
          risk={4}
          discription={
            <p className="text-sm text-left md:p-2">
              アシナガバチは人間が先に攻撃しない限り、基本的に攻撃性は低いとされていますが、危険な事に変わりはありません。
              <br />
              しかし、スズメバチやオオスズメバチは人間が近づくだけでも驚異的な攻撃性を見せ、刺されてしまうとアナフィラキシーショックを引き起こし、最悪の場合死に至ってしまう、非常に危険な害虫です。
              <br />
              絶対に自分では駆除しようとしたりしないで下さい。
            </p>
          }
          images={[
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
          ]}
        />
        <Description
          name="ハチ"
          lowestPrice={3000}
          highestPrice={15000}
          risk={4}
          discription={
            <p className="text-sm text-left md:p-2">
              アシナガバチは人間が先に攻撃しない限り、基本的に攻撃性は低いとされていますが、危険な事に変わりはありません。
              <br />
              しかし、スズメバチやオオスズメバチは人間が近づくだけでも驚異的な攻撃性を見せ、刺されてしまうとアナフィラキシーショックを引き起こし、最悪の場合死に至ってしまう、非常に危険な害虫です。
              <br />
              絶対に自分では駆除しようとしたりしないで下さい。
            </p>
          }
          images={[
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
          ]}
        />
        <Description
          name="ハチ"
          lowestPrice={3000}
          highestPrice={15000}
          risk={4}
          discription={
            <p className="text-sm text-left md:p-2">
              アシナガバチは人間が先に攻撃しない限り、基本的に攻撃性は低いとされていますが、危険な事に変わりはありません。
              <br />
              しかし、スズメバチやオオスズメバチは人間が近づくだけでも驚異的な攻撃性を見せ、刺されてしまうとアナフィラキシーショックを引き起こし、最悪の場合死に至ってしまう、非常に危険な害虫です。
              <br />
              絶対に自分では駆除しようとしたりしないで下さい。
            </p>
          }
          images={[
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
          ]}
        />
        <Description
          name="ハチ"
          lowestPrice={3000}
          highestPrice={15000}
          risk={4}
          discription={
            <p className="text-sm text-left md:p-2">
              アシナガバチは人間が先に攻撃しない限り、基本的に攻撃性は低いとされていますが、危険な事に変わりはありません。
              <br />
              しかし、スズメバチやオオスズメバチは人間が近づくだけでも驚異的な攻撃性を見せ、刺されてしまうとアナフィラキシーショックを引き起こし、最悪の場合死に至ってしまう、非常に危険な害虫です。
              <br />
              絶対に自分では駆除しようとしたりしないで下さい。
            </p>
          }
          images={[
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
            "/assets/animals/animal7.png",
          ]}
        />
      </div>
    </div>
  );
};
