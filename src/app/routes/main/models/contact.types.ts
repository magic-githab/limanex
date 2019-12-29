export default interface Contact {
    id: number
    uniqueCode: string
    userID: number
    timestamp: {date: string, timezone_type: number, timezone: string}
    dob: {date: string, timezone_type: number, timezone: string}
    POB: number
    age: string
    nationalID: string
    name: string
    firstName: string
    lastName: string
    hebName: string
    phones: [{prefix: string, phone: string, platforms: Array<any>}]
    gender: string
    email: string
    address: {countryID: number, countryName: string, cityID: number, cityName: string, street: string }
    lang: string
    state: number
    userState: number,
    userRoles: Array<any>
    bankAccount: {bankID: number, branchID: number, bankAccountNumber: string}
    msAccountID: number,
    insertByID: number,
    insertBy: Contact,
    roles: { [key: string]: {roleSubID: number, type: string, state: number} }
}

export interface ContactsResponse {
    ok: boolean
    incomplete_results: boolean
    total_count: number
    items: Array<Contact>
    dbg: null
}