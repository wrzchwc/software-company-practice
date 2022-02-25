import React, {useState} from 'react';
import {cloneDeep} from "lodash";
import Lottie from 'react-lottie';
import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    makeStyles,
    TextField,
    Typography, useMediaQuery,
    useTheme
} from "@material-ui/core";
import {animationOptions} from "../services/animationOptions";

import check from '../../assets/check.svg';
import send from '../../assets/send.svg';
import software from '../../assets/software.svg';
import mobile from '../../assets/mobile.svg';
import website from '../../assets/website.svg';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import backArrowDisabled from '../../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../../assets/forwardArrowDisabled.svg';
import camera from '../../assets/camera.svg';
import upload from '../../assets/upload.svg';
import person from '../../assets/person.svg';
import persons from '../../assets/persons.svg';
import people from '../../assets/people.svg';
import info from '../../assets/info.svg';
import bell from '../../assets/bell.svg';
import users from '../../assets/users.svg';
import iphone from '../../assets/iphone.svg';
import gps from '../../assets/gps.svg';
import customized from '../../assets/customized.svg';
import data from '../../assets/data.svg';
import android from '../../assets/android.svg';
import globe from '../../assets/globe.svg';
import biometrics from '../../assets/biometrics.svg';

import estimateAnimation from '../../animations/estimateAnimation/data.json';
import {Expectation} from "./Expectation";

const useStyles = makeStyles(theme => ({
    icon: {
        width: '12em',
        height: '10em'
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: '1.25rem',
        marginTop: '5em',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        borderRadius: "5",
        marginTop: "5em"
    },
    specialText: {
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: '1.5rem',
        color: theme.palette.common.orange
    }
}));

const defaultQuestions = [
    {
        id: 1,
        title: 'Which service are you interested in?',
        active: true,
        options: [
            {
                id: 1,
                title: 'Custom Software Development',
                subtitle: null,
                icon: software,
                iconAlt: 'three floating screens',
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: 'iOS/Android App Development',
                subtitle: null,
                icon: mobile,
                iconAlt: 'phones and tablet outline',
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: 'Website Development',
                subtitle: null,
                icon: website,
                iconAlt: 'computer outline',
                selected: false,
                cost: 0
            },
        ]
    }
]

const softwareQuestions = [
    {...defaultQuestions[0], active: false},
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iphone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: users,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];


const websiteQuestions = [
    {...defaultQuestions[0], active: false},
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 200
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 250
            }
        ],
        active: true
    }
];


