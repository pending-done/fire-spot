import GuideTop from "@/_components/common/GuideTop";
import React from "react";
import Card from "../component/Card";

const CampfirePage = () => {
  const guideData = [
    {
      title: "필수 준비물은 무엇이 있지?",
      desc: "받침이 있는 화로대와 방염포 사용하기! 맨땅에 불을 피우는 행위는 화재의 위험 및 환경 오염의 주범이 됩니다. 흙 속에 살고 있는 미생물과 벌레, 땅속의 씨앗이 다 타버리기 때문이지요. 받침대 있는 화로대와 방염포 사용을 실천해서 환경 보호에 힘쓰는 캠퍼가 되는 건 어떨까요?"
    },
    {
      title: "불멍 장소는 어떻게 정하지?",
      desc: "환경 보호를 위해 주변에 있는 나무를 사용하는 불멍은 자제해주세요! 캠핑 전문샵에서 구매하거나, 캠핑장에서 구매하는 것을 적극 추천드립니다. 노지에서 하는 캠핑이라면 주변 상황을 살펴서 화재 위험이 없는 곳에서 하면 되겠죠?"
    },
    {
      title: "불멍 잘하는 법",
      desc: "장작은 얇은 장작부터 굵은 장작까지 처음부터 굵은 장작을 이용해 불을 피우면 굉장히 어려운 불멍이 됩니다. 불이 쉽게 붙는 얇은 장작부터 불을 붙이는 것을 추천드려요. * 착화제 사용해보기 - 장작만으로 불을 붙이는 건 꽤나 어려운 초보 캠퍼들에게는 꽤나 어려운 과제일 수도 있습니다! 착화제를 이용해서 쉽게 불을 피워볼까요? * 색다른 불멍을 위한 오로라 가루 - 오로라 가루를 사용하면 형형색색의 불꽃을 보며 불멍 할 수 있습니다! 아이들, 친구, 연인과 함께 할 때 색다른 이벤트를 선사해 보는 것은 어떨까요? * 불멍에 빠질 수 없는 추천 Food - 불멍하면 빠질 수 없는 그 음식! 호일을 준비해서 군고구마와 감자를 드셔보세요! 호일 안에 버터까지 넣으면 더욱 더 맛있습니다. *마시멜로우 - 아이들과 캠핑할 땐 달달한 마시멜로우와 핫초코를 준비하는 건 어떨까요? 아이들에게 행복한 추억이 될 거예요."
    }
  ];
  return (
    <div className="my-[40px] mb-[60px]">
      <div className="inner m-auto w-full max-w-[1360px] px-[30px]">
        <GuideTop text={"불멍 가이드"} />

        <div className="flex flex-col gap-[50px] rounded-[34px] px-[60px] py-[80px] shadow-custom">
          <h2 className="text-[20px] font-bold">
            캠핑의 꽃인 불멍! 안전하게 즐기는 방법에는 무엇이 있을까요?
          </h2>

          <ul className="flex flex-col gap-[20px]">
            {guideData.map((guide) => {
              return (
                <li key={guide.title}>
                  <Card title={guide.title} desc={guide.desc} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CampfirePage;
