import React from "react";
import GuideTop from "@/_components/common/GuideTop";
import { BeginnerGuide } from "@/_utils/guide";
import BeginnerCard from "./component/Card";

const BeginnerPage = () => {
  return (
    <div className="my-[40px] mb-[60px]">
      <div className="inner m-auto w-full max-w-[1360px] px-[30px] max-989:px-[15px]">
        <GuideTop text={"초보 캠퍼 가이드"} />
        <ul className="flex flex-wrap content-stretch justify-center gap-[50px]">
          {BeginnerGuide.map((guide) => {
            return (
              <li
                key={guide.title}
                className="w-full max-w-[calc(33.333%-50px)] rounded-[12px] bg-[#FFEFE5] shadow-custom"
              >
                <BeginnerCard
                  img={guide.img}
                  title={guide.title}
                  desc={guide.desc}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BeginnerPage;
