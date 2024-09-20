import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/lens.svg";
import arrowDown from "../../assets/arrow-down.svg";
import TablePagination from "./TablePagination";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { selectPostEngagements } from "./postEngagementSlice";

const PostEngagementTable: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const postEngagementsData = useAppSelector(selectPostEngagements);

	return (
		<div className="rounded-box mt-5 w-9/12 mx-6">
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
			<div className="overflow-x-auto max-h-[34rem] bg-white">
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
						{postEngagementsData.map((item) => (
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
												<Link
													to={`/capture-tools/post-engagements/${item.id}/edit`}
												>
													Edit
												</Link>
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
			<TablePagination />
		</div>
	);
};

export default PostEngagementTable;
