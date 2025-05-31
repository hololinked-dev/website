import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const FailedSSRMessage = () => {
    return (
        <h6>
            Cant use SSR for this output - contact developer or use local app from corresponding example
        </h6>
    )
}

export const ScrollToTop = () => {
    return (
        <>
            {ExecutionEnvironment.canUseDOM? 
                <BrowserOnly>
                    {() => 
                        <IconButton onClick={() => window.scrollTo({top : 0, behavior : 'smooth'})}>
                            <ArrowUpwardIcon>
                            </ArrowUpwardIcon>
                        </IconButton>
                    }
                </BrowserOnly> :  <FailedSSRMessage />
            }
        </>
    )
}