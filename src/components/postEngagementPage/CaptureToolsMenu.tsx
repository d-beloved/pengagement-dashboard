import { FunctionComponent } from "react";
import link from "../assets/link.svg";
import jsonIcon from "../assets/format-json.svg";
import connectorIcon from "../assets/plugin-connect.svg";
import menuIcon from "../assets/menu-grid.svg";
import postIcon from "../assets/post-sign.svg";
import messengerIcon from "../assets/messenger.svg";

const CaptureToolsMenuItems = [
	{ icon: link, text: "Link Library", alt: "Link" },
	{ icon: jsonIcon, text: "JSON Generator", alt: "json-generator" },
	{ icon: connectorIcon, text: "Checkbox Plugin", alt: "connect" },
	{ icon: menuIcon, text: "Menu Plugin", alt: "messenger" },
	{ icon: postIcon, text: "Post Engagement", alt: "posts" },
	{ icon: messengerIcon, text: "Send To Messenger", alt: "send" },
];

const CaptureToolsMenu: FunctionComponent = () => {
	return (
		<ul className="menu bg-white shadow-md rounded-box w-[17rem] mt-8 h-fit">
			<li className="menu-title text-gray-400">Capture Tools</li>
			{CaptureToolsMenuItems.map((item) => (
				<li
					key={item.text}
					className="flex text-primary-content font-light"
				>
					<a>
						<img
							className="w-4 h-4"
							src={item.icon}
							alt={item.alt}
						/>
						{item.text}
					</a>
				</li>
			))}
		</ul>
	);
};

export default CaptureToolsMenu;
