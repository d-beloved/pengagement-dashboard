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
		deletePostEngagement: (state, action: PayloadAction<string>) => {
			state.postEngagementData = state.postEngagementData.filter(
				(post) => post.id !== +action.payload,
			);
		},
		renamePostEngagement: (
			state,
			action: PayloadAction<{ newVal: string; id: string }>,
		) => {
			state.postEngagementData = state.postEngagementData.map((post) => {
				if (post.id === +action.payload.id) {
					return {
						...post,
						name: action.payload.newVal,
					};
				}
				return post;
			});
		},
		searchPostEngagement: (state, action: PayloadAction<string>) => {
			state.postEngagementData = postEngagementData.filter((post) => {
				return post.name
					.toLowerCase()
					.includes(action.payload.toLowerCase());
			});
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.postEngagementData = state.allPostEngagementData.slice(
				(action.payload - 1) * 10,
				action.payload * 10,
			);
		},
	},
});

export const {
	deletePostEngagement,
	renamePostEngagement,
	searchPostEngagement,
	changePage,
} = postEngagementSlice.actions;

export default postEngagementSlice.reducer;

export const selectPostEngagements = (state: RootState) =>
	state.postEngagements;
