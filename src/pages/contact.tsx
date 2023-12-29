import { Box, Typography } from "@mui/material"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function ContactInfo() {

    const { siteConfig } = useDocusaurusContext();
    
    return (
        <Layout
            title={siteConfig.title}
            description="hololinked offical website"
        >
            <Box sx={{ justifyContent : 'center', display : 'flex', pt : 1 }}>
                <Typography>
                    EMAIL : vignesh.vaidyanathan@hololinked.dev
                </Typography>       
            </Box>
        </Layout>
    )
}