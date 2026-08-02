import Link from "next/link";

export function BlogCard({ post }) {
  return (
    <div className="col-xl-6">
      <div className="blog-list">
        <div className="blog-img">
          <img src={post.image} alt={post.title} loading="lazy" />
        </div>
        <div className="blog-content">
          <h4 className="mb-2">{post.title}</h4>
          <p className="mb-4">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="d-flex gap-1 align-items-center">
            اقرأ المزيد <i className="ph ph-arrow-left" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// عرض محتوى المقال المُقسّم لـ blocks (paragraph / heading / list)
export function RichText({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "paragraph") return <p key={i}>{block.text}</p>;
        if (block.type === "heading") {
          const Tag = `h${block.level || 3}`;
          return <Tag key={i}>{block.text}</Tag>;
        }
        if (block.type === "list") {
          return (
            <ul key={i}>
              {block.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}
