export interface Comparison{
    id: number,
    left: string,
    right:string,
}
type Lang = "ru"| "en";


export interface History{
    id: number,
    text: Record<Lang, string>,
    author: Record <Lang,string>,
}