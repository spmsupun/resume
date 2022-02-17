import {sendMail} from '../controllers/mail/index';
import isEmail from 'validator/lib/isEmail';

let express = require('express');
let router = express.Router();

router.post('/say/hello', (req, res, next) => {
    const data = req.body;

    if (Object.keys(data).length && isEmail(data.email)) {
        next();
    } else {
        res.send({status: false, text: 'invalid email'});
    }

}, (req, res) => {

    const data = req.body;
    sendMail(data).then((success) => {
        res.send(success);
    }).catch(error => {
        res.status(500).send(error);
    });

});

router.get('/', (req, res) => {
    res.locals.pages =
        [
            {
                header: {
                    first_name: 'Supun',
                    last_name: 'Praneeth',
                    job: 'Full-stack Developer/DevOps'
                },
                section_left: [
                    {
                        section_name: 'Summary',
                        icon: 'fa-bullhorn',
                        desc: `I enjoy turning complex problems into simple and beautiful codes. 
                        I started coding when I was 16 years old in school and have more than 
                        7 years of professional experience. I have been involved in all the phases 
                        of the Software Development Life Cycle and worked on the frontend, backend, and DevOps`,
                    },
                    {
                        section_name: 'Experience',
                        icon: 'fa-briefcase',
                        list: [
                            {
                                first: 'Software Engineer/DevOps Engineer (Consultant)',
                                from: 'Nov 2020',
                                to: 'Present',
                                list: {
                                    name: 'Global Airport Concierge  <br><br>',
                                    list: [
                                        'Design and develop frontend and backend components.',
                                        'Implement well-designed, testable, efficient code by using the best software development practices.',
                                        'Building and setting up new development tools and infrastructure',
                                        'Working on ways to automate and improve development and release processes',
                                        'Ensuring that systems are safe and secure against cyber security threats',
                                        'Clearly and regularly communicate with management and technical support colleagues',
                                        'Maintains all the cloud servers',
                                    ]
                                },
                            },
                            {
                                first: 'Senior Software Engineer',
                                from: 'Apr 2020',
                                to: 'May 2021',
                                list: {
                                    name: '99X Technology <br><br>',
                                    list: [
                                        'Design and develop frontend components.',
                                        'Implement well-designed, testable, efficient code by using best software development practices.',
                                        'Optimization of the application for maximum speed and scalability.',
                                        'Design and implementation of data storage solutions.',
                                        'Integrate data from various back-end services and databases.',
                                        'Create and maintain software technical documentation.'
                                    ]
                                },
                            },
                            {
                                first: 'Senior Software Engineer',
                                from: 'Aug 2018',
                                to: 'Apr 2020',
                                list: {
                                    name: 'SolomoIT <br> <br>',
                                    list: [
                                        'Integration of user-facing elements developed by front-end developers with server-side logic.',
                                        'Work closely with Tech Lead, project managers, UX designers, other developers, systems analysts, and sales and marketing professionals.',
                                        'Implement well-designed, testable, efficient code by using the best software development practices.',
                                        'Building reusable code and libraries for future use.',
                                        'Mentoring other developers and handling KT sessions.',
                                        'Optimization of the application for maximum speed and scalability.',
                                        'Implementation of security and data protection.'
                                    ]
                                },
                            }
                        ]
                    }
                ],
                section_right: [
                    {
                        img: 'images/profile.jpg'
                    },
                    {
                        section_name: 'Personal Info',
                        icon: 'fa-user-alt',
                        value: '',
                        list: [
                            {
                                title: 'Phone',
                                value: '(+94) 774 637514',
                                url: 'tel:+94774637514'
                            },
                            {
                                title: 'Portfolio',
                                value: 'supun.xyz',
                                url: 'https://supun.xyz'

                            },
                            {
                                title: 'E-mail',
                                value: 'contact@supun.xyz',
                                url: 'mailto:contact@supun.xyz'

                            },
                            {
                                title: 'Date of birth',
                                value: '1991-04-12'

                            },
                            {
                                title: 'Github',
                                value: 'github.com/spmsupun',
                                url: 'https://github.com/spmsupun'
                            },
                            {
                                title: 'LinkedIn',
                                value: 'LinkedIn.com/in/spmsupun',
                                url: 'https://www.linkedin.com/in/spmsupun/'
                            },
                            {
                                title: 'Stackoverflow',
                                value: 'stackoverflow.com/cv/supun',
                                url: '//stackoverflow.com/cv/supun'
                            },
                            {
                                title: 'Location',
                                value: 'Colombo, Sri Lanka.',
                                url: '//www.google.com/maps/place/Colombo'
                            }
                        ]
                    },
                    {
                        section_name: 'Skills',
                        icon: 'fa-cogs',
                        value: '',
                        list: [
                            {
                                title: 'Expert'
                            },
                            {
                                value: 'PHP (Laravel)<br/>Javascript (NodeJs, ReactJs)<br/> CSS/SCSS<br/>Docker'
                            },
                            {
                                title: 'Advance'
                            },
                            {
                                value: 'Next.js, NestJs, Vue.js, Angular, Linux, Git, Koa.js, Symfony 4, AWS, Gitlab CI/CD, Github Actions'
                            },
                            {
                                title: 'Familiar With'
                            },
                            {
                                value: 'Kubernetes, MongoDB, Google Cloud, Microservices, TDD, SOLID Principles'
                            }
                        ]
                    }
                ]
            },
            {
                section_left: [
                    {
                        section_name: '',
                        icon: 'fa-briefcase',
                        list: [
                            {
                                first: 'Tech Lead',
                                from: 'Aug 2016',
                                to: 'Aug 201',
                                list: {
                                    name: 'Apple Holidays <br> <br>',
                                    list: [
                                        'Design, develop, test, and implement new applications.',
                                        'Train interns.',
                                        'Clearly and regularly communicate with management and technical support colleagues.',
                                        'Design and update software database.',
                                        'Analyze user requirements and convert requirements to design documents.',
                                    ]
                                },
                            },
                            {
                                first: 'Full-stack developer',
                                icon: 'fa-briefcase',
                                from: 'Oct 2014',
                                to: 'Aug 2015',
                                list: {
                                    name: 'Apple Holidays <br> <br>',
                                    list: [
                                        'Develop, test, and implement new applications',
                                        'Customizing systems/applications made by the company',
                                        'Design and update software database',
                                        'Implementation of security and data protection',
                                        'Design and implementation of data storage solutions',
                                        'Integrate data from various back-end services and databases',
                                        'Worked closely in the planning, design, and delivery of software products and services'
                                    ]
                                },
                            }
                        ]
                    },
                    {
                        section_name: 'Education',
                        icon: 'fa-graduation-cap',
                        list: [
                            {
                                from: 'May 2019',
                                to: 'Nov 2021',
                                section_name: 'Education',
                                title: 'Master of Science in Information Technology',
                                desc: 'Cardiff Metropolitan University'
                            }
                        ]
                    },
                    {
                        section_name: 'Referee',
                        icon: 'fa-pencil-alt',
                        list: [
                            {
                                desc: `<b>Liam Nolan</b> <br>
                                Operations Director, Global Airport Concierge,<br> 1b Kensington Park Mews, London W11 2EY, United Kingdom <br>
                                
                                Email: liam@globalairportconcierge.com,<br> Tel: +44 (0) 8000 124 007 <br>`,
                            },
                            {
                                desc: `<b>Pradeep Kumar Muththusami</b> <br>
                                Managing director, Apple Holidays DS, 148 Aluthmawatha Rd,<br> Colombo 15, Sri Lanka <br>
                                
                                Email: pradeep@appleholidaysds.com,<br> Mobile:  +94 (0)703288141, Office: +94 (0)112 352 400 <br>`,
                            }
                        ]
                    }
                ],
                section_right: []
            },
        ];

    res.render('resume/index', {title: 'Resume - Supun Praneeth'});
});

module.exports = router;
