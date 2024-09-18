import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import CaptureToolsMenu from "./components/CaptureToolsMenu";
import PostEngagementTable from "./components/PostEngagementTable";

function App() {
	return (
		<div className="w-dvw h-dvh bg-theme overflow-hidden">
			<Topbar />
			<div className="flex gap-8 w-full h-full">
				<Sidebar />
				<CaptureToolsMenu />
				<PostEngagementTable />
			</div>
		</div>
	);
}

export default App;
