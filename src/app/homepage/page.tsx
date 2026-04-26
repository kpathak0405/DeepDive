import './homeStyles.css';
type Page = 'landing' | 'home' | 'wiki/api';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
    return (
        <div className="min-h-screen overflow-hidden relative">
            <div className="home-gradient-bg" />
            {/* Header */}
            <header className="border-b border-gray-800 stagger-1 relative z-10 bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full"></div>
                        <span className="font-syne text-white">Deep Dive</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Demo1</a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Demo2</a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Demo3</a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Demo4</a>
                    </nav>

                    <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-teal-700 transition-all">
                        DEMO
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 stagger-2 relative z-10 font-inter">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Welcome to <span className="text-emerald-400 font-syne tracking-tight">Deep Dive</span></h1>
                    <p className="text-gray-300 text-lg font-light">Almost everything you need to know about today's tech world is listed below, take a deep dive into the ocean of knowledge...</p>
                </div>
            </section>

            {/* Terms Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 stagger-3 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    {terms.map((term, index) => (
                        <div key={index}
                            onClick={() => term.slug ? onNavigate(term.slug as Page) : undefined}
                            className={`bg-gray-950 border border-gray-800 rounded-lg p-6 hover:shadow-2xl hover:border-gray-700 hover:scale-[1.03] transform transition-all duration-300 ${term.slug ? 'cursor-pointer' : 'cursor-default'}`}>
                            <h3 className="text-emerald-400 font-semibold text-lg mb-3">{term.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{term.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="bg-gray-950 text-white mt-20 stagger-4 relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full"></div>
                                <span className="font-semibold">Lorem by Ipsum</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Powered by <span className="text-emerald-400">Dolor</span>
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Info</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Company</a></li>
                                <li><a href="#" className="hover:text-white">Platform</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                                <li><a href="#" className="hover:text-white">Investors</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Admin</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Style Guide</a></li>
                                <li><a href="#" className="hover:text-white">Licenses</a></li>
                                <li><a href="#" className="hover:text-white">Changelog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const terms: { title: string; slug: Page | null; description: string }[] = [
    {
        title: "API",
        slug: "wiki/api",
        description: "An API (Application Programming Interface) is a defined set of rules and protocols that allows different software systems to communicate with each other."
    },
    {
        title: "Artificial Intelligence",
        slug: null,
        description: "Artificial Intelligence (AI) is a field of computer science that focuses on creating systems capable of performing tasks that normally require human intelligence, such as learning, reasoning, problem-solving, and understanding language."
    },
    {
        title: "Authentication(Auth)",
        slug: null,
        description: "Authentication (auth) is the process of verifying the identity of a user or system, ensuring they are who they claim to be. It typically involves credentials such as passwords, OTPs, or biometric data."
    },
    {
        title: "Backend Engineering",
        slug: null,
        description: "Backend engineering is the part of software development that focuses on building and maintaining the server-side logic, databases, and APIs that power an application behind the scenes."
    },
    {
        title: "Big Data",
        slug: null,
        description: "Big Data refers to extremely large and complex datasets that cannot be easily processed using traditional data processing tools. It involves handling high volume, velocity, and variety of data."
    },
    {
        title: "Blockchain",
        slug: null,
        description: "Blockchain is a decentralized digital ledger for recording transactions. It stores data in linked blocks that are secure and tamper-resistant. It enables transparent and trustworthy record-keeping."
    },
    {
        title: "Cloud Computing",
        slug: null,
        description: "Cloud computing is the delivery of computing services like storage, servers, and software over the internet. It allows users to access resources on-demand without owning physical hardware. It enables scalability, flexibility, and cost-efficient computing."
    },
    {
        title: "Cyber Security",
        slug: null,
        description: "Cybersecurity is the practice of protecting computer systems, networks, and data from theft, damage, or unauthorized access. It involves using technologies, processes, and controls to safeguard digital assets."
    },
    {
        title: "Data Science",
        slug: null,
        description: "Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, computer science, and domain expertise to analyze and interpret complex data."
    },
    {
        title: "Database Management(DBMS)",
        slug: null,
        description: "Database Management Systems (DBMS) enable users to create, manage, and interact with databases. It provides tools for data storage, retrieval, manipulation, and security."
    },
    {
        title: "Deployment",
        slug: null,
        description: "Deployment is the process of making a software application or system available for use. It involves deploying code to servers, configuring environments, and ensuring the application runs smoothly in production."
    },
    {
        title: "DevOps",
        slug: null,
        description: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality."
    },
    {
        title: "Digital Marketing",
        slug: null,
        description: "Digital marketing is the promotion of products or services using online channels. It includes platforms like social media, search engines, email, and websites. It helps businesses reach targeted audiences and measure results in real time."
    },
    {
        title: "Frontend Engineering",
        slug: null,
        description: "Frontend engineering is the development of the user-facing part of a website or application. It involves creating the visual elements, user interactions, and overall user experience that users interact with directly."
    },
    {
        title: "Game Development",
        slug: null,
        description: "Game development is the process of creating video games. It involves designing the game mechanics, programming the game logic, creating the game assets, and testing the game to ensure it works properly."
    },
    {
        title: "Internet of Things (IoT)",
        slug: null,
        description: "The Internet of Things (IoT) refers to the network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and connectivity. These objects can connect and exchange data with each other and with central systems over the internet."
    },
    {
        title: "Machine Learning",
        slug: null,
        description: "Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention. It involves training algorithms on data so they can make predictions or take actions without being explicitly programmed."
    },
    {
        title: "SaaS",
        slug: null,
        description: "SaaS (Software as a Service) is a software distribution model where a third-party provider hosts applications and makes them available to customers over the internet. Users typically pay a subscription fee to access the software, which can be used on any device with an internet connection."
    },
    {
        title: "UX Design",
        slug: null,
        description: "UX design focuses on creating products that are easy, efficient, and enjoyable to use. It involves understanding user needs, behavior, and improving usability. It ensures a smooth and meaningful interaction between users and a product."
    },
    {
        title: "Web Development",
        slug: null,
        description: "Web development is the process of building and maintaining websites and web applications. It involves creating the visual elements, user interactions, handling backend logics and in short, right from UI to Deployment."
    }
];
