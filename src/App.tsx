import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import EditPage from "./components/editPostEngagement/EditPage";
import PostEngagementPage from "./components/postEngagementPage/PostEngagementPage";

function App() {
	return (
		<div className="w-dvw h-dvh bg-theme overflow-hidden">
			<Topbar />
			<div className="flex gap-8 w-full h-full">
				<Sidebar />
				{/* <PostEngagementPage /> */}
				<EditPage />
			</div>
		</div>
	);
}

export default App;
