import Project from "./Project";
export default function Projects() {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center my-4">
        <p className="text-4xl font-bold">Portfolio Projects</p>
      </div>

      <Project />
    </div>
  );
}
