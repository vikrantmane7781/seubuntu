import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutMe extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-48 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>

                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-48 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>

                
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-white rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-gray-700 border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-white text-gray-900 overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutMe;

export const displayAbout = () => {
    return <AboutMe />;
}


function About() {
    {/* Project List */}
    const project_list = [
        {
            name: "Crop Analyzer:",
            date: "",
            link: "https://vikrantmane7781.github.io/cropanalyzer/",
            description: [
                "It’s a simple ML based website which gives idea about best Crop to grow, which fertilizer is best to use etc. based upon soil content",
            ],
            domains: ["reactjs", "python","sass","numpy","pandas","matplotlib","sk-learn","py-torch","heroku","flask-api"]
        },
        {
            name: "VQA(Visual question answering):",
            date: "",
            link: "https://github.com/vikrantmane7781/pytorchResnetVQA",
            description: [
                "This application will try to answer the questions about images.",
                "Just upload image and ask question.",
                "This application do not work that much efficiently on complex images.",
            ],
            domains: ["flask", "LSTM", "py-torch", "resnet152 model","CNN"]
        },
        {
            name: "Image classification using CNN:",
            date: "",
            link: "#",
            description: [
                "-This project tells whether the photo is of human or not.",
                "-Steps :",
                "1)Collect Data.",
                "2)Train Data.",
                "3)Enhancing vision by adding CNN layers.",
                "4)Test Data.",
                "- Source platform :",
                "Tensorflow",
                "-ML algorithm :",
                "-Linear regression algorithm(Binary classifier).",
                "-Python version :",
                "3.8.2"
            ],
            domains: []
        },
        {
            name: "React Project: Movie Website",
            date: "",
            link: "",
            description: [
                "Programming languages are used:",
                "react, styled component",
                
                "Platform for database:",
                "Firebase",
            ],
            domains: []
        },
        {
            name: "React Project: Social Media",
            date: "",
            link: "https://fclonev2-9c3f9.web.app/login",
            description: [
                "Programming languages are used:",
                "react,styled component",
                
                "Platform for database:",
                "Firebase",
            ],
            domains: []
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "flask": "yellow-800",
        "react-native": "purple-500",
        "html5": "pink-800",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "flask-api": "green-600",
        "python": "green-600",
        "numpy": "green-600",
        "pandas": "green-600",
        "matplotlib": "green-600",
        "sk-learn": "green-600",
        "py-torch": "green-600",
        "heroku": "green-600",
        "flask-api": "green-600",
        "CNN":"blue-600",
        "LSTM":"pink-600"
    }
    return (
        <>
            <div className="w-1 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/wallpapers/hi.jpg" alt=" Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>I'm <span className="font-bold">Nishant Mane</span> &</div>
                <div className="font-normal ml-1">I'm a <span className="text-gray-900 font-bold">Full stack developer!</span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
            <li className=" list-star "> <h5 className="text-sm">NOTE: This project is not from scratch 
                this idea is from other person who made this project from scratch. But
                I have made some changes in this project. Author name of this project <span className="text-indigo-800 underline">  Vivek Patel</span><br/>
                Main github repo Link <a className="text-indigo-800 underline" href="https://github.com/vivek9patel/vivek9patel.github.io" target="_blank">Click here</a> </h5></li>

                <li className=" list-arrow"> Result oriented professional with nearly 2 years of IT Experience Software/Technical Developer currently working as Developer at Silver Crest Pvt Ltd since 1 October 2019. </li>
                <li className=" mt-3 list-arrow"> Have good experience of REACTJS, MYSQL, PHP and Data science/ML concept. Knowledge working on the entire life cycle of software development</li>
                
                <li className=" mt-3 list-arrow">🎈 I’m currently learning ⭐⭐⭐ Deep learning,Machine learning,Next.js,typescript etc.</li>
            </ul>

            {/* Education */}
            <div className=" font-medium relative text-2xl mt-2 md:mt-5 mb-1">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-5 px-0 md:px-1 text-left">
                <li className="">
                    <div className=" list-disc text-md md:text-xl  font-bold leading-tight">
                    GRADUATION: WALCHAND INSTITUTE OF TECHNOLOGY
                    </div>
                    <div className=" text-sm text-gray-800 mt-0.5">2014 - 2017</div>
                    <div className=" text-sm md:text-base">Computer Science & Engineering</div>
                    <div className="text-sm text-gray-800 font-bold mt-1">Pecentage 70%. </div>
                </li>
                <li className=" mt-5">
                    <div className=" list-disc text-red-600text-md md:text-xl  font-bold leading-tight">
                       DIPLOMA IN COMPUTER TECHNOLOGY: BMIT
                    </div>
                    <div className=" text-sm text-gray-800 mt-0.5">2011 - 2014</div>
                    <div className=" text-sm md:text-base"></div>
                    <div className="text-sm text-gray-800 font-bold mt-1">Pecentage 78%. </div>
                </li>
            </ul>

            {/* Skills */}
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                
                
                <li className=" text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div></div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className="  text-center md:text-base w-1/2 font-bold"><span className="text-sm">Languages & Tools</span></div>
                <div className=" text-center md:text-base w-1/2 font-bold"><span className="text-sm">Frameworks & Libraries</span></div>
                <div className=" text-center md:text-base w-1/2 font-bold"><span className="text-sm">About Data science & ML</span></div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white" alt="python" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" alt="java" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="php" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white" alt="R" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="" className="m-1 h-5 rounded" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" /></a>
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="css" className="m-1 h-5 rounded" />
                       
                     
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1 h-5 rounded" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt=" react" />
                    
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt=" tailwind css" />
                        <img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" alt=" node.js" className="m-1 h-5 rounded" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt=" jquery" className="m-1 h-5 rounded" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt=" redux" />
                    </div>
                </div>

                {/**/}
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1 h-5 rounded" src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" alt=" opencv" />
                    
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt=" tensorflow" />
                        <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt=" pandas" className="m-1 h-6 rounded" />
                        <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt=" PyTorch" className="m-1 h-5 rounded" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt=" numpy" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt=" scikit--learn" />
                        <img className="m-1 h-5 rounded" src="https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white" alt=" scipy" />
                    </div>
                </div>
            </div>
            

            {/* Projects */}
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">🎈{project.name.toLowerCase()}</div>
                                   
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-900">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}


function Resume() {
    return (
        <iframe className="h-full w-full" src="./resume/NishantMane_MernDeveloper.pdf"  title="My Resume" frameBorder="0"></iframe>
    )
}