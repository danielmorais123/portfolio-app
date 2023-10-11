import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardHire({ title, desc, icon }: any) {
  return (
    <div className=" p-3 shadow-sm w-full sm:w-fit bg-white dark:bg-transparent flex flex-col gap-1 items-start sm:max-w-[250px] border rounded-md border-zinc-200 dark:border-zinc-600">
      {icon ? (
        <FontAwesomeIcon icon={icon} className="text-[#6C63FF] h-5 w-5" />
      ) : (
        <></>
      )}
      <p className="font-bold">{title}</p>
      <p className="text-sm ">{desc}</p>
    </div>
  );
}
