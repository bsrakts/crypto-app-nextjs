// QueryClientProvider bileşeni içinde karmaşık bir yapı kullanmamaya dikkat edin.
import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

export default function QueryClientProvider({ children }: any) {
  return <Provider client={queryClient}>{children}</Provider>;
}
