
import Link from "next/link";
import Image from "next/image";
import type { ArticleItem } from '@/types';


interface ArticleListProps {
    article: ArticleItem;
}


const BlogLayoutOne = ({ article }: ArticleListProps) => {
  return (
     <div
      // UPDATED HEIGHTS:
      // h-[380px] (was h-72) -> ~30% taller for mobile
      // sm:h-[500px] (was sm:h-96) -> ~30% taller for desktop
      className="group relative w-full h-[380px] sm:h-[500px] overflow-hidden rounded-xl"
    >
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-dark/90 z-10 rounded-xl transition-opacity duration-300"
      />

      {/* Image with 'fill' - automatically adapts to new parent height */}
      <Image
        src={article.image}
        alt={article.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
        priority={false} 
      />

      {/* Text Content */}
      <div className="absolute bottom-0 w-full p-4 xs:p-6 sm:p-10 z-20">
        <Link href={`/article/${article.id}`} className="block mt-6">
          <h2 className="font-bold text-white text-sm xs:text-base sm:text-xl md:text-2xl capitalize mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] 
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
              transition-[background-size] duration-500"
            >
              {article.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;

//<Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]}
        //className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
        ///>