export const Estimate = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('md'));

    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [message, setMessage] = useState('');
    const [total, setTotal] = useState(0);
    const [service, setService] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setCustomFeatures] = useState('');
    const [category, setCategory] = useState('');
    const [users, setUsers] = useState('');

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.find(question => question.active);
        const activeIndex = currentlyActive.id - 1;
        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = {...currentlyActive, active: false};
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};
        setQuestions(newQuestions);
    }

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.find(question => question.active);
        const activeIndex = currentlyActive.id - 1;
        const nextIndex = activeIndex - 1;

        newQuestions[activeIndex] = {...currentlyActive, active: false};
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};
        setQuestions(newQuestions);
    }

    const navigationPreviousDisabled = () => {
        return questions.find(question => question.active).id === 1;
    }

    const navigationNextDisabled = () => {
        return questions.find(question => question.active).id === questions[questions.length - 1].id;
    }

    const handleSelect = id => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.find(question => question.active);
        const activeIndex = currentlyActive.id - 1;
        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previouslySelected = currentlyActive.options.filter(option => option.selected);

        if (currentlyActive.subtitle === 'Select one.' && previouslySelected[0]) {
            previouslySelected[0].selected = !previouslySelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;

        switch (newSelected.title) {
            case "Custom Software Development":
            case "iOS/Android App Development":
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                break;
            case "Website Development":
                setQuestions(websiteQuestions);
                setService(newSelected.title);
                break;
            default:
                setQuestions(newQuestions);
                break;
        }

        if (activeIndex > 0) {
            setPlatforms([]);
            setFeatures([]);
            setCustomFeatures('');
            setCategory('');
            setUsers('');
        }
    }

    const onChange = event => {
        let valid;
        let {id, value} = event.target;
        switch (id) {
            case "email":
                setEmail(value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                setEmailHelper(!valid ? "Invalid email" : "");
                break;
            case "phone":
                setPhone(value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
                setPhoneHelper(!valid ? "Invalid phone" : "");
                break;
            default:
                break;
        }
    }

    const getTotal = () => {
        let cost = 0;
        const selections = questions
            .map(question => question.options.filter(option => option.selected))
            .filter(question => question.length > 0);

        selections.forEach(options => options.map(option => cost += option.cost));

        if (questions.length > 2) {
            const userCost = questions
                .find(question => question.title === 'How many users do you expect?').options
                .find(option => option.selected);
            setUsers(userCost.title);
            cost -= userCost.cost;
            cost *= userCost.cost;
        }

        setTotal(cost);
    }

    const getPlatforms = () => {
        if (questions.length > 2) {
            let newPlatforms = [];
            questions
                .filter(question => question.title === 'Which platforms do you need supported?')
                .map(question => question.options.filter(option => option.selected))[0]
                .forEach(option => newPlatforms.push(option.title));
            setPlatforms(newPlatforms);
        }
    };

    const getFeatures = () => {
        if (questions.length > 2) {
            let newFeatures = [];
            questions
                .filter(question => question.title === 'Which features do you expect to use?')
                .map(question => question.options.filter(option => option.selected))
                .forEach(option => option.forEach(newFeature => newFeatures.push(newFeature.title)));
            setFeatures(newFeatures);
        }
    };

    const getPlatformsString = () => {
        switch (platforms.length) {
            case 1:
                return `for ${platforms.includes('Web Application') ? 'a' : 'an'} ${platforms[0]}`;
            case 2:
                const article = platforms.includes('Web Application') ? 'a' : 'an';
                return `for ${article} ${platforms[0]} and an ${platforms[1]}.`;
            case 3:
                return 'for a Web Application, an iOS Application, and an Android Application.';
            default:
                return null;
        }
    }

    const getFeaturesString = () => {
        switch (features.length) {
            case 0:
                return null;
            case 1:
                return `with ${features[0]}.`;
            case 2:
                return `with ${features[0]} and ${features[1]}.`;
            default:
                let featuresString = 'with ';
                features
                    .filter((feature, index) => index !== features.length - 1)
                    .forEach(feature => featuresString += `${feature}, `);
                return featuresString + ` and ${features[features.length - 1]}.`
        }
    }

    const getCustomFeatures = () => {
        if (questions.length > 2) {
            const newCustomFeatures = questions
                .find(question => question.title === 'What type of custom features do you expect to need?').options
                .find(option => option.selected).title.toLowerCase();

            setCustomFeatures(newCustomFeatures);
        }
    };

    const getCategory = () => {
        if (questions.length === 2) {
            const newCategory = questions
                .find(question => question.title === 'Which type of website are you wanting?').options
                .find(option => option.selected).title;
            setCategory(newCategory);
        }
    }

    const softwareSelection = (
        <Grid container direction={'column'}>
            <Expectation>
                <>You want {service} {getPlatformsString()}</>
            </Expectation>
            <Expectation>{getFeaturesString()}</Expectation>
            <Expectation>
                The custom features will be of {customFeatures} and the project will be used
                by about {users} users.
            </Expectation>
        </Grid>
    );

    const websiteSelection = (
        <Grid container direction={'column'}>
            <Expectation>
                <>You want {`${category === 'Basic' ? 'a' : 'an'} ${category} Website.`}</>
            </Expectation>
        </Grid>
    );

    return (
        <Grid container>
            <Grid item container lg direction={'column'}>
                <Grid item style={{margin: '2em 0 0 5em'}}>
                    <Typography variant={'h2'}>Estimate</Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        maxWidth: '50em',
                        margin: '7.5em 10em 0 0'
                    }}
                >
                    <Lottie options={animationOptions(estimateAnimation)} height={'100%'} width={'100%'}/>
                </Grid>
            </Grid>
            <Grid item container lg direction={'column'} alignItems={'center'} style={{margin: '0 2em 25em 0'}}>
                {
                    questions.filter(question => question.active).map((question, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item>
                                    <Typography
                                        variant={'h2'}
                                        align={'center'}
                                        style={{
                                            fontWeight: 500,
                                            marginTop: '5em',
                                            fontSize: '2.25rem',
                                            lineHeight: 1.25
                                        }}
                                    >
                                        {question.title}
                                    </Typography>
                                    <Typography
                                        variant={'body1'}
                                        align={'center'}
                                        style={{marginBottom: '2.5em'}}
                                        gutterBottom
                                    >
                                        {question.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item container>
                                    {question.options.map((option, index) => {
                                        return (
                                            <Grid
                                                key={index}
                                                item
                                                container
                                                md
                                                direction={'column'}
                                                component={Button}
                                                onClick={() => handleSelect(option.id)}
                                                style={{
                                                    display: 'grid',
                                                    textTransform: 'none',
                                                    backgroundColor:
                                                        option.selected ? theme.palette.common.orange : null,
                                                    borderRadius: 0
                                                }}
                                            >
                                                <Grid item style={{maxWidth: '14em'}}>
                                                    <Typography
                                                        variant={'h6'}
                                                        align={'center'}
                                                        style={{marginBottom: '1em'}}
                                                    >
                                                        {option.title}
                                                    </Typography>
                                                    <Typography variant={'caption'} align={'center'}>
                                                        {option.subtitle}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <img
                                                        src={option.icon}
                                                        alt={option.iconAlt}
                                                        className={classes.icon}
                                                    />
                                                </Grid>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </React.Fragment>
                        );
                    })
                }
                <Grid
                    item
                    container
                    justify={'space-between'}
                    style={{
                        width: '18em',
                        marginTop: '3em'
                    }}
                >
                    <Grid item>
                        <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
                            <img
                                src={navigationPreviousDisabled() ? backArrowDisabled : backArrow}
                                alt={'previous question'}
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
                            <img
                                src={navigationNextDisabled() ? forwardArrowDisabled : forwardArrow}
                                alt={'next question'}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant={'contained'}
                        className={classes.estimateButton}
                        onClick={() => {
                            setDialogOpen(true);
                            getTotal();
                            getPlatforms();
                            getFeatures();
                            getCustomFeatures();
                            getCategory();
                        }}
                    >
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography variant={'h2'} align={'center'}>Estimate</Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                    <Grid container>
                        <Grid item container md={7} direction={'column'}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"name"}
                                    id={"name"}
                                    value={name}
                                    fullWidth
                                    onChange={event => {
                                        setName(event.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"email"}
                                    id={"email"}
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    value={email}
                                    fullWidth
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"phone"}
                                    id={"phone"}
                                    value={phone}
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    fullWidth
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item style={{maxWidth: matchesXS ? '100%' : '20em'}}>
                                <TextField
                                    InputProps={{disableUnderline: true}}
                                    value={message}
                                    className={classes.message}
                                    fullWidth
                                    id={"message"}
                                    multiline
                                    rows={10}
                                    onChange={event => {
                                        setMessage(event.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant={'body1'} paragraph>
                                    We can create this digital solution for estimated for an estimated
                                    <span className={classes.specialText}> ${total.toFixed(2)}</span>
                                </Typography>
                                <Typography variant={'body1'} paragraph>
                                    Fill out your name, phone number and email, place your request and we'll get back
                                    to you with details moving forward and a final price.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container md={5} direction={'column'}>
                            <Grid item>{questions.length > 2 ? softwareSelection : websiteSelection}</Grid>
                            <Grid item>
                                <Button variant={'contained'} className={classes.estimateButton}>
                                    Place Request
                                    <img src={send} alt={'paper airplane'} style={{marginLeft: '0.5em'}}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
    );
}
