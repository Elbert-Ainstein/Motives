import {readFileSync} from 'fs';
import { toLong } from 'ip';
let isLoaded = false;

let data : any = [];

let ipSearch = function (x : number, start : number, end : number): string | null {
      
    if (start > end) return null;
    let mid=Math.floor((start + end)/2);

    if (data[mid][1] >= x && x >= data[mid][0]) 
        return data[mid][2];
         
    if(data[mid][0] > x)
        return ipSearch(x, start, mid-1);
    else
        return ipSearch(x, mid+1, end);
}
  
function load(){
    data = JSON.parse(readFileSync(__dirname+"/../data.json", {encoding:"utf8"}));
    isLoaded = true;
}

export const getCountry = (ip : string) => {
    if (!isLoaded)
        load();
    var ipLong = toLong(ip);
    console.log(ipSearch(ipLong, 0, data));
    
    
};