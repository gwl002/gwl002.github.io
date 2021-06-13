// const puppeteer = require('puppeteer');
// const fs = require("fs");
// const ReactDOMServer = require('react-dom/server');


// const PdfTemplate = ({ imgSrc }) => {
//     return (
//         <div className="bg">
//             <h2>heading</h2>
//             <div>
//                 content
//             </div>
//             <img src={imgSrc} alt="" style={{ width: "100%", height: 300 }} />
//         </div>
//     )
// }

// const createHtmlStr = () => {
//     const imagePath = __dirname + "/../../../../public/images/bg.jpeg";
//     const imgData = fs.readFileSync(imagePath).toString("base64");
//     const imgSrc = `data:image/jpeg;base64,${imgData}`;
//     const content = ReactDOMServer.renderToString(<PdfTemplate imgSrc={imgSrc} />)
//     return `
//         <html>
//             <head>
//                 <style>
//                     html,body{
//                         margin:0;
//                         padding:0;
//                         height:100%
//                     }
//                     .bg{
//                         height:100%;
//                         position:relative;
//                     }
//                 </style>
//             </head>
//             <body>
//                 ${content}
//             </body>
//         </html>
//     `
// }

// export default async function handler(req, res) {
//     console.log("start")
//     const browser = await puppeteer.launch({
//         args: ['--disable-dev-shm-usage', '--no-sandbox']
//     });
//     const page = await browser.newPage();
//     ;
//     const html = createHtmlStr();
//     console.log(html, "====")
//     // await page.goto("http://localhost:3000/");
//     await page.setContent(html);
//     const pdf = await page.pdf({
//         format: 'A4',
//         printBackground: true,
//         '-webkit-print-color-adjust': 'exact',
//     });
//     await browser.close();
//     console.log("end render");
//     res.setHeader("Content-Type", 'application/pdf');
//     res.status(200);
//     res.send(pdf);
// }