import { FunctionComponent } from "react";
import CaptureToolsMenu from "./CaptureToolsMenu";
import PostEngagementTable from "./PostEngagementTable";

const PostEngagementPage: FunctionComponent = () => {
	return (
		<>
			<CaptureToolsMenu />
			<PostEngagementTable />
		</>
	);
};

export default PostEngagementPage;
