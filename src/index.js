const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')
const urlHistoryMbBank = 'https://online.mbbank.com.vn/retail-web-transactionservice/transaction/getTransactionAccountHistory'
const bodyMbBank = {
    accountNo: "0853249951",
    fromDate: "01/11/2022",
    toDate: "08/11/2022",
    sessionId: "4fab5393-273b-4017-9eba-e747a69f2322",
    refNo: "AACCKJB-2022110822590383",
    deviceIdCommon: "8qhn4ojb-mbib-0000-0000-2022110821133985"
}
const headersMbBank = {
//     'Accept': 'application/json, text/plain, */*',
// 'Accept-Language': 'vi',
'Authorization': 'Basic RU1CUkVUQUlMV0VCOlNEMjM0ZGZnMzQlI0BGR0AzNHNmc2RmNDU4NDNm',
// 'Connection': 'keep-alive',
'Content-Type': 'application/json; charset=UTF-8',
// 'Cookie': 'MBAnalyticsaaaaaaaaaaaaaaaa_session_=MALPFFHLGOIPIKNKNGILEMMINNNOIBNHCPPJBAEJHEAJMDDOLOCFGBEEAAAGOKIGCHODBAGHEDMFCALIOJOAMOBJIHOCPBKNDAEEAJOHNOAJBDHPFPBLAFPAFPHEKPMH; BIGipServerk8s_online_banking_pool_9712=3491496202.61477.0000; MBAnalyticsaaaaaaaaaaaaaaaa_session_=KJFCMNMLNJIGCDHLOBFCCFLBIJNKENOBOJJMKEKMIGMKOPMHMDGDHMANLFPCKDABGFJDGFGEIDACOEGMGNPAINEBKGNNOMKNKFMEJGBCMNMKMIKJNDPFPADLFCNAGOKH; _ga=GA1.3.592813600.1667916820; _gid=GA1.3.380618092.1667916820; BIGipServerk8s_retail_web_internetbankingms_pool_9751=3474718986.5926.0000; BIGipServerLog_Center_API_9201_POOLS=3105620234.61731.0000; BIGipServeronline_mbbank_retake_pool_9201=2971402506.61731.0000; BIGipServeronline_mbbank_retail_web_pool_8686=1360134410.60961.0000; BIGipServerk8s_retail-web-accountms_pool_10557=3474718986.15657.0000; BIGipServerk8s_retail-web-transactionservice_pool_9758=1679556874.7718.0000; MBAnalytics1411053802aaaaaaaaaaaaaaaa_cspm_=GOMDFMJJKNPDHOPGCJANJFKAIJNLAJMPIMMFKPJCANFIFGBBGFNFMIKEKBLOLLMFIOJCLBCHBDHBCBFKHBCAIMMAAPPKAJCAKLMEIJNNPGLMEPKDJGNFHDMMAKOPJOEL; _gat_gtag_UA_205372863_2=1; JSESSIONID=B2C3E1330F74A8E64FBB7C884548A1CF; MBAnalyticsaaaaaaaaaaaaaaaa_session_=MFIOJGPELMGHCOPNBJIAPLELFLNIHHKHJALKNPDHMPGAPPFFPPPINHFELFAGBJGBMJEDDGGPBHMGDNIGNHKANKKCFHNLDBDJFNPCMCKJCAJBAOCBFEHDMNHIDIOFCEHG; BIGipServerk8s_retail-web-transactionservice_pool_9758=1679556874.7718.0000; JSESSIONID=EA3C5F3B67AECC939B1BF13E5CF42D82',
// 'Origin': 'https://online.mbbank.com.vn',
// 'Referer': 'https://online.mbbank.com.vn/information-account/source-account',
// 'Sec-Fetch-Dest': 'empty',
// 'Sec-Fetch-Mode': 'cors',
// 'Sec-Fetch-Site': 'same-origin',
// 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.35',
// 'X-Request-Id': 'AACCKJB-2022110822590383',
// 'elastic-apm-traceparent': '00-6cc96f436892034b32b6c3b5d8d1d56a-541f1dd3453f6c65-01',
// 'sec-ch-ua': '"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
// 'sec-ch-ua-mobile': '?0',
// 'sec-ch-ua-platform': '"Windows"'
}
app.get('/', async(req, res) => {

        axios.post(urlHistoryMbBank,bodyMbBank, {
            headers: headersMbBank
        }).then(data => {
            console.log(data.data.transactionHistoryList)
            res.json(data.data.transactionHistoryList)
        }).catch(error => {
            console.log(error)
            res.json("That bai")
        })

        
})

app.listen(port, () => {console.log(`server run port ${port}`)})