import { useState } from "react";

const useInput = (initValue: string) => {
  const [value, setValue] = useState<string>(initValue);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useInput;
