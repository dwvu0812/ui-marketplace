import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              {/* TODO Mobile nav */}

              <div className="hidden z-50 lg:block lg:self-stretch lg:ml-8">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
                  {user ? null : (
                    <div className="flex flex-1 gap-1 items-center">
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          variant: "ghost",
                        })}
                      >
                        Sign in
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <Link
                        href="/sign-up"
                        className={buttonVariants({
                          variant: "ghost",
                        })}
                      >
                        Create account
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
