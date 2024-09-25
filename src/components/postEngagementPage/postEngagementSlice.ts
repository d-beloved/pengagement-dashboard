import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../lib/store";

import { postEngagementData } from "../../lib/Data";
import { PostEngagementState } from "../../lib/interfaces";

const initialState: PostEngagementState = {
	totalPostEngagement: postEngagementData.length,
	allPostEngagementData: postEngagementData,
	postEngagementData: [...postEngagementData.slice(0, 10)],
};

export const postEngagementSlice = createSlice({
	name: "postEngagements",
	initialState,
	reducers: {
		deletePostEngagement: (state, action: PayloadAction<number>) => {
			state.postEngagementData = state.postEngagementData.filter(
				(post) => post.id !== action.payload,
			);
		},
		renamePostEngagement: (
			state,
			action: PayloadAction<{ newVal: string; id: number }>,
		) => {
			state.postEngagementData = state.postEngagementData.map((post) => {
				if (post.id === action.payload.id) {
					return {
						...post,
						name: action.payload.newVal,
					};
				}
				return post;
			});
		},
		searchPostEngagement: (state, action: PayloadAction<string>) => {
			if (action.payload === "") {
				return { ...initialState };
			}
			state.allPostEngagementData = postEngagementData.filter((post) => {
				return post.name
					.toLowerCase()
					.includes(action.payload.toLowerCase());
			});
			state.postEngagementData = [
				...state.allPostEngagementData.slice(0, 10),
			];
			state.totalPostEngagement = state.allPostEngagementData.length;
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.postEngagementData = state.allPostEngagementData.slice(
				(action.payload - 1) * 10,
				action.payload * 10,
			);
		},
		sortPostEngagement: (state, action: PayloadAction<string | null>) => {
			if (action.payload === "asc") {
				state.allPostEngagementData.sort((a, b) => {
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
			} else if (action.payload === "desc") {
				state.allPostEngagementData.sort((a, b) => {
					if (a.name > b.name) {
						return -1;
					}
					return 0;
				});
			} else {
				state.allPostEngagementData = [...state.allPostEngagementData];
			}
			state.postEngagementData = [
				...state.allPostEngagementData.slice(0, 10),
			];
			state.totalPostEngagement = state.allPostEngagementData.length;
		},
	},
});

export const {
	deletePostEngagement,
	renamePostEngagement,
	searchPostEngagement,
	changePage,
	sortPostEngagement,
} = postEngagementSlice.actions;

export default postEngagementSlice.reducer;

export const selectPostEngagements = (state: RootState) =>
	state.postEngagements;
