// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Country } from '../../app';
import connectMongo from '../../hooks/connectMongo';
import Countries from '../../models/Countries';
import mongoose from 'mongoose';

type Data = {
  name: string
}


const handler = async( req: NextApiRequest, res: NextApiResponse<Data>) => {

  try{
    await connectMongo();
    console.log(mongoose.connection);
  } catch(err){
    console.log(err);
  }

  // Countries.create({
  //   "code": "/m/09nqf",
  //   "name": "United States Dollar",
  //   "price": "1",
  //   "details": {
  //       "code": "USD",
  //       "name": "United States Dollar",
  //       "symbol": "$"
  //   },
  //   "flag": "https://flagcdn.com/us.svg",
  //   "country": "American Samoa"
  // });

  // const countries = await Countries.find().exec();

  res.status(200).json({name: "John Doe"});
}

export default handler;