import Error from "./Errors.js";

class Main {
    
    Error(){
        return {
            ...Error,
        } 
    }

    Message(errorName,result={}){

        const error = this.Error();
        
        return {
            ...error[errorName],
            data:result
        }
    }
}

export default new Main