import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function Footer(){


return(


<footer

className="
bg-slate-950
text-gray-400
h-20
px-6
md:px-20
border-t
border-slate-800
flex
items-center
"


>


<div

className="
w-full
flex
justify-between
items-center
"


>


<p

className="text-sm">

© {new Date().getFullYear()} Yujal Khulal Basnet 
<span className="text-gray-500">
{" | Designed & Developed by Yujal Khulal Basnet with Love & Passion"}
</span>

</p>





<div

className="
flex
gap-5
"

>


<a

href="https://github.com/YujalBasnet"

target="_blank"

className="
hover:text-cyan-400
transition
"

>

<FaGithub size={20}/>

</a>





<a

href="https://linkedin.com/in/yourusername"

target="_blank"

className="
hover:text-cyan-400
transition
"

>

<FaLinkedin size={20}/>

</a>





{/* <a

href="mailto:laxmikhulalbasnet@gmail.com"

className="
hover:text-cyan-400
transition
"

>

<FaEnvelope size={20}/>

</a> */}



</div>



</div>




</footer>


)

}


export default Footer;