import { useQuery } from "@tanstack/react-query";
import { getTagList } from "../../api/tag";
import { QUERY_KEY } from "../../constants/key";

const useTagList = () => {
  return useQuery({
    queryKey: [QUERY_KEY.TAG_LIST],
    queryFn: () => getTagList(),
  });
};

export default useTagList;
