import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types/types";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { error: sessionError, data: sessionData } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { error, data } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};

export default getSongsByUserId;
