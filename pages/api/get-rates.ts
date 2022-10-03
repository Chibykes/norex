// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country } from '../../app';
import currencies from '../../currencies';
import connectMongo from '../../hooks/connectMongo';
import Countries from '../../models/Countries';

// type Data = {
//   name: string
// }


const handler = async( req: NextApiRequest, res: NextApiResponse<Country[]>) => {

  await connectMongo();

  // currencies.forEach((c:Country) => {
  //   Countries.create(c);
  // });

  const countries = await Countries.find().exec();

  res.status(200).json(countries);
}

export default handler;