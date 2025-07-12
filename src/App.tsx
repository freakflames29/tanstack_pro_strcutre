import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import queryClient from "./app/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import AllUser from "./features/AllUser";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <AllUser />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
