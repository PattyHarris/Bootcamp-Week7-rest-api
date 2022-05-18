import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const endpoints = [
    {
      name: 'GET /trips',
      description: 'List all the trips',
    },
    {
      name: 'POST /trips',
      description: 'Create a new trip',
    },
    {
      name: 'GET /trips/:id',
      description: 'Get the details of a trip',
    },
    {
      name: 'PUT /trips/:id',
      description: 'Edit a trip',
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Trips API</h1>

        <p className={styles.description}>The documentation</p>

        <div className={styles.grid}>

        <div className={styles.grid}>
          {endpoints.map((endpoint, index) => (
            <div className={styles.card} key={index}>
              <h2>
                <code>{endpoint.name}</code>
              </h2>
              <p>{endpoint.description}</p>
              <p>...</p>
            </div>
          ))}
        </div>

        </div>
      </main>

    </div>
  )
}
