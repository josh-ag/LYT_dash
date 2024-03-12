import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages";
import { RootLayout } from "../Components/RootLayout";
import { AnalyticsPage } from "../pages/analytics";
import { CommunicationPage } from "../pages/communication";
import { NotificationsPage } from "../pages/notifications";
import { MediaPage } from "../pages/media";
import { SupportPage } from "../pages/support";
import { SettingsPage } from "../pages/settings";
import { ErrorElement } from "../Components/ErrorElement";

export const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { element: <MainPage />, index: true },
      { path: "/analytics", element: <AnalyticsPage /> },
      { path: "/communities", element: <CommunicationPage /> },
      { path: "/notifications", element: <NotificationsPage /> },
      { path: "/media", element: <MediaPage /> },
      { path: "/support", element: <SupportPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
]);
