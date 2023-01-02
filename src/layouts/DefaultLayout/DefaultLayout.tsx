import { Outlet } from "react-router-dom";
import { StylesLayout } from "./styles";

export function DefaultLayout(){
    return(
        <StylesLayout>
            <Outlet/>
        </StylesLayout>
    )
}