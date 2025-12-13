declare global {
    interface Window {
        gtag?: (...args:any[]) => void;
    }
}


export const sendConversion = ()=>{
    if(typeof window !== "undefined" && window.gtag){
        window.gtag("event","conversion",{
            send_to:"AW-17651203004/rvhvCNKd79AbELz33-BB"
        })
    }
}