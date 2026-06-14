import {motion} from "framer-motion";


function Hero(){


return(


<section

id="home"

className="
min-h-screen
flex
flex-col
md:flex-row
items-center
justify-between
gap-10
px-10
md:px-20
pt-24
bg-gradient-to-br
from-slate-950
via-slate-900
to-cyan-950
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
text-5xl
md:text-6xl
font-bold
leading-tight
">


Yujal Khulal Basnet


</h1>





<h2 className="
text-2xl
md:text-3xl
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
Node.js and databases. Passionate about creating
clean, scalable and user-friendly solutions.


</p>







<div className="
mt-8
flex
flex-wrap
gap-5
">






<a


href="#projects"


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


</a>








<a


href="/Yujal_CV.pdf"


target="_blank"


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


View CV


</a>









<a


href="/Yujal_CV.pdf"


download


className="

bg-slate-800

border

border-slate-600

px-6

py-3

rounded-lg

hover:border-cyan-400

transition

"


>


Download CV


</a>






</div>





</motion.div>









<motion.div


initial={{opacity:0,scale:0.5}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}


>


<img


src="/profile.jpg"


alt="profile"


className="

w-72

h-72

md:w-80

md:h-80

rounded-full

object-cover

border-4

border-cyan-400

shadow-xl

"


/>


</motion.div>







</section>


)

}


export default Hero;