import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainComponent } from "@components/Main";
import { GlobalStyle } from "./global";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <MainComponent />
    </QueryClientProvider>
  );
}

export default App;
