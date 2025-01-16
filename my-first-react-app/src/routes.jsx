import App from "./App";
import { ErrorPage } from "./errorpage";
import { Profile } from "./practice";

const routes = [
    { 
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
];

export { routes };