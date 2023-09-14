interface CardProps {
  title: string;
  image: string;
  description: string;
}
import Image from "next/image";
export default function Card({ title, image, description }: CardProps) {
  return (
    <div className="flex flex-row-reverse items-stretch justify-between md:justify-start md:flex-col">
      <a href="#" target="_blank">
        <div className="w-32 h-20 overflow-hidden transition md:w-full md:h-52 bg-slate-500 rounded-xl hover:opacity-50">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full transition"
            width={300}
            height={200}
          />
        </div>
      </a>
      <div className="mr-2">
        <a
          href="#"
          target="_blank"
          className="mt-2 overflow-hidden text-sm font-semibold transition md:text-lg hover:text-blue-500 line-clamp-2"
        >
          {title}
        </a>
        <p className="text-xs md:text-base text-slate-400">{description}</p>
      </div>
    </div>
  );
}
