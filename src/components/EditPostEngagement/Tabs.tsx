import { useState, FunctionComponent } from "react";

interface TabsProps {
	type: string;
	width: string;
	titles: string[];
	fontSize?: string;
	boxed?: boolean;
	onClick: () => void;
}

const Tabs: FunctionComponent<TabsProps> = ({
	type,
	width,
	titles,
	fontSize,
	boxed,
	onClick,
}) => {
	const [active, setActive] = useState(0);

	const handleClick = (index: number) => {
		setActive(index);
		onClick();
	};

	return (
		<div
			role="tablist"
			className={`tabs ${type} tabs-lg ${width} bg-white`}
		>
			{titles.map((title, index) => (
				<a
					key={index}
					role="tab"
					className={`tab ${fontSize ? fontSize : ""} text-slate-600 ${
						active === index ? "tab-active" : ""
					} ${boxed && active === index ? "!rounded-none !bg-themebg !text-white" : ""}`}
					onClick={() => handleClick(index)}
				>
					{title}
				</a>
			))}
		</div>
	);
};

export default Tabs;
