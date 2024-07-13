"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <p className='text-center'>Your cart is empty</p>
      ) : (
        <>
          <div className='text-center flex gap-4 '>
            <Image
              alt=''
              src='/beads.jpg'
              width={72}
              height={96}
              className='object-cover rounded-md'
            />
            <div className='flex flex-col justify-between w-full'>
              {/* TOP  */}
              <div className=''>
                {/* TITLE */}
                <h3>Product Name</h3>
                <div className=''>$49</div>
              </div>
              {/* DESC */}
              <div className=''>available</div>
                {/* BOTTOM */}
                <div className="">


                </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
