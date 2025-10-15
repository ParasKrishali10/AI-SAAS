"use client"
import { MessageSquarePlus, Calendar, Workflow, Clock, CheckCircle, UploadCloud, FileText } from 'lucide-react';

import { useState,useCallback } from 'react';
const SocialIcon = ({ id }) => {
    let svgPath;
    let colorClass;

    switch (id) {
        case 'twitter':
            // Twitter Blue color
            colorClass = 'text-[#1DA1F2]';
            svgPath = "M18.244 2.25h3.308l-7.227 8.256L21.602 22h-4.46l-5.694-6.385l-4.112 4.417h-3.308l7.226-8.257L2.398 2h4.46l5.26 5.666L18.244 2.25zm-2.88 18.067H18.9l-4.558-4.885l4.086-4.382h-2.88l-3.344 3.58l-3.52-3.766H2.802l4.9 5.234l-4.225 4.512h3.308l3.63-3.882l3.415 3.655z";
            break;
        case 'instagram':
            // Instagram pinkish-red color
            colorClass = 'text-[#E1306C]';
            svgPath = "M17.448 2h-10.896C4.84 2 2 4.84 2 8.448v10.896C2 21.16 4.84 24 8.448 24h10.896C21.16 24 24 21.16 24 17.448V8.448C24 4.84 21.16 2 17.448 2zM12 4.25c2.733 0 3.076.01 4.135.059 1.054.053 1.79.223 2.274.417.48.196.883.473 1.25.84.37.37.644.77.84 1.25.194.484.364 1.22.417 2.274.049 1.06.059 1.378.059 4.135s-.01 3.076-.059 4.135c-.053 1.054-.223 1.79-.417 2.274-.196.48-.473.883-.84 1.25-.37.37-.77.644-1.25.84-.484.194-1.22.364-2.274.417-1.06.049-1.378.059-4.135.059s-3.076-.01-4.135-.059c-1.054-.053-1.79-.223-2.274-.417-.48-.196-.883-.473-1.25-.84-.37-.37-.77.644-1.25.84-.484.194-1.22.364-2.274.417C4.26 15.076 4.25 14.733 4.25 12s.01-3.076.059-4.135c.053-1.054.223-1.79.417-2.274.196-.48.473-.883.84-1.25.37-.37.77-.644 1.25-.84.484-.194 1.22-.364 2.274-.417C8.924 4.26 9.267 4.25 12 4.25zM12 6.75A5.25 5.25 0 1 0 12 17.25A5.25 5.25 0 0 0 12 6.75zM12 8.25A3.75 3.75 0 1 1 12 15.75A3.75 3.75 0 0 1 12 8.25zM18.45 4.5a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1z";
            break;
        case 'linkedin':
        default:
            // LinkedIn Blue color
            colorClass = 'text-[#0A66C2]';
            svgPath = "M20.447 2H3.553A1.553 1.553 0 0 0 2 3.553v16.894A1.553 1.553 0 0 0 3.553 22h16.894A1.553 1.553 0 0 0 22 20.447V3.553A1.553 1.553 0 0 0 20.447 2zM8.077 19.5H5.438V9.11h2.639V19.5zM6.758 8.04c-.886 0-1.442-.647-1.442-1.44s.556-1.44 1.442-1.44c.875 0 1.44.647 1.44 1.44s-.565 1.44-1.44 1.44zM19.5 19.5h-2.64v-5.22c0-1.25-.445-2.09-1.55-2.09-1.06 0-1.68.79-1.96 1.55v5.76h-2.64s.03-7.79 0-8.68h2.64v1.23c.36-.62 1.34-1.52 2.92-1.52 2.13 0 3.75 1.4 3.75 4.4v4.57z";
            break;
    }

    return (
        <div className="icon-bg w-10 h-10 flex items-center justify-center rounded-lg mr-4 p-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${colorClass}`}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d={svgPath} />
            </svg>
        </div>
    );
};

// --- Account Card Component ---

