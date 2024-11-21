export default interface PostInterface{
    title: string,
    category: categoryOptions,
    content: string,
    userId: string
}

export enum categoryOptions{
    mma = 'mma',
    jiu_jitsu = 'jiu jitsu',
    muay_thai = 'muay thai',
    boxing = 'boxing',
    all = 'all'
}