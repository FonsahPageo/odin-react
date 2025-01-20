import { App } from "./App";
import { ErrorPage } from "./errorpage";
import { Image } from "./practice";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "practice",
    element: <Image />,
  },
  {
    path: "practice/:name",
    element: <Image />,
  },
];

export { routes };
