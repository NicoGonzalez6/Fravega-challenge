import { Input } from "@chakra-ui/react";
import { ChangeEventHandler, memo } from "react";

export const SearchInput = memo(({ value, onChange }: { value: string; onChange: ChangeEventHandler<HTMLInputElement> }) => {
  return <Input w={["100%", 350]} size={"sm"} value={value} onChange={onChange} />;
});
