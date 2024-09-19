import { FunctionComponent } from "react";
import Dropdown from "./Dropdown";
import cross from "../assets/cross.svg";

interface OptionProps {
	label: string;
	value: string;
}

interface Data {
	dropdownLabel: string;
	options: OptionProps[];
}

interface DropdownSectionProps {
	title: string;
	optionsData: Data[];
	showInputs?: boolean;
}

const DropdownSection: FunctionComponent<DropdownSectionProps> = ({
	title,
	optionsData,
	showInputs = false,
}) => {
	return (
		<div>
			<p>{title}</p>
			<div className="divider mb-3"></div>
			{optionsData.map((data, index) => {
				const { dropdownLabel, options } = data;
				return (
					<Dropdown
						key={index}
						label={dropdownLabel}
						options={options}
						value={options[0].value}
						onChange={(value) => console.log(value)}
					/>
				);
			})}
			{showInputs && (
				<>
					<label className="input input-sm outline outline-1 outline-black active:outline active:outline-black active:outline-1 bg-white flex items-center gap-2">
						<input
							type="text"
							className="grow text-black font-light"
							placeholder="Search"
						/>
						<img className="w-3 h-3" src={cross} alt="search" />
					</label>
					<div className="btn btn-primary btn-md text-white bg-themebg px-4">
						Add Comment
					</div>
				</>
			)}
		</div>
	);
};

export default DropdownSection;
