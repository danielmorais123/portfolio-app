export default function ExperienceCard({
  title,
  description,
  subTitle,
}: {
  title: string;
  description: string;
  subTitle: string;
}) {
  return (
    <div className="flex flex-col gap-2  w-full sm:max-w-[290px] border rounded-md p-3 dark:border-zinc-600 bg-zinc-100 dark:bg-transparent">
      <p>{title}</p>
      <p className="text-xs text-zinc-300">{subTitle}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}
