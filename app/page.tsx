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
        hey, I&apos;m Animesh 👋
      </h1>
      <p className="prose prose-neutral ">
        {`Welcome to my corner of the web! I'm a passionate backend engineer with a focus on crafting robust solutions using `}
        <span className="not-prose">
          <span className="border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline">
          <Image
            src="/icons/python-5.svg"
            alt="Python Icon"
            className="!mr-1"
            width="14"
            height="14"
          />
            Python
          </span>
        </span>
        {` and `}
        <span className="not-prose">
          <span className="border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline">
            <Image
              src="/icons/django.svg"
              alt="Django Icon"
              className="!mr-1"
              width="14"
              height="14"
            />
              Django
          </span>
        </span>
        {`. With a keen eye for detail and a love for problem-solving, I thrive on turning complex ideas into elegant, efficient code.`}
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Link href="https://olenepal.org" target='_blank'>
            <div className="group">
              <Image
                alt="this is alt text"
                src="/banners/olesite.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
              <div className="rounded-lg absolute inset-0 bg-black opacity-0 group-hover:opacity-65 flex items-center justify-center transition-opacity duration-400">
                <p className="text-white text-lg font-bold">
                  <span>OLE Nepal</span>
                  <span className="flex items-center justify-center space-x-2 ">
                    <Image
                      src="/icons/django.svg"
                      alt="Django Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/postgresql.svg"
                      alt="PostgreSQL Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/html-1.svg"
                      alt="HTML 5 Icon"
                      className="h-5 w-5"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Link href="https://gadgetly-client.vercel.app" target="_blank">
          <div className="group">
            <Image
              alt="this is alt text"
              src="/banners/gadgetly.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
              <div className="rounded-lg absolute inset-0 bg-black opacity-0 group-hover:opacity-65 flex items-center justify-center transition-opacity duration-400">
                <p className="text-white text-lg font-bold">
                  <span>Gadgetly</span>
                  <span className="flex items-center justify-center space-x-2 ">
                    <Image
                      src="/icons/nodejs-icon.svg"
                      alt="Node JS Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/mongodb-icon-1.svg"
                      alt="MongoDB Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/react.svg"
                      alt="React Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/tailwind-css.svg"
                      alt="Tailwind Icon"
                      className="h-5 w-5"
                    />
                  </span>
                </p>
              </div>
          </div>
          </Link>
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Link href="https://pustakalaya.org" target="_blank">
            <div className="group">
              <Image
                alt="this is alt text"
                src="/banners/ep.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
              />
              <div className="rounded-lg absolute inset-0 bg-black opacity-0 group-hover:opacity-65 flex items-center justify-center transition-opacity duration-400">
                <p className="text-white text-lg font-bold">
                  <span>E-Pustakalaya</span>
                  <span className="flex items-center justify-center space-x-2 ">
                    <Image
                      src="/icons/django.svg"
                      alt="Django Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/postgresql.svg"
                      alt="Python Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/elasticsearch-seeklogo.svg"
                      alt="ElasticSearch Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/rabbitmq.svg"
                      alt="RabbitMQ Icon"
                      className="h-5 w-5"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Link href="https://bloodbank-sand.vercel.app" target="_blank">
            <div className="group">
              <Image
                alt="this is alt text"
                src="/banners/bloodbank.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
              <div className="rounded-lg absolute inset-0 bg-black opacity-0 group-hover:opacity-65 flex items-center justify-center transition-opacity duration-400">
                <p className="text-white text-lg font-bold">
                  <span>BloodBank</span>
                  <span className="flex items-center justify-center space-x-2 ">
                    <Image
                      src="/icons/django.svg"
                      alt="Django Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/bootstrap-5.svg"
                      alt="Bootstrap Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/xampp.svg"
                      alt="Xampp Icon"
                      className="h-5 w-5"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative h-40 mb-4">
          <Link href="https://gradewise.pustakalaya.org" target="_blank">
            <div className="group">
              <Image
                alt="this is alt text"
                src="/banners/gradewise.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
              <div className="rounded-lg absolute inset-0 bg-black opacity-0 group-hover:opacity-65 flex items-center justify-center transition-opacity duration-400">
                <p className="text-white text-lg font-bold">
                  <span>Gradewise</span>
                  <span className="flex items-center justify-center space-x-2 ">
                    <Image
                      src="/icons/react.svg"
                      alt="React Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/django.svg"
                      alt="Django Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/redux.svg"
                      alt="Redux Icon"
                      className="h-5 w-5"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative h-80">
          <Link href="https://github.com/Aneemes/dripshop" target="_blank">
            <div className="group">
              <Image
                alt="this is alt text"
                src="/banners/dripshop.jpg"
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
              <div className="rounded-lg absolute inset-0 bg-black opacity-0 group-hover:opacity-65 flex items-center justify-center transition-opacity duration-400">
                <p className="text-white text-lg font-bold">
                  <span>Dripshop</span>
                  <span className="flex items-center justify-center space-x-2 ">
                    <Image
                      src="/icons/django.svg"
                      alt="Django Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/postgresql.svg"
                      alt="PostgreSQL Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/redis.svg"
                      alt="Redis Icon"
                      className="h-5 w-5"
                    />
                    <Image
                      src="/icons/docker-4.svg"
                      alt="Docker Icon"
                      className="h-5 w-5"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="prose prose-neutral prose-invert">
        <p>
        These were some of the projects that I&apos;ve had the pleasure working on.
        Curious to learn more about my journey and expertise? Dive into the details on my resume. 
        Feel free to explore my skills, experience, and the exciting challenges I&apos;ve tackled throughout my career. 
        You can take a look at my resume below and get a deeper insight into what makes me tick as a backend engineer.
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <div className="group">
          <a
            target="_blank"
            href="/resume/Resume Animesh Nepal.pdf"
            className="border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-medium text-neutral-300 group-hover:text-neutral-100">
                Resume
              </p>
            </div>
            <div className="text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12 text-neutral-100">
              <ArrowIcon />
            </div>
          </a>
        </div>
      </div>

      <div className="prose prose-neutral prose-invert">
        <p>
        Within my professional toolkit, I wield a robust arsenal of technologies that empower me to transform concepts into reality. 
        My major technical stack encompasses a mastery of Django and Python, forming the backbone of my backend engineering proficiency. 
        Complemented by expertise in database optimization, system architecture, and a keen eye for detail, these tools enable me to craft solutions 
        that stand the test of complexity. 
        The following represents the cornerstone of my technical stack, a foundation upon which I build innovative and scalable solutions.
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  Python
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/python-5.svg"
                  alt="Python Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium  text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  Javascript
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/logo-javascript.svg"
                  alt="JavaScript Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  Django
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/django.svg"
                  alt="Django Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  Docker
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/docker-4.svg"
                  alt="Docker Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  Elasticsearch
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/elasticsearch-seeklogo.svg"
                  alt="Elasticsearch Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  RabbitMQ
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/rabbitmq.svg"
                  alt="RabbitMQ Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  Redis
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/redis.svg"
                  alt="Redis Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  PostgreSQL
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/postgresql.svg"
                  alt="PostgreSQL Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
            <div className="flex-1 border border-neutral-200 border-neutral-700 bg-neutral-50 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 relative group">
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200 group transition duration-300 ease-in-out group-hover:text-neutral-100">
                  MongoDb
                </span>
              </div>
              <span className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition duration-300 mr-2 ease-in-out">
                <Image
                  src="/icons/mongodb-icon-1.svg"
                  alt="MongoDb Icon"
                  className="h-5 w-5"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-neutral prose-invert">
        <p>
        Ready to embark on a collaborative journey? 
        Connect with me via email, LinkedIn, or explore my GitHub repositories. 
        Let&apos;s discuss opportunities, projects, or anything in between!
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            href="mailto:aneemes1@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
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
            className="flex items-center transition-all hover:text-neutral-100"
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
