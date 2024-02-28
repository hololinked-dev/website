import { JSX } from 'react/jsx-runtime';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';


export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    
    return (
        <>  
            <Layout
                title={siteConfig.title}
                description="supervisory control anda data acquisition in python"
            >
                <Grid 
                    container
                    sx={{ 
                        justifyContent : 'center', 
                        display : 'flex', p : 2, pt : 5 
                    }}
                >
                    <Grid item xs={12} sm={9} lg={6}>
                        <Stack>
                            <h1>hololinked - supervisory control anda data acquisition in python</h1>
                            <Typography>
                                hololinked is (supposed to be) a versatile and pythonic tool for data acquisition and control software systems. <br />
                                Benefit from HTTP support to write web interfaces for your instrumentation, along with the modern features & elegant frameworks web development offers. 
                            </Typography>
                            <Link to='https://hololinked.readthedocs.io'>
                                detailed information and official python documentation - hololinked.readthedocs.io <OpenInNew fontSize='small'sx={{ pt : 1 }}/>
                            </Link>
                            <RepositoryTable />
                            <Typography>
                                Documentation for the admin panel will be made online soon (before end of 2024), but its fairly intuitive to use. <br />
                                This website is dedicated to examples, notes & applications which cannot be part of official documentation. 
                                Go to blog tab for the same.
                            </Typography>
                            <Link to="contact">
                                Open Collective Donation Box <OpenInNew fontSize='small'sx={{ pt : 1 }}/>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}


const RepositoryTable = () => {
    
    return (
        <Box sx={{pt : 2, display : 'flex', justifyContent : 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>Github Repository</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>hololinked core - python server-side</td>
                        <td>
                            <Link to='https://github.com/VigneshVSV/hololinked'>
                                https://github.com/VigneshVSV/hololinked
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>python examples</td>
                        <td>
                            <Link to='https://github.com/VigneshVSV/hololinked-examples'>
                                https://github.com/VigneshVSV/hololinked-examples
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>client admin panel</td>
                        <td>
                            <Link to='https://github.com/VigneshVSV/hololinked-portal'>
                                https://github.com/VigneshVSV/hololinked-portal
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}




