import { navigation } from "./common/navigation"
import { tabledata } from './common/tabledata';  // Asegúrate de que la ruta sea correcta
export const getPageContext = (pagePath)=>{
    const commonVariables ={
        ...navigation,
        ...tabledata
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case 'index.html':

            break;
    }
    
    return {
        ...commonVariables,
        ...pageVariables
    }
}