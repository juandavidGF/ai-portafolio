import Link from 'next/link'

type Project = {
  name: string;
  description: string;
  url: string;
};

type ListProjectsProps = {
  projects: Project[];
	className?: string;
};

export default function ListProjects({ projects, className }: ListProjectsProps) {
	return (
		<div className={`mt-10 ${className}`}>
			<h4>Projects</h4>
			{/* <hr className="border-blue-500 mb-2" /> */}
			<ul className='myList mt-4'>
				{projects.map((project, index) => <li key={index}>
					<Link href={project.url}><u>{project.name}</u> {project.description}</Link>
				</li>)}
			</ul>
		</div>
	)

}