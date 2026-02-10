import toast from "react-hot-toast";
import { create } from "zustand";

export const domain = "https://bookstore.eraasoft.pro/api";

export const useCart = create((set) => ({
  items: [],

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
}));
