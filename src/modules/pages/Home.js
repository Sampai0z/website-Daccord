import Spline from '@splinetool/react-spline';

export default function Home () {
    return(
        <div className='flex'>
            <div className="relative" id="home">
                <Spline scene="https://prod.spline.design/ImUxtv4F1LF94AIg/scene.splinecode" />

            </div>
            <div className='absolute bottom-10 w-full justify-center items-center flex'>
                    <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
                        <p className='text-textBase'>Hover to Orbit</p>
                    </div>
                </div>
        </div>
    );
};