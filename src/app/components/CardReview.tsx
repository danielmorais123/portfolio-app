export default function CardReview({ title, subTitle }: any) {
  return (
    <div className=" rounded-md w-full flex flex-col gap-2 items-center">
      <p className="text-[#6C63FF] text-[50px] font-bold">{title}</p>
      <p className="text-lg">{subTitle}</p>
    </div>
  );
}
