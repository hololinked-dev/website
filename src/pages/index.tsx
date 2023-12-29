import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Stack, Typography, Grid, AppBar, Toolbar } from '@mui/material';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';


export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    
    return (
        <>  
            {/* <AppBar>
                <Toolbar>
                    <Typography>{siteConfig.title}</Typography>
                </Toolbar>
            </AppBar> */}
            <Layout
                title={siteConfig.title}
                description="hololinked - data acquisition in HTTP"
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
                        <h1>Welcome to hololinked's website</h1>
                        <Typography>
                            hololinked is (supposed to be) a versatile and pythonic tool for building control and data acquisition software systems. <br />
                            Benefit from HTTP support to write browser based GUI's and the modern features & elegant frameworks web development offers. 
                        </Typography>
                        <Link to='https://hololinked.readthedocs.io'>
                            official python documentation - hololinked.readthedocs.io
                        </Link>
                        <RepositoryTable />
                        <Typography>
                            Documentation for the admin portal will be made online soon (before end of 2024), but its fairly intuitive to use. <br />
                            This website is dedicated to examples, notes & applications which cannot be part of official documentation. 
                            Go to blog tab for the same.
                        </Typography>
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
                        <th>Repository</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>hololinked core (python server-side)</td>
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
                        <td>client GUI (admin panel)</td>
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

