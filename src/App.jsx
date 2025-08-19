import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobPage, { jobLoader } from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
  // Function to handle adding a job
  // This function will be passed to the AddJobPage component
  // It will send a POST request to the API to add a new job
  // and then navigate back to the jobs page.
  // The function is defined here so that it can be used in the router setup.
  // It uses the Fetch API to send a POST request with the new job data.
  // The new job data is constructed from the form inputs in the AddJobPage component.
  // After the job is added, it navigates back to the jobs page.
  // The function does not return any value, it just performs the action of adding a job
  // and navigating to the jobs page.
  // This function is used in the AddJobPage component to handle the form submission.
  // It is passed as a prop to the AddJobPage component.
  // The AddJobPage component will call this function when the form is submitted.
  // The function is defined here so that it can be used in the router setup.
  // It is not defined inside the AddJobPage component because it needs to be accessible
  // in the router setup and passed as a prop to the AddJobPage component.
  // The function is defined as an async function because it uses the Fetch API to send a
  // POST request to the API. The Fetch API returns a promise, so we need to
  // use async/await to handle the asynchronous operation.
  // The function is defined here so that it can be used in the router setup.

  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Setting up the router with routes for the application

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
