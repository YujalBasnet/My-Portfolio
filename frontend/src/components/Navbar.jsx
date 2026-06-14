import {motion} from "framer-motion";


function Navbar(){

return(

<motion.nav

initial={{y:-100}}

animate={{y:0}}

className="
fixed top-0
w-full
z-50
bg-slate-950/80
backdrop-blur-lg
border-b
border-slate-800
px-8
py-5
flex
justify-between
items-center
text-white
"


>


<h1 className="
text-3xl
font-bold
text-cyan-400
">

Yujal.

</h1>



<div className="
flex
gap-8
text-gray-300
">


{
["Home","About","Skills","Projects","Contact"]

.map((item)=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

className="
hover:text-cyan-400
transition
"

>

{item}

</a>


))

}



</div>



</motion.nav>


)

}


export default Navbar;