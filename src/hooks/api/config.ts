import { useQuery } from "@tanstack/react-query";

import { ConfigAPIResponse } from "@/types";
import { getConfigData } from "@/api/queries/config";

export const useConfigQuery = (initialData?: ConfigAPIResponse) => {
  return useQuery({
    queryKey: ["config"],
    queryFn: getConfigData,
    initialData: initialData as ConfigAPIResponse,
    select: (data) => data.Data,
    staleTime: Infinity,
  });
};
