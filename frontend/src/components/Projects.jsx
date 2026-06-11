function Projects(){


const projects=[

{
title:"Hostel Finder System",
desc:"JSP Servlet MySQL based hostel management system"
},

{
title:"Student Management System",
desc:"Java CRUD application"
},

{
title:"WhatsApp Chat Analyzer",
desc:"Python data analysis project"
}


];


return(

<section id="projects"
className="py-20 px-20 bg-slate-900 text-white">


<h2 className="text-4xl font-bold text-center">
Projects
</h2>


<div className="grid grid-cols-3 gap-6 mt-10">


{
projects.map((project)=>(


<div className="bg-slate-800 p-6 rounded">


<h3 className="text-xl font-bold">

{project.title}

</h3>


<p className="mt-3 text-gray-300">

{project.desc}

</p>


</div>


))
}


</div>


</section>

)

}


export default Projects;