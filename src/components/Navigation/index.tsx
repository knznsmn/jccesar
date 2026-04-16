import Link from "next/link";
import contents from "@/data/contents.json";
import { DarkmodeToggle } from "@/components/Darkmode";

export function Navigation() {
  return (
    <nav className="siteNav" aria-label="Main">
      <div className="navInner">
        <ul className="navList">
          {contents.navigation.map((item) => (
            <li key={item.link}>
              <Link className="navLink" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="navItemToggle">
            <DarkmodeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}