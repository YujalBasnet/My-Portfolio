import { motion } from "framer-motion";


function Projects(){


const projects=[

{
title:"Ethical Hostel Finder",
image:"/hostel.png",
desc:"A full-stack hostel management system built with JSP, Servlet and MySQL.",
github:"#",
demo:"#",
tech:["Java","JSP","Servlet","MySQL"]
},


{
title:"Student Management System",
image:"/student.png",
desc:"A CRUD based student management application for managing student records.",
github:"#",
demo:"#",
tech:["Java","MySQL","JDBC"]
},


{
title:"WhatsApp Chat Analyzer",
image:"/whatsapp.png",
desc:"A Python data analysis application that visualizes WhatsApp chat statistics.",
github:"#",
demo:"#",
tech:["Python","Pandas","Matplotlib"]
}


];



return(


<section

id="projects"

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
"

>

My Projects

</h2>



<p

className="
text-center
text-gray-400
mt-3
"

>

Some of my recent work and applications

</p>





<div

className="
grid
md:grid-cols-3
gap-8
mt-12
"


>


{

projects.map((project,index)=>(


<motion.div


key={index}


initial={{

opacity:0,
y:50

}}


whileInView={{

opacity:1,
y:0

}}


transition={{

duration:0.5,
delay:index*0.2

}}


viewport={{

once:true

}}



className="
bg-slate-800
rounded-xl
overflow-hidden
shadow-lg
hover:-translate-y-3
transition
duration-300
"


>



<img

src={project.image}

alt={project.title}

className="
w-full
h-52
object-cover
"


/>





<div

className="
p-6
"


>


<h3

className="
text-2xl
font-bold
"

>

{project.title}

</h3>




<p

className="
text-gray-300
mt-3
leading-7
"

>

{project.desc}

</p>





<div

className="
flex
flex-wrap
gap-2
mt-5

"

>


{

project.tech.map((item)=>(


<span

key={item}

className="
bg-slate-700
px-3
py-1
rounded-full
text-sm
text-cyan-300
"


>

{item}

</span>


))

}


</div>





<div

className="
flex
gap-4
mt-6
"

>


<a

href={project.github}

target="_blank"

className="
bg-cyan-400
text-black
px-5
py-2
rounded-lg
font-semibold
hover:scale-105
transition
"


>

GitHub

</a>




<a

href={project.demo}

target="_blank"

className="
border
border-cyan-400
px-5
py-2
rounded-lg
hover:bg-cyan-400
hover:text-black
transition
"


>

Live Demo

</a>



</div>





</div>





</motion.div>


))


}




</div>




</section>


)


}


export default Projects;