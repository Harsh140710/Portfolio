import Video from '../components/home/Video';
import HeroText from '../components/home/HeroText';
import BottomText from '../components/home/BottomText';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Video />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-between">
        <HeroText />
        <BottomText />
      </div>
    </div>
  );
};

export default Home;
