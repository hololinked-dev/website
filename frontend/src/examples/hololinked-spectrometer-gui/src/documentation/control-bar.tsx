import { useState } from "react";
import { Box } from "@mui/material";
import { Control } from "../core/device"
import { Device, DeviceContext, unknownDevice } from "../App";
import { DeviceSearchBar } from "./app-bar";


export const ControlApp = () => {
    const [device, setDevice] = useState<Device>(unknownDevice)
   
    return (
        <Box sx={{ backgroundColor : 'white' }}>
            <DeviceContext.Provider value={[device, setDevice]}>
                <DeviceSearchBar />
                <Control />
            </DeviceContext.Provider>
        </Box>        
    );
}


