interface Country {
    code: string,
    name: string,
    price: string,
    details: {
        code?: string,
        name?: string,
        symbol?: string,
    },
    flag: string,
    country: string,
}


export { Country };