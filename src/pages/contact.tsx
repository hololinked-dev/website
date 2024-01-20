import { Box, Typography, Stack } from "@mui/material"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";


export default function ContactInfo() {

    const { siteConfig } = useDocusaurusContext();
    
    return (
        <Layout
            title={siteConfig.title}
            description="hololinked offical website"
        >
            <Box sx={{ justifyContent : 'center', display : 'flex', pt : 10 }}>
                <Stack>
                    <Typography>
                        {"EMAIL : "}
                        <a href="mailto:vignesh.vaidyanathan@hololinked.dev">
                            vignesh.vaidyanathan@hololinked.dev
                        </a>
                    </Typography>       
                    <Typography>
                        I work in data-acquisition full-time, feel free to contact me or open discussions in the GitHub repository.
                    </Typography>
                    <OpenCollectiveTable />
                </Stack>
            </Box>
        </Layout>
    )
}


const OpenCollectiveTable = () => {

    return(
        <Box sx={{pt : 2, display : 'flex', justifyContent : 'center' }}>
        <table>
            <thead>
                <tr>
                    <th>Repository</th>
                    <th>Open Collective Donation Box</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>hololinked python server-side</td>
                    <td>
                        <Link to='https://opencollective.com/hololinked-python'>
                            https://opencollective.com/hololinked-python
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>hololinked react tools</td>
                    <td>
                        <Link to='https://opencollective.com/hololinked-react'>
                            https://opencollective.com/hololinked-react
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
    )
}