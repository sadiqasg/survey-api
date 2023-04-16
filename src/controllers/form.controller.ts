import { Request, Response } from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

export const postForm = (req: Request, res: Response) => {
    const formData: FormData = {
        ...req.body,
    };

    let existingFormData: FormData[] = [];
    try {
        const fileData = fs.readFileSync("formData.json", "utf8");
        const data = JSON.parse(fileData);

        if (!Array.isArray(data)) {            
            existingFormData = [data];
        } else {
            existingFormData = data;
        }
    } catch (err) {
        console.error(err);
    }

    // add the new form data to the existing form data array
    existingFormData.push(formData);

    // write the merged form data back to the file
    fs.writeFile("formData.json", JSON.stringify(existingFormData), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error saving form data to file");
        } else {
            res.status(200).json(formData);
        }
    });
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
