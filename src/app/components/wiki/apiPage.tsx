import { useState, useEffect, useRef } from "react";

import { WikiLayout } from "./WikiLayout";
import { WikiSidebar } from "./WikiSidebar";
import { WikiContent } from "./WikiContent";
import { WikiInfobox } from "./WikiInfobox";
import ApiFlowchart from "./APIflowchart";

export default function ApiPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const options = {
      root: container,
      rootMargin: "-10% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sectionIds = ["introduction", "technical", "whyExist", "howWorks", "Examples", "documentation"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special check for bottom of scroll
    const handleScroll = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
        setActiveSection("documentation");
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tocItems = [
    { id: "introduction", label: "What is API?" },
    { id: "technical", label: "Technicalities" },
    { id: "whyExist", label: "Why do APIs exist?" },
    { id: "howWorks", label: "How does API work?" },
    { id: "Examples", label: "Real-life Examples" },
    { id: "documentation", label: "Documentation" }
  ];

  const infoboxData = [
    { label: "Origin", value: "Dolor sit amet" },
    { label: "Founder", value: "Adipiscing elit" },
    { label: "Established", value: "Tempor 1984" },
    { label: "Headquarters", value: "Dolore Magna" },
    { label: "Industry", value: "Minim Veniam" },
    { label: "Status", value: "Exercitation" },
  ];

  const sections = [
    {
      id: "introduction",
      title: "What is API?",
      content: [
        "API stands for Application Programming Interface which is basically like a waiter in a restaurant which connects the customer and the kitchen. Imagine you going to a restaurant and want to order a bowl of white sauce pasta, so you will tell the waiter the same and after a while, he will serve you with the pasta. Here, the waiter is the API. API in other words, connects the user to the server and fetches the data which is asked by the user. In the restaurant scenario, you don't have to go inside the kitchen by yourself and get a bowl of pasta, the same way as a user you dont have to fetch the service directly from the server, you can get it from the API.",
        "Here, the service is not a literal service, it can be anything like a piece of data, a file, a database, etc. It can something already made by some other developer across the globe, you can just simply integrate his work in yours just by asking for the API 'key'."
      ]
    },
    {
      id: "technical",
      title: "Technicalities",
      content: [
        "In technical terms, API(Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It is a way for one application to request data or services from another application. API allows the developers to use other developers' piece of work instead of doing it from scratch.",
        "It is often legal and ethical to use APIs as they are designed for this purpose, but sometimes the original creator of the service might want it to be private and not let others use it. In that case, the creator provides a unique 'Key' to those who want to use his service. This key is used to identify the user and the service they are requesting. Its basically a security protocol followed by the creator in order to prevent misuse of his service.",
        "Essentially, APIs are the glue that holds the modern internet together, allowing different systems to share data and functions seamlessly without needing to understand each other's internal blueprints."
      ],

    },
    {
      id: "whyExist",
      title: "Why do APIs exist?",
      content: [
        "API basically stores the logic of thousands of lines of code into simple commands. The developer doesn't need to understand thousands of lines of code of some existing software like Google maps in order to integrate a small map into his own application or website. He can just simply use the API provided by the developer of Google maps and integrate it into his own application or website.",
        "Without APIs, it will be a real hell for the developers to integrate anything into their projects. Every developer would have to build everything from scratch — no shared maps, no shared payments, no shared anything. The modern internet as we know it simply wouldn't exist."
        
      ]
    },
    {
      id: "howWorks",
      title: "How does API work?",
      content: [
        "As we have seen earlier that API is like a waiter, but when it comes to the technical side of it, it is a bit more complex. In techical terms, it acts more like a Gatekeeper which performs several security measures to ensure the safety of the server.",
        "Imagine you are at a club and you want to get inside. You can't just walk in, you have to go through the security check first. The security guard checks your ID and makes sure you are allowed to enter. If you are, he lets you in. The same way, API checks the user's request and makes sure it is valid. If it is, it lets the user in. It firsts verifies your API key, whether it is genuine or not, then it checks your request and makes sure it is valid, and if not it will return with various codes like 403, 500, and the most famous one '404: not found', this actually means that the data or service you are looking for doesn't exist in the server or database. The codes like 403, 500, 404 are called HTTP status codes. They are used to indicate the status of the request."
      ],
      component: <ApiFlowchart />
    },
    {
      id: "Examples",
      title: "Real-life Examples",
      content: [
        "1. Google Maps in Ola/Uber: Travelling apps like Ola and Uber uses the real-time navigation feature originally introduced in Google Maps. They use the API provided by Google Maps to integrate the map into their own application. This saves them a lot of time and resources as they don't have to develop the feature from scratch.",
        "2. Weather Apps: Weather apps like AccuWeather and 'Weather.com' uses the API provided by the National Weather Service to integrate the weather data into their own application. This saves them a lot of time and resources as they don't have to develop the feature from scratch.",
        "3. Payment Gateways in Amazon/Flipkart/Blinkit: These big brands uses the API provided various payment gateways like Razorpay, Stripe, etc. to integrate the payment feature into their own application. ",
      ]
    },
    {
      id: "documentation",
      title: "Documentation",
      content: [
        "Every API comes with a documentation, in simple words it is a user-manual for the developers which contain all the information about the API, like what it does, how to use it, what are the parameters it accepts, what are the responses it returns, etc. It is a very important part of the API as it helps the developers to understand and use the API properly. Without a proper documentation, it is almost impossible to use the API.",
        "You can yourself visit this link and see what a live API documentation looks like: https://developer.spotify.com/documentation/web-api/",
        "This is the API documentation of the famous music streaming platform Spotify. It is a very good example of a well-documented API.","As you go deeper into development, reading documentation becomes one of the most important skills you'll develop. Don't worry if it looks overwhelming right now — it gets easier."
      ]
    }
  ];

  return (
    <div className="h-screen flex flex-col font-outfit overflow-hidden relative">
      <div className="home-gradient-bg" />
      
      {/* Header - Fixed to top, atmospheric glass effect */}
      <header className="border-b border-white/5 stagger-1 relative z-20 bg-black/40 backdrop-blur-md shrink-0">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl rotate-12 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
              <div className="w-5 h-5 bg-black/20 rounded-sm"></div>
            </div>
            <span className="font-syne text-xl font-bold tracking-tight text-white uppercase letter-spacing-1">Deep Dive</span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors">Components</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors">Templates</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors">Support</a>
          </nav>

          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            GET STARTED
          </button>
        </div>
      </header>

      {/* Main Content Area - Centered Huge Card with glassmorphism */}
      <main className="flex-1 p-2 md:p-3 lg:p-4 min-h-0 flex items-center justify-center stagger-2">
        <div className="w-full h-full max-w-[1800px] bg-gray-950/80 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col relative ring-1 ring-white/5 mx-auto">
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-auto scrollbar-hide scroll-smooth"
          >
            <WikiLayout
              sidebar={
                <WikiSidebar
                  items={tocItems}
                  activeId={activeSection}
                  onItemClick={setActiveSection}
                />
              }
              infobox={
                <WikiInfobox
                  title="DeepDive Project"
                  data={infoboxData}
                />
              }
              content={
                <WikiContent
                  title="API(Application Programming Interface)"
                  sections={sections}
                />
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}