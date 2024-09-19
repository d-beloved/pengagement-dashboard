import { FunctionComponent } from "react";
import DropdownSection from "../DropdownSection";

const commentType = [
	{
		value: "static",
		label: "Static",
	},
	{
		value: "open_ai",
		label: "Open AI",
	},
];

const integration = [
	{
		value: "integration1",
		label: "Integration 1",
	},
	{
		value: "integration2",
		label: "Integration 2",
	},
];

const assistance = [
	{
		value: "assistance1",
		label: "Assistance 1",
	},
	{
		value: "assistance2",
		label: "Assistance 2",
	},
];

const AutoRespSettings: FunctionComponent = () => {
	return (
		<div className="flex flex-col justify-center mt-3 w-full">
			<div className="flex justify-between items-center mb-2">
				<p>Enable To Automatically Like Comments</p>
				<input type="checkbox" className="toggle" />
			</div>
			<DropdownSection
				title="Reply In Comments"
				optionsData={[
					{
						dropdownLabel: "Comment Type",
						options: commentType,
					},
					{
						dropdownLabel: "Select Integration",
						options: integration,
					},
					{ dropdownLabel: "Select Assistance", options: assistance },
				]}
			/>
		</div>
	);
};

export default AutoRespSettings;
