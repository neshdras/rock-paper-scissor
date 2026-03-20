import { create } from "zustand";

// On donne un nom à notre store, en général "use" + le nom du store
export const useScore = create((set) => ({
    scorePlayer: 0,
    scoreBot: 0,
    scoreDraw: 0, 
    increaseScorePlayer: () => set((state) => ({scorePlayer: state.scorePlayer + 1})), 
    increaseScoreBot: () => set((state) => ({scoreBot: state.scoreBot + 1})),
    increaseScoreDraw: () => set((state) => ({scoreDraw: state.scoreDraw + 1})),
    resetScorePlayer: () => set(() => ({scorePlayer: 0})), 
    resetScoreBot: () => set(() => ({scoreBot: 0})),
    resetScoreDraw: () => set(() => ({scoreDraw: 0}))
}))