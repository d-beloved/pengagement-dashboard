import React from "react";
import { DropdownProps } from "../../lib/interfaces";

const Dropdown: React.FC<DropdownProps> = ({
	label,
	options,
	value,
	onChange,
}) => {
	return (
		<div className="flex flex-col flex-wrap items-start w-full invert">
			<label className="form-control w-full">
				<div className="label">
					<span className="label-text">{label}</span>
				</div>
				<select
					className="select select-bordered bg-black"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				>
					{options.map((option) => {
						const { value, label } = option;
						return (
							<option key={value} value={value}>
								{label}
							</option>
						);
					})}
				</select>
			</label>
		</div>
	);
};

export default Dropdown;
