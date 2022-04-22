import $ from "../Functions/index.js";

async function Main (props) {

    if(props)
        return $().reply("Successful",{ ...props });
    else
        return $().reply("Error",[]);
}

export default async function App(props) {
    return await $().on( Main(props), "FNAME -> Example 1 witch DATA" );
}