import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function Footer(){


return(


<footer

className="
bg-slate-950
text-white
py-10
px-10
md:px-20
border-t
border-slate-800
"


>


<div

className="
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
"


>


{/* Name */}


<div>


<h2

className="
text-2xl
font-bold
text-cyan-400
"

>

Yujal

</h2>


<p

className="
text-gray-400
mt-2
"

>

Full Stack Developer

</p>


</div>






{/* Links */}


<div

className="
flex
gap-6
"

>


<a

href="https://github.com/yourusername"

target="_blank"

className="
text-gray-400
hover:text-cyan-400
transition
"


>

<FaGithub size={28}/>

</a>




<a

href="https://linkedin.com/in/yourusername"

target="_blank"

className="
text-gray-400
hover:text-cyan-400
transition
"


>

<FaLinkedin size={28}/>

</a>




<a

href="mailto:yourmail@gmail.com"

className="
text-gray-400
hover:text-cyan-400
transition
"


>

<FaEnvelope size={28}/>

</a>



</div>



</div>







<div

className="
text-center
text-gray-500
mt-8
text-sm
"


>


© {new Date().getFullYear()} Yujal Khulal Basnet. All rights reserved.


</div>





</footer>


)

}


export default Footer;