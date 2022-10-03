// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}


const handler = async( req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({name: "Nores Backend Api"});
}

export default handler;