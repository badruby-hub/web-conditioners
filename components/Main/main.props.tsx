 type Lang = "ru" | "en";
export interface Reviews  {
   id: number,
   text: Record<Lang,string>,
   author: Record<Lang,string>,
}