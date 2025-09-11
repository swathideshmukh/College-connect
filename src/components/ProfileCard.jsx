export default function ProfileCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-nieBlue to-blue-500" />
      <div className="p-4 -mt-8">
        <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-900" />
        <h3 className="mt-2 font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.year} • {user.branch}</p>
      </div>
    </div>
  );
}
