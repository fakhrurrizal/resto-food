import { createContext, useContext, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string
    categoryId: number,
    qty: number
};

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (itemId: number) => void;
    increaseQuantity: (itemId: number) => void;
    decreaseQuantity: (itemId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } else {
            return [];
        }
    });


    const addToCart = (productToAdd: Product) => {
        const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

        if (existingProductIndex !== -1) {
            setCart(prevCart => {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].qty += 1;
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            });
        } else {
            setCart(prevCart => {
                const updatedCart = [...prevCart, { ...productToAdd, qty: 1 }];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            });
        }
    };

    const removeFromCart = (itemId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const increaseQuantity = (itemId: number) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === itemId) {
                    return { ...item, qty: item.qty + 1 };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const decreaseQuantity = (itemId: number) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === itemId && item.qty > 1) {
                    return { ...item, qty: item.qty - 1 };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

