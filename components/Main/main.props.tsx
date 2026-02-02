 type Lang = "ru" | "en";
export interface Reviews  {
   id: number,
   text: Record<Lang,string>,
   author: Record<Lang,string>,
}

export interface Comparison{
    id: number,
    left: string,
    right:string,
}