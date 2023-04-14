export interface UserData {
    firebaseID?: string;
    fullName: string;
    email: string;
    password: string;
    photoUrl?: string;
    signatureUrl?: string;
    role?: string;
    stats?: {
        totalRequisitions?: number;
        totalAmount?: number;
        pendingRetirement?: {
            amount?: number;
            total?: number;
        };
    }[];
}

// export interface FormData {
//     entityName: string;
//     accountNumber: string;
//     tin: string;
//     shName: string;
//     shPosition: string;
//     shDOB: string;
//     shBVN: string;
//     shResAddress: string;
//     shPEP: boolean;
//     shShares: number;
//     repName: string;
//     repPosition: string;
//     repDOB: string;
//     repPOB: string;
//     repBVN: string;
//     repPhone: string;
//     repPEP: boolean;
//     cName: string;
//     cAddress: string;
//     cStockMarket: boolean;
//     cLegalPerson: string;
//     cShares: number;
// }

interface FormData {
    entityName: string;
    accountNumber: string;
    tin: string;
    sh: {
        shName: string;
        shPosition: string;
        shDOB: string;
        shBVN: string;
        shResAddress: string;
        shPEP: boolean;
        shShares: number;
        additionalData?: Array<Record<string, any>>;
    };
    rep: {
        repName: string;
        repPosition: string;
        repDOB: string;
        repPOB: string;
        repBVN: string;
        repPhone: string;
        repPEP: boolean;
        additionalData?: Array<Record<string, any>>;
    };
    company: {
        cName: string;
        cAddress: string;
        cStockMarket: boolean;
        cLegalPerson: string;
        cShares: number;
        additionalData?: Array<Record<string, any>>;
    };
    additionalData?: Array<Record<string, any>>;
}
