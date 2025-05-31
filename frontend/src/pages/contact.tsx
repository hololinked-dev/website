import { Box, Typography, Stack, Button, TextField, Divider } from "@mui/material"
import { useColorMode } from '@docusaurus/theme-common';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import { OpenInNew } from "@mui/icons-material";
// import { GoogleReCaptchaProvider, GoogleReCaptchaCheckbox } from '@google-recaptcha/react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


function CalLink() {
    const { colorMode } = useColorMode();
    console.log(colorMode);
    
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {
                theme: colorMode === "dark" ? "dark" : 'light', 

            });
        })();
    }, [colorMode])

    return (
        <Button 
            sx={{ alignSelf: 'flex-start', backgroundColor : "#2e8555", "&:hover": { backgroundColor: "#3b956f" } }}
            variant="contained"
            data-cal-link="vigneshvsv"
        >
            Schedule a Meeting
        </Button>
    )
}


export default function ContactInfo() {

    const {
        siteConfig: {customFields},
      } = useDocusaurusContext();

    useEffect(() => {
        console.log("backend URL", customFields.backendURL);
    }, []);
 
    return (
        <Layout
            title="contact"
            description="hololinked offical website"
        >
            <Box sx={{ justifyContent : 'center', display : 'flex', pt : 10, p : 2 }}>
                <Stack>
                    <Typography>
                        {"EMAIL : "}
                        <a href="mailto:vignesh.vaidyanathan@hololinked.dev">
                            vignesh.vaidyanathan@hololinked.dev
                        </a>
                    </Typography>       
                    <Typography>
                        Feel free to contact me or open discussions in the GitHub repository.
                    </Typography>
                    {/* <Form /> */}
                    <Stack direction="row">
                        Find me on
                        <Link to="https://discord.com/users/1178428338746966066" style={{ paddingLeft : "3px"}}>
                            Discord
                        </Link>,
                        <Link to="https://www.linkedin.com/in/v-vignesh-venkata-subramanian-7a53a3108/" style={{ paddingLeft : "3px"}}>
                            LinkedIn
                        </Link>
                    </Stack>
                    <CalLink />
                    <Typography>
                        <br></br>
                        There is also a unpopulated discord group for this project if you wish to join - 
                        <Link to="https://discord.com/invite/kEz87zqQXh" style={{ paddingLeft : "3px"}}>
                            Discord Group
                        </Link>
                    </Typography>
                    
                </Stack>
            </Box>
        </Layout>
    )
}


const Form = () => {
    return (
      
        <Stack >
            <Typography>You can contact me anonymously or with email through this form:</Typography>
            <Box sx={{ p: 0.5 }} />
            {/* <form action="https://example.com/feedback" method="POST">
                <Stack spacing={2}>
                    <TextField 
                        label="Name" 
                        name="name" 
                        variant="outlined" 
                        size="small"
                        fullWidth 
                        required 
                    />
                    <TextField 
                        label="Email (Optional)" 
                        name="email" 
                        type="email"
                        size="small" 
                        variant="outlined" 
                        fullWidth 
                    />
                    <TextField
                        select
                        label="Feedback Type"
                        name="feedbackType"
                        variant="outlined"
                        size="small"
                        fullWidth
                        SelectProps={{
                            native: true,
                        }}
                        required
                    >
                        <option value="" disabled>
                            Select feedback type
                        </option>
                        <option value="general">General Feedback</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="submit-example">Submit an Example to Catalogue</option>
                        <option value="participate-in-weekly-discussions">Participate in Weekly Discussions</option>
                        <option value="question">Question</option>
                        <option value="complaint">Complaint</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="other">Other</option>
                    </TextField>
                    <Typography variant="caption">
                        If you would like me to contact you back, please provide your email address. Otherwise, its not possible.
                    </Typography>
                    <TextField 
                        label="Feedback/Information" 
                        name="text" 
                        variant="outlined" 
                        multiline 
                        minRows={4}
                        fullWidth 
                        required 
                    />
                    <GoogleReCaptchaProvider
                        type="v2-checkbox"
                        siteKey="Your recaptcha key"
                    >
                        <GoogleReCaptchaCheckbox
                            action="Your action name"
                            onChange={(token: string) => {
                                console.log(token);
                            }}
                        />
                    </GoogleReCaptchaProvider> 
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ 
                            alignSelf: 'flex-start', 
                            backgroundColor: "#2e8555", 
                            "&:hover": { backgroundColor: "#3b956f" } 
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </form> */}
        </Stack>
    )
}