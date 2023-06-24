import React from "react";

import { Header } from "../components";
import SearchInput from "../components/SearchInput";
import { SearchContent } from "./components/SearchContent";
import getSongsByTitle from "@/actions/getSongsByTitle";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search: React.FC<SearchProps> = async ({ searchParams }) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-md bg-neutral-900">
      <Header className="from-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-3xl font-semibold text-white">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
