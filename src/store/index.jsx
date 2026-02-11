import toast from "react-hot-toast";
import { create } from "zustand";

export const domain = "https://bookstore.eraasoft.pro/api";

export const useCart = create((set) => ({
  items: [],
  wishlist: [],

  addToCart: (newProduct) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex(
        (el) => el.documentId === newProduct.documentId,
      );
      if (index === -1) {
        products.push({ ...newProduct, qty: 1 });
        toast.success("Added To Cart");
      } else {
        products[index] = { ...products[index], qty: products[index].qty + 1 };
        toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      }

      return { items: products };
    }),

  incrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);
      products[index] = { ...products[index], qty: products[index].qty + 1 };
      toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      return { items: products };
    }),

  decrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);
      if (products[index].qty > 1) {
        products[index] = { ...products[index], qty: products[index].qty - 1 };
        toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      } else {
        products.splice(index, 1);
        toast.success("Item Removed From Cart");
      }

      return { items: products };
    }),

  removeItemFromCart: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);
      products.splice(index, 1);
      toast.success("Item Removed From Cart");
      return { items: products };
    }),

  clearCart: () => set({ items: [] }),

  addToWishlist: (product) =>
    set((state) => {
      const wishlist = [...state.wishlist];

      const index = wishlist.findIndex(
        (el) => el.documentId === product.documentId,
      );

      if (index === -1) {
        wishlist.push({ ...product, qty: 1 });
        toast.success("Added To Wishlist");
      } else {
        wishlist[index] = {
          ...wishlist[index],
          qty: wishlist[index].qty + 1,
        };
        toast.success(`Wishlist Quantity Changed To : ${wishlist[index].qty}`);
      }

      return { wishlist };
    }),

  incrementWishlistQty: (documentId) =>
    set((state) => {
      const wishlist = [...state.wishlist];
      const index = wishlist.findIndex((el) => el.documentId === documentId);

      wishlist[index].qty += 1;

      return { wishlist };
    }),

  decrementWishlistQty: (documentId) =>
    set((state) => {
      const wishlist = [...state.wishlist];
      const index = wishlist.findIndex((el) => el.documentId === documentId);

      if (wishlist[index].qty > 1) {
        wishlist[index].qty -= 1;
      } else {
        wishlist.splice(index, 1);
        toast.success("Removed From Wishlist");
      }

      return { wishlist };
    }),

  moveToCart: (product) =>
    set((state) => {
      const cart = [...state.items];
      const wishlist = state.wishlist.filter(
        (el) => el.documentId !== product.documentId,
      );

      const index = cart.findIndex(
        (el) => el.documentId === product.documentId,
      );

      if (index === -1) {
        cart.push({ ...product });
      } else {
        cart[index].qty += product.qty;
      }

      toast.success("Moved To Cart");
      return {
        items: cart,
        wishlist,
      };
    }),

  removeFromWishlist: (documentId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((el) => el.documentId !== documentId),
    })),
}));
