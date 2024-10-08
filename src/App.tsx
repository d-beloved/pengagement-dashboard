import { FunctionComponent } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import PostEngagementPage from "./components/postEngagementPage/PostEngagementPage";
import EditPage from "./components/editPostEngagement/EditPage";

const Root: FunctionComponent = () => {
	return (
		<div className="w-dvw h-dvh bg-theme overflow-hidden">
			<Topbar />
			<div className="flex gap-2 w-full h-full">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/capture-tools/post-engagements",
		element: <Root />,
		children: [
			{
				path: "",
				element: <PostEngagementPage />,
			},
			{
				path: ":id/edit",
				element: <EditPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
