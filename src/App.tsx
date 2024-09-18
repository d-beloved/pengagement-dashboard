import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="w-dvw h-dvh bg-theme overflow-hidden">
			<Topbar />
			<Sidebar />
		</div>
	);
}

export default App;
