import {getArgs} from './helpers/args.js'

const initCli = ()=>{
    const args = getArgs(process.argv);
    console.log(args);
    if(args.h){
        //help
    }
    if(args.s){
        //save miasto
    }
    if(args.t){
        //save token
    }
    //вывести погоду
}
initCli();