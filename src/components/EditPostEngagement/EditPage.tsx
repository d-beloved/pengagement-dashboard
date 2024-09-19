import { FunctionComponent } from "react";
import Tabs from "./Tabs";
import GrabPost from "./GrabPost";
import SelectPost from "./SelectPost";

const EditPage: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-4 w-11/12 mt-3">
			<div className="flex justify-between px-5 items-center">
				<div className="breadcrumbs text-lg text-slate-600">
					<ul>
						<li>
							<a>Capture Tools</a>
						</li>
						<li>
							<a>Post Engagement</a>
						</li>
						<li>Edit</li>
					</ul>
				</div>
				<div className="btn btn-primary btn-sm text-white bg-themebg px-4">
					Save
				</div>
			</div>
			<div className="flex w-full bg-white h-[82%] mb-4 shadow-md rounded-lg">
				<Tabs
					type="tabs-bordered"
					width="w-2/5"
					contents={[
						{ title: "Settings", settings: <SelectPost /> },
						{ title: "Auto Response", settings: <GrabPost /> },
					]}
					fontSize="text-sm"
				/>
				<Tabs
					type="tabs-boxed"
					width="w-3/5"
					contents={[
						{ title: "Select A Post", settings: <SelectPost /> },
						{ title: "Post ID / URL", settings: <GrabPost /> },
					]}
					boxed
				/>
			</div>
		</div>
	);
};

export default EditPage;
