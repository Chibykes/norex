// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country } from '../../app';
import currencies from '../../currencies';
import connectMongo from '../../hooks/connectMongo';
import Countries from '../../models/Countries';



const handler = async( req: NextApiRequest, res: NextApiResponse<Country[]>) => {
  await connectMongo();
  const countries = new Promise((resolve) => { 
    setTimeout(() => { resolve(Countries.find().exec()) }, 20000) 
  });
  
  countries
  .then((value:any) => {
    res.status(200).json(value);
  })
  .catch((err:any) => {throw new Error(err)});
}

export default handler;