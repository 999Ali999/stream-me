"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

export const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        value={value}
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          onClick={onClear}
          className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition"
          size="icon"
        />
      )}
      <Button
        type="submit"
        variant="secondary"
        className="rounded-l-none h-10 w-10"
        size="icon"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
      </Button>
    </form>
  );
};
