import React from 'react'

export default function OutlinedButton({text} : { text : string }) {
  return (
    <button
   className=" max-h-[56px] w-fit h-full px-[32px] py-[16px] space-x-[10px] rounded-[62px] relative flex bg-[white] text-[#022968] border border-[#022968] text-[14px] font-semibold justify-center items-center hover:cursor-pointer"
   >
       <span
       style={{
           fontFamily: "var(--font-reem-kufi)",
           fontWeight: 500,
           fontSize: "16px",
           lineHeight: "24px",
           letterSpacing: "0.02em"
       }}
       >{text}</span>     
   </button>
  )
}
