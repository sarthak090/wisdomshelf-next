export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="container px-12 mx-auto">

        <div className={'text-center text-4xl my-32 font-bold'}>Peoples</div>
       
   
        {children}
      </section>
    )
  }