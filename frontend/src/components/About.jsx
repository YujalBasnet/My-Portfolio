import {motion} from "framer-motion";
import {FaGraduationCap, FaCode, FaLaptopCode} from "react-icons/fa";


function About(){


return(


<section

id="about"

className="
py-24
px-10
md:px-20
bg-slate-900
text-white
"


>


<h2

className="
text-4xl
font-bold
text-center
text-cyan-400
mb-12
"

>

About Me

</h2>





<div

className="
grid
md:grid-cols-2
gap-10
items-center
"

>



{/* Introduction */}


<motion.div


initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.7}}

viewport={{once:true}}


>



<h3

className="
text-3xl
font-bold
mb-5
"

>

Hello, I'm Yujal 

</h3>




<p

className="
text-gray-300
leading-8
"

>


I am a Computer Science student passionate about
full-stack development and building practical software
solutions. I have hands-on experience developing web
applications using React, Node.js, Java, JSP/Servlet,
and database technologies.


</p>




<p

className="
text-gray-300
leading-8
mt-5
"

>


Through projects like Hostel Finder System, Student
Management System, I have
worked on backend development, database management,
CRUD operations, and solving real-world problems through
technology.


</p>




</motion.div>






{/* Cards */}


<motion.div


initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.7}}

viewport={{once:true}}



className="
space-y-5
"


>




<div

className="
bg-slate-800
p-6
rounded-xl
flex
gap-5
items-center
hover:-translate-y-2
transition
"

>


<FaGraduationCap

className="
text-4xl
text-cyan-400
"

/>



<div>


<h4 className="
text-xl
font-bold
">

Education

</h4>


<p className="
text-gray-400
mt-2
">

Currently Pursuing Bachelor's Degree in Computer Science

</p>


</div>



</div>







<div

className="
bg-slate-800
p-6
rounded-xl
flex
gap-5
items-center
hover:-translate-y-2
transition
"

>


<FaCode

className="
text-4xl
text-green-400
"

/>



<div>


<h4 className="
text-xl
font-bold
">

Development

</h4>


<p className="
text-gray-400
mt-2
">

Full-stack web development, APIs, databases and software solutions

</p>


</div>



</div>







<div

className="
bg-slate-800
p-6
rounded-xl
flex
gap-5
items-center
hover:-translate-y-2
transition
"

>


<FaLaptopCode

className="
text-4xl
text-purple-400
"

/>



<div>


<h4 className="
text-xl
font-bold
">

Goals

</h4>


<p className="
text-gray-400
mt-2
">

Looking for opportunities to contribute, learn and grow as a software developer

</p>


</div>



</div>







</motion.div>




</div>





</section>


)

}


export default About;