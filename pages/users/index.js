import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/Ninjas.module.css"

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
  const data = await res.json()

  return {
    props: { ninjas: data },
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>User List | Listing </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Users</h1>
        {ninjas.map((ninja) => (
          <Link href={"/users/" + ninja.id} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Ninjas
