import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export interface ResponseType {
	success: boolean
	[key: string]: any
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
	if (req.method !== 'POST') {
		return res.status(405).end()
	}
	const { to, from, key } = req.body
	const subject = `[GreenLantern] ${to} 님 이메일 인증번호입니다.`
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'akdfhr2@gmail.com',
			pass: 'cewzvtltpaktaumc'
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	const info = await transporter.sendMail({
		from,
		to,
		subject,
		html: `
    <style>
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
    * {
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }
  </style>
    <div style="width:375px;">
      <div class="logoContainer" style="width: 100%; height: 160px; background-color: #F7F2DC;">
       <img style="height:75px; padding:42px 0; display:block; margin:auto;" src="http://drive.google.com/uc?export=view&id=1YhzIfisaqUxyPbhmctbBUqwa3NkjIrfi" />
      </div>
      <div class="contentContainer" style="padding: 64px 49px; font-weight: 500; font-size: 18px;">
        <span>안녕하세요. 그린랜턴입니다.<br /> 회원가입을 위한 인증번호입니다.<br /><br />아래 인증번호를 확인하여<br />이메일 주소 인증을 완료해주세요.</span>
        <h1 style="width: 100%; padding: 56px 0;">${key}</h1>
        <a style="padding:20px 50px; background-color: #346053; border-radius: 5px; border: none; height: 50px; font-weight: 600; font-size: 18px; color: white; text-decoration: none;" href="https://greenlantern.shop">greenlantern 바로가기</a>
      </div>
      
    </div>`
	})

	console.log('url : ', nodemailer.getTestMessageUrl(info))
	return res.status(200).json({ success: true })
}

export default handler
