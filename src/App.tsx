import { RouterProvider } from "react-router-dom";
import { Providers } from "./Provider";
import { RootRouter } from "./router/router";

function App() {
  return (
    <Providers>
      <RouterProvider router={RootRouter} />
    </Providers>
  );
}

export default App;
