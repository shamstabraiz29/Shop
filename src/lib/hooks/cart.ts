import { writable, type Writable } from 'svelte/store';

export type CartItem = {
  id: string; // stable key (productId+variant)
  productId: string;
  name: string;
  price: number; // numeric price
  quantity: number;
  size: string;
  color: string;
  image: string;
};

type CartState = {
  items: CartItem[];
};

const STORAGE_KEY = 'ahmad_shop_cart_v1';

function loadInitialState(): CartState {
  if (typeof localStorage === 'undefined') {
    return { items: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return { items: [] };
    return { items: parsed.items as CartItem[] };
  } catch {
    return { items: [] };
  }
}

function persist(state: CartState) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export const cart: Writable<CartState> = writable(loadInitialState());

// Keep localStorage in sync
cart.subscribe((state) => {
  persist(state);
});

function makeItemId(productId: string, size: string, color: string): string {
  return `${productId}__${size}__${color}`;
}

export function addToCart(args: {
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity?: number;
  image: string;
}) {
  const { productId, name, price, size, color, image } = args;
  const quantity = Math.max(1, args.quantity ?? 1);
  const id = makeItemId(productId, size, color);
  cart.update((state) => {
    const existing = state.items.find((i) => i.id === id);
    if (existing) {
      existing.quantity += quantity;
      return { items: [...state.items] };
    }
    const item: CartItem = {
      id,
      productId,
      name,
      price,
      size,
      color,
      quantity,
      image,
    };
    return { items: [...state.items, item] };
  });
}

export function updateQuantity(id: string, newQuantity: number) {
  cart.update((state) => {
    if (newQuantity <= 0) {
      return { items: state.items.filter((i) => i.id !== id) };
    }
    return {
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: newQuantity } : i
      ),
    };
  });
}

export function removeItem(id: string) {
  cart.update((state) => ({ items: state.items.filter((i) => i.id !== id) }));
}

export function clearCart() {
  cart.set({ items: [] });
}
