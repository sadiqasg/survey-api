"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmailTemplate = void 0;
const generateEmailTemplate = (data) => {
    const { entityName, accountNumber, tin, shName, shPosition, shDOB, shBVN, shResAddress, shPEP, shShares, repName, repPosition, repDOB, repPOB, repBVN, repPhone, repPEP, cName, cAddress, cStockMarket, cLegalPerson, cShares, } = data;
    return `
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Form Data</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
                body {
                    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    font-size: 14px;
                    line-height: 1.4;
                    color: #1d1d1d;
                }

                h1 {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 30px 0;
                    text-align: center;
                }

                .table-container {
                max-width: 800px;
                margin: 0 auto;
            }

                table {
                    border-collapse: collapse;
                    width: 100%;
                }

                th,
                td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }

                th {
                    background-color: #b8c9f377;
                }

                tr:not(:last-child) {
                    border-bottom: 1px solid #ddd;
                }

                th:first-child,
                td:first-child {
                    width: 30%;
                }

                th:last-child,
                td:last-child {
                    width: 70%;
                }
            </style>
        </head>

        <body>
            <h1>Response Data</h1>
            <div class="table-container">
            <table>
                <tbody>
                    <tr>
                        <th>Entity Name:</th>
                        <td>{{entityName}}</td>
                    </tr>
                    <tr>
                        <th>Account Number:</th>
                        <td>{{accountNumber}}</td>
                    </tr>
                    <tr>
                        <th>TIN:</th>
                        <td>{{tin}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder Name:</th>
                        <td>{{shName}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder Position:</th>
                        <td>{{shPosition}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder DOB:</th>
                        <td>{{shDOB}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder BVN:</th>
                        <td>{{shBVN}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder Residence Address:</th>
                        <td>{{shResAddress}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder PEP:</th>
                        <td>{{shPEP}}</td>
                    </tr>
                    <tr>
                        <th>Shareholder Shares:</th>
                        <td>{{shShares}}</td>
                    </tr>
                    <tr>
                        <th>Representative Name:</th>
                        <td>{{repName}}</td>
                    </tr>
                    <tr>
                        <th>Representative Position:</th>
                        <td>{{repPosition}}</td>
                    </tr>
                    <tr>
                        <th>Representative DOB:</th>
                        <td>{{repDOB}}</td>
                    </tr>
                    <tr>
                        <th>Representative POB:</th>
                        <td>{{repPOB}}</td>
                    </tr>
                    <tr>
                        <th>Representative BVN:</th>
                        <td>{{repBVN}}</td>
                    </tr>
                    <tr>
                        <th>Representative Phone:</th>
                        <td>{{repPhone}}</td>
                    </tr>
                    <tr>
                        <th>Representative PEP:</th>
                        <td>{{repPEP}}</td>
                    </tr>
                    <tr>
                        <th>Company Name:</th>
                        <td>{{cName}}</td>
                    </tr>
                    <tr>
                        <th>Registered Office Address:</th>
                        <td>{{cAddress}}</td>
                    </tr>
                    <tr>
                        <th>Stock market:</th>
                        <td>{{cStockMarket}}</td>
                    </tr>
                    <tr>
                        <th>Legal person governed by public law:</th>
                        <td>{{cLegalPerson}}</td>
                    </tr>
                    <tr>
                        <th>% Shares:</th>
                        <td>{{cShares}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </body>
    </html>
`;
};
exports.generateEmailTemplate = generateEmailTemplate;
