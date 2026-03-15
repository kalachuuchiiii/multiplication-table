import { NavLink } from "react-router-dom"
import { Layout } from "../components/Layout"

const NotFound = () => {
  return (
    <Layout >
        <header className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">
                404 Error
            </h1>
            <h2>
                Page not found :(
            </h2>
            <footer>
                <NavLink to={'/'} className={'hover:underline'}> 
                    home 
                </NavLink>
            </footer>
        </header>
    </Layout>
  )
}

export default NotFound