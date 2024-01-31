import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';


function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}


export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Animesh 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        {`consectetur adipiscing elit. `}
        <span className="not-prose">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            Lorem
        </span>
        {`, Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          {/* <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          /> */}
          Ipsum
        {` , an open-learning platform built with `}
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          Lorem
        .
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Link href="/">
            <Image
              alt="this is alt text"
              src="/bg.gif"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </Link>
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Link href="/">
            <Image
              alt="this is alt text"
              src="/bg.gif"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </Link>
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Link href="/">
            <Image
              alt="this is alt text"
              src="/bg.gif"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </Link>
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Link href="/">
            <Image
              alt="this is alt text"
              src="/bg.gif"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </Link>
        </div>
        <div className="relative h-40 mb-4">
          <Link href="/">
            <Image
              alt="this is alt text"
              src="/bg.gif"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </Link>
        </div>
        <div className="relative h-80">
          <Link href="/">
            <Image
              alt="this is alt text"
              src="/bg.gif"
              fill
              sizes="(min-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a scelerisque turpis. 
        Proin metus turpis, elementum consectetur erat eget, dapibus ornare metus. 
        Sed lacinia, justo at tempor euismod, elit erat lobortis nibh, 
        Proin quis nibh eget mi mattis interdum. Nullam faucibus massa at erat imperdiet porttitor in at velit.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a scelerisque turpis. 
        Proin metus turpis, elementum consectetur erat eget, dapibus ornare metus. Sed lacinia, justo at tempor euismod, elit erat lobortis nibh, 
        vitae ornare tortor nisl vitae velit. Nunc convallis neque ac massa porttitor tempus. Nullam dignissim mollis aliquam. Maecenas pulvinar ligula quis orci eleifend, 
        quis vulputate ligula posuere. Vestibulum vestibulum, orci eget sollicitudin eleifend, ipsum felis tincidunt magna, nec vehicula libero lectus quis magna. Integer eleifend aliquet lacus, 
        Proin quis nibh eget mi mattis interdum. Nullam faucibus massa at erat imperdiet porttitor in at velit.
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <div className="group">
          <div className="flex flex-row space-x-4">
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Python
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Javascript
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Django
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="flex flex-row space-x-4">
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Docker
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  ElasticSearch
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Celery
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="flex flex-row space-x-4">
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Redis
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  PostgreSQL
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>

            <div className="flex-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  MongoDb
                </p>
                <Suspense fallback={<p className="h-6" />} />
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          You can contact me at
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            href="mailto:aneemes1@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aneemes/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Aneemes"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
