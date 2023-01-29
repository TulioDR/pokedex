import Container from "../../components/Container";

type Props = {
   children: React.ReactNode;
};

export default function NavbarContainer({ children }: Props) {
   return (
      <div className="w-full bg-primary text-white sticky top-0 z-30">
         <Container>
            <div className="w-full grid md:grid-cols-2 gap-1 md:gap-7 px-5 md:px-7 py-3">
               {children}
            </div>
         </Container>
      </div>
   );
}
