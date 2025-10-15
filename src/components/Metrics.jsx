"use client"
import { BarChart3, Lightbulb, Rocket, LucideIcon } from "lucide-react"


const DashboardMetricCard = ({ metric }) => {
    const Icon = metric.icon;

    return (
        <div
            className="relative group rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-full"
            aria-label={`${metric.title} ${metric.value} ${metric.hint}`}
        >

            <div className='relative p-[2.5px] rounded-xl border-sweep shadow-2xl shadow-indigo-900/30 h-full'>


                <div className='absolute inset-0 rounded-xl blur-sm opacity-60 border-sweep'></div>

                <div className="relative z-10 bg-neutral-900/90 rounded-xl p-8 h-full">


                    <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" aria-hidden>
                        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)]" />
                    </div>

                    <div className="relative z-20">


                        <div className="flex items-start justify-between pb-3">

                            <div className="text-lg font-medium text-neutral-200 ">{metric.title}</div>

                            <span
                                className="rounded-xl bg-indigo-500/10 p-2 text-indigo-400 transition-transform duration-300 group-hover:-translate-y-0.5"
                                aria-hidden
                            >
                                <Icon className="h-6 w-6" />
                            </span>
                        </div>


                        <div className="pt-6">
                            <div className="text-4xl font-extrabold text-white">{metric.value}</div>
                            <p className="text-sm text-neutral-400 mt-1">{metric.hint}</p>
                        </div>
                    </div>


                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden>
                        <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />
                        <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default function App () {
    const userName = "Alex"
    const metrics= [
        {
            title: "Posts scheduled",
            value: "8",
            hint: "This week",
            icon: BarChart3,
        },
        {
            title: "Ideas generated",
            value: "23",
            hint: "Last 7 days",
            icon: Lightbulb,
        },
        {
            title: "Avg. engagement",
            value: "4.2%",
            hint: "Across channels",
            icon: Rocket,
        },
    ]

    return (

        <div className="p-8 sm:p-12 font-sans text-white">
            <div className="max-w-7xl mx-auto">

                <div className='mb-8'>
                    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-pretty text-2xl font-extrabold tracking-tight md:text-4xl mb-1">
                                Welcome back, {userName}
                            </h1>
                            <p className="text-neutral-400">Here’s a quick snapshot of your content performance and pipeline.</p>
                        </div>

                        <div className="w-fit px-3 py-1 text-xs font-semibold rounded-full bg-green-600/20 text-green-400 border border-green-600">
                            Healthy
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-6 text-center">Dashboard Metrics</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {metrics.map((m) => (
                        <DashboardMetricCard
                            key={m.title}
                            metric={m}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
