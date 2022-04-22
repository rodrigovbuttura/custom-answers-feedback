import Error from "./Message.js";

export default function Main() {

    const on = async (__FUNCTION__, __NAME__ = 'FUNCTION NAME') => {

        try {
    
            const fs = await __FUNCTION__;
            const Message = fs && typeof fs == "string" ? Error.Message(fs, []) : fs;
        
            return { ...Message, _fn: __NAME__ };
    
        } 
        catch (err) {
            console.log(err);    
            return { ...Error.Message("Error"), _fn: __NAME__ };
        }

    }

    const reply = async(error, data) => {
        return Error.Message(error, data)
    }

    return { 
        on, 
        reply,
    }

}

