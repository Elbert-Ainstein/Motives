import {readFileSync} from 'fs';
export enum LogType { 
    REGISTER = '\x01',
    UPDATE = '\x02',
    LINK = '\x03',
    UNLINK = '\x04',
    DELETE = '\x05',
    PURCHASE = '\x06',
    REFUND = '\x07',
    UPLOAD = '\x08',
    MODERATER_DELETE = '\x09',
    MODERATER_UNDELETE = '\x0a',
    LOGIN = '\x0b',
    LOGOUT = '\x0c',
    FALSELOGIN = '\x0d',
    CREATE = '\x0e',
}
let file = readFileSync("./log.bin", "latin1");

export function log(type : LogType, special : any, ...args : Array<string>){
    let str = `${type}`;
    var i : number = 0;
    for(let arg of args){
        if (typeof arg === 'string'){
            if (special[i] == 'ipv4'){
                str += arg.split('.').map((ele)=>String.fromCharCode(parseInt(ele))).join('');
            } else {
                str += arg.replace("\x00","\x00\x00").replace(type, "\x00"+type)
            }
        };
        
        str += `${type}`;
        i++;
    }
    file += str;
}