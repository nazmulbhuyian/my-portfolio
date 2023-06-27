import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import { Zoom } from "react-reveal";
import ProjectCard from "./ProjectCard";
import UseTitle from "../../Hooks/UseTitle";


const Projects = () => {
    UseTitle('Projects');
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://simple-portfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
    }, [setProjects, setLoading])

    if (loading == true) {
        return <Spinner></Spinner>
    }

    return (
        <div id="projects">
            <div className='mb-32 w-5/6 mx-auto'>
                <Zoom>
                    <h1 className='pb-10 text-white text-5xl text-center lg:text-left font-bold'>PROJECTS</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 group'>
                        {
                            projects &&
                            projects?.map(project => <ProjectCard
                                key={project.id}
                                project={project}
                            />)
                        }
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Projects;