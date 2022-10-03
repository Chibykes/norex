import { Schema, model, models } from 'mongoose';
import connectMongo from '../hooks/connectMongo';

const CountrySchema = new Schema({
    code: {type: String},
    name: {type: String},
    price: {type: String},
    details: { type: Object},
    flag: {type: String},
    country: {type: String},
});

const CountryModel = models.countries || model('countries', CountrySchema);
export default CountryModel;