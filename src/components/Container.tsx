type Props = {
   children: React.ReactNode;
};

export default function Container({ children }: Props) {
   return (
      <div className="w-full sm:w-[540px] md:w-[680px] lg:w-[916px] xl:w-[1152px] mx-auto">
         {children}
      </div>
   );
}
