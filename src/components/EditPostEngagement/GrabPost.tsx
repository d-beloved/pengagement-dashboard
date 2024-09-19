import { FunctionComponent } from "react";

const GrabPost: FunctionComponent = () => {
	return (
		<div className="flex justify-center mt-10 w-3/5 items-center">
			<input
				type="text"
				placeholder="Post ID / URL"
				className="h-11 text-slate-700 input outline outline-1 outline-slate-200 focus:outline-slate-300 focus:border-none bg-white w-full rounded-e-none"
			/>
			<button className="btn btn-primary btn-md text-white bg-themebg px-4 rounded-s-none">
				Grab Post
			</button>
		</div>
	);
};

export default GrabPost;
