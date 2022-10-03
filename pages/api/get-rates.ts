// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country } from '../../app';
import currencies from '../../currencies';
import connectMongo from '../../hooks/connectMongo';
import Countries from '../../models/Countries';



const handler = async( req: NextApiRequest, res: NextApiResponse<Country[]>) => {
  try{
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log(connectMongo);
    
    const countries = await Countries.find().exec();
    console.log(countries);
  
    res.status(200).json(countries);
  } catch (err:any){
    console.error(err);
    throw new Error(err);
  }
}

export default handler;