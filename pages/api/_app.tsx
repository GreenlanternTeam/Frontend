import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

const Api = (req: NextApiRequest, res: NextApiResponse) => {
	console.log('IN')
	res.send('Ok')
}

export default Api
