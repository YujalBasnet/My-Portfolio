import {motion} from "framer-motion";


function Hero(){


return(

<section
id="home"
className="
min-h-screen
flex
items-center
justify-between
px-20
bg-slate-950
text-white
">


<motion.div

initial={{opacity:0,x:-50}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

className="max-w-xl"


>


<h1 className="
text-6xl
font-bold
">


Hi, I'm

<span className="text-cyan-400">

 Yujal

</span>


</h1>



<h2 className="text-2xl mt-5">

Full Stack Developer

</h2>



<p className="
mt-5
text-gray-300
leading-8
">

Building modern applications using
React, Node.js and MySQL.

</p>


</motion.div>



<motion.img

initial={{opacity:0,scale:0.5}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

src="/profile.jpg"

className="
w-80
h-80
rounded-full
border-4
border-cyan-400
"

/>


</section>


)

}


export default Hero;