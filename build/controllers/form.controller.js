"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFormData = exports.postForm = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const postForm = (req, res) => {
    const { entityName, accountNumber, tin, shareholders, representatives, companies, } = req.body;
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
    const additionalShareholders = shareholders.additionalData || [];
    const additionalRepresentatives = representatives.additionalData || [];
    const additionalCompanies = companies.additionalData || [];
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
exports.postForm = postForm;
const getAllFormData = (req, res) => {
    try {
        const fileData = fs_1.default.readFileSync("formData.json", "utf8");
        const formData = JSON.parse(fileData);
        res.status(200).json(formData);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving form data");
    }
};
exports.getAllFormData = getAllFormData;
