import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      
      data: null,
      setData: (fetchedData) => set({ data: fetchedData }),
      
      artPiecesInfo: {},

      toggleFavorite: (slug) =>
        set((state) => {
          let piece = state.artPiecesInfo.find((info) => info.slug === slug);
          console.log(piece);
          if (piece) {
            piece.isFavorite = !piece.isFavorite;
          } else {
            piece = { slug: slug, isFavorite: true };
          }
          return { artPiecesInfo: [...state.artPiecesInfo, piece] };
        }),

      addComment: (slug, newComment) =>
        set((state) => {
          let piece = state.artPiecesInfo.find((info) => info.slug === slug);

          const comment = {
            value: newComment,
            timestamp: new Date().getTime(),
            time: new Date().toTimeString(),
            date: new Date().toDateString(),
          };

          if (piece) {
            if (piece.comments) {
              piece.comments.push(comment);
            } else {
              piece.comments = [comment];
            }
          } else {
            piece = {
              slug: slug,
              isFavorite: false,
              comments: [comment],
            };
          }
          console.log({ artPiecesInfo: [...state.artPiecesInfo, piece] });

          return { artPiecesInfo: [...state.artPiecesInfo, piece] };
        }),
    }),
    {
      name: "art-pieces-info",
      getStorage: () => localStorage,
    }
  )
);
