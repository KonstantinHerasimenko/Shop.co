import { link } from 'fs';
import casualBg from '@/assets/photos/casualCategory.jpeg';
import formalBg from '@/assets/photos/formalCategory.jpeg';
import gymBg from '@/assets/photos/gymCategory.jpeg';
import partyBg from '@/assets/photos/partyCategory.jpeg';
import { cn } from '@/utils/css';


const categories = [
  {
    name: 'casual',
    className: 'col-span-7',
    subClassName: 'bg-[position:-20rem_-10rem]',
  },
  {
    name: 'formal',
    className: 'col-span-10',
    subClassName: 'bg-[position:-3rem_-10rem]',
  },
  {
    name: 'party',
    className: 'col-span-10',
    subClassName: 'bg-[position:0.5rem_center]',
  },
  {
    name: 'gym',
    className: 'col-span-7',
    subClassName: 'bg-[position:6rem_center]',
  },
]

export default function CategoryBrowse() {
  return (
    <article className="bg-snowflake rounded-8xl w-full px-16 py-18 h-[calc(100svh-8rem)] grid grid-rows-[max-content_auto] items-stretch">
      <h1 className="uppercase font-bold text-heading-2 text-center mb-16">
        browse by dress style
      </h1>
      <ul className="grid gap-5 grid-cols-[repeat(17,minmax(0,1fr))] grid-rows-2 w-full h-full">
        {categories.map(({name,className,subClassName}) => {
          return (
            <li key={name} className={cn(className, "rounded-2.5xl bg-white")}>
              <div className={cn(`px-9 py-6 bg-${name} bg-no-repeat rounded-2.5xl h-full w-full`,subClassName)}>
                <h4 className="text-heading-4 font-bold capitalize">{name}</h4>
              </div>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
/*
<li className="col-span-7 rounded-2.5xl bg-white px-9 py-6 bg-casual bg-no-repeat bg-center">
          <div>
            <h4 className="text-heading-4 font-bold capitalize">casual</h4>
          </div>
        </li>
        <li className="col-span-10 rounded-2.5xl bg-white">
          <div className="px-9 py-6 bg-formal bg-no-repeat  w-full h-full rounded-2.5xl">
            <h4 className="text-heading-4 font-bold capitalize">formal</h4>
          </div>
        </li>
        <li className="col-span-10 bg-white rounded-2.5xl">
          <div className="px-9 py-6 bg-party bg-no-repeat bg-[position:0.5rem_center] rounded-2.5xl h-full w-full">
            <h4 className="text-heading-4 font-bold capitalize">party</h4>
          </div>
        </li>
        <li className="col-span-7 bg-white rounded-2.5xl">
          <div className="bg-gym bg-no-repeat  h-full w-full px-9 py-6 rounded-2.5xl">
            <h4 className="text-heading-4 font-bold capitalize">gym</h4>
          </div>
        </li>
 */