import { PostEngagementDataProps } from "./interfaces";

export const getCurrentPageIndex = (
	itemsPerPage: number,
	currentPageData: PostEngagementDataProps[],
	allData: PostEngagementDataProps[],
) => {
	const firstItemIndex = allData.findIndex(
		(item) => item === currentPageData[0],
	);

	const currentPageIndex = Math.floor(firstItemIndex / itemsPerPage);

	return currentPageIndex + 1;
};
