// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import currencies from '../../currencies';
import connectMongo from '../../hooks/connectMongo';
import Countries from '../../models/Countries';

// type Data = {
//   name: string
// }


const handler = async( req: NextApiRequest, res: NextApiResponse<any>) => {

  // await connectMongo();

  // const list =  await Countries.find().exec();

  const result = currencies.map(c => {

    return fetch(`https://www.google.com/async/currency_v2_update?vet=12ahUKEwi5lvmo_L_6AhWzxQIHHW_wAb8Q_sIDegQIAxAB..i&ei=oLA4Y7nGI7OLi-gP7-CH-As&yv=3&cs=1&async=source_amount:1,source_currency:%2Fm%2F09nqf,target_currency:${c.code},lang:en,country:ng,disclaimer_url:https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fgooglefinance%2Fdisclaimer%2F,period:1M,interval:86400,_id:currency-v2-updatable_2,_pms:s,_fmt:pc`, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"106.0.5249.61\"",
        "sec-ch-ua-full-version-list": "\"Chromium\";v=\"106.0.5249.61\", \"Google Chrome\";v=\"106.0.5249.61\", \"Not;A=Brand\";v=\"99.0.0.0\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"10.0.0\"",
        "sec-ch-ua-wow64": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-origin",
        "x-client-data": "CIa2yQEIpbbJAQjBtskBCKmdygEIjpHLAQiVocsBCJu8zAEImL3MAQi7ycwBCMzJzAEI48vMAQix0MwBCP7XzAEI4NjMAQim2cwBCIndzAEIn93MAQif38wBCPLfzAEI9uDMAQjD4cwBCMbhzAE=",
        "cookie": "__Secure-ENID=6.SE=J-JwTqdaXd7MHfXEpT71KvNQV6FHdy6z_3Jn81SSkbcbn5l2bQukyePhHWUSnafi6edkWy-lkYYX72w8yuafZDLhIeprERDXrO8t9YLY7ZOxrQmy-nYNxgHZP0hyIficN7vTSDHS0pWtLGj2ZQso4RbDl_gTglMgraNjR8qeQ98Tx_s75MFpYGTLnqbCBpXPr18jaa68s_fXiQSAMzABhpOT6czM0BsS4HSZa_QVen-0ZLgXVKWUcR_4-jb1qCFbQIbGW9vE; HSID=AO2ETS8Ig7_u86Q7i; SSID=AMw2dp7op-bX7lFMO; APISID=CDtEZIJr2HLbwXmp/AWL6wr8MMkpfPBe0X; SAPISID=ORuxlLyI3LyXKL8R/AncDqFm8DsPa4_GPs; __Secure-1PAPISID=ORuxlLyI3LyXKL8R/AncDqFm8DsPa4_GPs; __Secure-3PAPISID=ORuxlLyI3LyXKL8R/AncDqFm8DsPa4_GPs; OTZ=6696823_52_52__52_; SEARCH_SAMESITE=CgQIvpYB; S=billing-ui-v3=bMJoIJBOh1kxY4QbiWsOmAP2lFwFQpZa:billing-ui-v3-efe=bMJoIJBOh1kxY4QbiWsOmAP2lFwFQpZa; SID=PAjN2obJjkVz0qpq4q-GHKqXQQZp2i2hQwbtekCGR86Scz-SKma8U6-mYh1xLwlxGKhzig.; __Secure-1PSID=PAjN2obJjkVz0qpq4q-GHKqXQQZp2i2hQwbtekCGR86Scz-SPzXMaQtPXYghuLRlaLBQKQ.; __Secure-3PSID=PAjN2obJjkVz0qpq4q-GHKqXQQZp2i2hQwbtekCGR86Scz-S14OKHaBYgdYxeAfZxXO9CQ.; AEC=AakniGPe6aQFoW7vOZLAP0NMZQbvRYK50_CwmO90U68hV1PJVwJgTdJY9Q; NID=511=h_rxFU4iwTWpyZwGAUuhyFjQwcVoCIegiI3osuTiY4XQYzE9SnLvHwlanNxMs_atghfGpNYhmQuSe62oI6DxQDxylp5U8h20hAD6uD_fP8gqJHkwbUcRryTi8HCp7jtYgOxj6UwLJ_SlvzNmP5MikSSQbMWICJfQOtovGSv1Gqm7vAsjAeDl21qEkFks-gqHleLUY5sSLWgtGM_6HCGFLyYhCwpGyowUKC6iYjO0MIfSz5efXD84ETnl6JW74kEQFSW9LFjrdrjNHyxatb5cghlWU93hf9vEI8ak2yvK4-15oJEvxugrEH4FAeFus1V8Lw; UULE=a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNjY0NzEzNzE1MDk5MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDY1NTY4NzY4CiAgbG9uZ2l0dWRlX2U3OiAzMzcxODI3Mgp9CnJhZGl1czogNDEyNjQyOC4xODM1NTE4NDkKcHJvdmVuYW5jZTogNgo=; DV=U1ORqBmDALtRIBy4P1MyROsABrWKORiI-LVhLnx5NgAAAMDG-w71jj8zEgAAAPA12Tp0snLFNwAAAB7d8Xg8VY-nEgAAAA; 1P_JAR=2022-10-02-12; SIDCC=AEf-XMR6wZ_mOMklPfk6lwJGkPBDNAUFeo9ffsPzw00Sk1kW8vGbkZGeoDkLXiPMV9eTAuy2PKo; __Secure-1PSIDCC=AEf-XMQJVmAIKD-JU2nkP8asXW3JpM8m_gypNBs_1OcNV1jTfpWUVxpFZ51X4FbnboAuD2os6lg; __Secure-3PSIDCC=AEf-XMTAE6-RoZte2i1XVutkgXHNi6oaormmAID7raBjSVqT0Xdvgfjla4TLXOIrdZf5S_ibXg",
        "Referer": "https://www.google.com/",
        "Referrer-Policy": "origin"
        },
        "body": null,
        "method": "GET"
      })
      .then((res:any) => res.text())
      .then((data:any) =>  {

        if(c.code !== `/m/09nqf`){
          let price:string = data.match(/data-exchange-rate="[\d|\.]+/)?.[0]?.split('data-exchange-rate=\"')?.[1];
          return ({...c, price});
        } return (c);


        // Countries.findOneAndUpdate({_id: c._id}, { price: data.match(/data-exchange-rate="[\d|\.]+/)?.[0]?.split('data-exchange-rate=\"')?.[1] }).exec();

        // console.log({ price: data.match(/data-exchange-rate="[\d|\.]+/)?.[0]?.split('data-exchange-rate=\"')?.[1] });
      }); 
  });

  Promise.all(result).then(dat => {
    res.status(200).json(dat);
  });

}

export default handler;