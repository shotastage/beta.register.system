export const ValidateType = {
    Email: 'Email',
    URL: 'URL',
    Phone: 'Phone',
    Alphabet: 'Alphabet',
    Integer: 'Integer'
} as const;
type ValidateType = typeof ValidateType[keyof typeof ValidateType];


export const validator = (value: string, type: ValidateType) => {

};

const emailValidator = (value: string) => {
    //
};

const urlValidator = (value: string) => {
    //
};

const phoneValidator = (value: string) => {
    //
};

const alphabetValidator = (value: string) => {
    //
};
