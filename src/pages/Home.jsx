import Video from '../components/home/Video'
import HeroText from '../components/home/HeroText'
import BottomText from '../components/home/BottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
        <HeroText />
        <BottomText />
      </div>
    </div>
  )
}

export default Home