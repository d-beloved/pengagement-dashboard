import { FunctionComponent, useState } from "react";
import Badges from "../common/Badges";
import { JoinedInputProps } from "../../lib/interfaces";
import cross from "../../assets/cross.svg";

const JoinedInput: FunctionComponent<JoinedInputProps> = ({
	btnText,
	placeholder,
	label,
	enableBadge,
	hasIcon,
	index,
	action,
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
		<div>
			{label && (
				<label className="text-slate-700 text-sm" htmlFor="val">
					{label}
				</label>
			)}
			{showBadge && (
				<Badges
					badgeList={badgeList}
					handleRemoveBadge={handleRemoveBadge}
				/>
			)}
			{hasIcon ? (
				<div className="flex justify-center items-center">
					<label
						key={index}
						className="input input-lg border-8 border-slate-200 bg-white flex items-center gap-2 rounded-e-none w-full"
					>
						<input
							type="text"
							className=" text-black font-light text-[15px]"
							placeholder={placeholder}
						/>
					</label>
					<button
						onClick={action!}
						className="btn btn-primary btn-lg text-white bg-slate-200 hover:bg-slate-200 px-4 rounded-s-none border-none"
					>
						<img
							className="w-5 h-5 cursor-pointer"
							src={cross}
							alt="comment"
						/>
					</button>
				</div>
			) : (
				<div className="flex w-full items-center mb-6">
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
						className="btn btn-primary btn-md text-white bg-themebg px-4 rounded-s-none hover:bg-themebg/80"
					>
						{btnText}
					</button>
				</div>
			)}
		</div>
	);
};

export default JoinedInput;
