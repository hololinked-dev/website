import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, Button, Divider, Link, Tabs, Typography, Tab, AppBar, Toolbar, TextField, IconButton} from "@mui/material";
import { useCallback, useState, createContext, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';



export type Device = { 
    URL : string
    // info : any
    state : string 
}

export const DeviceContext = createContext<any | [Device, Function]>(null)

const unknownDevice = {
    URL : '',
    // info : {},
    state : 'unknown'
}



function SpectrometerApp() {

    const [device, setDevice] = useState(unknownDevice)
   
    return (
        <DeviceContext.Provider value={[device, setDevice]}>
            <DeviceSearchBar />
            <Toolbar variant="dense" />
            {/* toolbar adds padding & should be similar to defined in DeviceSearchBar */}
        </DeviceContext.Provider>
        
    );
}


const DeviceSearchBar = () => {

    const [deviceURL, setDeviceURL] = useState<string>('https://localhost:8083/spectrometer/ocean-optics/USB2000-plus')
    const [deviceFound, setDeviceFound] = useState<boolean | null>(null)
    const [_, setDevice] = useContext(DeviceContext)

    const loadDevice = async() => {
        let device : Device = unknownDevice
        let _deviceFound : boolean = false
        try {
            const response = await axios.get(`${deviceURL}/state`)
            switch(response.status){
                case 200  : 
                case 202  : device = {
                                URL : deviceURL,
                                state : response.data.returnValue
                            }; 
                            _deviceFound = true;
                            break;
    
                case 404  : _deviceFound = false; 
            }
        } catch (error) {
            _deviceFound = false      
        }
        setDevice(device)
        setDeviceFound(_deviceFound)
        console.debug(device)
    }
    
    return(
        <AppBar position='static' color="inherit" sx={{ pt : 0.5 }}>
            {/* padding top for TextField label to not be covered by browser search bar */}
            <Toolbar variant="dense"> 
                <Typography fontSize={20} color='black'>
                    Spectrometer
                </Typography>
                <Box sx={{pl : 2, display : 'flex', flexGrow : 1}}>
                    <TextField 
                        size="small" 
                        label="Device URL"            
                        error={deviceFound !== null && !deviceFound}
                        sx={{ display : 'flex', flexGrow : 1 }}
                        value={deviceURL}
                        onChange={(event) => setDeviceURL(event.target.value)}
                    />
                </Box>
                <IconButton onClick={loadDevice}>
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}


export default SpectrometerApp