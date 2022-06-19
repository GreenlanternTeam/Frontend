import React, { InputHTMLAttributes } from 'react'
import { classNames } from 'utils/fn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	dirtyValue?: string
	onXClick?: () => void
}

const SearchInput = ({ dirtyValue, onXClick, ...attr }: InputProps) => {
	return (
		<div className="relative flex items-center">
			<div className="absolute h-[34px] flex justify-center items-center w-[50px]">
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.6177 18.0319Z"
						fill="#999999"
					/>
				</svg>
			</div>

			<input
				type="text"
				className="w-full h-[34px] rounded-[10px] bg-[#ffffff] group shadow-[0px_4px_10px_rgba(0,0,0,0.15)] pl-[50px] pr-[36px] font-normal focus:outline-none "
				placeholder="브랜드, 환경 키워드 등"
				{...attr}
			/>
			<div
				className={classNames(dirtyValue ? 'visible' : 'hidden', 'w-fit flex absolute right-[12px] cursor-pointer')}
				onClick={onXClick && onXClick}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.05 17.25L12 13.2L7.95 17.25L6.75 16.05L10.8 12L6.75 7.95L7.95 6.75L12 10.8L16.05 6.75L17.25 7.95L13.2 12L17.25 16.05L16.05 17.25Z"
						fill="#999999"
					/>
				</svg>
			</div>
		</div>
	)
}

export default SearchInput
