import { FunctionComponent, useState } from "react";
import Badges from "../common/Badges";
import { ReactionProps } from "../../lib/interfaces";

const Reactions: FunctionComponent<ReactionProps> = ({
	reactions,
	icons,
	allowClick,
}) => {
	const [showBadge, setShowBadge] = useState(false);
	const [badgeList, setBadgeList] = useState<string[]>([]);
	const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

	const handleClick = (reaction: string, icon: string) => {
		if (allowClick && !badgeList.includes(reaction)) {
			setShowBadge(true);
			setBadgeList([...badgeList, reaction]);
			setSelectedIcons([...selectedIcons, icon]);
		}
	};

	const handleRemoveReaction = (index: number) => {
		const newBadgeList = [...badgeList];
		const newSelectedIcons = [...selectedIcons];
		newBadgeList.splice(index, 1);
		newSelectedIcons.splice(index, 1);
		setBadgeList(newBadgeList);
		setSelectedIcons(newSelectedIcons);
	};

	return (
		<>
			{showBadge && (
				<Badges
					badgeList={badgeList}
					handleRemoveBadge={handleRemoveReaction}
					iconList={selectedIcons}
				/>
			)}
			<div className="hidden group-hover:flex justify-center w-full gap-3">
				{reactions.map((reaction, index) => {
					const icon = icons[index];
					return (
						<div
							key={index}
							className="tooltip [--tooltip-text-color:white] cursor-pointer"
							data-tip={reaction}
						>
							<img
								className="w-11 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-150 duration-300"
								src={icon}
								alt={reaction}
								onClick={() => handleClick(reaction, icon)}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Reactions;
