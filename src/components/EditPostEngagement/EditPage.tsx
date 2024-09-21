import { FunctionComponent } from "react";
import Tabs from "../common/Tabs";
import GrabPost from "./GrabPost";
import SelectPost from "./SelectPost";
import Settings from "./Settings";
import AutoRespSettings from "./AutoRespSettings";
import { Link } from "react-router-dom";

const EditPage: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-4 w-11/12 mt-3 mx-11">
			<div className="flex justify-between px-5 items-center">
				<div className="breadcrumbs text-lg text-slate-600">
					<ul>
						<li>Capture Tools</li>
						<li>
							<Link to="/capture-tools/post-engagements">
								Post Engagement
							</Link>
						</li>
						<li>Edit</li>
					</ul>
				</div>
				<div className="btn btn-primary btn-sm text-white bg-themebg px-4 hover:bg-themebg/80">
					Save
				</div>
			</div>
			<div className="flex w-full bg-white h-[82%] mb-4 shadow-md rounded-lg">
				<Tabs
					type="tabs-bordered"
					width="w-2/5"
					contents={[
						{ title: "Settings", settings: <Settings /> },
						{
							title: "Auto Response",
							settings: <AutoRespSettings />,
						},
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
