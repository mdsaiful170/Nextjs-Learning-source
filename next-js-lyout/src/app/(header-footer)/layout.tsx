const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header className="w-full h-1/3 py-4 bg-red-500 text-center">
        <h1 className="text-xl font-bold text-white">Header data</h1>
      </header>
      {children}

      <footer className="w-full h-1/3 py-4 bg-green-500 text-center">
        <h1 className="text-xl font-bold text-white">footer data</h1>
      </footer>
    </div>
  );
};

export default RootLayout;
