"use server";

import { CampApiResponse } from "@/app/(pages)/camps/types/Camp";
import {
  GOCAMPING_HOST,
  GOCAMPING_KEY,
  GOCAMPING_ALL,
  GOCAMPING_SEARCH
} from "../api/apiKey";

export const getTotalData = async (page?: number, numOfRows?: number) => {
  try {
    const res = await fetch(
      `${GOCAMPING_HOST}${GOCAMPING_ALL}?serviceKey=${GOCAMPING_KEY}&numOfRows=${numOfRows ? numOfRows : 4044}&pageNo=${page ? page : "max"}&MobileOS=ETC&MobileApp=TestApp&_type=json`,
      {
        next: {
          revalidate: 86400
        }
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: CampApiResponse = await res.json();
    return data.response.body.items.item;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// TODO - 준열,지영 각자 쓰던 함수 통일 필요, numOfRows=100 설정 체크 필요
export const getSearchCampsData = async (keyword: string) => {
  try {
    const res = await fetch(
      `${GOCAMPING_HOST}${GOCAMPING_SEARCH}?serviceKey=${GOCAMPING_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&keyword=${encodeURIComponent(keyword)}&pageNo=1&numOfRows=100`,
      {
        next: {
          revalidate: 86400
        }
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.response.body.items.item;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
