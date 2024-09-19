import { FunctionComponent } from "react";

interface JoinedInputProps {
	btnText: string;
	placeholder: string;
	label?: string;
}

const JoinedInput: FunctionComponent<JoinedInputProps> = ({
	btnText,
	placeholder,
	label,
}) => {
	return (
		<>
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
			/>
			<button className="btn btn-primary btn-md text-white bg-themebg px-4 rounded-s-none">
				{btnText}
			</button>
		</>
	);
};

export default JoinedInput;
