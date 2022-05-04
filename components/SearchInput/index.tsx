import React from 'react'

const SearchInput = () => {
	return (
		<div className="group block relative w-[240px] h-[34px] mx-auto mt-[24px]">
			<div className="absolute w-[35px] h-full left-0 flex items-center justify-center">
				<svg
					className=" w-[17px] h-[17px] transition-all duration-300 group-hover:scale-110"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
			</div>
			<input
				type="text"
				className="flex items-center border border-black rounded-full pl-[30px] h-full w-full transition focus:outline-none focus:ring-[#356053] focus:ring-1"
			/>
		</div>
	)
}

export default SearchInput
