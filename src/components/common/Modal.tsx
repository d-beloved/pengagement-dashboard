import { FC, MouseEvent, useState } from "react";
import { ModalProps } from "../../lib/interfaces";

const Modal: FC<ModalProps> = ({
	showModal,
	renameItem,
	dataId,
	onClose,
	onConfirm,
}) => {
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleConfirm = (e: MouseEvent) => {
		e.preventDefault();
		if ((renameItem && value.length > 4) || !renameItem) {
			onConfirm(dataId, value, renameItem);
		} else {
			setError("Please enter at least 5 characters");
		}
	};

	return (
		<dialog
			open={showModal}
			className="modal modal-top bg-themebg bg-opacity-25 "
		>
			<div className="modal-box bg-white mt-20 rounded-t-box mx-auto w-11/12 sm:w-4/5 md:w-2/5 text-slate-700 shadow-md">
				<form method="dialog" className="flex flex-col gap-3">
					{renameItem ? (
						<>
							<p>Please enter new name:</p>
							<input
								type="text"
								name="val"
								placeholder="Enter text here"
								className="h-11 text-slate-700 input outline outline-1 outline-slate-200 focus:outline-slate-300 focus:border-none bg-white w-full rounded-e-none"
								value={value}
								onChange={(e) => {
									setValue(e.target.value);
									setError("");
								}}
							/>
							{error && (
								<p className="text-red-500 text-sm">{error}</p>
							)}
						</>
					) : (
						<p>
							Are you sure you want to delete the selected entry?
						</p>
					)}
					<button
						onClick={onClose}
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</button>
					<div className="flex justify-between mt-10 items-center">
						<button
							onClick={onClose}
							className="btn btn-sm btn-ghost bg-slate-200"
						>
							Cancel
						</button>
						<button
							onClick={(e: MouseEvent) => handleConfirm(e)}
							className="btn btn-sm bg-themebg text-white hover:bg-themebg/80"
						>
							Confirm
						</button>
					</div>
				</form>
			</div>
		</dialog>
	);
};

export default Modal;
