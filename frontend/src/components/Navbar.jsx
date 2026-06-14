import { useState } from "react";
import { motion } from "framer-motion";


function Navbar(){


const [open,setOpen] = useState(false);


const links=[

"Home",
"About",
"Skills",
"Projects",
"Contact"

];



return(


<motion.nav

initial={{y:-100}}

animate={{y:0}}

className="
fixed
top-0
left-0
w-full
z-50
bg-slate-950/80
backdrop-blur-lg
text-white
px-6
md:px-20
py-5
"


>


<div className="
flex
justify-between
items-center
">


<h1 className="
text-3xl
font-bold
text-cyan-400
">

Yujal.

</h1>



{/* Desktop Menu */}

<div className="
hidden
md:flex
gap-8
">


{

links.map(link=>(


<a

key={link}

href={`#${link.toLowerCase()}`}

className="
hover:text-cyan-400
transition
"

>

{link}

</a>


))

}


</div>





{/* Mobile Button */}

<button


onClick={()=>setOpen(!open)}


className="
md:hidden
text-3xl
"


>


{open ? "✕" : "☰"}


</button>



</div>





{/* Mobile Menu */}


{

open && (


<div

className="
md:hidden
mt-5
flex
flex-col
gap-5
bg-slate-900
p-5
rounded-lg
"


>


{

links.map(link=>(


<a

key={link}

href={`#${link.toLowerCase()}`}

onClick={()=>setOpen(false)}

className="
hover:text-cyan-400
"

>

{link}

</a>


))


}



</div>


)

}



</motion.nav>


)

}


export default Navbar;