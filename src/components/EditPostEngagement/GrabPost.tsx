import { FunctionComponent } from "react";
import JoinedInput from "./JoinedInput";

const GrabPost: FunctionComponent = () => {
	return (
		<div className="flex justify-center mt-10 w-3/5 items-center">
			<JoinedInput btnText="Grab Post" placeholder="Post ID / URL" />
		</div>
	);
};

export default GrabPost;
