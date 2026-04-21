function Footer1() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pb-8 dark:bg-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-zinc-900/10 pt-6 text-sm text-zinc-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg font-bold text-zinc-950 dark:text-white">
          Interview Valley
        </p>
        <p>© {currentYear} Interview Valley. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer1;
