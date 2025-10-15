"use client"
import Stats  from "../components/Stats"
import { Camera } from "lucide-react"
import { useRouter } from "next/navigation";
import AnimateInView from "../components/AnimateInView"
import Cards from "../components/Cards"
import Footer from "../components/Footer"
export default function Home() {
  const router = useRouter();

  const animationClass="animate-[slide-in-delay_1.5s_ease-out_forwards]";
  return (

    <div className="flex bg-black flex-col min-h-screen py-2 font-sans">


      <main className="flex-grow">
        <div className="flex justify-between p-6">


          <div className="flex gap-4 ml-4 md:ml-[20px]">
            <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl shadow-md'>
              <Camera className="h-10 w-10 text-gray-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mt-3">Social Craft</h1>
            </div>
          </div>


          <div className="hidden lg:flex gap-10 text-lg text-gray-700 font-semibold space-x-10">
            <div className="mt-3 cursor-pointer hover:underline" onClick={()=>{}}>
              Products
            </div>
            <div className="mt-3 cursor-pointer hover:underline" onClick={()=>{}}>
              Templates
            </div>
            <div className="mt-3 cursor-pointer hover:underline" onClick={()=>{}}>
              Pricing
            </div>
            <div className="mt-3 cursor-pointer hover:underline" onClick={()=>{}}>
              Log In
            </div>
          </div>


          <div className="mr-4 md:mr-[20px]">
            <button
              className="bg-gradient-to-r font-semibold cursor-pointer from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md text-lg"
              onClick={()=>{ router.push('/signup') }}
            >
              Get Started
            </button>
          </div>

        </div>
        <div className="flex justify-center  text-white p-4 mt-24">
          <button className="bg-gray-900 rounded-lg p-3 flex scale-100 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 ease-in-out items-center gap-2" onClick={()=>{}}>
            <div className="text-indigo-400">
              New:
            </div>
            <div className="ml-2">
              AI-powered content templates
            </div>
            <div className="ml-2 text-indigo-400">
              Learn more →
            </div>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center px-4 md:px-8 pt-10 pb-20">


  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                 font-extrabold text-white mb-6 text-center
                 leading-none animate-fade-in-up  sm:leading-tight"
      style={{ letterSpacing: '-0.03em' }}
  >
    The complete platform to{" "}
    <span className="text-indigo-500">
      create viral content
    </span>
  </h1>


  <p className="text-lg md:text-xl text-gray-400
                text-center max-w-4xl opacity-0
                animate-fade-in-up animate-delay-900 mt-4">
    Your team's toolkit to stop struggling with content and start going viral.
    Create, schedule, and optimize social media content that drives real engagement.
  </p>
  <button className="mt-10 w-64 bg-gradient-to-r font-semibold cursor-pointer from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md text-lg" onClick={()=>{
    router.push('/signup')
  }}>Start Creating Free</button>
  <AnimateInView delay={0.1}>
    <div className="border-b border-gray-900 w-full p-2">
  <Stats/>

    </div>
    <div className="text-gray-700 mt-8 text-center font-semibold">
      Trusted by over 50,000 creators and brands worldwide
    </div>

    <div className="mt-18">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                 font-extrabold text-white mb-6 text-center
                 leading-none animate-fade-in-up  sm:leading-tight"
      style={{ letterSpacing: '-0.03em' }}
  >
    Everything you need to{" "}
    <span className="text-indigo-500">
      dominate social media
         </span>
  </h1>
    </div>
    <div className="mt-12">
       <h1 className=" sm:text-lg md:text-xl lg:text-2xl
                 font-semibold font-sans text-gray-800 mb-6 text-center
                 leading-none animate-fade-in-up  sm:leading-tight"
      style={{ letterSpacing: '-0.03em' }}
  >From content creation to performance tracking, our platform provides all the tools you need to build a powerful social media presence</h1>
    </div>

  </AnimateInView>
  <AnimateInView>
    <div>
      <Cards/>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </AnimateInView>

</div>
      </main>
    </div>
  )
}