import { PinContainer } from "./ui/3d-pin";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  themeColor: "blue" | "purple" | "green";
};

const ProjectCard = ({
  title,
  description,
  image,
  href,
  themeColor,
}: ProjectCardProps) => {
  return (
    <PinContainer title={href} href={href} themeColor={themeColor}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-neutral-700 dark:text-neutral-200 sm:basis-1/2  w-[18rem] md:w-[22rem] lg:w-[20rem] h-[20rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-900 dark:text-white">
          {title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-neutral-500 dark:text-neutral-400">
            {description}
          </span>
        </div>
        <div className="flex flex-1 w-full h-full rounded-lg mt-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/pin:scale-105 group-hover/pin:rotate-[1.5deg]"
          />
        </div>
      </div>
    </PinContainer>
  );
};

type GridProductProps = {
  projects: ProjectCardProps[];
};

export default function GridProduct({ projects }: GridProductProps) {
  return (
    <div className=" max-w-7xl mx-auto px-6 py-20 bg-background transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-10 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
            themeColor={project.themeColor}
          />
        ))}
      </div>
    </div>
  );
}
