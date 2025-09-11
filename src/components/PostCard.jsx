export default function PostCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
      <div className="p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
        <div>
          <p className="text-sm font-semibold">{post.author}</p>
          <p className="text-xs text-gray-500">{post.time}</p>
        </div>
      </div>
      {/* Removed image */}
      <div className="p-3">
        <p className="text-sm">{post.caption}</p>
        {/* actions */}
      </div>
    </div>
  );
}
