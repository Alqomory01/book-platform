
import GuestHeader from "@/components/GuestHeader";
import GuestFooter from "@/components/GuestFooter";
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
   
    return(
    <div className="flex flex-col min-h-screen">
        <GuestHeader/>
        <main className="flex-1 p-6">{children}</main>
        <GuestFooter/>
    </div>
    )
}