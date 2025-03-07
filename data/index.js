import { navigation } from "./common/navigation"
export const getPageContext = (pagePath)=>{
    const commonVariables ={
        ...navigation
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