import { FunctionComponent } from "react";
import DropdownSection from "../common/DropdownSection";
import JoinedInput from "../common/JoinedInput";
import Reactions from "../common/Reactions";
import { flowOptions, Icons, messageType, msg } from "../../lib/Data";

const Settings: FunctionComponent = () => {
	return (
		<div className="flex flex-col mt-3 w-full">
			<div className="flex justify-between items-center mb-2">
				<p className="text-sm text-slate-500">
					Enable To Privately Reply To First-Level Comments Only
				</p>
				<input
					type="checkbox"
					className="toggle bg-slate-400 [--tglbg:white] checked:bg-themebg"
				/>
			</div>
			<div className="flex justify-between items-center mb-2">
				<p className="text-sm text-slate-500">
					Send Message To The Same User Only Once Per Post
				</p>
				<input
					type="checkbox"
					className="toggle bg-slate-400 [--tglbg:white] checked:bg-themebg"
				/>
			</div>
			<div className="mt-3">
				<p className="text-sm text-slate-600 font-semibold mb-1">
					Require a Post Reaction
				</p>
				<hr className="w-full mb-3" />
				<div className="w-full group">
					<Reactions
						reactions={[
							"like",
							"love",
							"haha",
							"wow",
							"sad",
							"angry",
							"care",
						]}
						icons={[...Icons]}
						allowClick
					/>
					<div className="btn btn-primary btn-md text-white bg-themebg px-4 mt-3 mb-6 w-full group-hover:bg-themebg">
						Require Reaction
					</div>
				</div>
				<JoinedInput
					btnText="Add Keyword"
					placeholder="Specify Keywords"
					label="Exclude Comments With These Keywords"
					enableBadge
				/>
				<JoinedInput
					btnText="Add Keyword"
					placeholder="Specify Keywords"
					label="Only Trigger For Comments With These Keywords"
					enableBadge
				/>
			</div>
			<DropdownSection
				title="Private Reply After Post Engagement"
				optionsData={[
					{
						dropdownLabel: "Select message type",
						options: messageType,
					},
					{ dropdownLabel: "Select flow", options: flowOptions },
					{ dropdownLabel: "Select message", options: msg },
				]}
			/>
		</div>
	);
};

export default Settings;
