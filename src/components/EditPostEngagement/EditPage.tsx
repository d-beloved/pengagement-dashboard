import { FunctionComponent } from "react";
import Tabs from "../common/Tabs";
import GrabPost from "./GrabPost";
import SelectPost from "./SelectPost";
import Settings from "./Settings";
import AutoRespSettings from "./AutoRespSettings";
import { Link } from "react-router-dom";

const EditPage: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-4 lg:w-11/12 w-full mt-3 mx-auto sm:mx-11 px-6 sm:px-0">
			<div className="flex flex-col sm:flex-row justify-between px-5 items-center gap-3 sm:gap-0">
				<div className="breadcrumbs text-sm sm:text-base md:text-lg text-slate-600">
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
			<div className="flex flex-col md:flex-row overflow-auto w-full bg-white h-[82%] mb-4 shadow-md rounded-lg">
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
				<hr className="md:hidden w-full border-slate-300 border-2 mb-3" />
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
