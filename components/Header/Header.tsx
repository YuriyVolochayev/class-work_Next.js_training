import css from "@/components/Header/Header.module.css"
import Link from "next/link"
import { getCategories } from "@/lib/api"
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu"

const Header = async () => {

    const categories = await getCategories();

    const handleClick = () => {
        //
    };
    return (
        <header className={css.header}>
            <Link href='/' aria-label='Home'>
                Note Hub
            </Link>
            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li>
                        <CategoriesMenu categories={categories}/>
                    </li>
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header