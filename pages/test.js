import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Test =  () => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Page Gen</title>
        <meta name="description" content="success page for page gen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h4 className={styles.title}>
         Your Page was Created with <a href="/">Page Gen!</a>
        </h4>
        <div className={styles.grid}>
          <Link href="/" >&larr; Return home </Link>
          </div>
      </main>
       
    </div>
    );
    
    
    
}

export async function getServerSideProps({ req, res }) {
    const data = {"page":
        {
            "title":"My Page information",
            "body_html":"Hello"
        }
    }
    try {

        const resp = await fetch("https://derekstoreapps.myshopify.com/admin/api/2022-07/pages.json",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": "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"
            },
            body: JSON.stringify(data)
        })
        
        console.log(resp.status)
    }catch(ex){
        console.error("Error fetching resources", ex)
    }
    return {
      props: {
          data: data,
      },
    }
  }


export default Test