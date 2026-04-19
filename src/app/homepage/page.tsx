import './homeStyles.css';

export default function HomePage() {
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
            <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 stagger-2 relative z-10 font-outfit">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Welcome to <span className="text-emerald-400 font-syne tracking-tight">Deep Dive</span></h1>
                    <p className="text-gray-300 text-lg font-light">Almost everything you need to know about today's tech world is listed below, take a deep dive into the ocean of knowledge...</p>
                </div>
            </section>

            {/* Terms Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 stagger-3 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    {terms.map((term, index) => (
                        <div key={index} className="bg-gray-950 border border-gray-800 rounded-lg p-6 hover:shadow-2xl hover:border-gray-700 hover:scale-[1.03] transform transition-all duration-300 cursor-default">
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

const terms = [
    {
        title: "API",
        description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
    },
    {
        title: "Artificial Intelligence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud."
    },
    {
        title: "Authentication(Auth)",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
    },
    {
        title: "Backend Engineering",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa."
    },
    {
        title: "Big Data",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore."
    },
    {
        title: "Blockchain",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        title: "Cloud Computing",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
    },
    {
        title: "Cyber Security",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
    },
    {
        title: "Data Science",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
    },
    {
        title: "Database Management(DBMS)",
        description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        title: "Deployment",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum."
    },
    {
        title: "DevOps",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
    },
    {
        title: "Digital Marketing",
        description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."
    },
    {
        title: "Frontend Engineering",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
    },
    {
        title: "Game Development",
        description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
    },
    {
        title: "Internet of Things (IoT)",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    },
    {
        title: "Machine Learning",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        title: "SaaS",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore."
    },
    {
        title: "UX Design",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
    },
    {
        title: "Web Development",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure."
    }
];
