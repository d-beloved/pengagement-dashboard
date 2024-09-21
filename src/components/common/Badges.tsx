import { FunctionComponent } from "react";
import cross from "../../assets/cross.svg";
import { Icons } from "../../lib/Data";
import { BadgesProps } from "../../lib/interfaces";

const Badges: FunctionComponent<BadgesProps> = ({
	badgeList,
	iconList,
	handleRemoveBadge,
}) => {
	return (
		<div className="flex gap-2 my-2 flex-wrap">
			{badgeList.map((reaction, index) => {
				const iconString = iconList && iconList[index];
				const icon = Icons.find((icon) => icon === iconString);

				return (
					<div
						key={index}
						className="badge badge-info gap-2 bg-themebg/20 py-3"
					>
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
