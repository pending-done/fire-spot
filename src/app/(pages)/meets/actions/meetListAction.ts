"use server";

import { createClient } from "@/_utils/supabase/server";
import { MeetWithCamp } from "../types/meet.types";
import supabaseRpc from "@/_utils/supabase/supabase.rpc";

const getMeetList = async (): Promise<MeetWithCamp[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc(supabaseRpc.meet.getMeetList);

  if (error) {
    console.error("getMeetList Error", error);
    throw new Error();
  }

  const typedData = data as unknown as MeetWithCamp[];
  return typedData;
};

export { getMeetList };
