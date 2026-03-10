import Layout from "../_layout";
import './style.sass';

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

Profile.ssp = "/api/users";

export default function Profile(user: User) {
  return (
    <Layout>
      <section id="profile">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </section>
    </Layout>
  )
}