import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import CaptureToolsMenu from "./components/CaptureToolsMenu";

function App() {
	return (
		<div className="w-dvw h-dvh bg-theme overflow-hidden">
			<Topbar />
			<div className="flex gap-8 w-full h-full">
				<Sidebar />
				<CaptureToolsMenu />
			</div>
		</div>
	);
}

export default App;
