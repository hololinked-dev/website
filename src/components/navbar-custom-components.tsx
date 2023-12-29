// import { FormControlLabel, Switch } from "@mui/material"
import { useContext, useState } from "react"
import { AppContext as SpectrometerAppContext } from "../examples/hololinked-spectrometer-gui/src/App"


export const LiveExamples = () => {

    const [liveExamples, setLiveExamples] = useState<boolean>(false)
    const spectrometerAppSettings = useContext(SpectrometerAppContext)

    const toggleLiveExamples = () => {
        spectrometerAppSettings.current = { 
            ...spectrometerAppSettings.current,
            liveExamples : !liveExamples
        }
        setLiveExamples(!liveExamples)
    }
    
    return (
        <></>
        // <FormControlLabel
        //     control={
        //         <Switch 
        //             onChange={toggleLiveExamples} 
        //             checked={liveExamples} 
        //             sx={{ 
        //                 '& .MuiSwitch-switchBase' : { 
        //                     '&.Mui-checked': {                         
        //                         color : '#fff',
        //                         '& + .MuiSwitch-track': { 
        //                             backgroundColor : "yellow"
        //                 }}}, 
        //             }}
        //         />}
        //     label='Use Live Examples'
        // / >
    )
}