import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ title, description, link, image }) {
  return (
    <Link href={link} className="block border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {image && (
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-t-lg object-cover"
        />
      )}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}