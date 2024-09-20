import { FunctionComponent, useState } from "react";
import Badges from "../common/Badges";

interface ReactionProps {
	reactions: string[];
	icons: string[];
	allowClick?: boolean;
}

const Reactions: FunctionComponent<ReactionProps> = ({
	reactions,
	icons,
	allowClick,
}) => {
	const [showBadge, setShowBadge] = useState(false);
	const [badgeList, setBadgeList] = useState<string[]>([]);
	const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

	const handleClick = (reaction: string, icon: string) => {
		if (allowClick) {
			setShowBadge(true);
			setBadgeList([...badgeList, reaction]);
			setSelectedIcons([...icon, icon]);
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
			<div className="flex justify-center">
				{reactions.map((reaction, index) => {
					const icon = icons[index];
					return (
						<div
							key={index}
							className="tooltip"
							data-tip={reaction}
						>
							<img
								className="w-6 hover:transform-gpu"
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
