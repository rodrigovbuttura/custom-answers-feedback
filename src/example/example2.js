import $ from "../Functions/index.js";

async function Main (props) {

    if(props)
        return "OnProps";
    else
        return "NotProps";
}

export default async function App(props) {
    return await $().on( Main(props), "FNAME -> Example 2 witch PROPS" );
}