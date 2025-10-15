"use client";
import {useState} from 'react';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Eye ,EyeOff,Zap,Lock,Mail,User, Camera , Chromium} from 'lucide-react';
import { signIn } from "next-auth/react";
export default function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const router = useRouter();

    const handleSubmit=async(e)=>{
      e.preventDefault()
      try{

        if(password !== confirmPassword){
          toast.error("Passwords do not match");
          return;
        }
        if(password.length < 6){
          toast.error("Password must be at least 6 characters");
          return;
        }
        if(!email.includes("@")){
          toast.error("Please enter a valid email");
          return;
        }
        if(!fullName){
          toast.error("Please enter your full name");
          return;
        }
        if(!email){
          toast.error("Please enter your email");
          return;
        }
        if(!password){
          toast.error("Please enter your password");
          return;
        }
        const res=await fetch("/api/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json" ,
          },
          body:JSON.stringify({
            fullName,
            email,
            password
          })
        })
        const data=await res.json();
        toast.success("Signup successful!")
        router.push("/dashboard");
      }catch(err){
        console.log(err);
        toast.error("Something went wrong");
      }
    }

    return(
        <div>
            <div className='flex justify-center mt-10 font-sans'>
                <div className='w-full max-w-md space-y-6'>
                <div className='flex items-center justify-center mb-6'>

                <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-xl shadow-md'>
                <Camera className='w-12 h-12' />

                </div>

                </div>
                <div className=' font-semibold font-sans text-lg text-center text-gray-700 text-muted-foreground text-pretty'>
                    Create stunning social media content that converts. Join thousands of creators and brands already growing their audience.
                </div>
                <div className='font-bold font-sans text-xl mt-12  text-gray-400 text-muted-foreground text-pretty'>
                    Start creating your first content today!
                </div>
                <div className='font-sans text-gray-600 font-semibold text-pretty'>
                    Get access to powerful social media creation tools and grow your audience.
                </div>
                <div className='flex justify-center mt-10 '>
                    <div className='relative p-[2px] rounded-full border-sweep'>
                        <div className='absolute inset-0 rounded-full blur-sm opacity-60 border-sweep'></div>
                        <button className='relative flex items-center gap-2 bg-gray-900 text-white cursor-pointer px-5 py-3 rounded-full shadow-md transition-all duration-300' onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                            <span className='flex items-center gap-2'>
                                <Chromium className='w-6 h-6 ' />
                                <span className='font-semibold text-lg '>Continue with Google</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='text-gray-600 font-semibold text-center text-pretty text-lg'>
                    OR
                </div>
                <div>
                    <label className='block text-gray-400 font-semibold text-pretty text-lg'>Full Name</label>
                    <div className='mt-2 relative flex gap-4 w-full'>

    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />


    <input
        type="text"
        name=""
        id=""
        className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Enter your full name'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
    />
</div>
                </div>
                <div>
                    <label className='block text-gray-400 font-semibold text-pretty text-lg'>Email</label>
                    <div className='mt-2 relative flex gap-4 w-full'>

   <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />


   <input
       type="email"
       name=""
       id=""
       className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
       placeholder='Enter your full name'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
   />
</div>
                </div>
                <div>
                    <label className='block text-gray-400 font-semibold text-pretty text-lg'>Password</label>
                    <div className='mt-2 relative flex gap-4 w-full'>

   <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />


   <input
       type={showPassword1 ? "text" : "password"}
       name=""
       id=""
       className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
       placeholder='Enter your full name'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
   />
   <button
        type="button"
        onClick={() => setShowPassword1(!showPassword1)}
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        {showPassword1 ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
</div>
                </div>
                <div>
                    <label className='block text-gray-400 font-semibold text-pretty text-lg'>Confirm Password</label>
                    <div className='relative w-full'>

                    <div className='mt-2 relative flex gap-4 w-full'>

   <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />


   <input
       type={showPassword2 ? "text" : "password"}
       name=""
       id=""
       className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
       placeholder='Enter your full name'
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
   />
   <button
        type="button"
        onClick={() => setShowPassword2(!showPassword2)}
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        {showPassword2 ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
</div>

                    </div>
                </div>
                <div className='flex justify-center mt-10 w-full '>
                    <div className='relative p-[2px] rounded-full border-sweep w-full'>
                        <div className='absolute inset-0 rounded-full blur-sm opacity-60 border-sweep'></div>
                        <button className='relative flex justify-center items-center w-full gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white cursor-pointer px-5 py-3 rounded-full shadow-md transition-all duration-300' onClick={handleSubmit}>
                            <span className='flex items-center gap-2'>
                                <Zap className='w-6 h-6 ' />
                                <span className='font-semibold text-lg '>Start Creating Content</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex justify-center font-semibold text-center text-gray-600'>
                            <div>
                            Already have an account?
                            </div>
                            <div className='ml-2'>
                                <Link href="/signin" className='underline'>SignIn</Link>
                            </div>
                </div>
                <div className="text-center text-sm text-gray-600 mb-2 text-muted-foreground">
          By creating an account, you agree to our{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-foreground"
            onClick={() => {
              console.log("Navigate to terms")
            }}
          >
            Terms of Service
          </button>{" "}
          and{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-foreground"
            onClick={() => {

              console.log("Navigate to privacy policy")
            }}
          >
            Privacy Policy
          </button>
        </div>
                </div>
            </div>
        </div>
    )
}