import { Link } from "@react-email/components";

export function Navigation({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-primary text-white rounded-md px-4 py-2 cursor-pointer"
    >
      {children}
    </Link>
  );
}

export default Navigation;
