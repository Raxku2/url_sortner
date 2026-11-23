import { url } from "../store/useUrlStore";




export function genaratorHandeler() {
    if(!url.url){
        return;
    }
    console.log(url.url);
    
    return;
}

