import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
