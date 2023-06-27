import Experience from "../Experience/Experience";
import UseTitle from "../Hooks/UseTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Contract from "./Contract/Contract";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";


const HomeLayout = () => {
    UseTitle('Home');
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner />
            <Projects />
            <Contract />
            <Skills />
            <Experience />
            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default HomeLayout;