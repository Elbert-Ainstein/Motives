import styles from '../styles/Home.module.css';
import MastHead from "../components/masthead";
import Skills from '../components/skills';
import Team from '~/components/team';
import Subtext from '~/components/subtext';
import { ParallaxProvider } from 'react-scroll-parallax';
import Apply from './apply';
import Demo from '~/components/demo';
import Works from '~/components/works';


export const links = () => [{rel:"stylesheet",href:styles}];
const Home = () => {
  return (
    
    <ParallaxProvider>
      <main className='w-full min-h-screen relative '>
        <MastHead/>
        <Subtext/>
        <Skills/> 
        
        <Works />
        <Apply/>
        {/* <Demo /> */}
        <Team/>
      </main>
    </ParallaxProvider>
  )
}

export default Home;
