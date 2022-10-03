import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Country } from '../app';
import SearchModal from '../components/SearchModal';
import currencies from '../currencies';
import outputNumber from '../hooks/outputNumber';

interface Values {
  base?: string,
  quote?: string
}

interface Inputs {
  focused?: string,
  final?: string
}

const Home: NextPage = () => {

  const numbers = [1,2,3,4,5,6,7,8,9,".",0,"del"];
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [tapType, setTapType] = useState<"base"|"quote">("base");
  const [inputFocus, setInputFocus] = useState<0|1>(1);

  const [base, setBase] = useState<Country>({
      "code": "/m/09nqf",
      "name": "United States Dollar",
      "price": "1",
      "details": {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$"
      },
      "flag": "https://flagcdn.com/us.svg",
      "country": "American Samoa"
  });
  const [quote, setQuote] = useState<Country>({
      "code": "/m/018cg3",
      "name": "Nigerian Naira",
      "price": "432.37",
      "details": {
          "code": "NGN",
          "name": "Nigerian naira",
          "symbol": "₦"
      },
      "flag": "https://flagcdn.com/ng.svg",
      "country": "Nigeria"
  });


  const [value, setValue] = useState<Values>({
    base: "0",
    quote: "0",
  });

  const [inputs, setInputs] = useState<Inputs>({
    focused: "",
    final: "",
  });



  const handleListSelect = (country: Country) => {
    if(tapType === "base"){
        setInputFocus(0);
        setBase(country);
      } else {
      setInputFocus(1);
      setQuote(country);
    }

    setOpenModal(false);
  };
  
  const handleTapFlag = (type: "base"|"quote") => {
    setTapType(type);
    setOpenModal(true);
  };

  const deleteString = (a:string) => {
    return a.substring(0, a.length-1);
  }


  const convert = (num:string) => {
    let input = num;
    let output;

    if(/del/.test(input!)){
      input = input.replace(/del/, "");
      input = deleteString(input);
    }

    input =  input.replace(/\,|^0(?=(\d))|[^\.\d/]/g, '')

    if(input === "") input = "0";
    if(input === ".") input = "0.";

    // If input has more than one length delete it
    if(input?.match(/\./g)?.length! > 1) {
      input = deleteString(input);
    }
    let calcInput = input;


    /*
    * Set Inputs displayed onscreen should be
    * comma seperated even with a decimal point.
    */
    let split = input.split('.');
    if(split.length > 1){
        input = Number(split[0]).toLocaleString();
        input += `.${split[1]}`;
    } else {
        input = Number(split[0]).toLocaleString();
    }


    if(inputFocus === 0) {
      output = Number(calcInput) * Number(quote.price) / Number(base.price);
      setValue({
        quote: outputNumber(output),
        base: input
      });
    }
    
    if(inputFocus === 1){
      output = Number(calcInput) / Number(quote.price) * Number(base.price);
      setValue({
        base: outputNumber(output),
        quote: input
      });
    } 
    
  };

  const userInput = (num: string|number) => {
    if(inputFocus === 0){
      convert(`${value.base}${num}`);
    }

    if(inputFocus === 1){
      convert(`${value.quote}${num}`);
    }
  }

  useEffect(() => {
    // setInputFocus(0);
    console.log(value.base);
    convert(`${value.base}`);
  }, [base])
  
  useEffect(() => {
    // setInputFocus(1);
    convert(`${value.quote}`);
  }, [quote])



  return (
    <div className="">
      <Head>
        <title>NorEx Converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:w-3/5 fixed inset-0 m-auto w-full h-full p-4">

        <SearchModal 
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleListSelect={handleListSelect}
          countries={currencies} 
        />

        <div className="grid content-center h-2/5 p-4">

          <div className="flex justify-content-center items-center gap-3">
              <input className="block w-full outline-none py-3 m-0 bg-transparent focus:outline-none rounded-md text-right font-bold text-3xl cursor-pointer" value={value.base} onInput={(e:any) => convert(e.target.value)} inputMode='none' onFocus={() => setInputFocus(0)} />
              <span className="font-bold text-3xl">{base.details.symbol}</span>
              <div className="relative w-[30px] h-[30px] rounded-full" onClick={() => handleTapFlag("base")}>
                  <Image className="rounded-full" width={30} height={30} src={base.flag} layout="fixed" objectFit="cover" />
              </div>
          </div>


          <div className="flex justify-content-center items-center gap-3">
              <input className="block w-full outline-none py-3 m-0 bg-transparent focus:outline-none rounded-md text-right font-bold text-3xl cursor-pointer" value={value.quote} onInput={(e:any) => convert(e.target.value)} inputMode='none' onFocus={() => setInputFocus(1)} />
              <span className="font-bold text-3xl">{quote.details.symbol}</span>
              <div className="relative w-[30px] h-[30px] rounded-full" onClick={() => handleTapFlag("quote")}>
                  <Image className="rounded-full" width={30} height={30} src={quote.flag} layout="fixed" objectFit="cover" />
              </div>
          </div>
        </div>


        <div className="grid grid-cols-3 grid-rows-4 h-3/5">
          {numbers.map((num:string|number) => (
            <div key={num} className="num" onClick={() => userInput(num)}>
              {
              num === "del" ? <span>
                    <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clipRule="evenodd" />
                    </svg>                                    
                </span> : num
              }
            </div>
          ))}
        </div>

      </main>






    </div>
  )
}

export default Home
