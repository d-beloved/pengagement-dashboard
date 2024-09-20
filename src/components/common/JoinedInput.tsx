import { FunctionComponent, useState } from "react";
import Badges from "../common/Badges";

interface JoinedInputProps {
	btnText: string;
	placeholder: string;
	label?: string;
	enableBadge?: boolean;
}

const JoinedInput: FunctionComponent<JoinedInputProps> = ({
	btnText,
	placeholder,
	label,
	enableBadge,
}) => {
	const [value, setValue] = useState("");
	const [showBadge, setShowBadge] = useState(false);
	const [badgeList, setBadgeList] = useState<string[]>([]);

	const handleClick = () => {
		if (value.length > 0 && enableBadge) {
			setShowBadge(true);
			setBadgeList([...badgeList, value]);
			setValue("");
		}
	};

	const handleRemoveBadge = (index: number) => {
		const newBadgeList = [...badgeList];
		newBadgeList.splice(index, 1);
		setBadgeList(newBadgeList);
	};

	return (
		<>
			{showBadge && (
				<Badges
					badgeList={badgeList}
					handleRemoveBadge={handleRemoveBadge}
				/>
			)}
			{label && (
				<label className="text-slate-700 mb-2" htmlFor="val">
					{label}
				</label>
			)}
			<input
				type="text"
				name="val"
				placeholder={placeholder}
				className="h-11 text-slate-700 input outline outline-1 outline-slate-200 focus:outline-slate-300 focus:border-none bg-white w-full rounded-e-none"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				onClick={handleClick}
				className="btn btn-primary btn-md text-white bg-themebg px-4 rounded-s-none"
			>
				{btnText}
			</button>
		</>
	);
};

export default JoinedInput;
