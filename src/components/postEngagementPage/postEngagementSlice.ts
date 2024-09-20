import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../lib/store";

import { postEngagementData } from "../../lib/Data";
import { PostEngagementState } from "../../lib/interfaces";

const initialState: PostEngagementState = {
	postEngagementData: postEngagementData,
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
	},
});

export const { deletePostEngagement, renamePostEngagement } =
	postEngagementSlice.actions;

export default postEngagementSlice.reducer;

export const selectPostEngagements = (state: RootState) =>
	state.postEngagements.postEngagementData;
