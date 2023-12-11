import Head from "next/head";
// import localFont from 'next/font/local';

// const myFont = localFont({
//     src: '../../public/fonts/Montserrat-Regular.ttf',
//     variable: '--font-mont'
//   });

export default function Layout({children}) {
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right,#000000,#434343)',
      };
    return(
    <>
        <Head>
            <title>Resume Builder</title>
        </Head>
        <div className={`bg-gray-500 flex flex-col min-h-screen`} style={gradientStyle}>
            <main className="flex-auto min-h-screen">{children}</main>
        </div>
    </>
    );
};
