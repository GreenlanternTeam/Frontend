import React from 'react'
import { ChildProps } from 'types/LayoutType'

const BottomSection: React.FC<ChildProps> = ({ children }) => {
	return <section className="pb-6 gap-2 flex flex-col flex-wrap w-full h-full bg-white pt-8 space-y-6">{children}</section>
}

export default BottomSection
