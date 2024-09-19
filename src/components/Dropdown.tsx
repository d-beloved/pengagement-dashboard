import React from "react";

interface DropdownProps {
	label: string;
	options: Option[];
	value: string;
	onChange: (value: string) => void;
}

interface Option {
	label: string;
	value: string;
}

const Dropdown: React.FC<DropdownProps> = ({
	label,
	options,
	value,
	onChange,
}) => {
	return (
		<div className="flex flex-col flex-wrap items-start w-72">
			<label className="form-control w-full max-w-xs">
				<div className="label">
					<span className="label-text">{label}</span>
				</div>
				<select
					className="select select-bordered"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				>
					{options.map((option, index) => {
						const { value, label } = option;
						return (
							<option
								key={value}
								value={value}
								disabled={index === 0}
							>
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
