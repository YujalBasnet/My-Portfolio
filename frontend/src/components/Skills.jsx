function Skills(){

const skills=[
"React",
"JavaScript",
"Node.js",
"Express",
"MySQL",
"Java",
"Git",
"GitHub"
];


return(

<section id="skills"
className="py-20 px-20 bg-slate-950 text-white">


<h2 className="text-4xl font-bold text-center">
Skills
</h2>


<div className="grid grid-cols-4 gap-5 mt-10">


{
skills.map((skill)=>(

<div className="bg-slate-800 p-5 text-center rounded">

{skill}

</div>

))
}


</div>


</section>

)

}


export default Skills;