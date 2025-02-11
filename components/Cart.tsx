import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const itemCount = 0;
  const fee = 1;
  const total = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="text-sm ml-2 font-medium text-gray-700 group-hover:text-gray-900">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
          {itemCount > 0 ? (
            <>
              <div className="w-full flex flex-col pr-6">cart items</div>
              <div className="space-y-4 pr-6">
                <Separator />
                <div className="space-y-1.5 pr-6">
                  <div className="flex">
                    <span className="flex-1">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Transaction Fee</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href="/cart"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Continue to Checkout
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className="flex h-screen flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <Image
                  src="/hippo-empty-cart.png"
                  fill
                  alt="empty shopping cart hippo"
                />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
