import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Country } from '../app';
import SearchModal from '../components/SearchModal';
import currencies from '../currencies';
import outputNumber from '../hooks/outputNumber';
import fetches from 'node-fetch';

interface Values {
  base?: string,
  quote?: string
}


const Home: NextPage = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "del"];
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [tapType, setTapType] = useState<"base" | "quote">("base");
  const [inputFocus, setInputFocus] = useState<0 | 1>(0);
  const [downloading, setDownloading] = useState<0 | 1 | 2 | 3 | 4 | null>(null);
  const [rates, setRates] = useState<Country[]|[]>([]);

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

  const [input, setInput] = useState<string|number|null>(null);

  const handleListSelect = (country: Country) => {
    if (tapType === "base") {
      setBase(country);
      setInputFocus(1);
    } else {
      setQuote(country);
      setInputFocus(0);
    }

    setOpenModal(false);
  };

  const handleTapFlag = (type: "base" | "quote") => {
    setTapType(type);
    setOpenModal(true);
  };

  const deleteString = (a: string) => {
    return a.substring(0, a.length - 1);
  }

  const convert = (num: string) => {
    let input = num;
    let output;

    if (/del/.test(input!)) {
      input = input.replace(/del/, "");
      input = deleteString(input);
    }

    input = input.replace(/\,|^0(?=(\d))|[^\.\d/]/g, '')

    if (input === "") input = "0";
    if (input === ".") input = "0.";

    // If input has more than one length delete it
    if (input?.match(/\./g)?.length! > 1) {
      input = deleteString(input);
    }
    let calcInput = input;


    /*
    * Set Inputs displayed onscreen should be
    * comma seperated even with a decimal point.
    */
    let split = input.split('.');
    if (split.length > 1) {
      input = Number(split[0]).toLocaleString();
      input += `.${split[1]}`;
    } else {
      input = Number(split[0]).toLocaleString();
    }


    if (inputFocus === 0) {
      output = Number(calcInput) * Number(quote?.price) / Number(base?.price);
      setValue({
        quote: outputNumber(output),
        base: input
      });
    }

    if (inputFocus === 1) {
      output = Number(calcInput) / Number(quote?.price) * Number(base?.price);
      setValue({
        base: outputNumber(output),
        quote: input
      });
    }

  };

  const userInput = (num: string | number, e:any) => {

    const div = document.createElement('DIV');
    div.classList.add('show-click');
    div.style.animationName = "click";
    
    if(e.target.nodeName === "svg"){
      e.target = e.target.parentElement.parentElement;
    }

    if(e.target.nodeName === "path"){
      e.target = e.target.parentElement.parentElement.parentElement;
    }

    e.target.appendChild(div);
    div.onanimationend = () => e.target.removeChild(div);

    setInput(num);
    if (inputFocus === 0) {
      convert(`${value.base}${num}`);
    }

    if (inputFocus === 1) {
      convert(`${value.quote}${num}`);
    }
  }

  const animationRemove = (e:any) => {
    e.target.parentElement.removeChild(e.target);
  }

  useEffect(() => {
    convert(`${value.quote}`);
  }, [base]);

  useEffect(() => {
    convert(`${value.base}`);
  }, [quote]);


  useEffect(() => {

    if (!localStorage.getItem('rates') || Number(localStorage.getItem('next-update')) <= new Date().getTime()) {
      setDownloading(1);

      fetch('/api/update-rates')
        .then((res: any) => res.json())
        .then((data:any) => {

          setBase(data.filter((result: Country) => {
            return result?.code === "/m/09nqf"
          })[0]);
          setQuote(data.filter((result: Country) => {
            return result?.code === "/m/018cg3"
          })[0]);
          setDownloading(0);

          const fourHours: string = (new Date().getTime() + (1000 * 60 * 60 * 4)).toString();
          localStorage.setItem('rates', JSON.stringify(data));
          localStorage.setItem('next-update', fourHours);
        })
        .catch(err => {
          if (!localStorage.getItem('rates')) {
            return setDownloading(3);
          }
          
          setRates(JSON.parse(localStorage.getItem("rates")!));
          setDownloading(2);
        });
    } else {
      setRates(JSON.parse(localStorage.getItem("rates")!));
      setBase(JSON.parse(localStorage.getItem("rates")!).filter((result: Country) => {
        return result.code === "/m/09nqf"
      })[0]);
      setQuote(JSON.parse(localStorage.getItem("rates")!).filter((result: Country) => {
        return result.code === "/m/018cg3"
      })[0]);
      setDownloading(4);
    }


  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setDownloading(null), 3000);

    return () => {
      clearTimeout(timeout);
    }
  }, [downloading]);


  return (
    <div className="">
      <Head>
        <title>NorEx Converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:w-3/5 fixed inset-0 m-auto w-full h-full p-4">

        {downloading !== null &&
          <div className="fixed top-4 left-0 right-0 grid place-content-center">
            <div className={`inline-flex justify-center items-center gap-2 mx-auto p-2 ${downloading === 0 ? "bg-green-600 shadow-green-900" :
                downloading === 1 ? "bg-sky-600 shadow-sky-900" :
                  downloading === 2 ? "bg-red-600 shadow-red-900" :
                    downloading === 3 ? "bg-red-600 shadow-red-900" :
                    downloading === 4 ? "bg-[#222] shadow-zinc-900" : ""
              } 
                    ${downloading !== null ? "opacity-100" : "opacity-0"}
                    font-semibold text-xs rounded-sm transition-opacity duration-500 shadow-inner`}>
              {
                downloading === 0 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                  :
                  downloading === 1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
                  </svg>
                    :
                    downloading === 2 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                      : ""
              }
              {
                downloading === 0 ? "Rates Updated" :
                  downloading === 1 ? "Downloading Rates" :
                    downloading === 2 ? "Downloading Failed" :
                      downloading === 3 ? "Internet connection required for first time usage" :
                      downloading === 4 ? "Previous downloaded rates used" : ""
              }

            </div>
          </div>
        }

        <SearchModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleListSelect={handleListSelect}
          countries={rates}
        />

        <div className="grid content-center h-2/5 p-4">

          <div className="flex justify-content-center items-center gap-3">
            <input className="block w-full outline-none py-3 m-0 bg-transparent focus:outline-none rounded-md text-right font-bold text-3xl cursor-pointer" value={value.base} onInput={(e: any) => convert(e.target.value)} inputMode='none' onFocus={() => setInputFocus(0)} />
            <span className="font-bold text-3xl">{base?.details?.symbol}</span>
            <div className="relative w-[30px] h-[30px] rounded-full" onClick={() => handleTapFlag("base")}>
              <Image className="rounded-full" width={30} height={30} src={base?.flag} layout="fixed" objectFit="cover" />
            </div>
          </div>


          <div className="flex justify-content-center items-center gap-3">
            <input className="block w-full outline-none py-3 m-0 bg-transparent focus:outline-none rounded-md text-right font-bold text-3xl cursor-pointer" value={value.quote} onInput={(e: any) => convert(e.target.value)} inputMode='none' onFocus={() => setInputFocus(1)} />
            <span className="font-bold text-3xl">{quote?.details?.symbol}</span>
            <div className="relative w-[30px] h-[30px] rounded-full" onClick={() => handleTapFlag("quote")}>
              <Image className="rounded-full" width={30} height={30} src={quote?.flag} layout="fixed" objectFit="cover" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 grid-rows-4 h-3/5">
          {numbers.map((num: string | number) => (
            <div key={num} className="num" onClick={(e) => userInput(num, e)}>
              {/* <div className="show-click" style={{animationName : num === input && "click" : "none" }} onAnimationEnd={() => setInput(null)}></div> */}
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
