import { FunctionComponent, useState } from "react";
import Dropdown from "./Dropdown";
import { DropdownSectionProps } from "../../lib/interfaces";
import JoinedInput from "./JoinedInput";

const DropdownSection: FunctionComponent<DropdownSectionProps> = ({
	title,
	optionsData,
	showInputs = false,
}) => {
	const [commentInputs, setCommentInputs] = useState<number[]>([]);
	const [dropdownValues, setDropdownValues] = useState<{
		[key: string]: string;
	}>(
		optionsData.reduce(
			(acc, { options }, index) => ({
				...acc,
				[index]: options[0].value,
			}),
			{},
		),
	);

	const handleAddComment = () => {
		setCommentInputs((commentInputs) => [
			...commentInputs,
			commentInputs.length,
		]);
	};

	const handleRemoveComment = (index: number) => {
		const newCommentInputs = commentInputs.filter((val) => val !== index);
		setCommentInputs(newCommentInputs);
	};

	const handleDropdownChange = (index: number, value: string) => {
		setDropdownValues((prevValues) => ({ ...prevValues, [index]: value }));
	};

	// this is brittle, it needs improvement
	const renderedOptions =
		dropdownValues[0] === "flow"
			? optionsData.slice(0, 2)
			: dropdownValues[0] === "static"
				? optionsData.slice(0, 1)
				: optionsData;

	const shouldShowInputs = showInputs && dropdownValues[0] === "static";

	return (
		<div className="w-full mb-8">
			<p className="text-sm text-slate-600 font-semibold mb-1">{title}</p>
			<hr className="w-full mb-3" />
			{renderedOptions.map((data, index) => {
				const { dropdownLabel, options } = data;
				return (
					<Dropdown
						key={index}
						label={dropdownLabel}
						options={options}
						value={dropdownValues[index] || ""}
						onChange={(value) => handleDropdownChange(index, value)}
					/>
				);
			})}
			{shouldShowInputs && (
				<div className="flex flex-col gap-4 mt-4 w-full mx-auto">
					{commentInputs.map((index) => (
						<JoinedInput
							placeholder="Type your comment here"
							action={() => handleRemoveComment(index)}
							hasIcon
							index={index}
							key={index}
						/>
					))}
					{commentInputs.length < 10 && (
						<div
							onClick={handleAddComment}
							className="btn btn-primary btn-md text-white bg-themebg px-4 w-2/5 self-center hover:bg-themebg"
						>
							Add Comment
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default DropdownSection;
