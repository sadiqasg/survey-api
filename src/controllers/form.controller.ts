import { Request, Response } from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// export const postForm = (req: Request, res: Response) => {
//     const formData: FormData = {
//         ...req.body,
//     };

//     // read the existing form data from the file, if it exists
//     let existingFormData: FormData[] = [];
//     try {
//         const fileData = fs.readFileSync("formData.json", "utf8");
//         const data = JSON.parse(fileData);

//         if (!Array.isArray(data)) {
//             existingFormData = [data];
//         } else {
//             existingFormData = data;
//         }
//     } catch (err) {
//         console.error(err);
//     }

//     // add the new form data to the existing form data array
//     existingFormData.push(formData);

//     // write the merged form data back to the file
//     fs.writeFile("formData.json", JSON.stringify(existingFormData), (err) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error saving form data to file");
//         } else {
//             res.status(200).json(formData);
//         }
//     });
// };

interface ShareholderData {
    name: string;
    position: string;
    dob: string;
    bvn: string;
    resAddress: string;
    pep: string;
    shares: number;
    // additional data
    [key: string]: any;
}

interface RepData {
    name: string;
    position: string;
    dob: string;
    pob: string;
    bvn: string;
    phone: string;
    pep: string;
    // additional data
    [key: string]: any;
}

interface CompanyData {
    name: string;
    address: string;
    stockMarket: boolean;
    legalPerson: string;
    shares: number;
    // additional data
    [key: string]: any;
}

export const postForm = (req: Request, res: Response) => {
    const {
        entityName,
        accountNumber,
        tin,
        shareholders,
        representatives,
        companies,
    } = req.body;

    // Process single data for shareholders, representatives, and companies
    const shName = shareholders.name;
    const shPosition = shareholders.position;
    const shDOB = shareholders.dob;
    const shBVN = shareholders.bvn;
    const shResAddress = shareholders.resAddress;
    const shPEP = shareholders.pep;
    const shShares = shareholders.shares;

    const repName = representatives.name;
    const repPosition = representatives.position;
    const repDOB = representatives.dob;
    const repPOB = representatives.pob;
    const repBVN = representatives.bvn;
    const repPhone = representatives.phone;
    const repPEP = representatives.pep;

    const cName = companies.name;
    const cAddress = companies.address;
    const cStockMarket = companies.stockMarket;
    const cLegalPerson = companies.legalPerson;
    const cShares = companies.shares;

    // Process array data for additional shareholder, representative, and company data
    const additionalShareholders: ShareholderData[] =
        shareholders.additionalData || [];
    const additionalRepresentatives: RepData[] =
        representatives.additionalData || [];
    const additionalCompanies: CompanyData[] = companies.additionalData || [];

    const formData = {
        entityName,
        accountNumber,
        tin,
        shareholderData: {
            name: shName,
            position: shPosition,
            dob: shDOB,
            bvn: shBVN,
            resAddress: shResAddress,
            pep: shPEP,
            shares: shShares,
            additionalData: additionalShareholders,
        },
        repData: {
            name: repName,
            position: repPosition,
            dob: repDOB,
            pob: repPOB,
            bvn: repBVN,
            phone: repPhone,
            pep: repPEP,
            additionalData: additionalRepresentatives,
        },
        companyData: {
            name: cName,
            address: cAddress,
            stockMarket: cStockMarket,
            legalPerson: cLegalPerson,
            shares: cShares,
            additionalData: additionalCompanies,
        },
    };

    res.status(200).json(formData);
};

export const getAllFormData = (req: Request, res: Response) => {
    try {
        const fileData = fs.readFileSync("formData.json", "utf8");
        const formData = JSON.parse(fileData);
        res.status(200).json(formData);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving form data");
    }
};
