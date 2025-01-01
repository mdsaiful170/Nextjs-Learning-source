const RootLayout =({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=>{
    return (
      <div>
         <header className="w-full bg-red-500 py-5 text-center text-xl font-mono font-bold text-white">Header Section</header>
          {children}
         <footer className="w-full bg-green-500 py-5 text-center text-xl font-mono font-bold text-white">Footer Section</footer>
        
      </div>
    );
  }
  export default RootLayout
  