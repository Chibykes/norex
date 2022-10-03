// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country } from '../../app';
import currencies from '../../currencies';
import connectMongo from '../../hooks/connectMongo';
import Countries from '../../models/Countries';



const handler = async( req: NextApiRequest, res: NextApiResponse<any>) => {

  await connectMongo();

  const countries = await Countries.find({code: "/m/019vxc"});

  res.status(200).json(countries);
}

export default handler;