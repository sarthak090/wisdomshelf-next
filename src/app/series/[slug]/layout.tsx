export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="container px-12 mx-auto">       
   
        {children}
      </section>
    )
  }