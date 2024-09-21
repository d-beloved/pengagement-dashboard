import { FunctionComponent } from "react";
import DropdownSection from "../common/DropdownSection";
import { assistance, commentType, integration } from "../../lib/Data";

const AutoRespSettings: FunctionComponent = () => {
	return (
		<div className="flex flex-col justify-center mt-3 w-full">
			<div className="flex justify-between items-center mb-2">
				<p className="text-sm text-slate-500">
					Enable To Automatically Like Comments
				</p>
				<input
					type="checkbox"
					className="toggle bg-slate-400 [--tglbg:white] checked:bg-themebg"
				/>
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
				showInputs
			/>
		</div>
	);
};

export default AutoRespSettings;
