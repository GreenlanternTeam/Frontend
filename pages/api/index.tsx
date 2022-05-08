import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

const Api = (req: NextApiRequest, res: NextApiResponse) => {
	console.log('IN')
	res.json({ text: 'OOOKKK' })
}

export default Api
