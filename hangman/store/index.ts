"use client";


import { create } from "zustand";

type ArticleState = {
	articles: any[];
	setArticleList: (newList: any[]) => void;
	addArticle: (article: any) => void;
};

const useArticle = create<ArticleState>((set) => ({
	// initial state
	articles: [],

	// actions
	setArticleList: (newList: any[]) => set({ articles: newList }),
	addArticle: (article: any) =>
		set((state) => ({ articles: [...state.articles, article] })),
}));

export default useArticle;
