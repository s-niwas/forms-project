import Evalution_content from "../components/evalution_content";
import Hard_skills from "../components/hardskills";
import Soft_skills from "../components/softskills";
import Navigate_page from "./navigator";

function Home_page(){
    return(
        <div className="flex flex-nowrap text-center">
            <div className="w-1/6">
    <Navigate_page/>
    </div>
    <div className="justify-center w-5/6 items-center flex h-screen flex-wrap">
    <Evalution_content/>
    <div class=" flex flex-nowrap w-5/6 mt-20 ml-6 mr-50 text-2xl" > 
            <Soft_skills/>
            <div className="w-1/12"></div>
            <Hard_skills/>
            </div>
        </div>
    </div>
    )}
    export default Home_page;