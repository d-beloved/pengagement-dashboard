import { FunctionComponent } from "react";
import cross from "../../assets/cross.svg";

interface BadgesProps {
	badgeList: string[];
	iconList?: string[];
	handleRemoveBadge: (index: number) => void;
}

const Badges: FunctionComponent<BadgesProps> = ({
	badgeList,
	iconList,
	handleRemoveBadge,
}) => {
	return (
		<div className="flex gap-2 mb-2">
			{badgeList.map((reaction, index) => {
				const icon = iconList && iconList[index];
				return (
					<div key={index} className="badge badge-info gap-2">
						{icon && <img className="w-4" src={icon} alt="icon" />}
						{reaction}
						<img
							src={cross}
							alt="remove"
							className="w-4 cursor-pointer"
							onClick={() => handleRemoveBadge(index)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Badges;
