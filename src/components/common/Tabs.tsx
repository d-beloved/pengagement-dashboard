import { useState, FunctionComponent } from "react";
import { TabsProps } from "../../lib/interfaces";

const Tabs: FunctionComponent<TabsProps> = ({
	type,
	width,
	contents,
	fontSize,
	boxed,
}) => {
	const [active, setActive] = useState(0);
	const [content, setContent] = useState(contents[0].settings);

	const handleClick = (index: number) => {
		setActive(index);
		setContent(contents[index].settings);
	};

	return (
		<div className={`w-full ${width} flex flex-col`}>
			<div
				role="tablist"
				className={`tabs ${type} tabs-lg bg-white w-full`}
			>
				{contents.map((content, index) => {
					const isActive = active === index;
					return (
						<a
							key={index}
							role="tab"
							className={`tab ${fontSize ? fontSize : ""} text-slate-600 ${
								isActive ? "tab-active" : ""
							} ${boxed && isActive ? "!rounded-none !bg-themebg !text-white" : ""}`}
							onClick={() => handleClick(index)}
						>
							{content.title}
						</a>
					);
				})}
			</div>
			<div className="flex justify-center items-start w-full px-4 overflow-auto">
				{content}
			</div>
		</div>
	);
};

export default Tabs;
