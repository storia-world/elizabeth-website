"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import book1Cover from "@/assets/images/book1.png";
import book2Cover from "@/assets/images/book2.png";
import book5Cover from "@/assets/images/book5.png";

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: StaticImageData;
};

const books: Book[] = [
  {
    id: 1,
    title: "SLAY IN YOUR LANE",
    author: "Yomi Adegoke & Elizabeth Uviebinené",
    description:
      "The long-awaited, inspirational guide to life for a generation of Black British women inspired to make lemonade out of lemons and find success in every area of life.",
    cover: book1Cover,
  },
  {
    id: 2,
    title: "THE RESET",
    author: "Elizabeth Uviebinené",
    description:
      "Ideas to change how we work and live — a curious, refreshing read from society and city down to community, business, culture, and you.",
    cover: book2Cover,
  },
  {
    id: 3,
    title: "LOUD BLACK GIRLS",
    author: "Yomi Adegoke & Elizabeth Uviebinené",
    description:
      "Being a loud Black girl isn't about the volume of your voice; and using your voice doesn't always mean speaking the loudest. Most of the time it's simply about showing up.",
    cover: book5Cover,
  },
];

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <motion.div
      className="min-w-[220px] flex-shrink-0 snap-start lg:min-w-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative mb-6 aspect-[2/3] w-[180px] max-w-full overflow-hidden rounded-sm bg-[var(--storia-coffee)] sm:w-[200px]">
        <Image
          src={book.cover}
          alt={`${book.title} book cover`}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>

      <h3 className="font-display text-xl font-light uppercase tracking-wide text-[var(--storia-black)]">
        {book.title}
      </h3>
      <p className="mt-1 font-body text-sm font-normal text-[var(--storia-black50)]">
        {book.author}
      </p>

      <p className="mt-5 font-body text-[0.9rem] font-light leading-[1.7] text-justify text-[var(--storia-black75)]">
        {book.description}
      </p>
    </motion.div>
  );
}

export default function BooksSection() {
  return (
    <section
      id="author"
      style={{
        background: "var(--storia-beige)",
        padding: "120px 8vw",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--storia-darkgreen)]">
          Books
        </p>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          Written to inspire
        </h2>
      </motion.div>

      <div
        className="mt-14 flex gap-12 overflow-x-auto pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {books.map((book, index) => (
          <BookCard key={book.id} book={book} index={index} />
        ))}
      </div>
    </section>
  );
}
