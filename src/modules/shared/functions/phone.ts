export const maskPhone = (phone: string) => {
    const noMask = phone.replace(/\D/g, '');
    return noMask.replace(/(\d{2})(\d)/, '($1) $2').replace(noMask.length === 11 ? /(\d{5})(\d)/g : /(\d{4})(\d)/g, '$1-$2')
}