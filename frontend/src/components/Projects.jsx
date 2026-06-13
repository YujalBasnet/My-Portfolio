function Projects(){


const projects=[


{

title:"Ethical Hostel Finder",

image:"/hostel.png",

desc:"JSP Servlet MySQL hostel management system",

github:"#",

demo:"#"

},


{

title:"Student Management System",

image:"/student.png",

desc:"Java CRUD application",

github:"#",

demo:"#"

},


{

title:"WhatsApp Analyzer",

image:"/whatsapp.png",

desc:"Python data analysis project",

github:"#",

demo:"#"

}


];



return(


<section

id="projects"

className="
py-20 px-20
bg-slate-900
text-white
">


<h2 className="
text-4xl
font-bold
text-center
">

Projects

</h2>



<div className="
grid
md:grid-cols-3
gap-8
mt-10
">


{

projects.map(project=>(


<div

className="
bg-slate-800
rounded-xl
overflow-hidden
hover:-translate-y-3
transition
"


>


<img

src={project.image}

className="
w-full
h-48
object-cover
"

/>



<div className="p-5">


<h3 className="
text-xl
font-bold
">

{project.title}

</h3>


<p className="
text-gray-300
mt-3
">

{project.desc}

</p>



<div className="mt-5 flex gap-4">


<a

href={project.github}

className="
bg-cyan-400
text-black
px-4
py-2
rounded
"

>

Github

</a>


<a

href={project.demo}

className="
border
px-4
py-2
rounded
"

>

Live

</a>


</div>


</div>



</div>


))


}



</div>


</section>


)

}


export default Projects;