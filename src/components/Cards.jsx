"use client"
import { Zap, Upload,Instagram,Camera, Disc2,Star,Linkedin,Youtube, WandSparkles,Twitter, ChartColumn, Palette, Clock3, Rocket } from 'lucide-react';
import AnimateInView from './AnimateInView';
import { useRouter } from "next/navigation";
import { routerServerGlobal } from 'next/dist/server/lib/router-utils/router-server-context';
export default function CardsSection() {
    const router=useRouter()
    const testimonials = [
    {
        rating: 5,
        quote: "SocialCraft transformed our social media strategy completely. We went from 10K to 100K followers in just 3 months, and our engagement rates increased by 400%. The AI-generated content feels authentic and perfectly matches our brand voice.",
        name: "Sarah Chen",
        title: "Marketing Director at TechFlow",
        avatarUrl: "/professional-woman-smiling.png"
    },
    {
        rating: 5,
        quote: "As a full-time creator, I was spending 6+ hours daily on content creation. SocialCraft cut that down to 30 minutes while actually improving my content quality. My audience loves the consistency and creativity it brings to my posts.",
        name: "Marcus Rodriguez",
        title: "Content Creator & Influencer",

        avatarUrl: "/creative-man-with-beard.jpg"
    },
    {
        rating: 5,
        quote: "The ROI has been incredible. Our social media-driven sales increased by 250% in the first quarter after implementing SocialCraft. The automated scheduling and analytics features are game-changers for small businesses like ours.",
        name: "Emily Watson",
        title: "Founder of GreenLife Co.",

        avatarUrl: "/business-woman-entrepreneur.jpg"
    },
];
    const cardData = [

        { icon: Zap, description: "Create viral posts in seconds with our advanced AI that understands trending topics and your brand voice.", title: "AI-Powered Content Generation", color: "text-indigo-400", bgColor: "bg-indigo-900/40"},
        { icon: Disc2, description: "Reach the right people at the right time with intelligent audience analysis and optimal posting schedules.", title: "Smart Audience Targeting" ,color: "text-indigo-400", bgColor: "bg-indigo-900/40"},
        { icon: ChartColumn, description: "Track engagement, reach, and conversions with detailed insights that help you optimize your content strategy.", title: "Real-Time Analytics" ,color: "text-indigo-400", bgColor: "bg-indigo-900/40"},
        { icon: Palette, description: "Maintain your visual identity with customizable templates that automatically match your brand guidelines.", title: "Brand-Consistent Templates" ,color: "text-indigo-400", bgColor: "bg-indigo-900/40"},
        { icon: Clock3, description: "Set it and forget it with smart scheduling that posts your content when your audience is most active.", title: "Automated Scheduling" ,color: "text-indigo-400", bgColor: "bg-indigo-900/40"},
    ];


    const HowData = [
        { icon: Upload, description: "Share your brand guidelines, logos, and content preferences to train our AI on your unique style.", title: "Upload Your Brand"},
        { icon: WandSparkles, description: "Our AI creates engaging posts, stories, and campaigns tailored to your audience and trending topics.", title: "Generate Content"},
        { icon: Rocket, description: "Schedule posts across all platforms and watch your engagement soar with data-driven optimization.", title: "Publish & Grow"},
    ];
    const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
        <Star
            key={i}
            className={`h-5 w-5 fill-violet-500 stroke-violet-500 transition-colors
                        ${i < count ? 'opacity-100' : 'opacity-30'}`} // Fills the first 'count' stars
        />
    ));
};


    return (

        <div className="bg-black py-24 px-4 sm:px-8 lg:px-16">

            <AnimateInView>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16">
                A Toolkit Built for Velocity
            </h2>

            <div className="grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3 // Better for 5 items: displays 3 then 2, centered.
                            xl:grid-cols-5 // Ideal for large screens
                            gap-8 sm:gap-10
                            justify-items-center">

                {cardData.map((card, index) => {
                    const IconComponent = card.icon;

                    return (
                        <div key={index}
                             className="flex flex-col p-6 h-full w-full max-w-sm // Added max-w-sm for centering on wide screens
                                         bg-gray-900 rounded-xl shadow-2xl
                                         border border-gray-800
                                         transform hover:scale-[1.03]
                                         hover:border-indigo-500/50
                                         transition duration-300 cursor-pointer">

                            <div className={`p-3 rounded-xl mb-4
                                             w-fit shadow-lg ${card.bgColor} ${card.color}`}>
                                <IconComponent className="h-8 w-8" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">
                                {card.title}
                            </h3>

                            <p className="text-gray-400 text-base">
                                {card.description}
                            </p>
                        </div>
                    );
                })}

            </div>

            </AnimateInView>


            <div className='mt-32 flex flex-col'>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center">
                    How it works
                </h1>

                <div className='mt-4'>

                    <h3 className='text-lg text-gray-400 mb-16 font-medium text-center sm:text-lg md:text-xl lg:text-2xl'>
                        Get started in minutes and see results in days. Our simple 3-step process makes social media success accessible to everyone.
                    </h3>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
                    {HowData.map((step, index) => {
                        const IconComponent = step.icon;

                        return (
                            <div key={index}
                                 className="relative flex flex-col items-center text-center p-12
                                            bg-gray-900 rounded-xl border border-gray-800 shadow-xl
                                            transition duration-300 hover:scale-[1.03] w-full max-w-sm">


                                <div className="p-4 rounded-full mb-6
                                                w-20 h-20 flex items-center justify-center
                                                bg-violet-400 text-violet-900 shadow-lg">
                                    <IconComponent className="h-10 w-10" />
                                </div>

                                <h3 className="text-2xl font-extrabold text-white mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 text-base">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div>


                                            <div className="mt-18">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                        font-extrabold text-white mb-6 text-center
                                        leading-none animate-fade-in-up  sm:leading-tight"
                            style={{ letterSpacing: '-0.03em' }}
                        >
                            Loved by creaters{" "}
                            <span className="text-indigo-500">
                            worldwide
                                </span>
                        </h1>
                          <h3 className='text-lg text-gray-400 mb-16 font-medium text-center sm:text-lg md:text-xl lg:text-2xl'>
                        Join thousands of creators and brands who have transformed their social media presence with SocialCraft.


                    </h3>
                    <div className="bg-black py-20 px-4 sm:px-8 lg:px-16">

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16">
                What Our Creators Say
            </h2>


            <AnimateInView>
            <div className="grid
                          grid-cols-1 // Default: stacks vertically on small screens
                          lg:grid-cols-3 // 3 columns on large screens
                          gap-8 // Spacing between cards
                          max-w-7xl mx-auto // Center the whole grid on massive screens
                          ">

                {testimonials.map((testimonial, index) => (

                    <div key={index}
                         className="flex flex-col p-8
                                    bg-gray-900 rounded-xl border border-gray-800
                                    transform hover:scale-[1.01] hover:border-violet-500/50
                                    transition duration-300 shadow-xl cursor-pointer">


                        <div className="flex space-x-1 mb-6">
                            {renderStars(testimonial.rating)}
                        </div>


                        <p className="text-xl italic font-medium text-gray-200 mb-8 leading-relaxed flex-grow">
                            "{testimonial.quote}"
                        </p>

                        <div className="flex items-center mt-auto">

                            <img
                                src={testimonial.avatarUrl}
                                alt={`Avatar of ${testimonial.name}`}
                                className="h-14 w-14 rounded-full object-cover mr-4 ring-2 ring-violet-500"
                                onError="this.onerror=null;this.src='https://placehold.co/60x60/000/fff?text=SC'"
                            />

                            <div>
                                <p className="text-lg font-bold text-white">
                                    {testimonial.name}
                                </p>
                                <p className="text-base font-medium text-gray-400">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            </AnimateInView>
            <AnimateInView>
            <div className='mt-20'>
                   <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl
                                        font-extrabold text-white mb-6 text-center
                                        leading-none animate-fade-in-up  sm:leading-tight"
                            style={{ letterSpacing: '0.01em' }}
                        >
                            Ready To Go{" "}
                            <span className="text-indigo-500">
                            Viral?
                                </span>
                        </h1>
                        <h3 className='text-lg text-gray-400 mb-16 font-medium text-center sm:text-lg md:text-xl lg:text-2xl'>
                        Join over 50,000 creators and brands who are already creating viral content with SocialCraft. Start your free trial today and see the difference AI can make.


                    </h3>
                    <div className=' flex itmes-center justify-center'>
                     <button className=" w-64 bg-gradient-to-r font-semibold cursor-pointer from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md text-lg" onClick={()=>{
                        router.push("/signup")
                     }}>Start Creating Free</button>

                    </div>
            </div>

            </AnimateInView>


        </div>
                            </div>
                </div>
            </div>
        </div>
    );
}
