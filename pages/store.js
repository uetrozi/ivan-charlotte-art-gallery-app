import { create } from "zustand";

export const useStore = create((set) => ({
  artPiecesInfo: [],
  addComment: (slug, newComment) =>
    set((state) => {
      let piece = state.artPiecesInfo.find((info) => info.slug === slug);
      const comment = {
        value: newComment,
        timestamp: new Date().getTime(),
        time: new Date().toDateString(),
        date: new Date().toTimeString(),
      };

      console.log(piece);
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
}));
