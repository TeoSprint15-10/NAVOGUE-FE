import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useInput;
