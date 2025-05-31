import { JSX } from 'react/jsx-runtime';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useEffect, useState } from 'react';
import repoInfo from './info/repo-info.json';


export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    
    return (
        <>  
            <Layout
                title={siteConfig.title}
                description="Pythonic Supervisory Control and Data Acquisition / Internet of Things"
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
                            <h1>hololinked - Pythonic Supervisory Control and Data Acquisition / Internet of Things</h1>
                            <Typography>
                                hololinked is a versatile and pythonic tool for building custom control and data acquisition software systems. <br />
                                Benefit from HTTP support to write web interfaces for your instrumentation, along with the modern features & elegant frameworks web development offers. 
                            </Typography>
                            <Link to='https://hololinked.readthedocs.io'>
                                detailed information and official python documentation - hololinked.readthedocs.io <OpenInNew fontSize='small'sx={{ pt : 1 }}/>
                            </Link>
                            <Link to="https://github.com/hololinked-dev">
                                GitHub organisation <OpenInNew fontSize='small'sx={{ pt : 1 }}/>
                            </Link>
                            <RepositoryTable />
                        </Stack>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}


    
const RepositoryTable = () => {
    const [repositories, setRepositories] = useState<{ title: string; link: string; linkText: string }[]>([]);

    useEffect(() => {
        setRepositories(repoInfo);
    }, []);

    return (
        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>Github Repository</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {repositories.map((repo, index) => (
                        <tr key={index}>
                            <td>{repo.title}</td>
                            <td>
                                <Link to={repo.link}>{repo.linkText}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
};
