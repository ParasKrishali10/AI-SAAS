export default function StatsSection() {
      const stats = [
    { value: "10M+", label: "Posts created" },
    { value: "500%", label: "Avg engagement boost" },
    { value: "50K+", label: "Active creators" },
    { value: "24/7", label: "Content generation" },
  ];
  return (
      <div className="bg-black px-16 mt-16 py-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12  sm:gap-x-8 lg:gap-x-12  justify-between">

              {stats.map((stat, index) => (
            <div key={index} className="text-center">

              {/* Top Stat Value (Large and White) */}
              <p className="text-4xl sm:text-4xl font-extrabold text-white mb-2">
                {stat.value}
              </p>


              <p className="text-base sm:text-lg text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

          </div>

      </div>
  )
}