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

  toggleFavorite: (slug) =>
    set((state) => {
      let piece = state.artPiecesInfo.find((info) => info.slug === slug);
      console.log(piece);
      if (piece) {
        piece.isFavorite = !piece.isFavorite;
      } else {
        piece = { slug: slug, isFavorite: true };
        console.log({ artPiecesInfo: [piece] });
      }
      return { artPiecesInfo: [...state.artPiecesInfo, piece] };
    }),
}));
