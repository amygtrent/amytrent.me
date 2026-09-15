import { blogPosts } from "@/lib/blogPosts";
import MouseRevealHero from "@/components/MouseRevealHero";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
          <MouseRevealHero
        image={post.image}
        title={post.title}
        titleColor={post.titleColor}
        titleOutlineColor={post.titleOutlineColor}
        imageBrightness={post.imageBrightness}
      />

      <div className="w-full bg-white px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/?tab=blog"
            className="text-[#3b4cca] font-semibold hover:underline mb-8 inline-block"
          >
            ← Back
          </Link>

          <span className="text-gray-500 text-sm sm:text-base block mb-6">
            {post.date}
          </span>

           <span className="text-gray-500 text-sm sm:text-base block mb-6">
            {post.time}
          </span>

           <div className="text-black text-base sm:text-lg leading-relaxed">
  {post.body
    .split(/(```[\s\S]*?```)/g)
    .flatMap((part, idx) => {
      // CODE BLOCK
      if (part.startsWith("```") && part.endsWith("```")) {
        const code = part.replace(/^```\n?/, "").replace(/```$/, "").trim();
        return (
          <pre
            key={`code-${idx}`}
            className="bg-[#1b2f77] text-white text-sm sm:text-base p-6 rounded-2xl overflow-x-auto mb-6 font-mono leading-relaxed"
          >
            <code>{code}</code>
          </pre>
        );
      }

      // NORMAL TEXT — split into paragraphs/headers
      return part
  .split(/\n\s*\n/)
  .map((rawBlock, i) => {
    const block = rawBlock.trim();
    if (!block) return null;

    // IMAGE: ![caption](/path.jpg) or ![caption](/path.jpg){400}
const imageMatch = block.match(/^!\[(.*?)\]\((.*?)\)(?:\{(\d+)\})?$/);
if (imageMatch) {
  const [, caption, src, customHeight] = imageMatch;
  const maxHeight = customHeight ? `${customHeight}px` : "600px";
  return (
    <figure key={`img-${idx}-${i}`} className="my-10">
      <img
        src={src}
        alt={caption || "Blog post image"}
        style={{ maxHeight }}
        className="w-full object-contain rounded-2xl mx-auto"
      />
      {caption && (
        <figcaption className="text-center text-gray-500 text-sm mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

    // VIDEO: !video[caption](/path.mp4)
    const videoMatch = block.match(/^!video\[(.*?)\]\((.*?)\)$/);
    if (videoMatch) {
      const [, caption, src] = videoMatch;
      return (
        <figure key={`vid-${idx}-${i}`} className="my-10">
          <video
            src={src}
            controls
            preload="metadata"
            className="w-full rounded-2xl"
          />
          {caption && (
            <figcaption className="text-center text-gray-500 text-sm mt-3">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }
// LIST: lines starting with "- "
const lines = block.split("\n").map((l) => l.trim());
const isList = lines.every((l) => l.startsWith("- ") && l.length > 2);
if (isList) {
  return (
    <ul
      key={`list-${idx}-${i}`}
      className="columns-1 sm:columns-2 gap-8 mb-6 list-disc list-inside"
    >
      {lines.map((item, li) => (
        <li key={`li-${idx}-${i}-${li}`} className="mb-2 break-inside-avoid">
          {item.replace(/^- /, "")}
        </li>
      ))}
    </ul>
  );
}
    // HEADER
    if (block.startsWith("##")) {
      return (
        <h2
          key={`h-${idx}-${i}`}
          className="text-2xl sm:text-3xl font-bold text-[#1b2f77] mt-10 mb-4"
        >
          {block.replace(/^##\s*/, "")}
        </h2>
      );
    }

    // NORMAL PARAGRAPH
    return (
      <p key={`p-${idx}-${i}`} className="mb-6">
        {block}
      </p>
    );
  })
  .filter(Boolean);
    })}
</div>
        </div>
      </div>
    </>
  );
}
