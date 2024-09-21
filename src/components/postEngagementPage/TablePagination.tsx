import { FC } from "react";
import leftDoubleArrow from "../../assets/double-arrow-left.svg";
import leftArrow from "../../assets/left-arrow-backup.svg";
import rightArrow from "../../assets/right-arrow.svg";
import rightDoubleArrow from "../../assets/double-arrow-right.svg";
import { PaginationProps } from "../../lib/interfaces";

const paginationButtons = (
	icon: string,
	text: string,
	isDisabled: boolean,
	action: () => void,
): JSX.Element => {
	return (
		<button
			className="btn btn-circle btn-primary btn-sm bg-themebg hover:bg-themebg disabled:bg-slate-400"
			onClick={action}
			disabled={isDisabled}
		>
			<img className="w-3 h-3" src={icon} alt={text} />
		</button>
	);
};

const TablePagination: FC<PaginationProps> = ({
	numberOfPages,
	currentPage,
	handlePageChange,
}) => {
	const handleGoToFirstPage = () => {
		handlePageChange(1);
	};

	const handleGoToPreviousPage = () => {
		handlePageChange(currentPage - 1);
	};

	const handleGoToNextPage = () => {
		handlePageChange(currentPage + 1);
	};

	const handleGoToLastPage = () => {
		handlePageChange(numberOfPages);
	};

	return (
		<div className="flex justify-center items-center gap-4 mt-6">
			<div className="flex items-center gap-4">
				{paginationButtons(
					leftDoubleArrow,
					"left-double-arrow",
					currentPage === 1 || numberOfPages === 0,
					handleGoToFirstPage,
				)}
				{paginationButtons(
					leftArrow,
					"left-arrow",
					currentPage === 1 || numberOfPages === 0,
					handleGoToPreviousPage,
				)}
				{paginationButtons(
					rightArrow,
					"right-arrow",
					currentPage === numberOfPages || numberOfPages === 0,
					handleGoToNextPage,
				)}
				{paginationButtons(
					rightDoubleArrow,
					"right-double-arrow",
					currentPage === numberOfPages || numberOfPages === 0,
					handleGoToLastPage,
				)}
			</div>
			<p className="hidden xs:block text-slate-600">
				Page{" "}
				<span className="font-semibold">
					{currentPage} of {numberOfPages}
				</span>
			</p>
			<div className="hidden md:flex gap-2 items-center">
				<p className="items-center gap-1 text-slate-600">
					• Go to page:
				</p>
				<input
					type="number"
					className="input input-sm input-bordered bg-black font-light w-16 focus:outline-offset-0 text-slate-200 invert"
					placeholder="1"
					min={1}
					max={numberOfPages}
					onChange={(e) => {
						const page = +e.target.value;
						if (page >= 1 && page <= numberOfPages) {
							handlePageChange(page);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default TablePagination;
