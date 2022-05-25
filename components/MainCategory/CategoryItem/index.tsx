import SubText from 'components/atoms/SubText'
import React, { useState } from 'react'

interface CategoryItemProps {
	title: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title }) => {
	const [state, setState] = useState(false)
	return (
		<div
			className={`w-full h-[110px] aspect-square flex flex-col items-center opacity-[0.6] transition-all duration-300 ${
				state ? 'bg-[#F6F2DC] opacity-100' : ''
			}`}
			onClick={() => setState((prev) => !prev)}
		>
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="h-full"
			>
				<rect width="40" height="40" fill="url(#pattern0)" />
				<defs>
					<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlinkHref="#image0_132_222" transform="scale(0.0166667)" />
					</pattern>
					<image
						id="image0_132_222"
						width="60"
						height="60"
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA9BJREFUaEPtml+ODUEUh3+zArx7IPEowQqwAhZAEM8SVoBYAIlnQXgXiUcJO8AK2AFLkI8uOXOmu+vU7VN975ipl8ncrq6q75w6f+pU7+mItb0jxqtj4P9d49vS8ElJv7Yh3G0A35J0X9KlowL8XdIZSQ8kPVsbem0NP5L0cIBkS59de2uvCYxWv0jCfktDAI/X1PKawG8k3XBwaBlb/rEW9FrAaBfbLQ3Qoum3km7+b8DFUcEF4AtJnwzkVUmf14BeQ8OEoVcGBkfFFrZbHFigu7fewGxbHBVbmmadlHdityW97k3cG9iGIbSKg7IZFiGKPrSx5+n8PYG9oxrTIDsA+y4OrHuY6glsbRTtYbtjjTTz6fCgezLSC/i6pHcjjmpqi2LnF4eHpJuknaVdyfTgvYB9GKrFWaDGwhRCQBho/kNGvO4BbMNQSyYFMOC0EqbsWCkJSjYwjoqFj4Whmsf1To64fNekoymnq2zgqKOagsd54cRKmOJvEV5KNpYJHAlDU6DE42/Dw5fuRMXPmMap2haJPM8EttppSRWLY5pbb8t4s9yZwEyEkyF5YPtFj3w+hI0tOC0hyQZmsa0FOjR8TdI5SedNPLbgKfbLgD2AI6ZU64MQ8AkXBkHcyyoF7SpwTSAbPz8G3lh0h+TFTTWMY8LOiI9fDwnrn2W2AAPJmRaPCiz/p+S3awqsBgwYcfKySezt+rqfX7OFUQO2J5ipuVOS+gYwdhb59gl3bg4NUQO2NScGxF7LQb1MkJb2BVbsS0LNCUkNmOD/RNJHSe8HyZa7oS6ZUAB67NwceO1vlxqwHWju9sCXZcIL2KDjovJuC7A/694xZZm1nZc1taa5o8BTtwc/h/CEHSOA6AlpA8Xue2WuwD87dhR4qihHyELCq9wLOZLWymjYhv3tQctZd6kma+83O7CahpeUbWqLzXjuqyXVMFUDXlqUy4CqjeELf/7+at/7c8DeRhhoFw8KTfdTc8Cttwc1TbQ8Z6uiuajn9/dTk59RTAGHB2ihCPa1iQVhLuokQw5sDHjJ7UGQabKbn7sFeOp+qmrD23JUS2ALlHdgB65ovYZ9GCJH5tCwpEWSEg/LfBw7W50kDsxe0x6oZ3tg66iWQNp3a6GPRWJ//tiZMf+BPNsuxufLGRMyRg04cvOwZC37ylBlMUj5uaTTS0aeeDfyOZKNCmWYiClEl/svvNWkHx0wo5+vrnQpEO4SMELz0Hx4Wj5ryhBq1b5SJmkcxENXDwQt4++ahsvaSy6QXhHdVWDAUz9XKpLcZeCWnRruewwcFtUh7fgbRFbSPbH2e2gAAAAASUVORK5CYII="
					/>
				</defs>
			</svg>
			<SubText className="text-sm leading-4 h-[65px] w-[50px] text-center" text={title} />
			{/* <span className="text-sm leading-4 h-[65px] w-[50px] text-center">{title}</span> */}
		</div>
	)
}

export default CategoryItem
