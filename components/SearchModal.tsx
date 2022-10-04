import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import type { Country } from '../app';

interface Props {
    countries: Country[];
    handleListSelect: Function;
    setOpenModal: Function;
    openModal: Boolean;
}

const SearchModal = ({ countries, handleListSelect, setOpenModal, openModal }:Props) => {

    const [countriesList, setCountriesList] = useState<Country[]>(countries);
    const [input, setInput] = useState<any>("");

    function sorter(a:Country, b:Country){
        let fa:string = a.details?.code?.toLowerCase()!,
            fb:string = b.details?.code?.toLowerCase()!;
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    }

    const handleListCountry = (val:string) => {
        setInput(val);

        let filteredResult = countries?.filter(c => {
            let value = new RegExp(val.toLowerCase());
            
            return value.test(c?.country?.toLowerCase()) || value.test(c?.name?.toLowerCase()) || value.test(c?.details?.code?.toLowerCase()!) || value.test(c?.details?.name?.toLowerCase()!);
        });

        setCountriesList(filteredResult);
    }

    useEffect(() => {

        handleListCountry("");

    }, [openModal])

    return(
        <div className={`p-4 fixed inset-0 w-full h-full bg-black z-[1] overflow-auto ${openModal ? 'block':'hidden'}`}>
            <div className="">
                <input className="block w-full border border-[#111] outline-none py-4 px-3 m-0 bg-transparent focus:outline-none rounded-md" name="search-country" type="text" placeholder="Country / Currency" value={input} onChange={(e:any) => handleListCountry(e.target.value)}/>
            </div>
            <div className="py-3">
                {countriesList?.sort(sorter)?.map(({code, name, price, details, flag, country}: Country):ReactNode => (
                    <div key={code} className="flex justify-start items-center gap-4 border-b border-[#111] py-2 cursor-pointer active:bg-zinc-900" onClick={() => handleListSelect({code, details, name, price, flag, country})}>
                        <div className="relative w-[20px] h-[20px] rounded-full overflow-hidden">
                            <Image src={flag} layout="fill" objectFit="cover" />
                        </div>
                        <div className="">
                            <p className="font-bold">{details.code}  -  {details.symbol}</p>
                            <p className="font-[11px] text-[#444]">{country}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center gap-2 w-[30%] mx-auto p-2 bg-[#222] font-semibold text-sm rounded-sm shadow-lg" onClick={() => setOpenModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                Close

            </div>
        </div>
    );
}

export default SearchModal;