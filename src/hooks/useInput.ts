import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<string>("");
  console.log(value);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

export default useInput;
