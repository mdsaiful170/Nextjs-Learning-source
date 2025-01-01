const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header className="w-full py-5 text-center bg-red-400">header</header>
      {children}
      <footer className="w-full py-5 text-center bg-green-400">header</footer>
    </div>
  );
};

export default RootLayout;
