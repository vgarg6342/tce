
import Image from "next/image";
import Link from "next/link";
import type { ArticleItem } from '@/types';


interface ArticleListProps {
    article: ArticleItem;
}


const BlogLayoutTwo = ({ article }: ArticleListProps) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={`/article/${article.id}`}
        // 1. Reduced height logic:
        // 'h-full' will match the text content height in the grid.
        // 'max-h-32' or 'max-h-40' enforces the "half size" visual you want.
        className="col-span-12 lg:col-span-4 h-full max-h-40 rounded-xl overflow-hidden"
      >
        <Image
          src={article.image}
          alt={article.title}
          width={300}
          height={200}
          // 2. CSS 'aspect-video' (16/9) or 'aspect-[3/2]' gives a shorter rectangle than 'aspect-square'.
          // 'object-cover' ensures it fills that shorter rectangle perfectly.
          className="aspect-video w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="block w-full text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
           {/* Optional: Add category or date here if available, e.g., {article.tags[0]} */}
           Technology
        </span>
        
        <Link href={`/article/${article.id}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {article.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;