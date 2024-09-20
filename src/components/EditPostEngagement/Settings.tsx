import { FunctionComponent } from "react";
import angry from "../../assets/angry.svg";
import care from "../../assets/care.svg";
import haha from "../../assets/haha.svg";
import like from "../../assets/like.svg";
import love from "../../assets/love.svg";
import sad from "../../assets/sad.svg";
import wow from "../../assets/wow.svg";
import DropdownSection from "../common/DropdownSection";
import JoinedInput from "../common/JoinedInput";
import Reactions from "../common/Reactions";

const messageType = [
	{
		value: "flow",
		label: "Flow",
	},
	{
		value: "single_message",
		label: "Single Message",
	},
];

const flowOptions = [
	{
		value: "",
		label: "Select",
	},
	{
		value: "welcome_message",
		label: "Welcome Message",
	},
	{
		value: "default_reply",
		label: "Default Reply",
	},
];

const msg = [
	{
		value: "text1",
		label: "Text Card #1",
	},
	{
		value: "text2",
		label: "Text Card #2",
	},
];

const Settings: FunctionComponent = () => {
	return (
		<div className="flex flex-col justify-center mt-3 w-full">
			<div className="flex justify-between items-center mb-2">
				<p>Enable To Privately Reply To First-Level Comments Only</p>
				<input type="checkbox" className="toggle" />
			</div>
			<div className="flex justify-between items-center mb-2">
				<p>Send Message To The Same User Only Once Per Post</p>
				<input type="checkbox" className="toggle" />
			</div>
			<div>
				<p>Require a Post Reaction</p>
				<div className="divider mb-3"></div>
				<Reactions
					reactions={[
						"angry",
						"care",
						"haha",
						"like",
						"love",
						"sad",
						"wow",
					]}
					icons={[angry, care, haha, like, love, sad, wow]}
					allowClick
				/>
				<div className="btn btn-primary btn-md text-white bg-themebg px-4 mb-3">
					Require Reaction
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
