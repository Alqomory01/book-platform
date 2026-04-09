
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import GuestFooter from "@/components/GuestFooter";
export default function DashboardLayout( {

  children,
}: Readonly<{
  children: React.ReactNode;
}>){

    return(
       <div className="flex flex-col min-h-screen">
      {/* Top header */}
      <DashboardHeader />

      {/* Main content area with sidebar */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
        
      </div>
      <GuestFooter/>
    </div>
    )
}