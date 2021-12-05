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
                    job: 'Software Engineer'
                },
                section_left: [
                    {
                        section_name: 'Summary',
                        icon: 'fa-bullhorn',
                        desc: `I enjoy turning complex problems into simple and beautiful codes. I started coding 13 years ago when 
                        I was in school and have more than 6 years of professional experience in creating web-based projects in multiple industries such as leisure, airline, travel.
                        I am eager to learn new technologies and currently learning Kubernetes and AWS.`,
                    },
                    {
                        section_name: 'Experience',
                        icon: 'fa-briefcase',
                        list: [
                            {
                                first: 'Senior Software Engineer',
                                from: '2020-04',
                                to: '2021-05',
                                list: {
                                    name: '99X Technology <br><br>',
                                    list: [
                                        'Design and develop frontend elements using angular.',
                                        'Implement well-designed, testable, efficient code by using best software development practices.',
                                        'Optimization of the application for maximum speed and scalability.',
                                        'Design and implementation of data storage solutions.',
                                        'Integrate data from various back-end services and databases.',
                                        'Create and maintain software technical documentation.',
                                        'Stay plugged into emerging technologies/industry trends and apply them into operations and activities.'
                                    ]
                                },
                            },
                            {
                                first: 'Senior Software Engineer',
                                from: '2018-08',
                                to: '2020-04',
                                list: {
                                    name: 'SolomoIT <br> <br>',
                                    list: [
                                        'Integration of user-facing elements developed by front-end developers with server-side logic.',
                                        'Work closely with Tech Lead, project managers, UX designers, other developers, systems analysts and sales and marketing professionals.',
                                        'Implement well designed, testable, efficient code by using best software development practices.',
                                        'Building reusable code and libraries for future use.',
                                        'Mentoring other developers and handling KT sessions.',
                                        'Optimization of the application for maximum speed and scalability.',
                                        'Implementation of security and data protection.',
                                        'Design and implementation of data storage solutions.',
                                        'Integrate data from various back-end services and databases.',
                                        'Create and maintain software technical documentation.',
                                        'Stay plugged into emerging technologies/industry trends and apply them into operations and activities.'
                                    ]
                                },
                            }
                        ]
                    }
                ],
                section_right: [
                    {
                        img: 'images/profile-4.jpg'
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
                        icon: 'fa-user-alt',
                        value: '',
                        list: [
                            {
                                title: 'Expert'
                            },
                            {
                                value: 'PHP (Laravel)<br/>Javascript (NodeJs,ES6,Flow)<br/> ReactJs (NextJs)<br/> CSS/SCSS<br/>Docker'
                            },
                            {
                                title: 'Advance'
                            },
                            {
                                value: 'Koa.js, Symfony 4, Express.js, Vue.js, Angular, Linux, Git, NestJS'
                            },
                            {
                                title: 'Familiar With'
                            },
                            {
                                value: 'Kubernetes, MongoDB, RabbitMQ, AWS, Google Cloud, Vagrant, Gitlab CI/CD, Github Actions, Microservices, TDD, SOLID Principles'
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
                                from: '2016-08',
                                to: '2018-08',
                                list: {
                                    name: 'Apple Holidays <br> <br>',
                                    list: [
                                        'Design, develop, test and implement new applications.',
                                        'Train interns.',
                                        'Clearly and regularly communicate with management and technical support colleagues.',
                                        'Managing servers (e-mail, database and web servers).',
                                        'Design and update software database.',
                                        'Analyze user requirements and convert requirements to design documents.'
                                    ]
                                },
                            },
                            {
                                first: 'Full-stack developer',
                                icon: 'fa-briefcase',
                                from: '2014-10',
                                to: '2015-08',
                                list: {
                                    name: 'Apple Holidays <br> <br>',
                                    list: [
                                        'Develop, test and implement new applications.',
                                        'Customizing systems/application made by the company.',
                                        'Design and update software database.',
                                        'Implementation of security and data protection.',
                                        'Design and implementation of data storage solutions.',
                                        'Integrate data from various back-end services and databases.',
                                        'Create and maintain software technical documentation.',
                                        'Worked closely in the planning, design, and delivery of software products and services.',
                                        'Presented software design issues, questions, and suggestions to arrive at alternative courses of action.',
                                        'Provided assistance to Customer Support when troubleshooting technical issues of clients.'
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
                                from: '2019-05',
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
