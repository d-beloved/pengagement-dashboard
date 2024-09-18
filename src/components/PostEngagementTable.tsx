import { FunctionComponent } from "react";
import searchIcon from "../assets/lens.svg";
import igIcon from "../assets/instagram-1.svg";
import fbIcon from "../assets/fb-messenger.svg";
import arrowDown from "../assets/arrow-down.svg";
import leftDoubleArrow from "../assets/double-arrow-left.svg";
import leftArrow from "../assets/left-arrow-backup.svg";
import rightArrow from "../assets/right-arrow.svg";
import rightDoubleArrow from "../assets/double-arrow-right.svg";

const postEngagementData = [
	{
		id: 1,
		platformIcon: igIcon,
		name: "Infrastructure",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 2,
		platformIcon: fbIcon,
		name: "Functionality",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 3,
		platformIcon: igIcon,
		name: "Functionality",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 4,
		platformIcon: fbIcon,
		name: "Functionality",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 4,
		platformIcon: fbIcon,
		name: "Functionality",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 4,
		platformIcon: fbIcon,
		name: "Functionality",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
];

const PostEngagementTable: FunctionComponent = () => {
	return (
		<div className="rounded-box mt-8 w-9/12 mx-6">
			<div className="flex justify-between items-center">
				<p className="text-xl text-slate-700">Post Engagement</p>
				<div className="flex gap-4 mr-4 mb-5">
					<label className="input input-sm outline outline-1 outline-black active:outline active:outline-black active:outline-1 bg-white flex items-center gap-2">
						<input
							type="text"
							className="grow text-black font-light"
							placeholder="Search"
						/>
						<img
							className="w-3 h-3"
							src={searchIcon}
							alt="search"
						/>
					</label>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-outline btn-sm bg-white text-slate-700 flex"
						>
							Bulk Actions
							<img
								className="w-5 h-5"
								src={arrowDown}
								alt="arrow-down"
							/>
						</div>
						<ul
							tabIndex={0}
							className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
						>
							<li className="text-slate-700">
								<a>Delete</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="overflow-x-auto overflow-y-hidden bg-white">
				<table className="table table-sm">
					<thead>
						<tr className="text-slate-400 font-bold border-b-inherit">
							<th>
								<label>
									<input
										type="checkbox"
										className="checkbox checkbox-sm outline outline-slate-200 outline-1"
									/>
								</label>
							</th>
							<th></th>
							<th>Name</th>
							<th>Engaged / Unique</th>
							<th>Acquired</th>
							<th>Conversion</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{postEngagementData.map((item) => (
							<tr
								key={item.id}
								className="text-slate-600 border-b-inherit"
							>
								<th>
									<label>
										<input
											type="checkbox"
											className="checkbox checkbox-sm outline outline-slate-200 outline-1"
										/>
									</label>
								</th>
								<td className="max-w-1">
									<div className="mask mask-squircle h-4 w-4">
										<img
											src={item.platformIcon}
											alt="platform-icon"
										/>
									</div>
								</td>
								<td>
									<div className="flex items-center gap-3">
										<div className="font-semibold">
											{item.name}
										</div>
									</div>
								</td>
								<td>{item.engageMetrics}</td>
								<td>{item.acquired}</td>
								<td>{item.conversionData}</td>
								<th>
									<div className="dropdown">
										<div
											tabIndex={0}
											role="button"
											className="btn m-1 btn-outline btn-xs text-slate-600"
										>
											Actions
										</div>
										<ul
											tabIndex={0}
											className="dropdown-content menu bg-white font-light rounded-box z-[1] w-max h-max p-1 shadow"
										>
											<li>
												<a>Edit</a>
											</li>
											<li>
												<a>Rename</a>
											</li>
											<li>
												<a>Delete</a>
											</li>
										</ul>
									</div>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex justify-center items-center gap-4 mt-6">
				<div className="flex items-center gap-4">
					<button className="btn btn-circle btn-primary btn-sm">
						<img
							className="w-3 h-3"
							src={leftDoubleArrow}
							alt="left-arrow"
						/>
					</button>
					<button className="btn btn-circle btn-primary btn-sm">
						<img
							className="w-3 h-3"
							src={leftArrow}
							alt="left-arrow"
						/>
					</button>
					<button className="btn btn-circle btn-primary btn-sm">
						<img
							className="w-3 h-3"
							src={rightArrow}
							alt="left-arrow"
						/>
					</button>
					<button className="btn btn-circle btn-primary btn-sm">
						<img
							className="w-3 h-3"
							src={rightDoubleArrow}
							alt="right-arrow"
						/>
					</button>
				</div>
				<p className="text-slate-400">
					Page{" "}
					<span className="text-slate-600 font-semibold">1 of 2</span>
				</p>
				<div className="flex gap-2 items-center">
					<p className="items-center gap-1">• Go to page:</p>
					<input
						type="number"
						className="input input-sm input-bordered bg-white font-light w-16 focus:outline-offset-0"
						placeholder="1"
						min={1}
					/>
				</div>
			</div>
		</div>
	);
};

export default PostEngagementTable;
