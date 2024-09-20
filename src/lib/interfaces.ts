export interface PostEngagementDataProps {
	id: number;
	platformIcon: string;
	name: string;
	engageMetrics: string;
	acquired: string;
	conversionData: string;
}

export interface PostEngagementState {
	postEngagementData: PostEngagementDataProps[];
}
