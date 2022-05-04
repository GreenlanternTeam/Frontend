import React from 'react'
import { ChildProps } from 'types/LayoutType'

const BottomLayout: React.FC<ChildProps> = ({ children }) => {
	return <div className="flex flex-col">{children}</div>
}

export default BottomLayout
