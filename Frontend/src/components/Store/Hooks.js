import Context from "./Context";
import { useContext } from "react";

export const useGetContext = () => {
    return useContext(Context);
}