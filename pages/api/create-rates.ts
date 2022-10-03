// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Countries from '../../models/Countries';
import currencies from '../../currencies';
import { Country } from '../../app';
import connectMongo from '../../hooks/connectMongo';

type Data = {
  name: string
}


const handler = async( req: NextApiRequest, res: NextApiResponse<Data>) => {

  // await connectMongo();

  // Countries.insertMany(currencies);
  // currencies.forEach((c:Country) => {
    // Countries.create(currencies[0]);
  // });


  res.status(200).json({name: "New Countries Added"});
}

export default handler;