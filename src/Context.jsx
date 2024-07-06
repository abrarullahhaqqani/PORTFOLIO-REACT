import { createContext,useReducer } from "react";
export const themeContext=createContext();
const initialState={Darkmode:false};
const themeReducer=(state,action)=>{
    switch(action.type){
        case 'toogle':
            return {Darkmode:!state.Darkmode};
        default :
          return state;
    }
};
export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,initialState);
    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}