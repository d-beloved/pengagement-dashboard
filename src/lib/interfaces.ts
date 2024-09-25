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

export interface OptionProps {
	label: string;
	value: string;
}

export interface Data {
	dropdownLabel: string;
	options: OptionProps[];
}

export interface DropdownSectionProps {
	title: string;
	optionsData: Data[];
	showInputs?: boolean;
}

export interface DropdownProps {
	label: string;
	options: Option[];
	value: string;
	onChange: (value: string) => void;
}

export interface Option {
	label: string;
	value: string;
}

export interface JoinedInputProps {
	placeholder: string;
	btnText?: string;
	label?: string;
	enableBadge?: boolean;
	hasIcon?: boolean;
	index?: number;
	action?: () => void;
}

export interface BadgesProps {
	badgeList: string[];
	iconList?: string[];
	handleRemoveBadge: (index: number) => void;
}

export interface ModalProps {
	showModal: boolean;
	renameItem: boolean;
	dataId: number;
	onClose: () => void;
	onConfirm: (index: number, value: string, isRename?: boolean) => void;
}

export interface ReactionProps {
	reactions: string[];
	icons: string[];
	allowClick?: boolean;
}

export interface EditPageContentProps {
	title: string;
	settings?: JSX.Element;
}

export interface TabsProps {
	type: string;
	width: string;
	contents: EditPageContentProps[];
	fontSize?: string;
	boxed?: boolean;
}

export interface PaginationProps {
	numberOfPages: number;
	currentPage: number;
	handlePageChange: (page: number) => void;
}
