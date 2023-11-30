import Pagination from '@/components/pagination/Pagination';
import styles from './page.module.css'

async function getData() {
  const response = await fetch('https://fakerapi.it/api/v1/companies?quantity=20')

  return response.json();
}

type Props = {
  params: {
    page: number
  }
}
export default async function Home({ params: { page } }: Props) {

  
  const data = await getData();
  return (
    <main className={styles.main}>
      <ul>
        {data.data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <Pagination totalPages={page}/>

    </main>
  )
}
