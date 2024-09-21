import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/lens.svg";
import arrowDown from "../../assets/arrow-down.svg";
import TablePagination from "./TablePagination";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
	changePage,
	deletePostEngagement,
	renamePostEngagement,
	searchPostEngagement,
	selectPostEngagements,
} from "./postEngagementSlice";
import { getCurrentPageIndex } from "../../lib/helpers";
import { MenuProps, PostEngagementDataProps } from "../../lib/interfaces";
import Modal from "../common/Modal";

const TableMenu: FunctionComponent<MenuProps> = ({
	item,
	showDropdownAbove,
	handleShowModal,
}) => {
	return (
		<div className={`dropdown ${showDropdownAbove ? "dropdown-top" : ""}`}>
			<div
				tabIndex={0}
				role="button"
				className="btn m-1 btn-outline btn-xs text-slate-600 hover:invert"
			>
				Actions
			</div>
			<ul
				tabIndex={0}
				className="menu dropdown-content bg-white font-light rounded-box z-[100] p-1 shadow"
			>
				<li className="text-xs">
					<Link
						to={`/capture-tools/post-engagements/${item.id}/edit`}
					>
						Edit
					</Link>
				</li>
				<li
					className="text-xs"
					onClick={() => handleShowModal(true, item)}
				>
					<a>Rename</a>
				</li>
				<li
					className="text-xs"
					onClick={() => handleShowModal(false, item)}
				>
					<a>Delete</a>
				</li>
			</ul>
		</div>
	);
};

const PostEngagementTable: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const postEngagements = useAppSelector(selectPostEngagements);
	const { postEngagementData, totalPostEngagement, allPostEngagementData } =
		postEngagements;

	const [showModal, setShowModal] = useState(false);
	const [rename, setRename] = useState(false);
	const [selectedItem, setSelectedItem] = useState<PostEngagementDataProps>();

	const handleShowModal = (
		shouldRename: boolean,
		data: PostEngagementDataProps,
	) => {
		setShowModal(true);
		setRename(shouldRename);
		setSelectedItem(data);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setRename(false);
		setSelectedItem(undefined);
	};

	const handleConfirmModal = (
		index: number,
		value: string,
		isRename?: boolean,
	) => {
		if (isRename) {
			dispatch(renamePostEngagement({ newVal: value, id: index }));
		} else {
			dispatch(deletePostEngagement(index));
		}
		setShowModal(false);
		setRename(false);
		setSelectedItem(undefined);
	};

	return (
		<div className="rounded-box mt-5 lg:w-9/12 w-full mx-auto sm:mx-6 px-6 sm:px-0">
			<div className="flex justify-between items-center mb-5">
				<p className="text-xl text-slate-700 text-ellipsis overflow-hidden whitespace-nowrap">
					Post Engagement
				</p>
				<div className="flex gap-4 mr-4">
					<label className="input input-sm outline outline-1 outline-black bg-white hidden md:flex items-center gap-2">
						<input
							type="text"
							className="grow text-black font-light"
							placeholder="Search"
							onChange={(e) =>
								setTimeout(() => {
									dispatch(
										searchPostEngagement(e.target.value),
									);
								}, 1000)
							}
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
							className="btn btn-outline btn-sm bg-white text-slate-700 flex hover:invert"
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
			<div className="overflow-x-auto max-h-[28rem] bg-white sm:rounded-lg sm:shadow-md">
				<table className="table table-xs min-w-full table-auto">
					<thead>
						<tr className="text-slate-400 font-bold border-b-inherit">
							<th>
								<div className="px-1">
									<input
										type="checkbox"
										className="checkbox checkbox-sm outline outline-slate-200 outline-1 checked:invert"
									/>
								</div>
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
						{postEngagementData.map((item) => {
							const dropdownAbove = postEngagementData
								.slice(-3)
								.includes(item);
							return (
								<tr
									key={item.id}
									className="text-slate-600 border-b-inherit"
								>
									<th>
										<div className="px-1">
											<input
												type="checkbox"
												className="checkbox checkbox-sm outline outline-slate-200 outline-1 checked:invert"
											/>
										</div>
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
										<div className="flex items-center">
											<div className="font-normal text-sm">
												{item.name}
											</div>
										</div>
									</td>
									<td>{item.engageMetrics}</td>
									<td>{item.acquired}</td>
									<td>{item.conversionData}</td>
									<td>
										<TableMenu
											item={item}
											showDropdownAbove={dropdownAbove}
											handleShowModal={handleShowModal}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<TablePagination
				numberOfPages={Math.ceil(totalPostEngagement / 10)}
				currentPage={getCurrentPageIndex(
					10,
					postEngagementData,
					allPostEngagementData,
				)}
				handlePageChange={(page) => {
					dispatch(changePage(page));
				}}
			/>
			{showModal && (
				<Modal
					showModal={showModal}
					renameItem={rename}
					dataId={selectedItem!.id}
					onClose={handleCloseModal}
					onConfirm={handleConfirmModal}
				/>
			)}
		</div>
	);
};

export default PostEngagementTable;