const AccountCard = ({ account, onToggleConnect }) => {
    const { id, name, connected } = account;

    // Determine button text and classes based on connection status
    const buttonText = connected ? 'Disconnect' : 'Connect';
    const isConnectButton = !connected;

    // Disconnect is a discreet text link/button
    const disconnectClasses = 'text-gray-400 hover:text-red-500 font-medium px-4 py-2 rounded-lg transition';

    // Connect is a vibrant cyan button
    const connectClasses = 'btn-connect bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg shadow-lg';

    const buttonClasses = isConnectButton ? connectClasses : disconnectClasses;

    // Determine status text and color
    const statusText = connected ? 'Connected' : 'Not connected';
    const statusColor = connected ? 'text-green-500' : 'text-gray-500';

    const handleAction = () => {
        onToggleConnect(id);
    };

    return (
        <div className="card flex items-center justify-between p-4 sm:p-6 rounded-xl">
            {/* Left Section: Icon, Name, Subtitle */}
            <div className="flex items-center flex-grow min-w-0">
                <SocialIcon id={id} />
                <div className="flex-1 min-w-0">
                    <p className="text-lg font-semibold text-white truncate">{name}</p>
                    <p className={`text-sm ${statusColor} font-medium`}>{statusText}</p>
                </div>
            </div>

            {/* Right Section: Status and Action Button */}
            <div className="action-container flex items-center justify-end ml-4 space-x-4">
                {connected && (
                    // Display 'Connected' text status only when connected, hidden on small screens
                    <p className="hidden md:block text-sm text-gray-400 font-medium">Connected</p>
                )}
                <button
                    onClick={handleAction}
                    className={buttonClasses}
                    aria-label={`${buttonText} ${name}`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

// --- Initial Data ---

const initialAccounts = [
    { id: 'twitter', name: "Twitter", connected: true },
    { id: 'instagram', name: "Instagram", connected: false },
    { id: 'linkedin', name: "LinkedIn", connected: true },
];

const historyData = [
    {
        id: 1,
        action: 'Post Scheduled',
        details: 'Twitter: Promotional content for launch',
        time: '5 minutes ago',
        icon: UploadCloud,
        color: 'text-indigo-400'
    },
    {
        id: 2,
        action: 'Content Generated',
        details: 'Drafted 3 post ideas for Instagram',
        time: '1 hour ago',
        icon: FileText,
        color: 'text-yellow-400'
    },
    {
        id: 3,
        action: 'Account Connected',
        details: 'LinkedIn connection established successfully',
        time: '3 hours ago',
        icon: CheckCircle,
        color: 'text-green-500'
    },
    {
        id: 4,
        action: 'Post Published',
        details: 'Instagram: Daily inspirational quote',
        time: 'Yesterday at 3:00 PM',
        icon: UploadCloud,
        color: 'text-indigo-400'
    },
];

const HistorySection = () => {
    return (
        <div className="text-white mt-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">Recent Activity History</h2>

            <div className="timeline-container relative pl-12">
                {historyData.map((item, index) => (
                    <div key={item.id} className="mb-6 last:mb-0 flex items-start z-10">

                        {/* Timeline Pin/Dot */}
                        <div className="absolute left-[8px] top-0 flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full ${item.color} bg-[#1a1a1a] flex items-center justify-center p-1 z-10 border-2 border-current shadow-lg`}>
                                <item.icon className="w-5 h-5" />
                            </div>
                        </div>

                        {/* History Card Content */}
                        <div className="card w-full p-4 ml-4 rounded-xl shadow-lg">
                            <div className="flex items-center justify-between">
                                <p className="text-md font-semibold text-white">{item.action}</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <Clock className="w-4 h-4 mr-1 text-gray-500" />
                                    {item.time}
                                </p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button className="text-gray-400 hover:text-indigo-400 transition font-medium text-sm p-2 rounded-lg flex items-center">
                    View Full Log
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>
        </div>
    );
};



// --- Main Application Component ---

export default function App() {
    // State for the Connected Accounts Manager
    const [accounts, setAccounts] = useState(initialAccounts);

    /**
     * Toggles the connection status for a given account ID.
     */
    const handleToggleConnect = useCallback((accountId) => {
        setAccounts(prevAccounts =>
            prevAccounts.map(account =>
                account.id === accountId
                    ? { ...account, connected: !account.connected }
                    : account
            )
        );
    }, []);

    return (
        <div className=" p-4 sm:p-8  flex flex-col items-center">


            <div className="max-w-5xl w-full py-10">

                {/* 1. Quick Actions Section */}
                <div className="text-white mb-12">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">Quick Actions</h2>
                    <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-xl border border-[#282828] shadow-2xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Button 1: Generate Content */}
                            <div>
                                <button className="w-full bg-indigo-600 flex items-center justify-center p-3 gap-3 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-indigo-700 active:scale-[0.98] shadow-lg">
                                    <MessageSquarePlus className="w-6 h-6" />
                                    <div className='text-lg font-medium'>Generate Content</div>
                                </button>
                            </div>
                            {/* Button 2: Schedule Post */}
                            <div>
                                <button className="w-full bg-indigo-600 flex items-center justify-center p-3 gap-3 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-indigo-700 active:scale-[0.98] shadow-lg">
                                    <Calendar className="w-6 h-6" />
                                    <div className='text-lg font-medium'>Schedule Post</div>
                                </button>
                            </div>
                            {/* Button 3: Connect Accounts */}
                            <div>
                                <button className="w-full bg-indigo-600 flex items-center justify-center p-3 gap-3 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-indigo-700 active:scale-[0.98] shadow-lg">
                                    <Workflow className="w-6 h-6" />
                                    <div className='text-lg font-medium'>Connect Accounts</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Connected Accounts Section */}
                <div className="text-white">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">Connected Accounts</h2>

                    {/* Account Cards Container */}
                    <div className="space-y-4">
                        {accounts.map(account => (
                            <AccountCard
                                key={account.id}
                                account={account}
                                onToggleConnect={handleToggleConnect}
                            />
                        ))}
                    </div>
                </div>
                    <HistorySection></HistorySection>
            </div>
        </div>
    );
}