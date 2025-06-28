export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center py-1 md:py-10">
      <div className="inline-block max-w-6xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
