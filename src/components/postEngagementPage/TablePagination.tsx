import { FC } from "react";
import leftDoubleArrow from "../../assets/double-arrow-left.svg";
import leftArrow from "../../assets/left-arrow-backup.svg";
import rightArrow from "../../assets/right-arrow.svg";
import rightDoubleArrow from "../../assets/double-arrow-right.svg";

interface PaginationProps {
	numberOfPages: number;
	currentPage: number;
	handlePageChange: (page: number) => void;
}

const paginationButtons = (icon: string, text: string): JSX.Element => {
	return (
		<button className="btn btn-circle btn-primary btn-sm bg-themebg hover:bg-themebg">
			<img className="w-3 h-3" src={icon} alt={text} />
		</button>
	);
};

const TablePagination: FC = () => {
	return (
		<div className="flex justify-center items-center gap-4 mt-6">
			<div className="flex items-center gap-4">
				{paginationButtons(leftDoubleArrow, "left-double-arrow")}
				{paginationButtons(leftArrow, "left-arrow")}
				{paginationButtons(rightArrow, "right-arrow")}
				{paginationButtons(rightDoubleArrow, "right-double-arrow")}
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
	);
};

export default TablePagination;
