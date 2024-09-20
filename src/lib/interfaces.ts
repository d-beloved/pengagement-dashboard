export interface PostEngagementDataProps {
	id: number;
	platformIcon: string;
	name: string;
	engageMetrics: string;
	acquired: string;
	conversionData: string;
}

export interface PostEngagementState {
	totalPostEngagement: number;
	allPostEngagementData: PostEngagementDataProps[];
	postEngagementData: PostEngagementDataProps[];
}

export interface MenuProps {
	item: PostEngagementDataProps;
	showDropdownAbove?: boolean;
	handleShowModal: (action: boolean, item: PostEngagementDataProps) => void;
}
