import { Box, Typography, Stack } from "@mui/material"
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";


export default function ContactInfo() {
 
    return (
        <Layout
            title="contact"
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
                    <Stack direction="row">
                        Find me on
                        <Link to="https://discord.com/users/1178428338746966066" style={{ paddingLeft : "3px"}}>
                            Discord
                        </Link>,
                        <Link to="https://www.linkedin.com/in/v-vignesh-venkata-subramanian-7a53a3108/" style={{ paddingLeft : "3px"}}>
                            LinkedIn
                        </Link>
                    </Stack>
                    <SponsorshipTable />
                </Stack>
            </Box>
        </Layout>
    )
}


const SponsorshipTable = () => {

    return(
        <Box sx={{pt : 2, display : 'flex', justifyContent : 'center' }}>
        <table>
            <thead>
                <tr>
                    <th>Sponsor</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Open Collective</td>
                    <td>
                        <Link to='https://opencollective.com/hololinked-dev'>
                            https://opencollective.com/hololinked-dev
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>GitHub Sponsors</td>
                    <td>
                        <Link to='https://github.com/sponsors/VigneshVSV'>
                            https://github.com/sponsors/VigneshVSV
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>Buy me a coffee</td>
                    <td>
                        <Link to='https://buymeacoffee.com/vigneshvsv'>
                            https://buymeacoffee.com/vigneshvsv
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
    )
}