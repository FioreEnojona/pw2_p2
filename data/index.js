import { navigation } from "./common/navigation"
<<<<<<< HEAD
import { tabledata } from './common/tabledata';  // Asegúrate de que la ruta sea correcta
export const getPageContext = (pagePath)=>{
    const commonVariables ={
        ...navigation,
        ...tabledata
=======

import { index as indexPageData} from "./pages/index"
import { contactus as contactUsPageData } from "./pages/contactus"


export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...navigation
>>>>>>> 01dbb3d93e2b300fa726771436de66621c096d84
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = indexPageData
            break;
        case '/contactus.html':
            pageVariables = contactUsPageData
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}
