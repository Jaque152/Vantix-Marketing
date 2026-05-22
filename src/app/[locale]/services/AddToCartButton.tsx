'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';

export function AddToCartButton({ planId }: { planId: string }) {
  const { addToCart } = useCart();
  const [isPending, setIsPending] = useState(false);
  const locale = useLocale();
  const isEs = locale === 'es';

  const handleAdd = async () => {
    setIsPending(true);
    await addToCart(planId);
    setIsPending(false);
  };

  return (
    <button 
      onClick={handleAdd} 
      disabled={isPending}
      className="bg-[var(--text-main)] hover:bg-[var(--accent-primary)] text-white px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 disabled:opacity-50"
    >
      {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-4 h-4" />}
      {isEs ? 'Añadir' : 'Add'}
    </button>
  );
}