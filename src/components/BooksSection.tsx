"use client";

import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

import book1Cover from "@/assets/images/book1.png";
import book2Cover from "@/assets/images/book2.png";
import book3Cover from "@/assets/images/book3.png";
import book4Cover from "@/assets/images/book4.png";
import book5Cover from "@/assets/images/book5.png";

type Book = {
  id: number;
  title: string;
  description: string;
  cover: StaticImageData;
};

const books: Book[] = [
  {
    id: 1,
    title: "SLAY IN YOUR LANE",
    description:
      "The long-awaited, inspirational guide to life for a generation of Black British women inspired to make lemonade out of lemons and find success in every area of life.",
    cover: book1Cover,
  },
  {
    id: 2,
    title: "THE RESET",
    description:
      "Ideas to change how we work and live — a curious, refreshing read from society and city down to community, business, culture, and you.",
    cover: book2Cover,
  },
  {
    id: 3,
    title: "LOUD BLACK GIRLS",
    description:
      "Being a loud Black girl isn't about the volume of your voice; and using your voice doesn't always mean speaking the loudest. Most of the time it's simply about showing up.",
    cover: book5Cover,
  },
  {
    id: 4,
    title: "SLAY IN YOUR LANE: THE JOURNAL",
    description:
      "The Black Girl Bible in journal form — a space to reflect, plan and slay on your own terms, with prompts and inspiration drawn from the original bestseller.",
    cover: book3Cover,
  },
  {
    id: 5,
    title: "THE OFFLINE DIARIES",
    description:
      "From the authors of Slay in Your Lane — the story of Ade and Shanice, two best friends navigating school, social media and growing up in London.",
    cover: book4Cover,
  },
];

const ROW_ONE = books.slice(0, 3);
const ROW_TWO = books.slice(3, 5);

function BookCard({
  book,
  index,
  className = "",
}: {
  book: Book;
  index: number;
  className?: string;
}) {
  return (
    <FadeIn
      direction="up"
      distance={36}
      delay={index * 0.08}
      viewportMargin="-60px"
      className={`min-w-0 ${className}`.trim()}
    >
      <article className="mx-auto flex max-w-[320px] flex-col items-center text-center sm:max-w-[360px] md:max-w-none lg:max-w-none">
        <div className="relative mb-5 aspect-[2/3] w-[min(200px,70vw)] overflow-hidden rounded-sm bg-[var(--storia-coffee)] lg:mb-6 lg:w-[200px]">
          <Image
            src={book.cover}
            alt={`${book.title} book cover`}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 70vw, 200px"
          />
        </div>

        <h3 className="font-display text-lg uppercase tracking-wide text-[var(--storia-jetblack)] sm:text-xl">
          {book.title}
        </h3>

        <Text size="small" className="mt-4 text-[var(--storia-black)] lg:mt-5">
          {book.description}
        </Text>
      </article>
    </FadeIn>
  );
}

export default function BooksSection() {
  return (
    <Section id="books">
      <FadeIn className="text-center">
        <Eyebrow>Books</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          Written to inspire
        </h2>
      </FadeIn>

      {/* Mobile: 1 col · Tablet: 2 cols, last book centered */}
      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:hidden">
        {books.map((book, index) => (
          <BookCard
            key={book.id}
            book={book}
            index={index}
            className={
              index === books.length - 1
                ? "md:col-span-2 md:max-w-[360px] md:justify-self-center"
                : ""
            }
          />
        ))}
      </div>

      {/* Desktop: 3 + 2 centered */}
      <div className="mt-14 hidden flex-col gap-16 lg:flex">
        <div className="grid grid-cols-3 gap-12">
          {ROW_ONE.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
        <div className="mx-auto grid w-2/3 grid-cols-2 gap-12">
          {ROW_TWO.map((book, index) => (
            <BookCard key={book.id} book={book} index={index + 3} />
          ))}
        </div>
      </div>
    </Section>
  );
}
