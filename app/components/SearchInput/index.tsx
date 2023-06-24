"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import Input from "../Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="What do you want to listen to?"
    />
  );
};

export default SearchInput;
