"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  // ETHEREAL
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image
        src='/profile.png'
        alt=''
        width={22}
        height={22}
        className='cursor pointer'
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className='absolute p-4 top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md z-20'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <Image
        src='/notification.png'
        alt=''
        width={22}
        height={22}
        className='cursor pointer'
      />
      <div className='relative cursor-pointer' 
       onClick={() => setIsCartOpen(!isCartOpen)}
      
      >
        <Image
          src='/cart.png'
          alt=''
          width={22}
          height={22}
          className='cursor pointer'
        />
        <div className='absolute -top-4 -right-4 w-6 h-6 rounded-full bg-modulo text-white text-sm flex items-center justify-center'>
          99
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
