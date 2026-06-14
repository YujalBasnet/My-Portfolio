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
px-10
md:px-20
bg-slate-950
text-white
"


>


<motion.div

initial={{opacity:0,x:-80}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

className="max-w-xl"


>


<p className="
text-cyan-400
text-xl
mb-3
">

Hello, I'm

</p>


<h1 className="
text-6xl
font-bold
">

Yujal Khulal Basnet

</h1>



<h2 className="
text-3xl
mt-4
text-gray-300
">

Full Stack Developer

</h2>



<p className="
mt-6
text-gray-400
leading-8
">

I build modern web applications using React,
Node.js and databases. Passionate about
creating clean and scalable solutions.

</p>



<div className="mt-8 flex gap-5">


<button

className="
bg-cyan-400
text-black
px-6
py-3
rounded-lg
font-bold
hover:scale-105
transition
"

>

View Projects

</button>



<button

className="
border
border-cyan-400
px-6
py-3
rounded-lg
hover:bg-cyan-400
hover:text-black
transition
"

>

Resume

</button>



</div>


</motion.div>



<motion.div

initial={{opacity:0,scale:0.5}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

>


<img

src="/profile.jpg"

className="
w-80
h-80
rounded-full
object-cover
border-4
border-cyan-400
shadow-lg
"

/>


</motion.div>



</section>


)

}


export default Hero;